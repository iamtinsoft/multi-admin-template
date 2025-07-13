import React from 'react';
import {
    Box,
    Flex,
    SimpleGrid,
    Stack,
    Text,
    Link,
    IconButton,
    //Select,
    Container,
    Heading,
    VStack,
    HStack,
    //NativeSelect,
} from '@chakra-ui/react';
import { FaTwitter, FaGithub, FaLinkedin, FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from 'next-themes';

// Separator component (replaces Divider in v3)
const Separator: React.FC<{ orientation?: 'horizontal' | 'vertical' }> = ({
    orientation = 'horizontal'
}) => {
    return (
        <Box
            role="separator"
            aria-orientation={orientation}
            borderTopWidth={orientation === 'horizontal' ? '1px' : '0'}
            borderInlineStartWidth={orientation === 'vertical' ? '1px' : '0'}
            borderColor="border.default"
            my={orientation === 'horizontal' ? 8 : 0}
            mx={orientation === 'vertical' ? 8 : 0}
            height={orientation === 'vertical' ? 'auto' : '1px'}
            width={orientation === 'horizontal' ? 'auto' : '1px'}
        />
    );
};

interface FooterProps {
    className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
    const { theme, setTheme } = useTheme();
    // const [selectedLanguage, setSelectedLanguage] = useState<string>('English');

    // const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    //     setSelectedLanguage(event.target.value);
    // };

    const toggleColorMode = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <Box
            bg="bg.default"
            color="fg.default"
            py={12}
            mt={20}
            className={className}
        >
            <Container maxW="7xl">
                {/* Top Section */}
                <SimpleGrid
                    columns={{ base: 1, md: 4 }}
                    gap={8}
                    mb={8}
                >
                    {/* Branding Section */}
                    <VStack align={{ base: 'center', md: 'start' }} gap={4}>
                        <Heading
                            size="lg"
                            color="fg.emphasized"
                            fontWeight="bold"
                            letterSpacing="tight"
                        >
                            YourBrand
                        </Heading>
                        <Text fontSize="sm" maxW="300px" textAlign={{ base: 'center', md: 'left' }}>
                            Building amazing products that help teams collaborate and grow together.
                        </Text>
                    </VStack>

                    {/* Product Links */}
                    <VStack align={{ base: 'center', md: 'start' }} gap={3}>
                        <Heading
                            size="sm"
                            color="fg.emphasized"
                            fontWeight="semibold"
                            mb={2}
                        >
                            Product
                        </Heading>
                        <Stack gap={2} align={{ base: 'center', md: 'start' }}>
                            <Link
                                href="#"
                                color="fg.muted"
                                _hover={{ color: 'fg.emphasized', textDecoration: 'underline' }}
                                textDecoration="none"

                            >
                                Features
                            </Link>
                            <Link
                                href="#"
                                color="fg.muted"
                                _hover={{ color: 'fg.emphasized', textDecoration: 'underline' }}
                                textDecoration="none"
                            // _hover={{  }}
                            >
                                Pricing
                            </Link>
                            <Link
                                href="#"
                                color="fg.muted"
                                _hover={{ color: 'fg.emphasized', textDecoration: 'underline' }}
                                textDecoration="none"
                            //_hover={{ textDecoration: 'underline' }}
                            >
                                Integrations
                            </Link>
                            <Link
                                href="#"
                                color="fg.muted"
                                _hover={{ color: 'fg.emphasized', textDecoration: 'underline' }}
                                textDecoration="none"
                            // _hover={{ textDecoration: 'underline' }}
                            >
                                API
                            </Link>
                        </Stack>
                    </VStack>

                    {/* Company Links */}
                    <VStack align={{ base: 'center', md: 'start' }} gap={3}>
                        <Heading
                            size="sm"
                            color="fg.emphasized"
                            fontWeight="semibold"
                            mb={2}
                        >
                            Company
                        </Heading>
                        <Stack gap={2} align={{ base: 'center', md: 'start' }}>
                            <Link
                                href="#"
                                color="fg.muted"
                                _hover={{ color: 'fg.emphasized', textDecoration: 'underline' }}
                                textDecoration="none"
                            //_hover={{ textDecoration: 'underline' }}
                            >
                                About
                            </Link>
                            <Link
                                href="#"
                                color="fg.muted"
                                _hover={{ color: 'fg.emphasized', textDecoration: 'underline' }}
                                textDecoration="none"
                            //_hover={{ textDecoration: 'underline' }}
                            >
                                Careers
                            </Link>
                            <Link
                                href="#"
                                color="fg.muted"
                                _hover={{ color: 'fg.emphasized', textDecoration: 'underline' }}
                                textDecoration="none"
                            //_hover={{ textDecoration: 'underline' }}
                            >
                                Blog
                            </Link>
                            <Link
                                href="#"
                                color="fg.muted"
                                _hover={{ color: 'fg.emphasized', textDecoration: 'underline' }}
                                textDecoration="none"
                            //_hover={{ textDecoration: 'underline' }}
                            >
                                Contact
                            </Link>
                        </Stack>
                    </VStack>

                    {/* Resources Links */}
                    <VStack align={{ base: 'center', md: 'start' }} gap={3}>
                        <Heading
                            size="sm"
                            color="fg.emphasized"
                            fontWeight="semibold"
                            mb={2}
                        >
                            Resources
                        </Heading>
                        <Stack gap={2} align={{ base: 'center', md: 'start' }}>
                            <Link
                                href="#"
                                color="fg.muted"
                                _hover={{ color: 'fg.emphasized', textDecoration: 'underline' }}
                                textDecoration="none"
                            // _hover={{ textDecoration: 'underline' }}
                            >
                                Documentation
                            </Link>
                            <Link
                                href="#"
                                color="fg.muted"
                                _hover={{ color: 'fg.emphasized', textDecoration: 'underline' }}
                                textDecoration="none"
                            // _hover={{ textDecoration: 'underline' }}
                            >
                                Help Center
                            </Link>
                            <Link
                                href="#"
                                color="fg.muted"
                                _hover={{ color: 'fg.emphasized', textDecoration: 'underline' }}
                                textDecoration="none"
                            //_hover={{ textDecoration: 'underline' }}
                            >
                                Community
                            </Link>
                            <Link
                                href="#"
                                color="fg.muted"
                                _hover={{ color: 'fg.emphasized', textDecoration: 'underline' }}
                                textDecoration="none"
                            //_hover={{ textDecoration: 'underline' }}
                            >
                                Tutorials
                            </Link>
                        </Stack>
                    </VStack>
                </SimpleGrid>

                {/* Separator (replaces Divider) */}
                <Separator />

                {/* Bottom Section */}
                <Flex
                    direction={{ base: 'column', md: 'row' }}
                    align="center"
                    justify="space-between"
                    gap={4}
                >
                    {/* Copyright */}
                    <Text fontSize="sm" color="fg.muted">
                        © 2024 YourBrand. All rights reserved.
                    </Text>

                    {/* Controls Container */}
                    <Flex
                        direction={{ base: 'column', sm: 'row' }}
                        align="center"
                        gap={6}
                    >
                        {/* Social Media Icons */}
                        <HStack gap={3}>
                            <IconButton
                                aria-label="Twitter"
                                size="sm"
                                variant="ghost"
                                color="fg.muted"
                                _hover={{
                                    color: 'blue.500',
                                    transform: 'translateY(-2px)',
                                }}
                                css={{
                                    transition: 'all 0.2s ease-in-out',
                                }}
                            >
                                <FaTwitter />
                            </IconButton>
                            <IconButton
                                aria-label="GitHub"
                                size="sm"
                                variant="ghost"
                                color="fg.muted"
                                _hover={{
                                    color: 'fg.emphasized',
                                    transform: 'translateY(-2px)',
                                }}
                                css={{
                                    transition: 'all 0.2s ease-in-out',
                                }}
                            >
                                <FaGithub />
                            </IconButton>
                            <IconButton
                                aria-label="LinkedIn"
                                size="sm"
                                variant="ghost"
                                color="fg.muted"
                                _hover={{
                                    color: 'blue.600',
                                    transform: 'translateY(-2px)',
                                }}
                                css={{
                                    transition: 'all 0.2s ease-in-out',
                                }}
                            >
                                <FaLinkedin />
                            </IconButton>
                        </HStack>

                        {/* Language Switcher */}
                        {/* <NativeSelect.Root value={selectedLanguage}

                            onChange={handleLanguageChange}
                            size="sm"
                            w="auto"
                            // variant="filled"
                            color="fg.default"
                            _focus={{
                                borderColor: 'blue.500',
                            }}>
                            <NativeSelect.Field placeholder="Select option">
                                <option value="English">English</option>
                                <option value="Français">Français</option>
                                <option value="Español">Español</option>
                            </NativeSelect.Field>
                            <NativeSelect.Indicator />
                        </NativeSelect.Root> */}

                        {/* Dark Mode Toggle */}
                        <IconButton
                            aria-label="Toggle dark mode"
                            size="sm"
                            variant="ghost"
                            color="fg.muted"
                            onClick={toggleColorMode}
                            _hover={{
                                color: 'fg.emphasized',
                                transform: 'translateY(-2px)',
                            }}
                            css={{
                                transition: 'all 0.2s ease-in-out',
                            }}
                        >
                            {theme === 'light' ? <FaMoon /> : <FaSun />}
                        </IconButton>
                    </Flex>
                </Flex>
            </Container>
        </Box>
    );
};

export default Footer;