<script lang="ts">
        import { StudioPresskit } from '$lib';

        const studio = {
                name: 'Pixel Dreams Studio',
                description: 'Independent game studio crafting unique gaming experiences',
                founded: 'March 2020',
                basedIn: 'San Francisco, CA',
                website: 'https://pixeldreams.example.com',
                address: '123 Game Dev Lane, San Francisco, CA 94103',
                phone: '+1 (555) 123-4567',
                contact: {
                        email: 'press@pixeldreams.example.com',
                        twitter: 'pixeldreams',
                        facebook: 'https://facebook.com/pixeldreams',
                        instagram: 'https://instagram.com/pixeldreams',
                        discord: 'https://discord.gg/pixeldreams',
                        pressContact: 'media@pixeldreams.example.com'
                }
        };

        const banner = {
                url: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1600&h=400&fit=crop',
                alt: 'Pixel Dreams Studio banner'
        };

        const description = `
                <p>Pixel Dreams Studio is an independent game development studio founded in 2020 by a team of passionate game developers and artists. We specialize in creating innovative gaming experiences that blend stunning visuals with engaging gameplay.</p>
                <p>Our mission is to push the boundaries of interactive entertainment and create games that resonate with players around the world. We believe in the power of storytelling and use cutting-edge technology to bring our creative visions to life.</p>
                <p>Since our founding, we've released multiple critically acclaimed titles and have built a community of dedicated players who share our passion for unique gaming experiences.</p>
        `;

        const history = `
                <p>Pixel Dreams Studio was born from a shared passion for creating meaningful gaming experiences. Founded in March 2020 by lead designer Alex Chen and technical director Sarah Martinez, the studio started in a small San Francisco apartment with just three team members.</p>
                <p>Our first game, "Echoes of Tomorrow," launched in late 2020 to critical acclaim and established our reputation for innovative storytelling. The success allowed us to expand our team and move to our current studio space in 2021.</p>
                <p>In 2022, we released "Neon Drift," which won multiple indie game awards and solidified our position in the industry. Today, we're a team of 25 talented individuals working on our most ambitious project yet.</p>
        `;

        const projects = [
                {
                        title: 'Echoes of Tomorrow',
                        url: 'https://example.com/echoes',
                        description: 'Our debut title - A narrative-driven adventure game set in a cyberpunk future (2020)'
                },
                {
                        title: 'Neon Drift',
                        url: 'https://example.com/neon',
                        description: 'Award-winning racing game with stunning visuals and tight controls (2022)'
                },
                {
                        title: 'Project Starfall',
                        url: 'https://example.com/starfall',
                        description: 'Our upcoming space exploration RPG - Coming 2025'
                }
        ];

        const team = [
                {
                        name: 'Alex Chen',
                        role: 'Co-Founder & Creative Director',
                        website: 'https://example.com/alex'
                },
                {
                        name: 'Sarah Martinez',
                        role: 'Co-Founder & Technical Director',
                        website: 'https://example.com/sarah'
                },
                {
                        name: 'Marcus Johnson',
                        role: 'Lead Game Designer'
                },
                {
                        name: 'Emma Wilson',
                        role: 'Art Director',
                        type: 'Art'
                },
                {
                        name: 'David Park',
                        role: 'Senior Programmer',
                        type: 'Engineering'
                },
                {
                        name: 'Lisa Zhang',
                        role: 'Audio Lead',
                        type: 'Audio'
                }
        ];

        const media = [
                {
                        url: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800',
                        thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400',
                        caption: 'Our studio workspace',
                        alt: 'Modern game studio office space'
                },
                {
                        url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800',
                        thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400',
                        caption: 'Team collaboration session',
                        alt: 'Team members working together'
                },
                {
                        url: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800',
                        thumbnail: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400',
                        caption: 'Development in progress',
                        alt: 'Developer coding on computer'
                }
        ];

        const videos = [
                {
                        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                        platform: 'youtube',
                        title: 'Studio Behind the Scenes'
                }
        ];

        const quotes = [
                {
                        quote: 'Pixel Dreams Studio continues to impress with their innovative approach to game development.',
                        author: 'Jane Smith',
                        source: 'Gaming Weekly',
                        url: 'https://example.com',
                        score: '9/10'
                },
                {
                        quote: 'A studio to watch. Their attention to detail and player experience is second to none.',
                        author: 'John Doe',
                        source: 'Indie Game Review',
                        score: '5/5'
                }
        ];

        const logos = [
                {
                        url: 'https://via.placeholder.com/400x400/2C3E50/FFFFFF?text=Logo',
                        type: 'logo',
                        downloadUrl: 'https://via.placeholder.com/2000x2000/2C3E50/FFFFFF?text=Logo'
                },
                {
                        url: 'https://via.placeholder.com/200x200/3498DB/FFFFFF?text=Icon',
                        type: 'icon',
                        downloadUrl: 'https://via.placeholder.com/1024x1024/3498DB/FFFFFF?text=Icon'
                }
        ];

        const additionalLinks = [
                {
                        title: 'Steam Developer Page',
                        url: 'https://store.steampowered.com/developer/pixeldreams',
                        description: 'View all our games on Steam'
                },
                {
                        title: 'Join Our Discord Community',
                        url: 'https://discord.gg/pixeldreams',
                        description: 'Connect with other players and the development team'
                },
                {
                        title: 'Developer Blog',
                        url: 'https://blog.pixeldreams.example.com',
                        description: 'Behind-the-scenes development updates and insights'
                }
        ];
</script>

<StudioPresskit
        {studio}
        {banner}
        {description}
        {history}
        {projects}
        {media}
        mediaZipUrl="https://example.com/downloads/pixel-dreams-images.zip"
        {videos}
        {logos}
        logoZipUrl="https://example.com/downloads/pixel-dreams-logos.zip"
        {quotes}
        {additionalLinks}
        {team}
        showSidebar={true}
/>

<div style="padding: 24px; text-align: center; background: #F8F9FA;">
        <a href="/" style="color: var(--color-accent); text-decoration: none; font-weight: 600;">← Back to Home</a>
</div>
