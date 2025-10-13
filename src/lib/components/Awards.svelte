<script lang="ts">
	import type { Award } from '../types';

	export let title: string = 'Awards & Recognition';
	export let awards: Award[] = [];
</script>

<section class="presskit-section">
	<h2 class="presskit-section-title">{title}</h2>
	<div class="awards-list">
		{#each awards as award}
			<div class="award-item">
				<div class="award-title">
					{#if award.url}
						<a href={award.url} target="_blank" rel="noopener noreferrer" class="presskit-link">
							{award.title}
						</a>
					{:else}
						{award.title}
					{/if}
				</div>
				<div class="award-description">{award.description}</div>
				{#if award.date}
					<div class="award-date">{award.date}</div>
				{/if}
			</div>
		{/each}
	</div>
</section>

<style>
	.awards-list {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.award-item {
		padding: 16px;
		background: #F8F9FA;
		border-left: 4px solid var(--color-accent);
	}

	.award-title {
		font-size: 1.125rem;
		font-weight: 600;
		color: var(--color-primary);
		margin-bottom: 8px;
	}

	.award-description {
		color: var(--color-text);
		line-height: 1.6;
		margin-bottom: 8px;
	}

	.award-date {
		font-size: 0.875rem;
		color: var(--color-secondary);
		font-style: italic;
	}
</style>
