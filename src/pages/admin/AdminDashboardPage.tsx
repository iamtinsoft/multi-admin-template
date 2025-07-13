
import React from 'react';
import {
    Box,
    Flex,
    Grid,
    GridItem,
    VStack,
    Text,
    Badge,
    Button,
    Table,
    Card,
    Heading,
    Stat,
    For,
    Stack
} from '@chakra-ui/react';
import { useTheme } from 'next-themes';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import DashboardLayout from '@/layouts/DashboardLayout';
import AppButton from '@/components/common/AppButton';


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



interface StatCardProps {
    stat: StatData;
}

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
                <Table.Root variant="line" size="md">
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
const AdminDashboard: React.FC = () => {

    // const [open, setOpen] = useState(false)
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <DashboardLayout>
            <VStack gap={8} align="stretch">
                {/* Welcome Section */}
                <Box>
                    <Heading size="lg" mb={2}>
                        Welcome back, Admin!
                    </Heading>
                    <Text color="gray.500">
                        Here's what's happening with your business today.
                    </Text>
                    <AppButton text="Hello There" bg="red" borderRadius={10} />
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
        </DashboardLayout>
    );
};

export default AdminDashboard;