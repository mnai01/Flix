import { Container } from '@chakra-ui/react';

const PageWrapper: React.FC = ({ children }) => {
    return (
        <Container width={'100%'} height={'100%'} maxW={'100%'} minWidth={0} minHeight={0} pr={0} mt={'20px'}>
            {children}
        </Container>
    );
};

export default PageWrapper;
