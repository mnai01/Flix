import { useLazyQuery, useMutation } from '@apollo/client';
import { Box, Button, Center, useToast, VStack } from '@chakra-ui/react';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Bye } from '../../../apollo/generated/Bye';
import { Login, LoginVariables } from '../../../apollo/generated/Login';
import { LOGIN } from '../../../apollo/mutations';
import { BYE } from '../../../apollo/queries';
import { useAuth } from '../../Providers/AuthProvider';
import ChakraInput from '../ChakraInput';

const LoginForm: React.FC = () => {
    const toast = useToast();
    const methods = useForm();
    const { setTokenHandler, checkAuth } = useAuth();
    const navigate = useNavigate();

    const [Login, { loading, error, data }] = useMutation<Login, LoginVariables>(LOGIN, {
        onCompleted: ({ login }) => {
            if (login.accessToken) {
                console.log(login.accessToken);
                setTokenHandler(login.accessToken);
                checkAuth();
                navigate('/', { replace: true });
            }
        },
        onError: (e) => {
            setTokenHandler('');
            toast({
                title: 'Error',
                description: 'There is an error',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        },
    });

    const [test] = useLazyQuery<Bye>(BYE, {
        onCompleted: (data) => {
            // Login
            console.log(data);
        },
        onError: (e) => {
            console.log(e);
        },
    });

    const onSubmit = async (data: any) => {
        Login({ variables: { email: data.email, password: data.password } });
        console.log('ON SUBMIT: ', data);
        test();
    };

    return (
        <form onSubmit={methods.handleSubmit(onSubmit)}>
            <FormProvider {...methods}>
                <Center w='100%' h='100vh'>
                    <Box maxW='sm' alignSelf='center'>
                        <VStack align='flex-start' spacing='12px'>
                            <ChakraInput registerName={'email'} placeHolder='email' requiredMsg={'Please Enter Email'} />
                            <ChakraInput registerName={'password'} placeHolder='password' requiredMsg={'Please Enter Password'} />
                            <Button mt={4} width='sm' type='submit' isLoading={loading}>
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
