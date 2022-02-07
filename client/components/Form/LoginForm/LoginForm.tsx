import { useLazyQuery, useMutation } from '@apollo/client';
import { Box, Button, Center, VStack } from '@chakra-ui/react';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Bye } from '../../../apollo/generated/Bye';
import { Login, LoginVariables } from '../../../apollo/generated/Login';
import { LOGIN } from '../../../apollo/mutations';
import { BYE } from '../../../apollo/queries';
import { useAuth } from '../../Providers/AuthProvider';
import ChakraInput from '../ChakraInput';

const LoginForm: React.FC = () => {
    const methods = useForm();
    const { setTokenHandler } = useAuth();

    const [Login, { loading, error, data }] = useMutation<Login, LoginVariables>(LOGIN, {
        onCompleted: ({ login }) => {
            // Login
            setTokenHandler(login.accessToken);
        },
        onError: (e) => {
            console.log(e);
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
        Login({ variables: { password: 'test', email: 'test' } });
        console.log('ON SUBMIT: ', data);
        test();
    };

    return (
        <form onSubmit={methods.handleSubmit(onSubmit)}>
            <FormProvider {...methods}>
                <Center w="100%" h="100vh">
                    <Box maxW="sm" alignSelf="center">
                        <VStack align="flex-start" spacing="12px">
                            <ChakraInput registerName={'email'} placeHolder="email" requiredMsg={'Please Enter Email'} />
                            <ChakraInput registerName={'password'} placeHolder="password" requiredMsg={'Please Enter Password'} />
                            <Button mt={4} width="sm" type="submit">
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
