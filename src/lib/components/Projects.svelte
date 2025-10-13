<script lang="ts">
	import type { Project } from '../types';

	export let title: string = 'Projects';
	export let projects: Project[] = [];
</script>

<section class="presskit-section">
	<h2 class="presskit-section-title">{title}</h2>
	<ul class="projects-list">
		{#each projects as project}
			<li class="project-item">
				<a href={project.url} class="project-link">
					{project.title}
				</a>
				{#if project.description}
					<p class="project-description">{project.description}</p>
				{/if}
			</li>
		{/each}
	</ul>
</section>

<style>
	.projects-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.project-item {
		padding: 12px 0;
		border-bottom: 1px solid var(--color-border);
	}

	.project-item:last-child {
		border-bottom: none;
	}

	.project-link {
		color: var(--color-accent);
		text-decoration: none;
		font-size: 1.125rem;
		font-weight: 600;
	}

	.project-link:hover {
		text-decoration: underline;
	}

	.project-description {
		margin: 8px 0 0 0;
		color: var(--color-secondary);
		font-size: 0.875rem;
	}
</style>
