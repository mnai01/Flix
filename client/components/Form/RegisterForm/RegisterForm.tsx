import { FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/react';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const RegisterForm = () => {
    const methods = useForm();

    return (
        <FormProvider {...methods}>
            <FormControl>
                <FormLabel htmlFor="email">Email address</FormLabel>
                <Input id="email" type="email" />
                <FormHelperText>Well never share your email.</FormHelperText>
            </FormControl>
        </FormProvider>
    );
};

export default RegisterForm;
