import { Container } from '@chakra-ui/react';

interface PageWrapperProps {
    mobile?: boolean;
    height?: number;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children, mobile, height }) => {
    return (
        <Container width={'100%'} height={height ? `${height}%` : '100%'} maxW={'100%'} minWidth={0} minHeight={0} pr={mobile ? 4 : 0} overflowY={'auto'}>
            {children}
        </Container>
    );
};

export default PageWrapper;
