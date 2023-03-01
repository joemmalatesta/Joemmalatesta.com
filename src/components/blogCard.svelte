<script>
	//TODO.. no more arrow just click and it will become active
	export let title, description, date, url, image;
	export let active = false;
	let showToggle = false
	let arrowSize = 20
	let screenWidth
	$: if (screenWidth < 1024){
		arrowSize = 15
	}
	let turnArrow
	$: if (active) {
		turnArrow = "-"
	}
	else{
		turnArrow = ""
	}
	import { slide } from "svelte/transition";
</script>

<!-- This looked okay--  hover:bg-violet-400 -->
<div class="flex flex-col container border-b-2 border-neutral-800/20 p-2" on:mouseenter={() => {showToggle = true}} on:mouseleave={() => {showToggle = false}}>
	<div class="flex flex-row justify-between"
	on:click={() => {active = !active}}	
	on:keypress={() => {active = !active}}
	>
		<div class="w-fit">
			<h6 class="text-sm text-neutral-500">{date}</h6>
			<a href={url}>
				<h4 class="text-lg md:text-xl 2xl:text-2xl font-semibold">{title}</h4>
			</a>
		</div>
		{#if showToggle || active || screenWidth < 1024}
		<button on:click={() => {active= !active}}>
			<img src="arrow.svg" alt="expand blog card" class="{turnArrow}rotate-90 transition duration-300" width={arrowSize}>
		</button>
		{/if}
	</div>
	{#if active}
	<div transition:slide>
		<p>{description}</p>
		<a
			href={url}
			class="underline underline-offset-2 text-rose-500 hover:text-rose-600 md:text-lg w-fit"
			>read more</a
		>
	</div>
	{/if}
</div>



<svelte:window bind:innerWidth={screenWidth}></svelte:window>

