import { Box } from '@chakra-ui/react';

const PageWrapper: React.FC = ({ children }) => {
    return (
        <Box width={'100%'} minWidth={0}>
            {children}
        </Box>
    );
};

export default PageWrapper;
