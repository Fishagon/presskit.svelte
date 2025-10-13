<script lang="ts">
        import type { VideoEmbed as VideoEmbedType } from '../types';
        import { browser } from '$app/environment';

        export let title: string = 'Videos';
        export let videos: VideoEmbedType[] = [];
        export let twitchParent: string = 'localhost';

        function getEmbedUrl(video: VideoEmbedType): string {
                const url = video.url;

                if (video.platform === 'youtube') {
                        const videoId = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([\w-]+)/)?.[1];
                        return `https://www.youtube.com/embed/${videoId}`;
                } else if (video.platform === 'vimeo') {
                        const videoId = url.match(/vimeo\.com\/(\d+)/)?.[1];
                        return `https://player.vimeo.com/video/${videoId}`;
                } else if (video.platform === 'twitch') {
                        const videoId = url.match(/twitch\.tv\/videos\/(\d+)/)?.[1];
                        const parent = browser && typeof window !== 'undefined' ? window.location.hostname : twitchParent;
                        return `https://player.twitch.tv/?video=${videoId}&parent=${parent}`;
                }

                return url;
        }
</script>

<section class="presskit-section">
        <h2 class="presskit-section-title">{title}</h2>
        <div class="video-grid">
                {#each videos as video}
                        <div class="video-container">
                                <iframe
                                        src={getEmbedUrl(video)}
                                        title={video.title || 'Video'}
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen
                                ></iframe>
                                {#if video.title}
                                        <div class="video-title">{video.title}</div>
                                {/if}
                        </div>
                {/each}
        </div>
</section>

<style>
        .video-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                gap: 24px;
        }

        .video-container {
                position: relative;
                padding-bottom: 56.25%;
                height: 0;
                overflow: hidden;
                border: 1px solid var(--color-border);
        }

        .video-container iframe {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
        }

        .video-title {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                background: rgba(0, 0, 0, 0.7);
                color: white;
                padding: 8px 12px;
                font-size: 0.875rem;
        }
</style>
