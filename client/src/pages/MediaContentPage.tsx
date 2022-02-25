import React from 'react';
import { MediaContent } from '../components/Media';
import { SelectedMediaProvider } from '../components/Providers/SelectedMediaProvider';

const MediaContentPage: React.FC = () => {
    return (
        <SelectedMediaProvider>
            <MediaContent />
        </SelectedMediaProvider>
    );
};

export default MediaContentPage;
