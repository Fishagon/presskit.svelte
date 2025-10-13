<script lang="ts">
        import type {
                StudioInfo,
                MediaItem,
                VideoEmbed,
                PressQuote,
                TeamMember,
                Project,
                AdditionalLink,
                LogoAsset,
                BannerImage
        } from './types';
        import About from './components/About.svelte';
        import MediaGallery from './components/MediaGallery.svelte';
        import VideoEmbed from './components/VideoEmbed.svelte';
        import PressQuotes from './components/PressQuotes.svelte';
        import ContactInfo from './components/ContactInfo.svelte';
        import Team from './components/Team.svelte';
        import Projects from './components/Projects.svelte';
        import LogoIcon from './components/LogoIcon.svelte';
        import AdditionalLinks from './components/AdditionalLinks.svelte';
        import Sidebar from './components/Sidebar.svelte';
        import './styles/global.css';
        import { downloadAssetsAsZip, mediaItemsToZipSources } from './utils/archive';

        export let studio: StudioInfo;
        export let banner: BannerImage | undefined = undefined;
        export let description: string = '';
        export let history: string = '';
        export let projects: Project[] = [];
        export let media: MediaItem[] = [];
        export let mediaZipUrl: string | undefined = undefined;
        export let videos: VideoEmbed[] = [];
        export let logos: LogoAsset[] = [];
        export let logoZipUrl: string | undefined = undefined;
        export let quotes: PressQuote[] = [];
        export let additionalLinks: AdditionalLink[] = [];
        export let team: TeamMember[] = [];
        export let showSidebar: boolean = false;

        let isGeneratingMediaZip = false;

        $: sections = [
                { id: 'factsheet', title: 'Factsheet' },
                description ? { id: 'description', title: 'Description' } : null,
                history ? { id: 'history', title: 'History' } : null,
                projects.length > 0 ? { id: 'projects', title: 'Projects' } : null,
                videos.length > 0 ? { id: 'videos', title: 'Videos' } : null,
                media.length > 0 ? { id: 'images', title: 'Images' } : null,
                logos.length > 0 ? { id: 'logo', title: 'Logo & Icon' } : null,
                quotes.length > 0 ? { id: 'articles', title: 'Selected Articles' } : null,
                additionalLinks.length > 0 ? { id: 'links', title: 'Additional Links' } : null,
                team.length > 0 ? { id: 'team', title: 'Team' } : null,
                studio.contact ? { id: 'contact', title: 'Contact' } : null
        ].filter((s): s is { id: string; title: string } => s !== null);

        async function handleMediaZipDownload() {
                if (isGeneratingMediaZip || media.length === 0) {
                        return;
                }

                isGeneratingMediaZip = true;
                try {
                        await downloadAssetsAsZip(mediaItemsToZipSources(media), {
                                archiveName: `${studio?.name ?? 'studio'} images`,
                                filenamePrefix: 'image'
                        });
                } catch (error) {
                        console.error('Failed to prepare media download', error);
                } finally {
                        isGeneratingMediaZip = false;
                }
        }
</script>

<div class="presskit-container">
        <header class="presskit-header">
                {#if banner}
                        <div class="banner-image">
                                <img src={banner.url} alt={banner.alt || studio.name} />
                        </div>
                {/if}
                <div class="presskit-grid">
                        <h1 class="presskit-title">{studio.name}</h1>
                        <p class="presskit-subtitle">{studio.description}</p>
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
                                {#if studio.founded}
                                        <div class="presskit-info-item">
                                                <div class="presskit-info-label">Founded</div>
                                                <div class="presskit-info-value">{studio.founded}</div>
                                        </div>
                                {/if}

                                {#if studio.basedIn}
                                        <div class="presskit-info-item">
                                                <div class="presskit-info-label">Based In</div>
                                                <div class="presskit-info-value">{studio.basedIn}</div>
                                        </div>
                                {/if}

                                {#if studio.website}
                                        <div class="presskit-info-item">
                                                <div class="presskit-info-label">Website</div>
                                                <div class="presskit-info-value">
                                                        <a href={studio.website} target="_blank" rel="noopener noreferrer" class="presskit-link">
                                                                {studio.website}
                                                        </a>
                                                </div>
                                        </div>
                                {/if}

                                {#if studio.address}
                                        <div class="presskit-info-item">
                                                <div class="presskit-info-label">Address</div>
                                                <div class="presskit-info-value">{studio.address}</div>
                                        </div>
                                {/if}

                                {#if studio.phone}
                                        <div class="presskit-info-item">
                                                <div class="presskit-info-label">Phone</div>
                                                <div class="presskit-info-value">{studio.phone}</div>
                                        </div>
                                {/if}

                                {#if studio.contact?.pressContact}
                                        <div class="presskit-info-item">
                                                <div class="presskit-info-label">Press Contact</div>
                                                <div class="presskit-info-value">
                                                        <a href="mailto:{studio.contact.pressContact}" class="presskit-link">
                                                                {studio.contact.pressContact}
                                                        </a>
                                                </div>
                                        </div>
                                {/if}

                                {#if studio.contact?.twitter || studio.contact?.facebook || studio.contact?.instagram}
                                        <div class="presskit-info-item">
                                                <div class="presskit-info-label">Social</div>
                                                <div class="presskit-info-value social-links">
                                                        {#if studio.contact.twitter}
                                                                <a
                                                                        href="https://twitter.com/{studio.contact.twitter}"
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        class="presskit-link"
                                                                >
                                                                        Twitter
                                                                </a>
                                                        {/if}
                                                        {#if studio.contact.facebook}
                                                                <a
                                                                        href={studio.contact.facebook}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        class="presskit-link"
                                                                >
                                                                        Facebook
                                                                </a>
                                                        {/if}
                                                        {#if studio.contact.instagram}
                                                                <a
                                                                        href={studio.contact.instagram}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        class="presskit-link"
                                                                >
                                                                        Instagram
                                                                </a>
                                                        {/if}
                                                </div>
                                        </div>
                                {/if}
                        </div>
                                </section>

                                {#if description}
                                        <div id="description">
                                                <About title="Description" content={description} />
                                        </div>
                                {/if}
                        </div>

                        {#if history}
                                <div id="history">
                                        <About title="History" content={history} />
                                </div>
                        {/if}

                        {#if projects.length > 0}
                                <div id="projects">
                                        <Projects {projects} />
                                </div>
                        {/if}

                        {#if videos.length > 0}
                                <div id="videos">
                                        <VideoEmbed title="Videos" {videos} />
                                </div>
                        {/if}

                        {#if media.length > 0}
                                <div id="images">
                                        <MediaGallery title="Images" media={media} />
                                        <div class="zip-download-section">
                                                {#if mediaZipUrl}
                                                        <a href={mediaZipUrl} class="zip-download-button" download>
                                                                Download all images as ZIP
                                                        </a>
                                                {:else}
                                                        <button
                                                                type="button"
                                                                class="zip-download-button"
                                                                on:click={handleMediaZipDownload}
                                                                disabled={isGeneratingMediaZip}
                                                        >
                                                                {#if isGeneratingMediaZip}
                                                                        Preparing download...
                                                                {:else}
                                                                        Download all images as ZIP
                                                                {/if}
                                                        </button>
                                                {/if}
                                        </div>
                                </div>
                        {/if}

                        {#if logos.length > 0}
                                <div id="logo">
                                        <LogoIcon assets={logos} zipUrl={logoZipUrl} />
                                </div>
                        {/if}

                        {#if quotes.length > 0}
                                <div id="articles">
                                        <PressQuotes title="Selected Articles" {quotes} />
                                </div>
                        {/if}

                        {#if additionalLinks.length > 0}
                                <div id="links">
                                        <AdditionalLinks links={additionalLinks} />
                                </div>
                        {/if}

                        {#if team.length > 0}
                                <div id="team">
                                        <Team members={team} />
                                </div>
                        {/if}

                        {#if studio.contact}
                                <div id="contact">
                                        <ContactInfo contact={studio.contact} />
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

        .social-links {
                display: flex;
                gap: 12px;
                flex-wrap: wrap;
        }

        .zip-download-section {
                padding: 0 24px 24px;
                text-align: center;
        }

        .zip-download-button {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                padding: 12px 24px;
                background: var(--color-accent);
                color: white;
                text-decoration: none;
                border: none;
                border-radius: 4px;
                font-weight: 600;
                transition: opacity 0.2s;
                cursor: pointer;
        }

        .zip-download-button:hover {
                opacity: 0.9;
        }

        .zip-download-button:disabled {
                opacity: 0.7;
                cursor: not-allowed;
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
