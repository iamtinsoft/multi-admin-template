/* eslint-disable @typescript-eslint/no-explicit-any */

import { Flex, Grid, GridItem } from '@chakra-ui/react'
export const AuthLayout = ({ children }: any) => {
    return (
        <Grid h={"100vh"} templateColumns="repeat(3, 1fr)"
            gap={4} bg="brand.primary">
            <GridItem display={{ base: "none", md: "block" }} colSpan={{ base: 0, md: 2 }} h={"full"} py={40} px={20}>
                <Flex alignItems={"center"} h={"full"}>
                    {/* <AuthSlider /> */}
                </Flex>

            </GridItem>
            <GridItem bg="brand.light" colSpan={{ base: 3, md: 1 }}>
                <Flex alignItems={"center"} h={"full"}>
                    {children}
                </Flex>
            </GridItem>


        </Grid>
    )
}
