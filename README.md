# presskit.svelte

A comprehensive SvelteKit component library for creating professional presskit() style press pages. This library provides pre-built components and templates for quickly generating both studio and game presskit pages with full feature parity to presskit.html.

## Features

- **Professional Design** - Clean, media-focused layouts inspired by presskit() and presskit.html
- **Reusable Components** - Pre-built components for studios and games with prop-based configuration
- **Media Galleries** - Image galleries with lightbox, video embeds for YouTube, Vimeo, Twitch
- **Press Quotes** - Showcase reviews and press coverage with scores and attributions
- **Team & Credits** - Display team members, collaborators, and game credits
- **Awards Section** - Highlight achievements and recognition
- **Additional Links** - Curated links to important resources
- **Responsive** - Mobile-friendly layouts that work on all devices
- **Optional Sidebar Navigation** - Sticky navigation with active section highlighting
- **Two-Column Layout** - Factsheet and description side-by-side for better readability
- **TypeScript** - Full TypeScript support with comprehensive type definitions

## Installation

```bash
npm install presskit.svelte
```

## Quick Start

### Basic Game Presskit

```svelte
<script>
  import { GamePresskit } from 'presskit.svelte';

  const game = {
    title: 'My Awesome Game',
    subtitle: 'An Epic Adventure',
    developer: 'Studio Name',
    releaseDate: 'December 2024',
    platforms: ['PC', 'PlayStation 5', 'Xbox Series X/S'],
    price: '$29.99',
    website: 'https://example.com',
    description: '<p>Your game description here...</p>'
  };

  const media = [
    {
      url: 'https://example.com/screenshot1.jpg',
      thumbnail: 'https://example.com/screenshot1-thumb.jpg',
      caption: 'Gameplay screenshot',
      alt: 'Game screenshot'
    }
  ];
</script>

<GamePresskit {game} {media} />
```

### Game Presskit with All Features

```svelte
<script>
  import { GamePresskit } from 'presskit.svelte';

  const game = {
    title: 'Crystal Realms',
    subtitle: 'An Epic Fantasy Adventure',
    developer: 'Pixel Dreams Studio',
    releaseDate: 'December 2024',
    platforms: ['PC', 'PlayStation 5', 'Xbox Series X/S', 'Nintendo Switch'],
    price: '$29.99',
    website: 'https://crystalrealms.example.com',
    description: '<p>Epic fantasy adventure description...</p>'
  };

  const banner = {
    url: 'https://example.com/banner.jpg',
    alt: 'Game banner'
  };

  const features = [
    {
      title: 'Open World Exploration',
      description: 'Discover vast, seamless worlds filled with secrets.'
    },
    {
      title: 'Dynamic Combat',
      description: 'Master an intuitive yet deep combat system.'
    }
  ];

  const media = [
    {
      url: 'https://example.com/screenshot1.jpg',
      thumbnail: 'https://example.com/screenshot1-thumb.jpg',
      caption: 'Combat scene',
      alt: 'Combat screenshot'
    }
  ];

  const videos = [
    {
      url: 'https://www.youtube.com/watch?v=VIDEO_ID',
      platform: 'youtube',
      title: 'Official Trailer'
    }
  ];

  const quotes = [
    {
      quote: 'An amazing achievement in game design.',
      author: 'John Doe',
      source: 'GameSpot',
      url: 'https://example.com/review',
      score: '9/10'
    }
  ];

  const awards = [
    {
      title: 'Best Indie RPG 2024',
      description: 'Awarded for exceptional storytelling',
      date: 'December 2024',
      url: 'https://example.com/award'
    }
  ];

  const credits = [
    { name: 'Alex Chen', role: 'Game Director', website: 'https://example.com' },
    { name: 'Sarah Martinez', role: 'Lead Programmer' }
  ];
</script>

<GamePresskit
  {game}
  {banner}
  {features}
  {media}
  mediaZipUrl="https://example.com/screenshots.zip"
  {videos}
  {quotes}
  {awards}
  {credits}
  showSidebar={true}
/>
```

### Studio Presskit with All Features

```svelte
<script>
  import { StudioPresskit } from 'presskit.svelte';

  const studio = {
    name: 'Pixel Dreams Studio',
    description: 'Independent game studio crafting unique experiences',
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
      pressContact: 'media@pixeldreams.example.com'
    }
  };

  const banner = {
    url: 'https://example.com/studio-banner.jpg',
    alt: 'Studio banner'
  };

  const description = '<p>Studio description...</p>';
  const history = '<p>Our journey and history...</p>';

  const projects = [
    {
      title: 'Echoes of Tomorrow',
      url: 'https://example.com/echoes',
      description: 'Narrative-driven cyberpunk adventure (2020)'
    },
    {
      title: 'Neon Drift',
      url: 'https://example.com/neon',
      description: 'Award-winning racing game (2022)'
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
      type: 'Engineering'
    }
  ];

  const logos = [
    {
      url: 'https://example.com/logo.png',
      type: 'logo',
      downloadUrl: 'https://example.com/logo-hires.png'
    },
    {
      url: 'https://example.com/icon.png',
      type: 'icon',
      downloadUrl: 'https://example.com/icon-hires.png'
    }
  ];

  const additionalLinks = [
    {
      title: 'Steam Developer Page',
      url: 'https://store.steampowered.com/developer/pixeldreams',
      description: 'View all our games on Steam'
    }
  ];
</script>

<StudioPresskit
  {studio}
  {banner}
  {description}
  {history}
  {projects}
  media={studioImages}
  mediaZipUrl="https://example.com/studio-images.zip"
  {logos}
  logoZipUrl="https://example.com/logos.zip"
  {team}
  {additionalLinks}
  showSidebar={true}
/>
```

## Multiple Games Example

Create a directory structure for multiple games:

```svelte
<!-- routes/+page.svelte - Studio homepage with game list -->
<script>
  import { StudioPresskit } from 'presskit.svelte';

  const studio = { /* studio info */ };
  
  const projects = [
    {
      title: 'Game One',
      url: '/press/game-one',
      description: 'First game description'
    },
    {
      title: 'Game Two',
      url: '/press/game-two',
      description: 'Second game description'
    }
  ];
</script>

<StudioPresskit {studio} {projects} />
```

```svelte
<!-- routes/press/game-one/+page.svelte -->
<script>
  import { GamePresskit } from 'presskit.svelte';

  const game = {
    title: 'Game One',
    developer: 'Your Studio',
    description: '<p>Game one details...</p>',
    // ... other props
  };
</script>

<GamePresskit {game} {media} {videos} showSidebar={true} />
```

```svelte
<!-- routes/press/game-two/+page.svelte -->
<script>
  import { GamePresskit } from 'presskit.svelte';

  const game = {
    title: 'Game Two',
    developer: 'Your Studio',
    description: '<p>Game two details...</p>',
    // ... other props
  };
</script>

<GamePresskit {game} {media} {videos} showSidebar={true} />
```

## Components Reference

### Main Components

#### `StudioPresskit`

Complete presskit page for game studios.

**Props:**
- `studio` (required) - Studio information object
- `banner?: BannerImage` - Hero banner image
- `description?: string` - HTML description
- `history?: string` - HTML studio history
- `projects?: Project[]` - Studio projects/releases
- `media?: MediaItem[]` - Studio images
- `mediaZipUrl?: string` - ZIP download URL for images
- `videos?: VideoEmbed[]` - Studio videos
- `logos?: LogoAsset[]` - Logo and icon assets
- `logoZipUrl?: string` - ZIP download URL for logos
- `quotes?: PressQuote[]` - Press quotes
- `additionalLinks?: AdditionalLink[]` - Additional resources
- `team?: TeamMember[]` - Team members
- `showSidebar?: boolean` - Enable sidebar navigation (default: false)

#### `GamePresskit`

Complete presskit page for individual games.

**Props:**
- `game` (required) - Game information object
- `banner?: BannerImage` - Hero banner image
- `features?: Feature[]` - Game features
- `media?: MediaItem[]` - Screenshots
- `mediaZipUrl?: string` - ZIP download URL for screenshots
- `videos?: VideoEmbed[]` - Trailers and gameplay videos
- `quotes?: PressQuote[]` - Reviews and press
- `awards?: Award[]` - Awards and recognition
- `credits?: Credit[]` - Game credits
- `showSidebar?: boolean` - Enable sidebar navigation (default: false)

### Section Components

All section components can be used independently:

- **`About`** - About section with HTML content support
- **`MediaGallery`** - Image gallery with lightbox functionality
- **`VideoEmbed`** - Video embed support (YouTube, Vimeo, Twitch)
- **`PressQuotes`** - Press reviews and quotes with scores
- **`ContactInfo`** - Contact information section
- **`Team`** - Team members and collaborators
- **`Projects`** - Studio projects/releases list
- **`LogoIcon`** - Logo and icon display with download
- **`AdditionalLinks`** - Additional resource links
- **`Credits`** - Game credits
- **`Awards`** - Awards and recognition
- **`Sidebar`** - Navigation sidebar

## Type Definitions

```typescript
interface GameInfo {
  title: string;
  subtitle?: string;
  developer: string;
  releaseDate?: string;
  platforms?: string[];
  price?: string;
  website?: string;
  description: string;
}

interface StudioInfo {
  name: string;
  description: string;
  founded?: string;
  basedIn?: string;
  website?: string;
  address?: string;
  phone?: string;
  contact?: ContactInfo;
}

interface MediaItem {
  url: string;
  thumbnail?: string;
  caption?: string;
  alt?: string;
}

interface VideoEmbed {
  url: string;
  platform: 'youtube' | 'vimeo' | 'twitch';
  title?: string;
}

interface BannerImage {
  url: string;
  alt?: string;
}

interface TeamMember {
  name: string;
  role: string;
  website?: string;
  type?: string;
}

interface Project {
  title: string;
  url: string;
  description?: string;
}

interface Award {
  title: string;
  description: string;
  date?: string;
  url?: string;
}

interface Credit {
  name: string;
  role: string;
  website?: string;
}
```

## Styling

The library uses CSS custom properties for easy theming:

```css
:root {
  --color-primary: #2C3E50;
  --color-secondary: #34495E;
  --color-background: #FFFFFF;
  --color-text: #2C3E50;
  --color-accent: #3498DB;
  --color-border: #BDC3C7;
}
```

Override these in your global CSS to customize the appearance.

## Features

### Sidebar Navigation

Enable the optional sidebar navigation for easier browsing:

```svelte
<GamePresskit {game} {media} showSidebar={true} />
```

The sidebar:
- Automatically generates from available sections
- Highlights the active section as you scroll
- Sticky positioning for easy access
- Responsive (hides on mobile)

### Two-Column Layout

The Factsheet and Description sections are automatically displayed side-by-side on desktop for better readability. On mobile devices, they stack vertically.

### Video Embeds

Support for YouTube, Vimeo, and Twitch:

```svelte
const videos = [
  {
    url: 'https://www.youtube.com/watch?v=VIDEO_ID',
    platform: 'youtube',
    title: 'Official Trailer'
  },
  {
    url: 'https://vimeo.com/VIDEO_ID',
    platform: 'vimeo',
    title: 'Gameplay Video'
  },
  {
    url: 'https://www.twitch.tv/videos/VIDEO_ID',
    platform: 'twitch',
    title: 'Live Stream Recording'
  }
];
```

**Note:** For Twitch embeds in production, provide your domain via the main component or the VideoEmbed component directly.

### Download Assets

Provide ZIP downloads for images and logos:

```svelte
<GamePresskit
  {game}
  {media}
  mediaZipUrl="https://example.com/screenshots.zip"
/>

<StudioPresskit
  {studio}
  {logos}
  logoZipUrl="https://example.com/logos.zip"
/>
```

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
