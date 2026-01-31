<script lang="ts">
        import type {
                GameInfo,
                MediaItem,
                VideoEmbed as VideoEmbedInfo,
                PressQuote,
                Feature,
                Credit,
                Award,
                BannerImage,
        } from "./types";
        import About from "./components/About.svelte";
        import MediaGallery from "./components/MediaGallery.svelte";
        import VideoEmbed from "./components/VideoEmbed.svelte";
        import PressQuotes from "./components/PressQuotes.svelte";
        import ContactInfo from "./components/ContactInfo.svelte";
        import Credits from "./components/Credits.svelte";
        import Awards from "./components/Awards.svelte";
        import Sidebar from "./components/Sidebar.svelte";
        import "./styles/global.css";
        import {
                downloadAssetsAsZip,
                mediaItemsToZipSources,
                videoEmbedsToZipSources,
        } from "./utils/archive";

        export let game: GameInfo;
        export let banner: BannerImage | undefined = undefined;
        export let features: Feature[] = [];
        export let description: string | undefined = undefined;
        export let media: MediaItem[] = [];
        export let mediaZipUrl: string | undefined = undefined;
        export let videos: VideoEmbedInfo[] = [];
        export let videoZipUrl: string | undefined = undefined;
        export let quotes: PressQuote[] = [];
        export let credits: Credit[] = [];
        export let awards: Award[] = [];
        export let showSidebar: boolean = false;

        let isGeneratingMediaZip = false;
        let isGeneratingVideoZip = false;
        let downloadableVideos: VideoEmbedInfo[] = [];

        $: downloadableVideos = videos.filter(
                (video) => video.platform === "local" || Boolean(video.downloadUrl),
        );

        $: gameLogoAlt =
                game.logoAlt ??
                game.subtitle ??
                game.developer ??
                `${game.title} logo`;

        $: headerMinHeight = banner?.height ?? banner?.minHeight;
        $: headerMaxHeight = banner?.maxHeight;

        $: sections = [
                { id: "factsheet", title: "Factsheet" },
                { id: "description", title: "Description" },
                features.length > 0
                        ? { id: "features", title: "Features" }
                        : null,
                videos.length > 0
                        ? { id: "trailers", title: "Trailers & Gameplay" }
                        : null,
                media.length > 0
                        ? { id: "screenshots", title: "Screenshots" }
                        : null,
                quotes.length > 0
                        ? { id: "reviews", title: "Reviews & Press" }
                        : null,
                awards.length > 0 ? { id: "awards", title: "Awards" } : null,
                credits.length > 0 ? { id: "credits", title: "Credits" } : null,
        ].filter((s): s is { id: string; title: string } => s !== null);

        async function handleMediaZipDownload() {
                if (isGeneratingMediaZip || media.length === 0) {
                        return;
                }

                isGeneratingMediaZip = true;
                try {
                        await downloadAssetsAsZip(
                                mediaItemsToZipSources(media),
                                {
                                        archiveName: `${game?.title ?? "game"} screenshots`,
                                        filenamePrefix: "screenshot",
                                },
                        );
                } catch (error) {
                        console.error(
                                "Failed to prepare media download",
                                error,
                        );
                } finally {
                        isGeneratingMediaZip = false;
                }
        }

        async function handleVideoZipDownload() {
                if (isGeneratingVideoZip || downloadableVideos.length === 0) {
                        return;
                }

                isGeneratingVideoZip = true;
                try {
                        await downloadAssetsAsZip(
                                videoEmbedsToZipSources(downloadableVideos),
                                {
                                        archiveName: `${game?.title ?? "game"} videos`,
                                        filenamePrefix: "video",
                                },
                        );
                } catch (error) {
                        console.error(
                                "Failed to prepare video download",
                                error,
                        );
                } finally {
                        isGeneratingVideoZip = false;
                }
        }
</script>

<div class="presskit-container">
        <header
                class="presskit-header"
                class:has-banner={!!banner}
                style:min-height={headerMinHeight}
                style:max-height={headerMaxHeight}
        >
                {#if banner}
                        <div
                                class="presskit-banner"
                                style:--presskit-banner-object-fit={banner?.objectFit ?? "cover"}
                                style:--presskit-banner-object-position={banner?.objectPosition ?? "center"}
                        >
                                <img
                                        src={banner.url}
                                        alt={banner.alt || game.title}
                                />
                        </div>
                {/if}
                <div class="presskit-grid">
                        {#if game.logo}
                                <h1 class="presskit-title">
                                        <img
                                                class="presskit-logo"
                                                src={game.logo}
                                                alt={gameLogoAlt}
                                        />
                                </h1>
                        {:else}
                                <h1 class="presskit-title">{game.title}</h1>
                        {/if}
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
                                <section
                                        class="presskit-section"
                                        id="factsheet"
                                >
                                        <h2 class="presskit-section-title">
                                                Factsheet
                                        </h2>
                                        <div class="presskit-info-grid">
                                                <div class="presskit-info-item">
                                                        <div
                                                                class="presskit-info-label"
                                                        >
                                                                Developer
                                                        </div>
                                                        <div
                                                                class="presskit-info-value"
                                                        >
                                                                {game.developer}
                                                        </div>
                                                </div>

                                                {#if game.releaseDate}
                                                        <div
                                                                class="presskit-info-item"
                                                        >
                                                                <div
                                                                        class="presskit-info-label"
                                                                >
                                                                        Release
                                                                        Date
                                                                </div>
                                                                <div
                                                                        class="presskit-info-value"
                                                                >
                                                                        {game.releaseDate}
                                                                </div>
                                                        </div>
                                                {/if}

                                                {#if game.platforms && game.platforms.length > 0}
                                                        <div
                                                                class="presskit-info-item"
                                                        >
                                                                <div
                                                                        class="presskit-info-label"
                                                                >
                                                                        Platforms
                                                                </div>
                                                                <div
                                                                        class="presskit-info-value"
                                                                >
                                                                        {game.platforms.join(
                                                                                ", ",
                                                                        )}
                                                                </div>
                                                        </div>
                                                {/if}

                                                {#if game.price}
                                                        <div
                                                                class="presskit-info-item"
                                                        >
                                                                <div
                                                                        class="presskit-info-label"
                                                                >
                                                                        Price
                                                                </div>
                                                                <div
                                                                        class="presskit-info-value"
                                                                >
                                                                        {game.price}
                                                                </div>
                                                        </div>
                                                {/if}

                                                {#if game.website}
                                                        <div
                                                                class="presskit-info-item"
                                                        >
                                                                <div
                                                                        class="presskit-info-label"
                                                                >
                                                                        Website
                                                                </div>
                                                                <div
                                                                        class="presskit-info-value"
                                                                >
                                                                        <a
                                                                                href={game.website}
                                                                                target="_blank"
                                                                                rel="noopener noreferrer"
                                                                                class="presskit-link"
                                                                        >
                                                                                {game.website}
                                                                        </a>
                                                                </div>
                                                        </div>
                                                {/if}
                                        </div>
                                </section>

                                <div id="description">
                                        <About
                                                title="About {game.title}"
                                                content={game.description}
                                        />
                                </div>
                        </div>

                        {#if features.length > 0}
                                <section class="presskit-section" id="features">
                                        <h2 class="presskit-section-title">
                                                Features
                                        </h2>
                                        <div class="features-grid">
                                                {#each features as feature}
                                                        <div
                                                                class="feature-item"
                                                        >
                                                                <h3
                                                                        class="feature-title"
                                                                >
                                                                        {feature.title}
                                                                </h3>
                                                                <p
                                                                        class="feature-description"
                                                                >
                                                                        {feature.description}
                                                                </p>
                                                        </div>
                                                {/each}
                                        </div>
                                </section>
                        {/if}

                        {#if description}
                                <div class="presskit-section" id="description">
                                        <About
                                                title={features.length > 0
                                                        ? "Feature Description"
                                                        : "Description"}
                                                content={description}
                                        />
                                </div>
                        {/if}

                        {#if videos.length > 0}
                                <div id="trailers">
                                        <VideoEmbed
                                                title="Trailers & Gameplay"
                                                {videos}
                                        />
                                        {#if downloadableVideos.length > 0}
                                                <div class="zip-download-section">
                                                        {#if videoZipUrl}
                                                                <a
                                                                        href={videoZipUrl}
                                                                        class="zip-download-button"
                                                                        download
                                                                >
                                                                        Download
                                                                        all
                                                                        videos
                                                                        as ZIP
                                                                </a>
                                                        {:else}
                                                                <button
                                                                        type="button"
                                                                        class="zip-download-button"
                                                                        on:click={handleVideoZipDownload}
                                                                        disabled={isGeneratingVideoZip}
                                                                >
                                                                        {#if isGeneratingVideoZip}
                                                                                Preparing
                                                                                download...
                                                                        {:else}
                                                                                Download
                                                                                all
                                                                                videos
                                                                                as ZIP
                                                                        {/if}
                                                                </button>
                                                        {/if}
                                                </div>
                                        {/if}
                                </div>
                        {/if}

                        {#if media.length > 0}
                                <div id="screenshots">
                                        <MediaGallery
                                                title="Screenshots"
                                                {media}
                                        />
                                        <div class="zip-download-section">
                                                {#if mediaZipUrl}
                                                        <a
                                                                href={mediaZipUrl}
                                                                class="zip-download-button"
                                                                download
                                                        >
                                                                Download all
                                                                images as ZIP
                                                        </a>
                                                {:else}
                                                        <button
                                                                type="button"
                                                                class="zip-download-button"
                                                                on:click={handleMediaZipDownload}
                                                                disabled={isGeneratingMediaZip}
                                                        >
                                                                {#if isGeneratingMediaZip}
                                                                        Preparing
                                                                        download...
                                                                {:else}
                                                                        Download
                                                                        all
                                                                        images
                                                                        as ZIP
                                                                {/if}
                                                        </button>
                                                {/if}
                                        </div>
                                </div>
                        {/if}

                        {#if quotes.length > 0}
                                <div id="reviews">
                                        <PressQuotes
                                                title="Reviews & Press"
                                                {quotes}
                                        />
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

        .presskit-logo {
                max-width: 100%;
                height: auto;
                display: block;
                margin-bottom: 16px;
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

        .features-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                gap: 24px;
        }

        .feature-item {
                padding: 20px;
                border: 1px solid var(--color-border);
                background: #f8f9fa;
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
