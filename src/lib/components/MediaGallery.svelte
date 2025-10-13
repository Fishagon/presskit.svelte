<script lang="ts">
	import type { MediaItem } from '../types';

	export let title: string = 'Screenshots';
	export let media: MediaItem[] = [];

	let selectedImage: MediaItem | null = null;

	function openLightbox(item: MediaItem) {
		selectedImage = item;
	}

	function closeLightbox() {
		selectedImage = null;
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			closeLightbox();
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<section class="presskit-section">
	<h2 class="presskit-section-title">{title}</h2>
	<div class="media-grid">
		{#each media as item}
			<button class="media-item" on:click={() => openLightbox(item)} type="button">
				<img src={item.thumbnail || item.url} alt={item.alt || item.caption || 'Media'} />
				{#if item.caption}
					<div class="media-caption">{item.caption}</div>
				{/if}
			</button>
		{/each}
	</div>
</section>

{#if selectedImage}
	<div class="lightbox" on:click={closeLightbox} role="presentation">
		<button class="lightbox-close" on:click={closeLightbox} aria-label="Close">×</button>
		<div class="lightbox-content" on:click|stopPropagation role="presentation">
			<img src={selectedImage.url} alt={selectedImage.alt || selectedImage.caption || 'Media'} />
			{#if selectedImage.caption}
				<div class="lightbox-caption">{selectedImage.caption}</div>
			{/if}
		</div>
	</div>
{/if}

<style>
	.media-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: 16px;
	}

	.media-item {
		background: none;
		border: 1px solid var(--color-border);
		padding: 0;
		cursor: pointer;
		transition: transform 0.2s, box-shadow 0.2s;
		overflow: hidden;
	}

	.media-item:hover {
		transform: translateY(-4px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	}

	.media-item img {
		width: 100%;
		height: 200px;
		object-fit: cover;
		display: block;
	}

	.media-caption {
		padding: 12px;
		font-size: 0.875rem;
		color: var(--color-secondary);
		text-align: left;
	}

	.lightbox {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.9);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
		padding: 20px;
	}

	.lightbox-close {
		position: absolute;
		top: 20px;
		right: 20px;
		background: none;
		border: none;
		color: white;
		font-size: 3rem;
		cursor: pointer;
		padding: 0;
		width: 48px;
		height: 48px;
		line-height: 1;
		z-index: 1001;
	}

	.lightbox-content {
		max-width: 90%;
		max-height: 90%;
	}

	.lightbox-content img {
		max-width: 100%;
		max-height: calc(90vh - 60px);
		display: block;
	}

	.lightbox-caption {
		color: white;
		text-align: center;
		padding: 12px;
		font-size: 1rem;
	}
</style>
