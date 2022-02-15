import { Box, Divider, Skeleton, Text } from '@chakra-ui/react';
import NavButton from '../../../NavButton';
import { MenuItemProps } from '../Sidebar';

interface SidebarSectionProps {
    title: string;
    items?: MenuItemProps[];
}

const SidebarSection: React.FC<SidebarSectionProps> = ({ title, items }) => {
    return (
        <>
            <Divider orientation='horizontal' />
            <Text fontSize={'sm'} as='b' p={'16px'} textTransform={'uppercase'}>
                {title}
            </Text>
            {items
                ? items.map((i: MenuItemProps) => <NavButton key={i.label} path={i.path} label={i.label} leftIcon={i.leftIcon} isFullWidth />)
                : Array(19)
                      .fill(0)
                      .map((_, i) => (
                          <Box key={i} p={1.5}>
                              <Skeleton width='100%' height='30px' />
                          </Box>
                      ))}
        </>
    );
};

export default SidebarSection;
