import React from 'react';
import { MovieContent } from '../components/Media';
import { SelectedMovieProvider } from '../components/Providers/SelectedMovieProvider';

const MovieContentPage: React.FC = () => {
    return (
        <SelectedMovieProvider>
            <MovieContent />
        </SelectedMovieProvider>
    );
};

export default MovieContentPage;
