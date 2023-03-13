<script>
	import BaseHead from "../components/BaseHead.astro";
	import Footer from "../components/Footer.astro";
	import BlogCard from "../components/blogCard.svelte";
	import SectionHeader from "./SectionHeader.svelte";
	import { crossfade, fade, slide } from "svelte/transition";
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

	<!-- BLOG AND OTHER CONTENT -->
	<div class="flex flex-col justify-between xl:justify-center lg:flex-row">
		<!-- LEFT SIDE -->
		<div class="mx-3 lg:mx-6 md:my-3 lg:w-1/2">
			
			
			<!-- SWITCH TYPES -->
			<div
				class=" flex justify-center md:justify-start"
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


			<!-- Blog part -->
			<div
				class="flex flex-col items-start justify-center"
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
		<!-- Maybe should do a specific signup for newsletter and the quote next to it so it doesn't look so shit -->


		<div class="relative w-1/3 justify-center items-center hidden lg:flex">
			<div class="bg-gradient-to-tl from-rose-400/70 to-blue-400/70 blur-2xl absolute w-96 outline h-96 rounded-full xl:translate-x-32 translate-x-24 z-40 rotating" />
			<p class="absolute lg:text-3xl xl:text-4xl xl:w-2/3 z-50 quote font-semibold">{quotes[active]}</p>
			
		</div>
		<!-- <div class="lg:w-2/5 flex items-center mx-5 bg-gradient-to-br from-rose-200 via-rose-300 to-rose-400 p-6 rounded-tr-full rounded-bl-full blur-sm">
			<p
				class="md:text-4xl p-6 font-serif text-2xl"
			>
				{quotes[active]}
			</p>
		</div> -->
	</div>
</main>



<style>
	@-webkit-keyframes rotating /* Safari and Chrome */ {
  from {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotating {
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.rotating {
  -webkit-animation: rotating 6s linear infinite;
  -moz-animation: rotating 6s linear infinite;
  -ms-animation: rotating 6s linear infinite;
  -o-animation: rotating 6s linear infinite;
  animation: rotating 6s linear infinite;
}
</style>