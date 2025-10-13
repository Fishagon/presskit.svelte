<script lang="ts">
        import type {
                GameInfo,
                MediaItem,
                VideoEmbed,
                PressQuote,
                Feature,
                Credit,
                Award,
                BannerImage
        } from './types';
        import About from './components/About.svelte';
        import MediaGallery from './components/MediaGallery.svelte';
        import VideoEmbed from './components/VideoEmbed.svelte';
        import PressQuotes from './components/PressQuotes.svelte';
        import ContactInfo from './components/ContactInfo.svelte';
        import Credits from './components/Credits.svelte';
        import Awards from './components/Awards.svelte';
        import Sidebar from './components/Sidebar.svelte';
        import './styles/global.css';

        export let game: GameInfo;
        export let banner: BannerImage | undefined = undefined;
        export let features: Feature[] = [];
        export let media: MediaItem[] = [];
        export let mediaZipUrl: string | undefined = undefined;
        export let videos: VideoEmbed[] = [];
        export let quotes: PressQuote[] = [];
        export let credits: Credit[] = [];
        export let awards: Award[] = [];
        export let showSidebar: boolean = false;

        $: sections = [
                { id: 'factsheet', title: 'Factsheet' },
                { id: 'description', title: 'Description' },
                features.length > 0 ? { id: 'features', title: 'Features' } : null,
                videos.length > 0 ? { id: 'trailers', title: 'Trailers & Gameplay' } : null,
                media.length > 0 ? { id: 'screenshots', title: 'Screenshots' } : null,
                quotes.length > 0 ? { id: 'reviews', title: 'Reviews & Press' } : null,
                awards.length > 0 ? { id: 'awards', title: 'Awards' } : null,
                credits.length > 0 ? { id: 'credits', title: 'Credits' } : null
        ].filter((s): s is { id: string; title: string } => s !== null);
</script>

<div class="presskit-container">
        <header class="presskit-header">
                {#if banner}
                        <div class="banner-image">
                                <img src={banner.url} alt={banner.alt || game.title} />
                        </div>
                {/if}
                <div class="presskit-grid">
                        <h1 class="presskit-title">{game.title}</h1>
                        {#if game.subtitle}
                                <p class="presskit-subtitle">{game.subtitle}</p>
                        {/if}
                </div>
        </header>

        <div class="presskit-grid" class:with-sidebar={showSidebar}>
                {#if showSidebar}
                        <Sidebar {sections} />
                {/if}
                <div class="presskit-main-content">
                        <div class="two-column-layout">
                                <section class="presskit-section" id="factsheet">
                                        <h2 class="presskit-section-title">Factsheet</h2>
                        <div class="presskit-info-grid">
                                <div class="presskit-info-item">
                                        <div class="presskit-info-label">Developer</div>
                                        <div class="presskit-info-value">{game.developer}</div>
                                </div>

                                {#if game.releaseDate}
                                        <div class="presskit-info-item">
                                                <div class="presskit-info-label">Release Date</div>
                                                <div class="presskit-info-value">{game.releaseDate}</div>
                                        </div>
                                {/if}

                                {#if game.platforms && game.platforms.length > 0}
                                        <div class="presskit-info-item">
                                                <div class="presskit-info-label">Platforms</div>
                                                <div class="presskit-info-value">{game.platforms.join(', ')}</div>
                                        </div>
                                {/if}

                                {#if game.price}
                                        <div class="presskit-info-item">
                                                <div class="presskit-info-label">Price</div>
                                                <div class="presskit-info-value">{game.price}</div>
                                        </div>
                                {/if}

                                {#if game.website}
                                        <div class="presskit-info-item">
                                                <div class="presskit-info-label">Website</div>
                                                <div class="presskit-info-value">
                                                        <a href={game.website} target="_blank" rel="noopener noreferrer" class="presskit-link">
                                                                {game.website}
                                                        </a>
                                                </div>
                                        </div>
                                {/if}
                        </div>
                                </section>

                                <div id="description">
                                        <About title="About {game.title}" content={game.description} />
                                </div>
                        </div>

                        {#if features.length > 0}
                                <section class="presskit-section" id="features">
                                        <h2 class="presskit-section-title">Features</h2>
                                        <div class="features-grid">
                                                {#each features as feature}
                                                        <div class="feature-item">
                                                                <h3 class="feature-title">{feature.title}</h3>
                                                                <p class="feature-description">{feature.description}</p>
                                                        </div>
                                                {/each}
                                        </div>
                                </section>
                        {/if}

                        {#if videos.length > 0}
                                <div id="trailers">
                                        <VideoEmbed title="Trailers & Gameplay" {videos} />
                                </div>
                        {/if}

                        {#if media.length > 0}
                                <div id="screenshots">
                                        <MediaGallery title="Screenshots" {media} />
                                        {#if mediaZipUrl}
                                                <div class="zip-download-section">
                                                        <a href={mediaZipUrl} class="zip-download-button" download>
                                                                Download all images as ZIP
                                                        </a>
                                                </div>
                                        {/if}
                                </div>
                        {/if}

                        {#if quotes.length > 0}
                                <div id="reviews">
                                        <PressQuotes title="Reviews & Press" {quotes} />
                                </div>
                        {/if}

                        {#if awards.length > 0}
                                <div id="awards">
                                        <Awards {awards} />
                                </div>
                        {/if}

                        {#if credits.length > 0}
                                <div id="credits">
                                        <Credits {credits} />
                                </div>
                        {/if}
                </div>
        </div>
</div>

<style>
        .banner-image {
                width: 100%;
                max-height: 400px;
                overflow: hidden;
                margin-bottom: -24px;
        }

        .banner-image img {
                width: 100%;
                height: 100%;
                object-fit: cover;
        }

        .presskit-grid.with-sidebar {
                display: grid;
                grid-template-columns: 250px 1fr;
                gap: 32px;
                align-items: start;
        }

        .presskit-main-content {
                min-width: 0;
        }

        .two-column-layout {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 24px;
                margin-bottom: 24px;
        }

        .zip-download-section {
                padding: 0 24px 24px;
                text-align: center;
        }

        .zip-download-button {
                display: inline-block;
                padding: 12px 24px;
                background: var(--color-accent);
                color: white;
                text-decoration: none;
                border-radius: 4px;
                font-weight: 600;
                transition: opacity 0.2s;
        }

        .zip-download-button:hover {
                opacity: 0.9;
        }

        .features-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                gap: 24px;
        }

        .feature-item {
                padding: 20px;
                border: 1px solid var(--color-border);
                background: #F8F9FA;
        }

        .feature-title {
                color: var(--color-primary);
                font-size: 1.25rem;
                font-weight: 600;
                margin: 0 0 8px 0;
        }

        .feature-description {
                color: var(--color-text);
                line-height: 1.6;
                margin: 0;
        }

        @media (max-width: 1024px) {
                .presskit-grid.with-sidebar {
                        grid-template-columns: 200px 1fr;
                        gap: 24px;
                }
        }

        @media (max-width: 768px) {
                .presskit-grid.with-sidebar {
                        grid-template-columns: 1fr;
                }

                .two-column-layout {
                        grid-template-columns: 1fr;
                }
        }
</style>
