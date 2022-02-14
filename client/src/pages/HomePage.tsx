import { Box } from '@chakra-ui/react';
import React from 'react';

const HomePage = () => {
    return (
        <div>
            <Box
                sx={{
                    '&::-webkit-scrollbar': {
                        width: '16px',
                        borderRadius: '8px',
                        backgroundColor: `rgba(0, 0, 0, 0.05)`,
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: `rgba(0, 0, 0, 0.05)`,
                    },
                }}
            >
                <h1>HOME</h1>
            </Box>
        </div>
    );
};

export default HomePage;
