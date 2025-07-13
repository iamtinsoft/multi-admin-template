/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Input,
  Box, Text
} from "@chakra-ui/react";
import { Field } from "../ui/field"
import { validateInput } from "@/lib/inputValidator";


const CustomAppInput = ({
  errors,
  register,
  property,
  label,
  readOnly,
  type = "text",
}: any) => {
  return (
    <Box mb={6}>
      <Field>{label}</Field>
      <Input
        size={"md"}
        borderWidth={0}
        bg={"brand.neutralTwo"}
        isInvalid={validateInput(errors[property]?.message)}
        errorBorderColor="red.600"
        _active={{ outline: "none" }}
        outline={"none"}
        _focus={{ borderWidth: 0, outlineColor: "transparent" }}
        borderColor={"#000"}
        {...register(property)}
        placeholder={label}
        type={type}
        readOnly={readOnly}
      ></Input>

      <Text fontSize={12} color={"red"}>
        {errors[property]?.message}
      </Text>
    </Box>
  );
};

export default CustomAppInput;
