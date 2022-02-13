import { Box, Input } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAutoSuggestion } from '../Providers/AutoSuggestionProvider';

const AutoSuggestion = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { setValue } = useAutoSuggestion();

    return (
        <Box p={4}>
            <Input
                variant={'filled'}
                placeholder='Search'
                onChange={(e) => {
                    if (pathname !== '/search') navigate('/search');
                    setValue(e.target.value);
                }}
            />
        </Box>
    );
};

export default AutoSuggestion;
