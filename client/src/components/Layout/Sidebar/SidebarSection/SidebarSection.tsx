import { Divider, Text } from '@chakra-ui/react';
import NavButton from '../../../NavButton';
import { MenuItemProps } from '../Sidebar';

interface SidebarSectionProps {
    title: string;
    items: MenuItemProps[];
}

const SidebarSection: React.FC<SidebarSectionProps> = ({ title, items }) => {
    return (
        <>
            <Divider orientation='horizontal' />
            <Text fontSize={'sm'} as='b' p={'16px'} textTransform={'uppercase'}>
                {title}
            </Text>
            {items.map((i: MenuItemProps) => (
                <NavButton key={i.label} path={i.path} label={i.label} leftIcon={i.leftIcon} isFullWidth />
            ))}
        </>
    );
};

export default SidebarSection;
