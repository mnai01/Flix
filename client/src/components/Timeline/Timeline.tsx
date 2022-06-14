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
            // 6/12/22 @ 1:57am
            title: '1.1.2-beta',
            cardTitle: 'Media Card / Content additions',
            cardSubtitle: 'Updated Media Card Styling and Categories on poster now clickable',
        },
        {
            // 6/14/22 @ 1:26am
            title: '1.2.0-beta',
            cardTitle: 'Category filter select input',
            cardSubtitle: 'Can now filter movie lists by Most Popular, Most Voted, Etc',
        },
    ];

    return (
        <div>
            <Chrono items={items} />
        </div>
    );
};

export default Timeline;
