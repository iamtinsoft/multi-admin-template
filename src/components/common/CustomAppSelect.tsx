/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input, NativeSelectField, NativeSelectRoot, Text } from '@chakra-ui/react'
import { Field } from '../ui/field'
import { NativeSelect } from "@chakra-ui/react"
export const CustomAppSelect = ({ errors, label,
    register, flushed = false,
    property, options, viewer = false, value = null, handleValueChange = () => { } }: any) => {
    console.log(options)
    console.log(value)
    return (
        <Field
            label={label}
            invalid={!!errors[property]}
            errorText={errors[property]?.message}
        >
            {
                viewer && !value &&

                <Input _focus={{ border: 0, outline: "none", background: "white", boxShadow: "none" }} border={0}
                    readOnly={true}
                    type={"text"}
                    {...register(property)}
                />
            }
            {
                viewer && value &&
                // <Text>{value}</Text>
                <Text>{options.find((prop: any) => prop.value == value)?.label}</Text>

            }
            {!viewer && !flushed &&
                <NativeSelectRoot>
                    <NativeSelectField textTransform={"capitalize"} placeholder={`Select ${label}`}
                        name={property}
                        {...register(property, { required: `${label} is required` })}
                        onChange={(d: any) => handleValueChange(d.target.value)}
                    >

                        {options[0].value ? options.map((d: any, i: number) => <option key={i} value={d.value}>{d.label}</option>) : options.map((d: any, i: number) => <option key={i} value={d}>{d}</option>)}
                    </NativeSelectField>
                    <NativeSelect.Indicator />
                </NativeSelectRoot>
            }
            {!viewer && flushed &&
                <NativeSelectRoot borderBottom={"1px solid black"} variant={"plain"}>
                    <NativeSelectField textTransform={"capitalize"} placeholder={`Select ${label}`}
                        name={property}
                        {...register(property, { required: `${label} is required` })}
                        onChange={(d: any) => handleValueChange(d.target.value)}
                    >

                        {options[0].value ? options.map((d: any, i: number) => <option key={i} value={d.value}>{d.label}</option>) : options.map((d: any, i: number) => <option key={i} value={d}>{d}</option>)}
                    </NativeSelectField>
                    <NativeSelect.Indicator />
                </NativeSelectRoot>
            }



        </Field>

    )
}

