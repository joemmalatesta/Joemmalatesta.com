<script>
	import BaseHead from "../components/BaseHead.astro";
	import Footer from "../components/Footer.astro";
	import BlogCard from "../components/blogCard.svelte";
	import SectionHeader from "./SectionHeader.svelte";
	import { crossfade, fade } from "svelte/transition";
	import BlogCard2 from "./blogCard2.svelte";
	export let postTypes;
	export let posts;
	let active = 0;
	export let quotes;
</script>

<main>
	<SectionHeader
		title={"Blog"}
		subtitle={"A place for my thoughts about things"}
	/>

	<div class="flex justify-around items-center">
		{#each posts[active].slice(0, 4) as post}
			<BlogCard2
				client:load
				title={post.frontmatter.title}
				description={post.frontmatter.cardDescription}
				date={post.frontmatter.pubDate}
				url={post.url}
				image={post.frontmatter.heroImage}
			/>
		{/each}
	</div>
</main>
