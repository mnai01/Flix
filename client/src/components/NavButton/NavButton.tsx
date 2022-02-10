import { Button, ButtonProps, useColorMode } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

interface NavButtonProps extends ButtonProps {
    path: string;
    label: string;
}

const NavButton: React.FC<NavButtonProps> = ({ path, label, leftIcon, isFullWidth }) => {
    return (
        <Link to={path} style={{ display: 'inline-block' }}>
            <Button leftIcon={leftIcon} isFullWidth={isFullWidth} textAlign={['center', 'left', 'right']} justifyContent='flex-start' variant='ghost'>
                {label}
            </Button>
        </Link>
    );
};

export default NavButton;
