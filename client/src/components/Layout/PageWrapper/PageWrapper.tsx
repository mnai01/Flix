import { Container } from '@chakra-ui/react';

interface PageWrapperProps {
    mobile?: boolean;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children, mobile }) => {
    return (
        <Container width={'100%'} maxW={'100%'} minWidth={0} minHeight={0} pr={mobile ? 4 : 0}>
            {children}
        </Container>
    );
};

export default PageWrapper;
