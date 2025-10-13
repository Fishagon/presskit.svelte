<script lang="ts">
	import type { LogoAsset } from '../types';

	export let title: string = 'Logo & Icon';
	export let assets: LogoAsset[] = [];
	export let zipUrl: string | undefined = undefined;
</script>

<section class="presskit-section">
	<h2 class="presskit-section-title">
		{title}
		{#if zipUrl}
			<a href={zipUrl} class="zip-download" download>
				<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
					<path
						d="M8 12l-4-4h2.5V4h3v4H12l-4 4zM2 13h12v2H2v-2z"
					/>
				</svg>
				Download ZIP
			</a>
		{/if}
	</h2>
	<div class="logo-grid">
		{#each assets as asset}
			<div class="logo-item">
				<a href={asset.downloadUrl || asset.url} target="_blank" rel="noopener noreferrer">
					<img src={asset.url} alt={asset.type === 'logo' ? 'Logo' : 'Icon'} class="logo-image" />
				</a>
				<div class="logo-label">{asset.type === 'logo' ? 'Logo' : 'Icon'}</div>
			</div>
		{/each}
	</div>
</section>

<style>
	.zip-download {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		margin-left: 16px;
		font-size: 0.875rem;
		color: var(--color-accent);
		text-decoration: none;
		font-weight: 500;
		vertical-align: middle;
	}

	.zip-download:hover {
		text-decoration: underline;
	}

	.logo-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 24px;
	}

	.logo-item {
		text-align: center;
	}

	.logo-image {
		max-width: 100%;
		height: auto;
		max-height: 150px;
		object-fit: contain;
		border: 1px solid var(--color-border);
		padding: 16px;
		background: white;
	}

	.logo-label {
		margin-top: 8px;
		font-size: 0.875rem;
		color: var(--color-secondary);
		text-transform: capitalize;
	}
</style>
