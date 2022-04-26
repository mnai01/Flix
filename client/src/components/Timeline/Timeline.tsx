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
        {
            // 4/26/22 @ 12:00pm
            title: '1.1.1-beta',
            cardTitle: 'UI now more responsive',
            cardSubtitle: 'Fixed responsive view errors',
        },
        {
            // 4/26/22 @ 12:16pm
            title: '1.1.2-beta',
            cardTitle: 'Removed ads',
            cardSubtitle: 'As this is a free platform all ads have been removed. If youre still having issues with ads please notify the admin',
        },
    ];

    return (
        <div>
            <Chrono items={items} />
        </div>
    );
};

export default Timeline;
