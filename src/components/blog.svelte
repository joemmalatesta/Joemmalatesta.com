<script>
	import BaseHead from "../components/BaseHead.astro";
	import Footer from "../components/Footer.astro";
	import BlogCard from "../components/blogCard.svelte";
	import SectionHeader from "./SectionHeader.svelte";
	import { crossfade, fade } from "svelte/transition";
	export let postTypes;
	export let posts;
	let active = 0;
	export let quotes;
	function switchActive() {
		if (active == 0) {
			active = 1;
		} else active = 0;
	}
</script>

<!-- <head>
	<BaseHead
		title="Bloggington"
		description="A list of Joe Malatesta's blog posts about tech, coding, and self improvement."
	/>
</head> -->
<main>
	<SectionHeader
		title={"Blog"}
		subtitle={"A place for my thoughts about things"}
	/>
	<div
		class=" flex justify-center text-center items-center"
		transition:crossfade={{ duration: 200 }}
	>
		<button
			on:click={switchActive}
			class="p-1 py-2 bg-neutral-800 text-white rounded-lg"
		>
			<div class="flex">
				<p
					class="{active == 0
						? 'bg-rose-400'
						: ''} mx-2 p-1 transition-all ease-in-out rounded-md hover:scale-105 active:scale-95"
				>
					{postTypes[0]}
				</p>
				<p
					class="{active == 1
						? 'bg-rose-400'
						: ''} mx-2 p-1 transition-all ease-in-out rounded-md hover:scale-105 active:scale-95"
				>
					{postTypes[1]}
				</p>
			</div>
		</button>
	</div>
	<div class="my-4 flex flex-col justify-center lg:flex-row">
		<div class="mx-3 lg:mx-6 my-3 lg:w-1/2">
			<div class="flex items-end">
				<h3
					class="text-2xl font-bold md:text-4xl text-rose-400 bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-rose-500 py-1"
				>
					{postTypes[active]}
				</h3>
				<a
					href="/{active ? 'improvement' : 'programming'}-blogs"
					class="text-rose-500 underline-offset-2 underline hover:text-rose-600 mx-2"
					>See all</a
				>
			</div>
			<div
				class="flex flex-col items-start justify-center"
				transition:fade|local
			>
				{#each posts[active].slice(0, 4) as post}
					<BlogCard
						client:load
						title={post.frontmatter.title}
						description={post.frontmatter.cardDescription}
						date={post.frontmatter.pubDate}
						url={post.url}
						image={post.frontmatter.heroImage}
					/>
				{/each}
			</div>
		</div>
		<!-- Quote / other portion -->
		<div class="lg:w-2/5 flex items-center mx-5">
			<h3
				class="md:text-4xl bg-gradient-to-br from-rose-200 via-rose-300 to-rose-400 p-6 rounded-tr-full text-2xl rounded-bl-full"
			>
				{quotes[active]}
			</h3>
		</div>
	</div>
</main>
