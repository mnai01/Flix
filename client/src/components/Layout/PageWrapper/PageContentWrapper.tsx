import { Box } from '@chakra-ui/react';

const PageContentWrapper: React.FC = ({ children }) => {
    return <Box py={5}>{children}</Box>;
};

export default PageContentWrapper;
