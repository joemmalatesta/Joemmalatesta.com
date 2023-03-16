<script>
  import { each } from "svelte/internal";


	export let title;
	export let description;
	export let tech;
	export let url;
	export let buttonText = "Learn more";
	export let image; //Maybe use but nah...
	export let active;
	export let phoneScreen = false;
	export let logos
</script>


<a href={url} target="_blank" rel="noopener noreferrer">
	<div
		class="relative h-36 bg-cover bg-center rounded-xl"
		style="background-image: url({image});"
	>
		<div class="absolute inset-0 bg-gray-900 opacity-[.85] rounded-xl" />
		<div class="absolute inset-0 flex items-center justify-center flex-col">
			<h3 class="text-3xl font-bold text-white text-center p-2">{title}</h3>
			<div class="flex justify-center items-center">
				{#each logos as logo}
					<img src="logos/{logo}" alt="" class="md:w-7 w-8 mx-2">
				{/each}
			</div>
			<h6 class="text-lg font-bold text-slate-200 text-center">
				{buttonText}
			</h6>
		</div>
	</div>
</a>
