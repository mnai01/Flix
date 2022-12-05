import { useMutation } from '@apollo/client';
import {
    Box,
    Button,
    Center,
    Heading,
    Image,
    Link,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverTrigger,
    Text,
    useColorMode,
    useDisclosure,
    useToast,
    VStack,
} from '@chakra-ui/react';
import React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { Link as RouteLink, useNavigate } from 'react-router-dom';
// eslint-disable-next-line import/no-named-as-default
import useSound from 'use-sound';
import { Login, LoginVariables } from '../../../apollo/generated/Login';
import { LOGIN } from '../../../apollo/mutations';
import Alpacha from '../../../utils/images/alpaca-96.png';
import { useAuth } from '../../Providers/AuthProvider';
import ChakraInput from '../ChakraInput';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const AlpachaMatingSound = require('../../../utils/sounds/Alpaca_Mating.mp3');

interface FormSubmitValues {
    email: string;
    password: string;
}

const LoginForm: React.FC = () => {
    const { colorMode } = useColorMode();
    const toast = useToast();
    const methods = useForm<FormSubmitValues>();
    const { setAuthHandler } = useAuth();
    const navigate = useNavigate();
    const { onOpen, onClose, isOpen } = useDisclosure();
    const [play] = useSound(AlpachaMatingSound);

    const [Login, { loading }] = useMutation<Login, LoginVariables>(LOGIN, {
        onCompleted: ({ Login }) => {
            if (Login.accessToken) {
                setAuthHandler({ ok: true, accessToken: Login.accessToken });
                navigate('/', { replace: true });
            }
        },
        onError: (err) => {
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

    const onGuestLogin: SubmitHandler<FormSubmitValues> = async (data: FormSubmitValues) => {
        Login({ variables: { email: data.email, password: data.password } });
    };

    return (
        <form onSubmit={methods.handleSubmit(onSubmit)} style={{ height: '100%' }}>
            <FormProvider {...methods}>
                <Center w="100%" h="100%">
                    <Box maxW="sm" p={50} backgroundColor={colorMode === 'dark' ? '#222834' : '#dbe7f8'} borderRadius="15px" w={'100%'} boxShadow="lg">
                        <VStack spacing="12px">
                            <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose} placement="right" closeOnBlur={false}>
                                <PopoverTrigger>
                                    {/* Chakra m="auto" wouldnt work so this is workaround */}
                                    <Image src={Alpacha} style={{ margin: 'auto' }} />
                                </PopoverTrigger>
                                <PopoverContent>
                                    <PopoverArrow />
                                    <PopoverCloseButton />
                                    <PopoverBody>
                                        Im a friendly alpaca, click{' '}
                                        <Text cursor={'pointer'} as="u" color="blue" display={'inline'} onClick={() => play()}>
                                            here
                                        </Text>{' '}
                                        to hear what I sound like.
                                    </PopoverBody>
                                </PopoverContent>
                            </Popover>
                            <Heading padding="15px" letterSpacing="widest">
                                Login
                            </Heading>
                            <ChakraInput registerName={'email'} placeHolder="Email Address" requiredMsg={'Please Enter Email'} type="text" />
                            <ChakraInput registerName={'password'} placeHolder="Password" requiredMsg={'Please Enter Password'} type="password" my={2} />
                            <Box width="100%">
                                <Button type="submit" width="100%" my={1} isLoading={loading}>
                                    Log In
                                </Button>
                            </Box>
                            <Box width="100%">
                                <Button
                                    width="100%"
                                    my={1}
                                    isLoading={loading}
                                    onClick={() => onGuestLogin({ email: 'test@test', password: 'test' })}
                                    variant="outline">
                                    Guest Login
                                </Button>
                            </Box>
                            <Box color="#737373">
                                New to Catch a trailer?
                                <br />
                            </Box>
                            <Box alignSelf="center" mt={0}>
                                <Link as={RouteLink} color="white" fontWeight="bold" to={'register?token='}>
                                    Sign up{' '}
                                </Link>
                                with us!
                            </Box>
                        </VStack>
                    </Box>
                </Center>
            </FormProvider>
        </form>
    );
};

export default LoginForm;
