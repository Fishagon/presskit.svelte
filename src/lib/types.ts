export interface StudioInfo {
        name: string;
        description: string;
        founded?: string;
        website?: string;
        basedIn?: string;
        address?: string;
        phone?: string;
        contact?: ContactInfo;
        logo?: string;
        logoAlt?: string;
}

export interface GameInfo {
        title: string;
        subtitle?: string;
        developer: string;
        releaseDate?: string;
        website?: string;
        platforms?: string[];
        price?: string;
        description: string;
        logo?: string;
        logoAlt?: string;
}

export interface ContactInfo {
        email?: string;
        phone?: string;
        twitter?: string;
        facebook?: string;
        instagram?: string;
        discord?: string;
        pressContact?: string;
}

export interface MediaItem {
        url: string;
        type?: 'image' | 'video';
        thumbnail?: string;
        poster?: string;
        caption?: string;
        alt?: string;
        autoplay?: boolean;
}

export interface VideoEmbed {
        url: string;
        platform: 'youtube' | 'vimeo' | 'twitch';
        title?: string;
}

export interface PressQuote {
        quote: string;
        author: string;
        source: string;
        url?: string;
        score?: string;
}

export interface Feature {
        title: string;
        description: string;
}

export interface TeamMember {
        name: string;
        role: string;
        website?: string;
        type?: 'founder' | 'developer' | 'artist' | 'collaborator' | 'other';
}

export interface Project {
        title: string;
        url: string;
        description?: string;
}

export interface AdditionalLink {
        title: string;
        url: string;
        description?: string;
}

export interface LogoAsset {
        url: string;
        type: 'logo' | 'icon';
        downloadUrl?: string;
}

export interface Credit {
        name: string;
        role: string;
        website?: string;
}

export interface Award {
        title: string;
        description: string;
        url?: string;
        date?: string;
}

export interface BannerImage {
        url: string;
        alt?: string;
        /** Optional explicit height for the banner wrapper (e.g. "320px", "40vh"). */
        height?: string;
        /** Overrides the default max-height on the banner wrapper. */
        maxHeight?: string;
        /** Sets a minimum height for the banner wrapper. */
        minHeight?: string;
        /** Controls how the image scales within the banner wrapper. */
        objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
        /** Adjusts the anchor point when the image is cropped. */
        objectPosition?: string;
}
