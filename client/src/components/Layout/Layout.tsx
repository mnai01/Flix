import { Flex, useMediaQuery } from '@chakra-ui/react';
import Header from './Header';
import PageWrapper from './PageWrapper';
import Sidebar from './Sidebar';

const Layout: React.FC = ({ children }) => {
    const [isLessThan768] = useMediaQuery('(max-width: 768px)');

    return (
        <>
            {isLessThan768 ? (
                <>
                    <Header />
                    {children}
                </>
            ) : (
                <Flex width={'100%'}>
                    <Sidebar />
                    <PageWrapper>{children}</PageWrapper>
                </Flex>
            )}
        </>
    );
};

export default Layout;
