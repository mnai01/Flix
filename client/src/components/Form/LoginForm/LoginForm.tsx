import { useMutation } from '@apollo/client';
import {
    Box,
    Button,
    Center,
    Heading,
    Image,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverTrigger,
    Text,
    useDisclosure,
    useToast,
    VStack,
} from '@chakra-ui/react';
import React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
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
        <form onSubmit={methods.handleSubmit(onSubmit)} style={{ height: '100%' }}>
            <FormProvider {...methods}>
                <Center w="100%" h="100%">
                    <Box maxW="sm" p={50} backgroundColor="#222834" borderRadius="15px" w={'100%'} boxShadow="lg">
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
                                        Im a friendly alpacha, click{' '}
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
                            <ChakraInput registerName={'email'} placeHolder="Please enter your Email Address" requiredMsg={'Please Enter Email'} type="text" />
                            <ChakraInput
                                registerName={'password'}
                                placeHolder="Please enter your Password"
                                requiredMsg={'Please Enter Password'}
                                type="password"
                                my={2}
                            />
                            <Box width="100%">
                                <Button type="submit" width="100%" my={1} isLoading={loading}>
                                    Log In
                                </Button>
                            </Box>
                            {/* <Box color="#737373">
                                New to Catch a Flix?
                                <br />
                            </Box>
                            <Box alignSelf="center" mt={0}>
                                <Link color="white" fontWeight="bold" href="#">
                                    Sign up{' '}
                                </Link>
                                with us!
                            </Box> */} */}
                        </VStack>
                    </Box>
                </Center>
            </FormProvider>
        </form>
    );
};

export default LoginForm;
