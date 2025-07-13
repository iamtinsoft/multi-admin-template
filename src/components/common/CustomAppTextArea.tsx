/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Textarea, Text, HStack } from '@chakra-ui/react'
import { Field } from '../ui/field'
import { useState, useEffect } from 'react'

export const CustomAppTextArea = ({
    required = false,
    errors,
    label,
    register,
    property,
    readOnly = false,
    type = "text",
    viewer = false,
    wordLimit = 500,
    value = '',
    flushed,
    watch
}: any) => {
    const [wordCount, setWordCount] = useState(0)
    const watchedValue = watch ? watch(property) : ''

    // Count words in text
    const countWords = (text: string) => {
        if (!text || text.trim() === '') return 0
        return text.length
    }

    // Update word count when value changes
    useEffect(() => {
        const count = countWords(watchedValue || '')
        setWordCount(count)
    }, [watchedValue])

    // Custom validation for word limit
    const validateWordLimit = (value: string) => {
        const count = countWords(value || '')
        if (count > wordLimit) {
            return `Text exceeds ${wordLimit} word limit (${count} words)`
        }
        return true
    }

    // Build validation rules
    const getValidationRules = () => {
        //console.log("called")
        //alert("called")
        const rules: any = {
            validate: validateWordLimit
        }

        if (required) {
            rules.required = `${label} is required`
        }

        return rules
    }

    return (
        <Field
            textTransform={"capitalize"}
            label={label}
            required={required}
            invalid={!!errors[property]}
            errorText={errors[property]?.message}
        >
            {viewer && (
                <Textarea variant={flushed ? "flushed" : "outline"}
                    _focus={{ border: 0, outline: "none", background: "white", boxShadow: "none" }}
                    border={0}
                    readOnly={true}
                    type={type}
                    {...register(property)}
                />
            )}

            {!viewer && (
                <Box w={"100%"}>
                    <Textarea defaultValue={value} variant={flushed ? "flushed" : "outline"}
                        readOnly={readOnly}
                        type={type}
                        {...register(property, getValidationRules())}
                    />

                    {wordLimit < 500 && <HStack justifyContent="space-between" mt={1}>
                        <Text fontSize="sm" color={wordCount > wordLimit ? "red.500" : "gray.500"}>
                            {wordCount}/{wordLimit} words
                        </Text>
                        {wordCount > wordLimit && (
                            <Text fontSize="sm" color="red.500">
                                Exceeds limit by {wordCount - wordLimit} words
                            </Text>
                        )}
                    </HStack>}
                </Box>
            )}
        </Field>
    )
}