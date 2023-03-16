<script>
	export let title, description, tech, url, image, buttonText, logos = [];
	export let active = false;
    let urlHover = false
	let inactiveHovered = false
	import { slide, fade, crossfade, fly } from "svelte/transition";
</script>


{#if active}
	<div class="flex">
		<div class="w-1/2">
			<img src={image} alt="{title} image" class="object-cover rounded-xl" />
		</div>
		<div class="w-1/2 flex flex-col justify-center items-start mx-5"
		>
			<p>{tech}</p>
			<h4 class="font-bold text-3xl poppins">{title}</h4>
			<p class="text-xl">{description}</p>
			<a href={url} class="flex items-center text-xl font-semibold my-2 py-2"
            on:mouseenter={() => {urlHover = true }}
            on:mouseleave={() => {urlHover = false }}>{buttonText}
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" class="{urlHover ? "mx-6" : "mx-1"} transition-all duration-500"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
            </a>
		</div>
	</div>
{/if}

{#if !active}
	<div class="relative scale-95 hover:scale-105 transition-all duration-300 cursor-pointer"
	on:mouseenter={() => {inactiveHovered = true; }}
	on:mouseleave={() => {inactiveHovered = false}}>
		<img src={image} alt="" class="w-80 h-40 xl:w-96 xl:h-48 rounded-xl z-10" />
		<div class="absolute inset-0 bg-neutral-800 opacity-[.65] rounded-xl" />
		<div class="absolute inset-0 flex items-center justify-center">
			<h3 class="text-4xl font-bold text-white text-center px-2 cursor-pointer">{title}</h3>
		</div>
		<img src="/logos/{logos[0]}" alt="" class="{inactiveHovered ? "-translate-x-7 translate-y-7 opacity-100 rotate-12" :" opacity-0"} absolute w-10 transition-all duration-300" style="bottom: 0; left: 0">
		<img src="/logos/{logos[1]}" alt="" class="{inactiveHovered ? "translate-x-7 translate-y-7 opacity-100 -rotate-12" :" opacity-0"} absolute w-10 transition-all duration-300" style="bottom: 0; right: 0">
		<img src="/logos/{logos[2]}" alt="" class="{inactiveHovered ? "translate-x-7 -translate-y-7 opacity-100 rotate-12" :"opacity-0"} absolute w-10 transition-all duration-300" style="top: 0; right: 0">
		<img src="/logos/{logos[3]}" alt="" class="{inactiveHovered ? "-translate-x-7 -translate-y-7 opacity-100 -rotate-12" :" opacity-0"} absolute w-10 transition-all duration-300" style="top: 0; left: 0">
	</div>
{/if}
