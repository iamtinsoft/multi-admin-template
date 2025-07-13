/* eslint-disable @typescript-eslint/no-explicit-any */
import { Flex, Box, Input } from '@chakra-ui/react'
import { IconButton } from "@chakra-ui/react"
import { LuSearch } from "react-icons/lu"
export const CustomSearchbar = ({ onKeyUp, width = 400, bg = "brand.light", radius = 25 }: any) => {
    return (
        <Box w={width} cursor={"pointer"} gapX={3} justifyContent={"space-between"} alignItems={"center"} as={Flex} position={"relative"} bottom={0} p={1} borderRadius={radius} bg={bg}>
            <Flex w={"full"} alignItems={"center"} gapX={1}>
                <Box display="inline-block" pos="relative">
                    <IconButton size={"sm"} bg={"brand.grey"} rounded="full" aria-label="Search database">
                        <LuSearch color='#000' />
                    </IconButton>
                </Box>
                <Input onKeyUp={onKeyUp} px={1} w={"full"} border={0} _focus={{ border: 0, boxShadow: "none", shadow: "none" }} placeholder="Search ....." variant="flushed" />
                {/* <Text fontVariant={"all-petite-caps"}>Victor Fadipe</Text> */}
            </Flex>



        </Box>
    )
}
