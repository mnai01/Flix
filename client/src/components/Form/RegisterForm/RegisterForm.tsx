import { useMutation } from '@apollo/client';
import { Box, Button, Center, useToast, VStack } from '@chakra-ui/react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Register, RegisterVariables } from '../../../apollo/generated/Register';
import { REGISTER } from '../../../apollo/mutations';
import ChakraInput from '../ChakraInput';

interface FormSubmitValues {
    email: string;
    password: string;
}

const RegisterForm = () => {
    const methods = useForm<FormSubmitValues>();
    const toast = useToast();
    const navigate = useNavigate();
    const [search, setSearch] = useSearchParams();

    const [Register, { loading }] = useMutation<Register, RegisterVariables>(REGISTER, {
        onCompleted: () => {
            navigate('/', { replace: true });
        },
        onError: () => {
            toast({
                title: 'Error',
                description: 'There is an error registering',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        },
    });

    const onSubmit: SubmitHandler<FormSubmitValues> = async (data: FormSubmitValues) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        Register({ variables: { email: data.email, password: data.password, token: search.get('token')! } });
    };

    return (
        <form onSubmit={methods.handleSubmit(onSubmit)}>
            <FormProvider {...methods}>
                <Center w="100%" h="100vh">
                    <Box maxW="sm" alignSelf="center">
                        <VStack align="flex-start" spacing="12px">
                            <ChakraInput registerName={'email'} placeHolder="email" requiredMsg={'Please Enter Email'} type="email" />
                            <ChakraInput
                                registerName={'password'}
                                placeHolder="password"
                                requiredMsg={'Please Enter Password'}
                                type="password"
                                minLength={{ value: 6, message: 'Password must be 6+ characters long' }}
                            />
                            <i>We do not support email / password reset for security reasons, do not forget your email or password!</i>
                            <Button mt={4} width="sm" type="submit" isLoading={loading}>
                                Register
                            </Button>
                        </VStack>
                    </Box>
                </Center>
            </FormProvider>
        </form>
    );
};

export default RegisterForm;
