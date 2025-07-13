
import { Flex, VStack, For, Button, Show, Text, Box, useBreakpointValue } from "@chakra-ui/react";
import { View, CalendarIcon, StarIcon, SettingsIcon, } from "lucide-react";
import { useTheme } from "next-themes";

const sidebarItems: SidebarItem[] = [
    { icon: View, label: 'Dashboard', active: true },
    { icon: CalendarIcon, label: 'Analytics' },
    { icon: StarIcon, label: 'Projects' },
    { icon: SettingsIcon, label: 'Settings' }
];

interface SidebarItem {
    icon: React.ElementType;
    label: string;
    active?: boolean;
}

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}
// Sidebar Component
export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const SidebarContent = () => (
        <Box
            bg={isDark ? 'gray.800' : 'white'}
            borderRight="1px"
            borderColor={isDark ? 'gray.700' : 'gray.200'}
            h="full"
            w="250px"
        >
            <Flex h="20" alignItems="center" mx="8">
                <Text fontSize="2xl" fontWeight="bold" color="primary.500">
                    AdminPro
                </Text>
            </Flex>
            <VStack align="stretch" gap={1} px={4}>
                <For each={sidebarItems}>
                    {(item, index) => (
                        <Button
                            key={index}
                            variant={item.active ? 'solid' : 'ghost'}
                            colorPalette={item.active ? 'primary' : 'gray'}
                            justifyContent="flex-start"
                            size="lg"
                            h="12"
                        >
                            <item.icon />
                            <Text ml={3}>{item.label}</Text>
                        </Button>
                    )}
                </For>
            </VStack>
        </Box>
    );

    return (
        <>
            {/* Desktop Sidebar */}
            <Show when={useBreakpointValue({ base: false, md: true })}>
                <SidebarContent />
            </Show>

            {/* Mobile Drawer - Simplified for v3 */}
            <Show when={isOpen}>
                <Box
                    position="fixed"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    bg="blackAlpha.600"
                    zIndex={1000}
                    onClick={onClose}
                >
                    <Box
                        position="absolute"
                        left={0}
                        top={0}
                        bottom={0}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <SidebarContent />
                    </Box>
                </Box>
            </Show>
        </>
    );
};