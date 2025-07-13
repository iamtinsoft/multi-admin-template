/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppName } from '@/config'
import { Flex, Image, Text } from '@chakra-ui/react'

const CustomAppLogo = ({ br = 0, mb = 0 }: any) => {
    return (
        <Flex borderRadius={br} asChild gapX={2} mb={mb} alignItems={"center"}>
            <a href='/'>
                <Flex>
                    <Image w={"60px"} src='https://simimpactinglives.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.f0c2d207.png&w=256&q=75' />
                </Flex>
                <Text fontSize={30} fontWeight={700} >{AppName}</Text>
            </a>
        </Flex>
    )
}

export default CustomAppLogo