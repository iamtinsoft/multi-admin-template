import Footer from '@/components/shared/Footer'
import { Container } from '@chakra-ui/react'
import React from 'react'

const IndexLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Container>
            {children}
            <Footer />
        </Container>
    )
}

export default IndexLayout
