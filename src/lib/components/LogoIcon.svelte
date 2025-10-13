<script lang="ts">
	import type { LogoAsset } from '../types';
	import { downloadAssetsAsZip, logoAssetsToZipSources } from '../utils/archive';

	export let title: string = 'Logo & Icon';
	export let assets: LogoAsset[] = [];
	export let zipUrl: string | undefined = undefined;

	let isGeneratingZip = false;

	async function handleZipDownload() {
		if (isGeneratingZip || assets.length === 0) {
			return;
		}

		isGeneratingZip = true;
		try {
			await downloadAssetsAsZip(logoAssetsToZipSources(assets), {
				archiveName: `${title} assets`,
				filenamePrefix: 'asset'
			});
		} catch (error) {
			console.error('Failed to prepare logo download', error);
		} finally {
			isGeneratingZip = false;
		}
	}
</script>

<section class="presskit-section">
	<h2 class="presskit-section-title">
		{title}
		{#if zipUrl}
			<a href={zipUrl} class="zip-download" download>
				<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
					<path d="M8 12l-4-4h2.5V4h3v4H12l-4 4zM2 13h12v2H2v-2z" />
				</svg>
				Download ZIP
			</a>
		{:else if assets.length > 0}
			<button
				type="button"
				class="zip-download"
				on:click={handleZipDownload}
				disabled={isGeneratingZip}
			>
				<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
					<path d="M8 12l-4-4h2.5V4h3v4H12l-4 4zM2 13h12v2H2v-2z" />
				</svg>
				{#if isGeneratingZip}
					Preparing...
				{:else}
					Download ZIP
				{/if}
			</button>
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
		background: none;
		border: none;
		cursor: pointer;
		padding: 0;
	}

	.zip-download:hover {
		text-decoration: underline;
	}

	.zip-download:disabled {
		color: var(--color-secondary);
		cursor: not-allowed;
		text-decoration: none;
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
