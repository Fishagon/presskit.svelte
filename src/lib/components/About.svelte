<script lang="ts">
	export let title: string = 'About';
	export let content: string;
</script>

<section class="presskit-section">
	<h2 class="presskit-section-title">{title}</h2>
	<div class="about-content">
		{@html content}
	</div>
</section>

<style>
	.about-content {
		max-width: 800px;
		line-height: 1.8;
		font-size: 1.125rem;
	}

	.about-content :global(p) {
		margin-bottom: 1rem;
	}

	.about-content :global(ul),
	.about-content :global(ol) {
		margin-left: 1.5rem;
		margin-bottom: 1rem;
	}
</style>
