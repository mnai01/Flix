import { Container } from '@chakra-ui/react';

const PageWrapper: React.FC = ({ children }) => {
    return (
        <Container width={'100%'} maxW={'100%'} maxH={'100%'} minWidth={0} minHeight={0}>
            {children}
        </Container>
    );
};

export default PageWrapper;
