<script>
        import '../lib/styles/global.css';

        const basicGameExample = `<script>
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
<\/script>

<GamePresskit {game} {media} />`;
</script>

<div class="presskit-container">
        <div class="demo-header">
                <h1>presskit.svelte</h1>
                <p>A comprehensive SvelteKit component library for creating professional presskit() style press pages.</p>
                
                <nav class="demo-nav">
                        <a href="/studio" class="nav-link">Studio Demo</a>
                        <a href="/game" class="nav-link">Game Demo</a>
                </nav>
        </div>

        <div class="presskit-grid" style="padding: 24px;">
                <section class="presskit-section">
                        <h2 class="presskit-section-title">Features</h2>
                        <div class="features-list">
                                <div class="feature-box">
                                        <h3>Professional Design</h3>
                                        <p>Clean, media-focused layouts inspired by presskit() and presskit.html.</p>
                                </div>
                                <div class="feature-box">
                                        <h3>Reusable Components</h3>
                                        <p>Pre-built components for studios and games with prop-based configuration.</p>
                                </div>
                                <div class="feature-box">
                                        <h3>Media Galleries</h3>
                                        <p>Image galleries with lightbox support and video embeds for YouTube, Vimeo, and Twitch.</p>
                                </div>
                                <div class="feature-box">
                                        <h3>Press Quotes</h3>
                                        <p>Showcase reviews and press coverage with scores and attributions.</p>
                                </div>
                                <div class="feature-box">
                                        <h3>Team &amp; Credits</h3>
                                        <p>Display team members, collaborators, and game credits.</p>
                                </div>
                                <div class="feature-box">
                                        <h3>Awards Section</h3>
                                        <p>Highlight achievements, nominations, and recognition.</p>
                                </div>
                                <div class="feature-box">
                                        <h3>Additional Links</h3>
                                        <p>Curate important resources, storefronts, and press assets.</p>
                                </div>
                                <div class="feature-box">
                                        <h3>Responsive Layout</h3>
                                        <p>Mobile-friendly design with adaptive two-column layouts.</p>
                                </div>
                                <div class="feature-box">
                                        <h3>Optional Sidebar Navigation</h3>
                                        <p>Sticky navigation that highlights the active section as visitors scroll.</p>
                                </div>
                                <div class="feature-box">
                                        <h3>TypeScript Support</h3>
                                        <p>Full TypeScript coverage with comprehensive type definitions.</p>
                                </div>
                        </div>
                </section>

                <section class="presskit-section">
                        <h2 class="presskit-section-title">Installation</h2>
                        <pre class="code-block">npm install presskit.svelte</pre>
                </section>

                <section class="presskit-section">
                        <h2 class="presskit-section-title">Quick Start</h2>
                        <pre class="code-block">{basicGameExample}</pre>
                </section>

                <section class="presskit-section">
                        <h2 class="presskit-section-title">Component Highlights</h2>
                        <div class="component-grid">
                                <div class="component-card">
                                        <h3>GamePresskit</h3>
                                        <p>Craft complete game press pages with banners, features, media, quotes, awards, and credits.</p>
                                </div>
                                <div class="component-card">
                                        <h3>StudioPresskit</h3>
                                        <p>Build studio-level press destinations with team details, project showcases, and brand assets.</p>
                                </div>
                        </div>
                </section>

                <section class="presskit-section">
                        <h2 class="presskit-section-title">Styling</h2>
                        <p>Customize the presentation with CSS custom properties such as <code>--color-primary</code>, <code>--color-accent</code>, and <code>--color-background</code> defined in <code>src/lib/styles/global.css</code>.</p>
                </section>
        </div>
</div>

<style>
        .demo-header {
                background: linear-gradient(135deg, #2C3E50 0%, #34495E 100%);
                color: white;
                padding: 64px 24px;
                text-align: center;
        }

        .demo-header h1 {
                font-size: 3rem;
                margin: 0 0 16px 0;
                font-weight: 700;
        }

        .demo-header p {
                font-size: 1.25rem;
                opacity: 0.9;
                margin: 0 0 32px 0;
        }

        .demo-nav {
                display: flex;
                gap: 16px;
                justify-content: center;
        }

        .nav-link {
                background: var(--color-accent);
                color: white;
                padding: 12px 24px;
                text-decoration: none;
                border-radius: 4px;
                font-weight: 600;
                transition: opacity 0.2s;
        }

        .nav-link:hover {
                opacity: 0.9;
        }

        .features-list {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: 24px;
        }

        .feature-box {
                background: #F8F9FA;
                padding: 24px;
                border-left: 3px solid var(--color-accent);
        }

        .feature-box h3 {
                color: var(--color-primary);
                margin: 0 0 8px 0;
                font-size: 1.25rem;
        }

        .feature-box p {
                color: var(--color-text);
                margin: 0;
                line-height: 1.6;
        }

        .code-block {
                background: #2C3E50;
                color: #ECF0F1;
                padding: 20px;
                border-radius: 4px;
                overflow-x: auto;
                font-family: 'Courier New', monospace;
                font-size: 0.875rem;
                line-height: 1.6;
        }

        .component-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: 24px;
        }

        .component-card {
                background: #FFFFFF;
                border: 1px solid var(--color-border);
                padding: 24px;
                border-radius: 4px;
        }

        .component-card h3 {
                margin: 0 0 8px 0;
                color: var(--color-primary);
        }

        .component-card p {
                margin: 0;
                color: var(--color-text);
                line-height: 1.6;
        }

        @media (max-width: 600px) {
                .demo-header h1 {
                        font-size: 2.25rem;
                }

                .demo-header p {
                        font-size: 1.1rem;
                }

                .demo-nav {
                        flex-direction: column;
                }
        }
</style>
