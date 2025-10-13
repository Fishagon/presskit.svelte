<script lang="ts">
	import type { MediaItem } from '../types';

	export let title: string = 'Screenshots';
	export let media: MediaItem[] = [];

	let selectedMedia: MediaItem | null = null;

	function openLightbox(item: MediaItem) {
		selectedMedia = item;
	}

	function closeLightbox() {
		selectedMedia = null;
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			closeLightbox();
		}
	}

	function isVideo(item: MediaItem): boolean {
		if (item.type) {
			return item.type === 'video';
		}
		const [, extension = ''] = /\.([a-z0-9]+)$/i.exec(item.url.split(/[?#]/)[0]) || [];
		return ['mp4', 'webm', 'ogg', 'mov', 'm4v'].includes(extension.toLowerCase());
	}

	function getThumbnail(item: MediaItem): string {
		return item.thumbnail || item.poster || item.url;
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<section class="presskit-section">
	<h2 class="presskit-section-title">{title}</h2>
	<div class="media-grid">
		{#each media as item}
			<button
				class="media-item"
				on:click={() => openLightbox(item)}
				type="button"
				aria-label={item.alt || item.caption || (isVideo(item) ? 'Video preview' : 'Image preview')}
			>
				{#if isVideo(item)}
					<div class="media-video">
						<video
							src={item.url}
							poster={getThumbnail(item)}
							muted
							playsinline
							preload="metadata"
						></video>
						<span class="media-badge">Video</span>
					</div>
				{:else}
					<img src={getThumbnail(item)} alt={item.alt || item.caption || 'Media'} />
				{/if}
				{#if item.caption}
					<div class="media-caption">{item.caption}</div>
				{/if}
			</button>
		{/each}
	</div>
</section>

{#if selectedMedia}
	<div class="lightbox" on:click={closeLightbox} role="presentation">
		<button class="lightbox-close" on:click={closeLightbox} aria-label="Close">×</button>
		<div class="lightbox-content" on:click|stopPropagation role="presentation">
			{#if isVideo(selectedMedia)}
				<video
					src={selectedMedia.url}
					controls
					playsinline
					poster={selectedMedia.poster || selectedMedia.thumbnail}
				></video>
			{:else}
				<img src={selectedMedia.url} alt={selectedMedia.alt || selectedMedia.caption || 'Media'} />
			{/if}
			{#if selectedMedia.caption}
				<div class="lightbox-caption">{selectedMedia.caption}</div>
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

	.media-video {
		position: relative;
		width: 100%;
		height: 200px;
		overflow: hidden;
		background: black;
	}

	.media-video video {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.media-badge {
		position: absolute;
		top: 12px;
		left: 12px;
		padding: 4px 8px;
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: white;
		background: rgba(0, 0, 0, 0.7);
		border-radius: 999px;
		pointer-events: none;
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

	.lightbox-content img,
	.lightbox-content video {
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
