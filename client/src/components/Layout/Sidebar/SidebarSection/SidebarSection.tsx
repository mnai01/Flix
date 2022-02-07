import { Heading } from '@chakra-ui/react';
import NavButton from '../../../NavButton';
import { MenuItemProps } from '../Sidebar';

interface SidebarSectionProps {
    title: string;
    items: MenuItemProps[];
}

const SidebarSection: React.FC<SidebarSectionProps> = ({ title, items }) => {
    return (
        <>
            <Heading as='h5' size='sm'>
                {title}
            </Heading>
            {items.map((i: MenuItemProps) => (
                <NavButton key={i.label} path={i.path} label={i.label} leftIcon={i.leftIcon} isFullWidth />
            ))}
        </>
    );
};

export default SidebarSection;
