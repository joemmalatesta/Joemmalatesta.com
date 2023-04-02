<script>
	import BaseHead from "../components/BaseHead.astro";
	import Footer from "../components/Footer.astro";
	import BlogCard from "../components/blogCard.svelte";
	import { subscribe } from "svelte/internal";
	import SectionHeader from "./SectionHeader.svelte";
	import { crossfade, fade, slide, fly } from "svelte/transition";
  import Subscribe from "./subscribe.svelte";
	export let postTypes;
	export let posts;
	let activeType = 0;
	let active = 0;
	export let quotes;
	let seeAllLink;
	$: if(activeType == 0){
		seeAllLink = "/blog/programming/all"
	}
	else{
		seeAllLink = "/blog/improvement/all"
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
		subtitle={"Bear with me while I sort out an identity crisis"}
	/>

	<!-- BLOG AND OTHER CONTENT -->
	<div class="flex flex-col justify-between xl:justify-center md:flex-row">
		<!-- LEFT SIDE -->
		<div class="mx-3 lg:mx-6 md:my-3 lg:w-1/2 md:w-3/4 xl:mr-16">
			<!-- SWITCH TYPES -->
			<div class=" flex justify-center md:justify-start">
				<div class="p-1 py-2 bg-slate-200 text-white rounded-lg">
					<div class="flex">
						<button
							on:click={() => {
								activeType = 0;
								active = 0;
							}}
							class="{activeType == 0
								? 'bg-indigo-400 font-semibold'
								: 'font-normal'} mx-2 p-1 transition-all ease-in-out rounded-md hover:scale-105 active:scale-95 text-black poppins"
						>
							{postTypes[0]}
						</button>
						<button
							on:click={() => {
								activeType = 1;
								active = 0;
							}}
							class="{activeType == 1
								? 'bg-indigo-400 font-semibold'
								: 'font-normal'} mx-2 p-1 transition-all ease-in-out rounded-md hover:scale-105 active:scale-95 text-black poppins"
						>
							{postTypes[1]}
						</button>
					</div>
				</div>
			</div>

			<!-- Blog part -->

			<div class="flex flex-col items-start justify-center">
				{#each posts[activeType].slice(0, 5) as post, index}
					<div
						class="w-full"
						on:click={() => {
							active = index;
						}}
						on:keypress={() => {
							active = index;
						}}
					>
						<BlogCard
							client:load
							title={post.frontmatter.title}
							description={post.frontmatter.cardDescription}
							date={post.frontmatter.pubDate}
							url={post.url}
							image={post.frontmatter.heroImage}
							active={index == active ? true : false}
						/>
					</div>
				{/each}
				<a class="px-2 text-lg text-indigo-400 underline underline-offset-2 hover:underline-offset-4 transition-all" href="{seeAllLink}">See All</a>
			</div>
		</div>
		<!-- Right side -->
		<div class="flex lg:w-1/3 justify-center items-center">
			<Subscribe />
		</div>
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
		-webkit-animation: rotating 12s linear infinite;
		-moz-animation: rotating 12s linear infinite;
		-ms-animation: rotating 12s linear infinite;
		-o-animation: rotating 12s linear infinite;
		animation: rotating 12s linear infinite;
	}
</style>
