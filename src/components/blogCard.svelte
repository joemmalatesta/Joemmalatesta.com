<script>
	//TODO.. no more arrow just click and it will become active
	export let title, description, date, url, image;
	export let active = false;
	let showToggle = false;
	let arrowSize = 20;
	let screenWidth;
	let urlHover = false
	$: if (screenWidth < 1024) {
		arrowSize = 15;
	}
	let turnArrow;
	$: if (active) {
		turnArrow = "-";
	} else {
		turnArrow = "";
	}
	import { slide } from "svelte/transition";
</script>

<!-- This looked okay--  hover:bg-violet-400 -->
<div
	class="flex flex-col container border-b-2 border-slate-200/20 p-2"
	on:mouseenter={() => {
		showToggle = true;
	}}
	on:mouseleave={() => {
		showToggle = false;
	}}
>
	<div
		class="flex flex-row justify-between items-center cursor-pointer"
		on:click={() => {
			active = !active;
		}}
		on:keypress={() => {
			active = !active;
		}}
		>
		<div class="w-fit">
			<h6 class="text-sm text-slate-400 font-light">{date}</h6>
			<h4 class="text-lg md:text-xl 2xl:text-2xl font-semibold poppins">{title}</h4>
		</div>
		<!-- This causing issues on phone screen -->
		{#if showToggle || active || screenWidth < 1024} 
		<div>
			<img
				src="arrow.svg"
				alt="expand blog card"
				class="{turnArrow}rotate-90 transition duration-300"
				width={arrowSize}
			/>
		</div>
		{/if}
	</div>
	{#if active}
		<div transition:slide>
			<p class="lg:text-lg">{description}</p>

			<a href={url} class="flex items-center lg:text-xl text-lg font-semibold py-2 text-sky-400 w-fit"
            on:mouseenter={() => {urlHover = true }}
            on:mouseleave={() => {urlHover = false }}>Read more
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" fill="#fb7185" clip-rule="evenodd" class="{urlHover ? "mx-4" : "mx-1"} transition-all duration-300"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
            </a>
		</div>
	{/if}
</div>

<svelte:window bind:innerWidth={screenWidth} />
