<script>
import BaseHead from "../components/BaseHead.astro";
import Footer from "../components/Footer.astro";
import BlogCard from "../components/blogCard.svelte";
import SectionHeader from "./SectionHeader.svelte";
import { slide, fade, crossfade } from "svelte/transition";
export let postTypes
let active = 0
export let quotes
function switchActive() {
	if (active == 0) {
		active = 1
	}
	else active = 0
}
</script>
<!-- <head>
	<BaseHead
		title="Bloggington"
		description="A list of Joe Malatesta's blog posts about tech, coding, and self improvement."
	/>
</head> -->
		<main>
			<SectionHeader title={"Blog"} subtitle={"A place for my thoughts about things"} />
			<div class=" flex justify-center text-center items-center">
				<button on:click={switchActive} class="p-3 bg-black text-white">
					Switch type
				</button>
			</div>
			<div class="my-4 flex flex-col justify-center lg:flex-row">
				<div class="mx-3 lg:mx-6 my-3 lg:w-1/2">
					<div class="flex items-end">
						<h3 class="text-2xl font-bold md:text-4xl text-rose-400 bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-rose-500 py-1">Programming</h3>
						<a href="/programming-blogs" class="text-rose-500 underline-offset-2 underline hover:text-rose-600 mx-2">See all</a>
						</div>
					<div class="flex flex-col items-start justify-center"
					>
						{#each postTypes[active].slice(0,4) as post}
							<BlogCard client:load
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
				<div class="lg:w-2/5 flex items-center">
					<h3 class="text-4xl bg-rose-200 p-6 rounded-tr-full rounded-bl-full">{quotes[active]}</h3>
				</div>
			</div>
		</main>

