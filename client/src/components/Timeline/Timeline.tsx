import { Chrono } from 'react-chrono';

const Timeline: React.FC = () => {
    const items = [
        {
            // 4/22/22 @ 4am
            title: '1.0.0-beta',
            cardTitle: 'Beta release',
            cardSubtitle: 'Version 1 Beta release with exlusive registration links',
        },
        {
            // 4/24/22 @ 11:11pm
            title: '1.1.0-beta',
            cardTitle: 'Added Feature',
            cardSubtitle: 'Responsive mode for mobile added',
        },
    ];

    return (
        <div>
            <Chrono items={items} />
        </div>
    );
};

export default Timeline;
