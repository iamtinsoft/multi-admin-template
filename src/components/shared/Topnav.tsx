import { useBreakpointValue, Flex, Show, IconButton, Spacer, HStack, InputElement, Input, Text, Avatar } from "@chakra-ui/react";
import { HamburgerIcon, Group, SearchIcon, SunIcon, MoonIcon, BellIcon } from "lucide-react";
import { useTheme } from "next-themes";


interface TopNavProps {
    onSidebarToggle: () => void;
}

// Top Navigation Bar
export const TopNav: React.FC<TopNavProps> = ({ onSidebarToggle }) => {
    const { theme, setTheme } = useTheme();
    const isDark = theme === 'dark';
    const isMobile = useBreakpointValue({ base: true, md: false });

    const toggleColorMode = () => {
        setTheme(isDark ? 'light' : 'dark');
    };

    return (
        <Flex
            bg={isDark ? 'gray.800' : 'white'}
            borderBottom="1px"
            borderColor={isDark ? 'gray.700' : 'gray.200'}
            h="20"
            alignItems="center"
            px={4}
            position="sticky"
            top={0}
            zIndex={10}
        >
            <Show when={isMobile}>
                <IconButton
                    onClick={onSidebarToggle}
                    variant="outline"
                    aria-label="open menu"
                    mr={4}
                >
                    <HamburgerIcon />
                </IconButton>

                <Text
                    fontSize="2xl"
                    fontWeight="bold"
                    color="primary.500"
                >
                    AdminPro
                </Text>
            </Show>

            <Spacer />

            <HStack gap={4}>
                <Show when={!isMobile}>
                    <Group>
                        <InputElement>
                            <SearchIcon color="gray.400" />
                        </InputElement>
                        <Input placeholder="Search..." maxW="400px" />
                    </Group>
                </Show>

                <Show when={isMobile}>
                    <IconButton
                        variant="ghost"
                        aria-label="Search"
                    >
                        <SearchIcon />
                    </IconButton>
                </Show>

                <IconButton
                    onClick={toggleColorMode}
                    variant="ghost"
                    aria-label="Toggle color mode"
                >
                    {isDark ? <SunIcon /> : <MoonIcon />}
                </IconButton>

                <IconButton
                    variant="ghost"
                    aria-label="Notifications"
                >
                    <BellIcon />
                </IconButton>

                <Avatar.Root size="sm">
                    <Avatar.Image src="https://via.placeholder.com/40" />
                    <Avatar.Fallback>UN</Avatar.Fallback>
                </Avatar.Root>
            </HStack>
        </Flex>
    );
};