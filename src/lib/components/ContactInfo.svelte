<script lang="ts">
	import type { ContactInfo as ContactInfoType } from '../types';

	export let title: string = 'Contact';
	export let contact: ContactInfoType;
</script>

<section class="presskit-section">
	<h2 class="presskit-section-title">{title}</h2>
	<div class="contact-grid">
		{#if contact.email}
			<div class="contact-item">
				<div class="presskit-info-label">Email</div>
				<div class="presskit-info-value">
					<a href="mailto:{contact.email}" class="presskit-link">{contact.email}</a>
				</div>
			</div>
		{/if}

		{#if contact.phone}
			<div class="contact-item">
				<div class="presskit-info-label">Phone</div>
				<div class="presskit-info-value">{contact.phone}</div>
			</div>
		{/if}

		{#if contact.twitter}
			<div class="contact-item">
				<div class="presskit-info-label">Twitter</div>
				<div class="presskit-info-value">
					<a
						href="https://twitter.com/{contact.twitter}"
						target="_blank"
						rel="noopener noreferrer"
						class="presskit-link"
					>
						@{contact.twitter}
					</a>
				</div>
			</div>
		{/if}

		{#if contact.discord}
			<div class="contact-item">
				<div class="presskit-info-label">Discord</div>
				<div class="presskit-info-value">
					<a
						href={contact.discord}
						target="_blank"
						rel="noopener noreferrer"
						class="presskit-link"
					>
						Join our Discord
					</a>
				</div>
			</div>
		{/if}

		{#if contact.pressContact}
			<div class="contact-item">
				<div class="presskit-info-label">Press Contact</div>
				<div class="presskit-info-value">
					<a href="mailto:{contact.pressContact}" class="presskit-link">{contact.pressContact}</a>
				</div>
			</div>
		{/if}
	</div>
</section>

<style>
	.contact-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 24px;
	}

	.contact-item {
		padding: 16px;
		background: #F8F9FA;
		border-left: 3px solid var(--color-accent);
	}
</style>
