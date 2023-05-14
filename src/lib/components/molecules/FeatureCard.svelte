<script lang="ts">
	import Card from '$lib/components/atoms/Card.svelte';
	import Tag from '$lib/components/atoms/Tag.svelte';
	import type { TagType } from '$lib/utils/types';
	import Image from '../atoms/Image.svelte';

	export let name: string;
	export let description: string;
	export let image: string;
	export let tags: TagType[] | undefined;
</script>

<Card additionalClass="feature-card">
	<div class="image" slot="image">
		<Image src={image} alt="Picture describing the {name} feature" />
	</div>
	<div class="content" slot="content">
		<div class="title">
			<span>{name}</span>
		</div>
		<p>{description}</p>
	</div>
	<div class="footer" slot="footer">
		{#if tags && tags.length > 0}
			<div class="tags">
				{#each tags as tag}
					<Tag color={tag.color}>{tag.label}</Tag>
				{/each}
			</div>
		{/if}
	</div>
</Card>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		gap: 10px;
		align-items: flex-start;
	}

	.title {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;

		font-size: 1.2rem;
		font-family: var(--font--title);
		font-weight: 700;
	}

	.tags {
		display: flex;
		align-items: center;
		gap: 5px;
		flex-wrap: wrap;
	}

	.footer {
		margin-top: 20px;
	}

	:global(.feature-card .image img) {
		object-fit: cover;
	}
</style>
