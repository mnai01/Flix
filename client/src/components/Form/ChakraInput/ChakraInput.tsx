import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import React from 'react';
import { useFormContext } from 'react-hook-form';

interface RHFLengthValidation {
    value: number;
    message: string;
}

interface ChakraInput {
    label?: string;
    id?: string;
    placeHolder?: string | undefined;
    registerName: string;
    requiredMsg?: string;
    minLength?: RHFLengthValidation;
    maxLength?: RHFLengthValidation;
    type?: string;
}

const ChakraInput: React.FC<ChakraInput> = ({ label, id, placeHolder, registerName, requiredMsg, minLength, maxLength, type }) => {
    const { register, formState } = useFormContext();
    const { errors } = formState;

    return (
        <FormControl isInvalid={errors[registerName]}>
            {label && <FormLabel>{label}</FormLabel>}
            <Input
                zIndex={5}
                variant={'filled'}
                type={type}
                id={id ? id : registerName}
                placeholder={placeHolder}
                {...register(registerName, {
                    required: requiredMsg ? requiredMsg : false,
                    minLength: minLength,
                    maxLength: maxLength,
                })}
            />
            <FormErrorMessage>{errors[registerName] && errors[registerName].message}</FormErrorMessage>
        </FormControl>
    );
};

export default ChakraInput;
