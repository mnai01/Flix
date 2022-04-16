import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, CloseButton } from '@chakra-ui/react';
const CustomAlert: React.FC = () => {
    return (
        <Box height={'100vh'} width={'50vw'} position={'absolute'} top={0} right={0}>
            <Alert status="info" position={'absolute'} zIndex={1} bottom={0} right={0}>
                <AlertIcon />
                <AlertTitle>🎉 Congrats on receiving beta access! 🎉</AlertTitle>
                <AlertDescription>
                    For any comments, questions or access to additional referral links please contact the administrator. We look forward to hearing your
                    feedback!
                </AlertDescription>
                <CloseButton position="absolute" right="8px" top="8px" />
            </Alert>
        </Box>
    );
};

export default CustomAlert;
