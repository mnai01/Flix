import { Box, Divider, Flex, Skeleton, Text } from '@chakra-ui/react';
import NavButton from '../../../NavButton';
import { MenuItemProps } from '../Sidebar';

interface SidebarSectionProps {
    title: string;
    items?: MenuItemProps[] | false;
    loading?: boolean;
    overflowY?: 'auto';
}

const SidebarSection: React.FC<SidebarSectionProps> = ({ title, items, loading, overflowY }) => {
    return (
        <Flex direction={'column'} overflowY={overflowY}>
            <Divider orientation="horizontal" />
            <Text fontSize={'sm'} as="b" p={'16px'} textTransform={'uppercase'}>
                {title}
            </Text>

            <Flex direction={'column'}>
                {loading ? (
                    Array(3)
                        .fill(0)
                        .map((_, i) => (
                            <Box key={i} p={1.5}>
                                <Skeleton width="100%" height="30px" />
                            </Box>
                        ))
                ) : !items ? (
                    <Box px={4} pb={4}>
                        <Text as="i" color={'gray.500'}>{`Select "Movies" or "TV"`}</Text>
                    </Box>
                ) : (
                    items.map((i: MenuItemProps) => <NavButton key={i.label} path={i.path} label={i.label} leftIcon={i.leftIcon} isFullWidth />)
                )}
            </Flex>
        </Flex>
    );
};

export default SidebarSection;
