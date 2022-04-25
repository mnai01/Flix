import { Box, Input } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAutoSuggestion } from '../Providers/AutoSuggestionProvider';

const AutoSuggestion = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { autoSuggestResults } = useAutoSuggestion();

    return (
        <Box p={4}>
            <Input
                variant={'filled'}
                placeholder="Search"
                onChange={(e) => {
                    if (e.target.value === '') navigate('/');
                    if (pathname !== '/search') navigate('/search');
                    autoSuggestResults({ variables: { query: e.target.value, includeAdult: false, region: 'UnitedStates' } });
                }}
            />
        </Box>
    );
};

export default AutoSuggestion;
