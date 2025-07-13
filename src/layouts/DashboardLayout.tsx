
import React from 'react';
import {
    Box,
    Flex,
    useDisclosure,
    Container
} from '@chakra-ui/react';
import { useTheme } from 'next-themes';
import { Sidebar } from '@/components/shared/Sidebar';
import { TopNav } from '@/components/shared/Topnav';


// Main Dashboard Component
const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { open, onOpen, onClose } = useDisclosure();
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <Box minH="100vh" bg={isDark ? 'gray.900' : 'gray.50'}>
            <Flex>
                <Box>
                    <Sidebar isOpen={open} onClose={onClose} />
                </Box>


                <Box flex={1} minH="100vh">
                    <TopNav onSidebarToggle={onOpen} />

                    <Container maxW="full" py={8} px={6}>
                        {children}
                    </Container>
                </Box>
            </Flex>
        </Box>
    );
};

export default DashboardLayout;