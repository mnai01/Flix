import { Center, useColorMode } from '@chakra-ui/react';
import { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

const CustomAlert: React.FC = () => {
    const { colorMode } = useColorMode();

    const notify = () =>
        toast.info(
            <Center textAlign={'center'}>
                🎉Congrats on receiving beta access! 🎉 <br /> <br />
                For any comments, questions or access to additional referral links please contact the administrator. We look forward to hearing your feedback!
            </Center>,
            {
                position: toast.POSITION.BOTTOM_LEFT,
                theme: colorMode === 'dark' ? `dark` : 'colored',
                autoClose: 8000,
                style: { width: '200%' },
            },
        );

    const notify_tv = () =>
        toast.info(<Center textAlign={'center'}>TV shows are now available for viewing, sorry for the delay 😊 </Center>, {
            position: toast.POSITION.BOTTOM_LEFT,
            theme: colorMode === 'dark' ? `colored` : 'light',
            autoClose: 8000,
            style: { width: '200%' },
        });

    useEffect(() => {
        notify_tv();
        notify();
    }, []);

    return <ToastContainer />;
};

export default CustomAlert;
