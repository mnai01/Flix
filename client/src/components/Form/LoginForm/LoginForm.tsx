import { useMutation } from '@apollo/client';
import { Box, Button, Center, useToast, VStack } from '@chakra-ui/react';
import React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Login, LoginVariables } from '../../../apollo/generated/Login';
import { LOGIN } from '../../../apollo/mutations';
import { useAuth } from '../../Providers/AuthProvider';
import ChakraInput from '../ChakraInput';

interface FormSubmitValues {
    email: string;
    password: string;
}

const LoginForm: React.FC = () => {
    const toast = useToast();
    const methods = useForm<FormSubmitValues>();
    const { setAuthHandler } = useAuth();
    const navigate = useNavigate();

    const [Login, { loading }] = useMutation<Login, LoginVariables>(LOGIN, {
        onCompleted: ({ Login }) => {
            if (Login.accessToken) {
                setAuthHandler({ ok: true, accessToken: Login.accessToken });
                navigate('/', { replace: true });
            }
        },
        onError: () => {
            setAuthHandler({ ok: false, accessToken: '' });
            toast({
                title: 'Error',
                description: 'There is an error',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        },
    });

    const onSubmit: SubmitHandler<FormSubmitValues> = async (data: FormSubmitValues) => {
        Login({ variables: { email: data.email, password: data.password } });
    };

    return (
        <form onSubmit={methods.handleSubmit(onSubmit)}>
            <FormProvider {...methods}>
                <Center w="100%" h="100vh">
                    <Box maxW="sm" alignSelf="center">
                        <VStack align="flex-start" spacing="12px">
                            <ChakraInput registerName={'email'} placeHolder="email" requiredMsg={'Please Enter Email'} />
                            <ChakraInput registerName={'password'} placeHolder="password" requiredMsg={'Please Enter Password'} />
                            <Button mt={4} width="sm" type="submit" isLoading={loading}>
                                Log In
                            </Button>
                        </VStack>
                    </Box>
                </Center>
            </FormProvider>
        </form>
    );
};

export default LoginForm;
