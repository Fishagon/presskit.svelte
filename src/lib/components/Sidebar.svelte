<script lang="ts">
	import { onMount } from 'svelte';

	export let sections: { id: string; title: string }[] = [];

	let activeSection = '';

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						activeSection = entry.target.id;
					}
				});
			},
			{ threshold: 0.5 }
		);

		sections.forEach(({ id }) => {
			const element = document.getElementById(id);
			if (element) observer.observe(element);
		});

		return () => observer.disconnect();
	});

	function scrollToSection(id: string) {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}
</script>

<aside class="sidebar">
	<nav class="sidebar-nav">
		<h3 class="sidebar-title">Contents</h3>
		<ul class="sidebar-links">
			{#each sections as section}
				<li>
					<button
						class="sidebar-link"
						class:active={activeSection === section.id}
						on:click={() => scrollToSection(section.id)}
					>
						{section.title}
					</button>
				</li>
			{/each}
		</ul>
	</nav>
</aside>

<style>
	.sidebar {
		position: sticky;
		top: 24px;
		height: fit-content;
		max-height: calc(100vh - 48px);
		overflow-y: auto;
		background: #F8F9FA;
		border: 1px solid var(--color-border);
		border-radius: 4px;
		padding: 20px;
	}

	.sidebar-title {
		font-size: 0.875rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.5px;
		color: var(--color-secondary);
		margin: 0 0 16px 0;
	}

	.sidebar-links {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.sidebar-links li {
		margin-bottom: 4px;
	}

	.sidebar-link {
		display: block;
		width: 100%;
		text-align: left;
		padding: 8px 12px;
		background: none;
		border: none;
		color: var(--color-text);
		text-decoration: none;
		font-size: 0.875rem;
		cursor: pointer;
		border-left: 2px solid transparent;
		transition: all 0.2s;
	}

	.sidebar-link:hover {
		background: white;
		border-left-color: var(--color-border);
	}

	.sidebar-link.active {
		color: var(--color-accent);
		border-left-color: var(--color-accent);
		background: white;
		font-weight: 500;
	}

	@media (max-width: 768px) {
		.sidebar {
			display: none;
		}
	}
</style>
