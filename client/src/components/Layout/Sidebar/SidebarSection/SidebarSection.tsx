import { Box, Divider, Skeleton, Text } from '@chakra-ui/react';
import NavButton from '../../../NavButton';
import { MenuItemProps } from '../Sidebar';

interface SidebarSectionProps {
    title: string;
    items?: MenuItemProps[] | false;
    loading?: boolean;
}

const SidebarSection: React.FC<SidebarSectionProps> = ({ title, items, loading }) => {
    return (
        <>
            <Divider orientation="horizontal" />
            <Text fontSize={'sm'} as="b" p={'16px'} textTransform={'uppercase'}>
                {title}
            </Text>

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
        </>
    );
};

export default SidebarSection;
