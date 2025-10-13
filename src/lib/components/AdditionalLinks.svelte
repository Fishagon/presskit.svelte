<script lang="ts">
	import type { AdditionalLink } from '../types';

	export let title: string = 'Additional Links';
	export let links: AdditionalLink[] = [];
</script>

<section class="presskit-section">
	<h2 class="presskit-section-title">{title}</h2>
	<div class="links-list">
		{#each links as link}
			<div class="link-item">
				<a href={link.url} target="_blank" rel="noopener noreferrer" class="link-title">
					{link.title}
				</a>
				{#if link.description}
					<p class="link-description">{link.description}</p>
				{/if}
			</div>
		{/each}
	</div>
</section>

<style>
	.links-list {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.link-item {
		padding: 16px;
		background: #F8F9FA;
		border-left: 3px solid var(--color-accent);
	}

	.link-title {
		color: var(--color-accent);
		text-decoration: none;
		font-size: 1.125rem;
		font-weight: 600;
		display: block;
		margin-bottom: 4px;
	}

	.link-title:hover {
		text-decoration: underline;
	}

	.link-description {
		margin: 0;
		color: var(--color-secondary);
		font-size: 0.875rem;
		line-height: 1.5;
	}
</style>
