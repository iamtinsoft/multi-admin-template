import React, { useState } from 'react';
import {
    Box,
    Flex,
    Grid,
    GridItem,
    VStack,
    HStack,
    Text,
    IconButton,
    Input,
    InputGroup,
    InputElement,
    Avatar,
    Badge,
    Button,
    useDisclosure,
    Table,
    Card,
    Heading,
    Stat,
    Container,
    Spacer,
    createSystem,
    defaultConfig,
    ChakraProvider,
    For,
    Show,
    useBreakpointValue,
    Separator,
    Stack,
    Group,
    Field
} from '@chakra-ui/react';
import { useTheme } from 'next-themes';
import {
    HamburgerIcon,
    SearchIcon,
    BellIcon,
    MoonIcon,
    SunIcon,
    ViewIcon,
    CalendarIcon,
    StarIcon,
    SettingsIcon,
    ChevronUpIcon,
    ChevronDownIcon
} from '@chakra-ui/icons';

// Types
interface StatData {
    label: string;
    value: string;
    change: number;
    isIncrease: boolean;
}

interface UserData {
    id: number;
    name: string;
    email: string;
    role: string;
    status: 'Active' | 'Inactive';
    lastLogin: string;
}

interface SidebarItem {
    icon: React.ElementType;
    label: string;
    active?: boolean;
}

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

interface TopNavProps {
    onSidebarToggle: () => void;
}

interface StatCardProps {
    stat: StatData;
}

// Custom theme with extended colors using v3 API
const customSystem = createSystem(defaultConfig, {
    theme: {
        tokens: {
            colors: {
                primary: {
                    50: { value: '#e3f2fd' },
                    100: { value: '#bbdefb' },
                    200: { value: '#90caf9' },
                    300: { value: '#64b5f6' },
                    400: { value: '#42a5f5' },
                    500: { value: '#2196f3' },
                    600: { value: '#1e88e5' },
                    700: { value: '#1976d2' },
                    800: { value: '#1565c0' },
                    900: { value: '#0d47a1' }
                },
                secondary: {
                    50: { value: '#f3e5f5' },
                    100: { value: '#e1bee7' },
                    200: { value: '#ce93d8' },
                    300: { value: '#ba68c8' },
                    400: { value: '#ab47bc' },
                    500: { value: '#9c27b0' },
                    600: { value: '#8e24aa' },
                    700: { value: '#7b1fa2' },
                    800: { value: '#6a1b9a' },
                    900: { value: '#4a148c' }
                },
                neutralOne: {
                    50: { value: '#fafafa' },
                    100: { value: '#f5f5f5' },
                    200: { value: '#eeeeee' },
                    300: { value: '#e0e0e0' },
                    400: { value: '#bdbdbd' },
                    500: { value: '#9e9e9e' },
                    600: { value: '#757575' },
                    700: { value: '#616161' },
                    800: { value: '#424242' },
                    900: { value: '#212121' }
                }
            }
        },
        semanticTokens: {
            colors: {
                primary: {
                    solid: { value: '{colors.primary.500}' },
                    contrast: { value: '{colors.primary.100}' },
                    fg: { value: '{colors.primary.700}' },
                    muted: { value: '{colors.primary.100}' },
                    subtle: { value: '{colors.primary.200}' },
                    emphasized: { value: '{colors.primary.300}' },
                    focusRing: { value: '{colors.primary.500}' }
                },
                secondary: {
                    solid: { value: '{colors.secondary.500}' },
                    contrast: { value: '{colors.secondary.100}' },
                    fg: { value: '{colors.secondary.700}' },
                    muted: { value: '{colors.secondary.100}' },
                    subtle: { value: '{colors.secondary.200}' },
                    emphasized: { value: '{colors.secondary.300}' },
                    focusRing: { value: '{colors.secondary.500}' }
                }
            }
        }
    }
});

// Color Mode Provider Component
const ColorModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <div className="color-mode-provider">{children}</div>;
};

// Provider Component
const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <ChakraProvider value={customSystem}>
            <ColorModeProvider>{children}</ColorModeProvider>
        </ChakraProvider>
    );
};

// Mock data
const mockStats: StatData[] = [
    { label: 'Total Users', value: '12,345', change: 12.5, isIncrease: true },
    { label: 'Revenue', value: '$45,678', change: 8.2, isIncrease: true },
    { label: 'Orders', value: '1,234', change: -2.4, isIncrease: false },
    { label: 'Conversion Rate', value: '3.45%', change: 0.8, isIncrease: true }
];

const mockTableData: UserData[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', lastLogin: '2 hours ago' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active', lastLogin: '1 day ago' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'Manager', status: 'Inactive', lastLogin: '3 days ago' },
    { id: 4, name: 'Sarah Wilson', email: 'sarah@example.com', role: 'User', status: 'Active', lastLogin: '5 minutes ago' },
    { id: 5, name: 'David Brown', email: 'david@example.com', role: 'Admin', status: 'Active', lastLogin: '1 hour ago' }
];

const sidebarItems: SidebarItem[] = [
    { icon: ViewIcon, label: 'Dashboard', active: true },
    { icon: CalendarIcon, label: 'Analytics' },
    { icon: StarIcon, label: 'Projects' },
    { icon: SettingsIcon, label: 'Settings' }
];

// Sidebar Component
const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
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
            <Show when={isOpen && !useBreakpointValue({ base: false, md: true })}>
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

// Top Navigation Bar
const TopNav: React.FC<TopNavProps> = ({ onSidebarToggle }) => {
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

// Stat Card Component
const StatCard: React.FC<StatCardProps> = ({ stat }) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <Card.Root bg={isDark ? 'gray.800' : 'white'} borderColor={isDark ? 'gray.700' : 'gray.200'} borderWidth="1px">
            <Card.Body>
                <Stat.Root>
                    <Stat.Label fontSize="sm" color="gray.500">
                        {stat.label}
                    </Stat.Label>
                    <Stat.ValueText fontSize="2xl" fontWeight="bold">
                        {stat.value}
                    </Stat.ValueText>
                    <Stat.HelpText>
                        {stat.isIncrease ? <ChevronUpIcon color="green.500" /> : <ChevronDownIcon color="red.500" />}
                        <Text as="span" color={stat.isIncrease ? 'green.500' : 'red.500'}>
                            {stat.change}%
                        </Text>
                    </Stat.HelpText>
                </Stat.Root>
            </Card.Body>
        </Card.Root>
    );
};

// Chart Placeholder
const ChartPlaceholder: React.FC = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <Card.Root bg={isDark ? 'gray.800' : 'white'} borderColor={isDark ? 'gray.700' : 'gray.200'} borderWidth="1px">
            <Card.Header>
                <Heading size="md">Revenue Analytics</Heading>
            </Card.Header>
            <Card.Body>
                <Flex
                    h="300px"
                    bg={isDark ? 'gray.700' : 'gray.50'}
                    borderRadius="md"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Text color="gray.500">Chart Component Placeholder</Text>
                </Flex>
            </Card.Body>
        </Card.Root>
    );
};

// Users Table
const UsersTable: React.FC = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const getStatusColor = (status: 'Active' | 'Inactive'): string => {
        return status === 'Active' ? 'green' : 'red';
    };

    return (
        <Card.Root bg={isDark ? 'gray.800' : 'white'} borderColor={isDark ? 'gray.700' : 'gray.200'} borderWidth="1px">
            <Card.Header>
                <Heading size="md">Recent Users</Heading>
            </Card.Header>
            <Card.Body>
                <Table.Root variant="simple" size="md">
                    <Table.Header>
                        <Table.Row>
                            <Table.ColumnHeader>Name</Table.ColumnHeader>
                            <Table.ColumnHeader>Email</Table.ColumnHeader>
                            <Table.ColumnHeader>Role</Table.ColumnHeader>
                            <Table.ColumnHeader>Status</Table.ColumnHeader>
                            <Table.ColumnHeader>Last Login</Table.ColumnHeader>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <For each={mockTableData}>
                            {(user) => (
                                <Table.Row key={user.id}>
                                    <Table.Cell fontWeight="medium">{user.name}</Table.Cell>
                                    <Table.Cell color="gray.500">{user.email}</Table.Cell>
                                    <Table.Cell>{user.role}</Table.Cell>
                                    <Table.Cell>
                                        <Badge colorPalette={getStatusColor(user.status)}>
                                            {user.status}
                                        </Badge>
                                    </Table.Cell>
                                    <Table.Cell color="gray.500">{user.lastLogin}</Table.Cell>
                                </Table.Row>
                            )}
                        </For>
                    </Table.Body>
                </Table.Root>
            </Card.Body>
        </Card.Root>
    );
};

// Main Dashboard Component
const Dashboard: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <Provider>
            <Box minH="100vh" bg={isDark ? 'gray.900' : 'gray.50'}>
                <Flex>
                    <Sidebar isOpen={isOpen} onClose={onClose} />

                    <Box flex={1} minH="100vh">
                        <TopNav onSidebarToggle={onOpen} />

                        <Container maxW="full" py={8} px={6}>
                            <VStack gap={8} align="stretch">
                                {/* Welcome Section */}
                                <Box>
                                    <Heading size="lg" mb={2}>
                                        Welcome back, Admin!
                                    </Heading>
                                    <Text color="gray.500">
                                        Here's what's happening with your business today.
                                    </Text>
                                </Box>

                                {/* Stats Cards */}
                                <Grid
                                    templateColumns={{
                                        base: 'repeat(1, 1fr)',
                                        md: 'repeat(2, 1fr)',
                                        lg: 'repeat(4, 1fr)'
                                    }}
                                    gap={6}
                                >
                                    <For each={mockStats}>
                                        {(stat, index) => (
                                            <StatCard key={index} stat={stat} />
                                        )}
                                    </For>
                                </Grid>

                                {/* Chart Section */}
                                <Grid
                                    templateColumns={{
                                        base: '1fr',
                                        lg: '2fr 1fr'
                                    }}
                                    gap={6}
                                >
                                    <GridItem>
                                        <ChartPlaceholder />
                                    </GridItem>
                                    <GridItem>
                                        <Card.Root
                                            bg={isDark ? 'gray.800' : 'white'}
                                            borderColor={isDark ? 'gray.700' : 'gray.200'}
                                            borderWidth="1px"
                                        >
                                            <Card.Header>
                                                <Heading size="md">Quick Actions</Heading>
                                            </Card.Header>
                                            <Card.Body>
                                                <Stack gap={3}>
                                                    <Button colorPalette="primary" size="sm" width="full">
                                                        Add New User
                                                    </Button>
                                                    <Button colorPalette="secondary" size="sm" width="full">
                                                        Generate Report
                                                    </Button>
                                                    <Button variant="outline" size="sm" width="full">
                                                        View Analytics
                                                    </Button>
                                                </Stack>
                                            </Card.Body>
                                        </Card.Root>
                                    </GridItem>
                                </Grid>

                                {/* Users Table */}
                                <UsersTable />
                            </VStack>
                        </Container>
                    </Box>
                </Flex>
            </Box>
        </Provider>
    );
};

export default Dashboard;