<script lang="ts">
	import type { TeamMember } from '../types';

	export let title: string = 'Team & Collaborators';
	export let members: TeamMember[] = [];
</script>

<section class="presskit-section">
	<h2 class="presskit-section-title">{title}</h2>
	<div class="team-grid">
		{#each members as member}
			<div class="team-member">
				<div class="member-name">
					{#if member.website}
						<a href={member.website} target="_blank" rel="noopener noreferrer" class="presskit-link">
							{member.name}
						</a>
					{:else}
						{member.name}
					{/if}
				</div>
				<div class="member-role">{member.role}</div>
				{#if member.type}
					<div class="member-type">{member.type}</div>
				{/if}
			</div>
		{/each}
	</div>
</section>

<style>
	.team-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		gap: 16px;
	}

	.team-member {
		padding: 16px;
		border: 1px solid var(--color-border);
		background: #F8F9FA;
	}

	.member-name {
		font-weight: 600;
		font-size: 1.125rem;
		color: var(--color-primary);
		margin-bottom: 4px;
	}

	.member-role {
		color: var(--color-secondary);
		font-size: 0.875rem;
		margin-bottom: 4px;
	}

	.member-type {
		color: var(--color-accent);
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}
</style>
