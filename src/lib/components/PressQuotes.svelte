<script lang="ts">
	import type { PressQuote } from '../types';

	export let title: string = 'Press & Reviews';
	export let quotes: PressQuote[] = [];
</script>

<section class="presskit-section">
	<h2 class="presskit-section-title">{title}</h2>
	<div class="quotes-grid">
		{#each quotes as quote}
			<div class="quote-card">
				{#if quote.score}
					<div class="quote-score">{quote.score}</div>
				{/if}
				<blockquote class="quote-text">"{quote.quote}"</blockquote>
				<div class="quote-attribution">
					<div class="quote-author">{quote.author}</div>
					<div class="quote-source">
						{#if quote.url}
							<a href={quote.url} target="_blank" rel="noopener noreferrer" class="presskit-link">
								{quote.source}
							</a>
						{:else}
							{quote.source}
						{/if}
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	.quotes-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 24px;
	}

	.quote-card {
		border: 1px solid var(--color-border);
		padding: 24px;
		background: #F8F9FA;
		position: relative;
	}

	.quote-score {
		position: absolute;
		top: 16px;
		right: 16px;
		background: var(--color-accent);
		color: white;
		padding: 8px 16px;
		border-radius: 4px;
		font-weight: 700;
		font-size: 1.125rem;
	}

	.quote-text {
		font-size: 1.125rem;
		line-height: 1.6;
		font-style: italic;
		margin: 0 0 16px 0;
		color: var(--color-text);
	}

	.quote-attribution {
		border-top: 1px solid var(--color-border);
		padding-top: 12px;
	}

	.quote-author {
		font-weight: 600;
		color: var(--color-secondary);
	}

	.quote-source {
		font-size: 0.875rem;
		color: var(--color-secondary);
		margin-top: 4px;
	}
</style>
