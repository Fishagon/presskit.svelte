<script>
        import '../lib/styles/global.css';
</script>

<div class="presskit-container">
        <div class="demo-header">
                <h1>Svelte Presskit Component Library</h1>
                <p>A SvelteKit component library for creating presskit() style press pages</p>
                
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
                                        <h3>🎨 Professional Design</h3>
                                        <p>Clean, media-focused layouts inspired by presskit() and presskit.html</p>
                                </div>
                                <div class="feature-box">
                                        <h3>📦 Reusable Components</h3>
                                        <p>Pre-built components for studios and games with prop-based configuration</p>
                                </div>
                                <div class="feature-box">
                                        <h3>🖼️ Media Galleries</h3>
                                        <p>Image galleries with lightbox, video embeds for YouTube, Vimeo, Twitch</p>
                                </div>
                                <div class="feature-box">
                                        <h3>💬 Press Quotes</h3>
                                        <p>Showcase reviews and press coverage with scores and attributions</p>
                                </div>
                                <div class="feature-box">
                                        <h3>📱 Responsive</h3>
                                        <p>Mobile-friendly layouts that work on all devices</p>
                                </div>
                                <div class="feature-box">
                                        <h3>⚡ TypeScript</h3>
                                        <p>Full TypeScript support with type definitions</p>
                                </div>
                        </div>
                </section>

                <section class="presskit-section">
                        <h2 class="presskit-section-title">Installation</h2>
                        <pre class="code-block">npm install svelte-presskit</pre>
                </section>

                <section class="presskit-section">
                        <h2 class="presskit-section-title">Quick Start</h2>
                        <pre class="code-block">{'<script>'}{'\n'}{'  import { GamePresskit } from \'svelte-presskit\';'}{'\n'}{'  import type { GameInfo } from \'svelte-presskit\';'}{'\n'}{'\n'}{'  const game: GameInfo = {'}{'\n'}{'    title: \'My Awesome Game\','}{'\n'}{'    developer: \'Studio Name\','}{'\n'}{'    description: \'<p>Game description here</p>\''}{'\n'}{'  };'}{'\n'}{'</script>'}{'\n'}{'\n'}{'<GamePresskit {game} />'}</pre>
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
</style>
