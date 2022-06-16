import { useMutation } from '@apollo/client';
import { Box, Button, Center, Heading, useColorMode, useToast, VStack } from '@chakra-ui/react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Register, RegisterVariables } from '../../../apollo/generated/Register';
import { REGISTER } from '../../../apollo/mutations';
import ChakraInput from '../ChakraInput';

interface FormSubmitValues {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

const RegisterForm = () => {
    const methods = useForm<FormSubmitValues>();
    const toast = useToast();
    const navigate = useNavigate();
    const [search] = useSearchParams();
    const { colorMode } = useColorMode();

    const [Register, { loading }] = useMutation<Register, RegisterVariables>(REGISTER, {
        onCompleted: () => {
            navigate('/', { replace: true });
        },
        onError: (err) => {
            toast({
                title: 'Error',
                description: err.message ? err.message : 'There is an error registering',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        },
    });

    const onSubmit: SubmitHandler<FormSubmitValues> = async (data: FormSubmitValues) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        Register({
            variables: { firstName: data.firstName, lastName: data.lastName, email: data.email, password: data.password, token: search.get('token')! },
        });
    };

    return (
        <form onSubmit={methods.handleSubmit(onSubmit)} style={{ height: '100%' }}>
            <FormProvider {...methods}>
                <Center w="100%" h="100%">
                    <Box maxW="sm" p={50} backgroundColor={colorMode === 'dark' ? '#222834' : '#dbe7f8'} borderRadius="15px" w={'100%'} boxShadow="lg">
                        <VStack spacing="12px">
                            <Heading padding="15px" letterSpacing="widest">
                                Register
                            </Heading>
                            <Box display={'flex'} justifyContent={'space-between'} gap={2}>
                                <ChakraInput
                                    registerName={'firstName'}
                                    placeHolder="First Name"
                                    requiredMsg={'Please Enter Your First Name'}
                                    type="text"
                                    minLength={{ value: 2, message: 'First Name must be 2+ characters long' }}
                                />
                                <ChakraInput
                                    registerName={'lastName'}
                                    placeHolder="Last Name"
                                    requiredMsg={'Please Enter Your Last Name'}
                                    type="text"
                                    minLength={{ value: 2, message: 'Last Name must be 2+ characters long' }}
                                />
                            </Box>
                            <ChakraInput registerName={'email'} placeHolder="email" requiredMsg={'Please Enter Email'} type="email" />
                            <ChakraInput
                                registerName={'password'}
                                placeHolder="password"
                                requiredMsg={'Please Enter Password'}
                                type="password"
                                minLength={{ value: 6, message: 'Password must be 6+ characters long' }}
                            />
                            <Box width="100%">
                                <Button type="submit" width="100%" my={1} isLoading={loading}>
                                    Register
                                </Button>
                            </Box>
                        </VStack>
                    </Box>
                </Center>
            </FormProvider>
        </form>
    );
};

export default RegisterForm;
