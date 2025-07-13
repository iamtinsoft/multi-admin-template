/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Flex, PinInput } from '@chakra-ui/react'
import { Field } from '../ui/field'
import { Input } from "@chakra-ui/react"
// import { withMask } from "use-mask-input"
export const CustomAppPinInput = ({ required = false, errors, label,
    register,
    property, readOnly = false,
    type = "text", viewer = false }: any) => {
    return (
        <Field textTransform={"capitalize"}
            label={label}
            invalid={!!errors[property]}
            errorText={errors[property]?.message}
        >
            {
                viewer &&
                <Input _focus={{ border: 0, outline: "none", background: "white", boxShadow: "none" }} border={0}
                    readOnly={true}
                    type={type}
                    {...register(property)}
                />
            }

            {!viewer &&

                <>
                    {required &&
                        <PinInput.Root width={"100%"} otp

                            {...register(property, { required: `${property} is required` })}>
                            <PinInput.HiddenInput />
                            <PinInput.Control w={"full"}>
                                <Flex w={"full"} gapX={5} justifyContent={"space-between"}>
                                    <PinInput.Input index={0} />
                                    <PinInput.Input index={1} />
                                    <PinInput.Input index={2} />
                                    <PinInput.Input index={3} />
                                    <PinInput.Input index={4} />
                                    <PinInput.Input index={5} />
                                </Flex>
                            </PinInput.Control>
                        </PinInput.Root>

                    }
                </>
            }





        </Field>
    )
}

