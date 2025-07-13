/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@chakra-ui/react'


const AppButton = ({ text, ...otherProps }: any) => {
    return (
        <Button {...otherProps}>
            {text}
        </Button>
    )
}

export default AppButton
