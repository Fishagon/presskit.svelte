<script lang="ts">
        import { base } from '$app/paths';
        import { GamePresskit } from '$lib';

        const homeHref = `${base}/`;

        const game = {
                title: 'Crystal Realms',
                subtitle: 'An Epic Fantasy Adventure',
                developer: 'Pixel Dreams Studio',
                releaseDate: 'December 2024',
                platforms: ['PC', 'PlayStation 5', 'Xbox Series X/S', 'Nintendo Switch'],
                price: '$29.99',
                website: 'https://crystalrealms.example.com',
                logo: 'https://crystalrealmsgame.com/assets/logo.png',
                description: `
                        <p>Crystal Realms is an epic fantasy adventure that takes players on a journey through magical worlds filled with wonder, danger, and mystery. Explore vast landscapes, battle fearsome creatures, and uncover ancient secrets.</p>
                        <p>With stunning visuals powered by the latest graphics technology, immersive storytelling, and engaging gameplay mechanics, Crystal Realms offers an unforgettable gaming experience.</p>
                        <p>Choose your path, forge alliances, and determine the fate of the realm in this expansive open-world RPG.</p>
                `
        };

        const features = [
                {
                        title: 'Open World Exploration',
                        description: 'Discover a vast, seamless world filled with secrets, quests, and breathtaking vistas.'
                },
                {
                        title: 'Dynamic Combat System',
                        description: 'Master an intuitive yet deep combat system with multiple playstyles and abilities.'
                },
                {
                        title: 'Rich Storytelling',
                        description: 'Experience a compelling narrative with memorable characters and meaningful choices.'
                },
                {
                        title: 'Multiplayer Co-op',
                        description: 'Team up with friends for epic adventures in seamless online cooperative play.'
                }
        ];

        const media = [
                {
                        url: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800',
                        thumbnail: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400',
                        caption: 'Crystal Realms - Main Menu',
                        alt: 'Game main menu screenshot'
                },
                {
                        url: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800',
                        thumbnail: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400',
                        caption: 'In-game Combat',
                        alt: 'Gameplay combat screenshot'
                },
                {
                        url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800',
                        thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400',
                        caption: 'Open World Vista',
                        alt: 'Open world environment screenshot'
                },
                {
                        url: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800',
                        thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400',
                        caption: 'Character Customization',
                        alt: 'Character customization screen'
                }
        ];

        const videos = [
                {
                        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                        platform: 'youtube',
                        title: 'Official Gameplay Trailer'
                },
                {
                        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                        platform: 'youtube',
                        title: 'Developer Commentary'
                }
        ];

        const quotes = [
                {
                        quote: 'Crystal Realms sets a new standard for indie RPGs with its beautiful world and engaging mechanics.',
                        author: 'Alex Chen',
                        source: 'GameSpot',
                        url: 'https://example.com',
                        score: '9/10'
                },
                {
                        quote: 'A masterpiece of game design. The attention to detail is extraordinary.',
                        author: 'Sarah Williams',
                        source: 'IGN',
                        url: 'https://example.com',
                        score: '9.5/10'
                },
                {
                        quote: 'One of the best RPG experiences of the year. Highly recommended!',
                        author: 'Mike Johnson',
                        source: 'PC Gamer',
                        score: '95/100'
                }
        ];

        const banner = {
                url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1600&h=400&fit=crop',
                alt: 'Crystal Realms banner'
        };

        const credits = [
                {
                        name: 'Alex Chen',
                        role: 'Game Director',
                        website: 'https://example.com/alex'
                },
                {
                        name: 'Sarah Martinez',
                        role: 'Lead Programmer'
                },
                {
                        name: 'Emma Wilson',
                        role: 'Art Director',
                        website: 'https://example.com/emma'
                },
                {
                        name: 'Marcus Johnson',
                        role: 'Lead Game Designer'
                },
                {
                        name: 'David Park',
                        role: 'Technical Artist'
                },
                {
                        name: 'Lisa Zhang',
                        role: 'Composer & Sound Design',
                        website: 'https://example.com/lisa'
                },
                {
                        name: 'Tom Rodriguez',
                        role: 'Level Design Lead'
                },
                {
                        name: 'Rachel Kim',
                        role: 'Narrative Designer'
                }
        ];

        const awards = [
                {
                        title: 'Best Indie RPG 2024',
                        description: 'Awarded for exceptional storytelling and innovative gameplay mechanics',
                        date: 'December 2024',
                        url: 'https://example.com/awards/indie-rpg'
                },
                {
                        title: 'Excellence in Visual Design',
                        description: 'Recognized at the Independent Games Festival for outstanding artistic achievement',
                        date: 'October 2024'
                },
                {
                        title: "Players' Choice Award",
                        description: 'Voted by the community as the most anticipated indie game of 2024',
                        date: 'September 2024',
                        url: 'https://example.com/awards/players-choice'
                }
        ];
</script>

<GamePresskit
        {game}
        {banner}
        {features}
        {media}
        mediaZipUrl="https://example.com/downloads/crystal-realms-screenshots.zip"
        {videos}
        {quotes}
        {awards}
        {credits}
        showSidebar={true}
/>

<div style="padding: 24px; text-align: center; background: #F8F9FA;">
        <a href={homeHref} style="color: var(--color-accent); text-decoration: none; font-weight: 600;">← Back to Home</a>
</div>
