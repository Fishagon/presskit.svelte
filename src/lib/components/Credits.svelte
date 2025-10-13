<script lang="ts">
	import type { Credit } from '../types';

	export let title: string = 'Credits';
	export let credits: Credit[] = [];
</script>

<section class="presskit-section">
	<h2 class="presskit-section-title">{title}</h2>
	<div class="credits-grid">
		{#each credits as credit}
			<div class="credit-item">
				<div class="credit-name">
					{#if credit.website}
						<a href={credit.website} target="_blank" rel="noopener noreferrer" class="presskit-link">
							{credit.name}
						</a>
					{:else}
						{credit.name}
					{/if}
				</div>
				<div class="credit-role">{credit.role}</div>
			</div>
		{/each}
	</div>
</section>

<style>
	.credits-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 16px;
	}

	.credit-item {
		padding: 12px;
		background: #F8F9FA;
		border-left: 2px solid var(--color-accent);
	}

	.credit-name {
		font-weight: 600;
		color: var(--color-primary);
		margin-bottom: 4px;
	}

	.credit-role {
		font-size: 0.875rem;
		color: var(--color-secondary);
	}
</style>
