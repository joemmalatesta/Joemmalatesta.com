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
		class="relative h-36 bg-cover bg-center rounded-2xl border-2 border-neutral-600"
		style="background-image: url({image});"
	>
	<div class="absolute inset-0 bg-neutral-800 opacity-75 rounded-xl" />
	<div class="absolute inset-0 flex items-center justify-center flex-col">
			<div class="flex justify-center items-center text-slate-100/80 text-sm">
				{tech}
			</div>
			<h3 class="text-3xl font-bold text-white text-center p-1">{title}</h3>
			<!-- This isolate thing is LIT -->
			<div class="relative isolate">
				<h6 class="font-bold text-center text-black text-xl px-2">
				{buttonText}
			</h6>
			<div class="absolute inset-0 w-full bg-gradient-to-r from-indigo-400 to-rose-400/70 blur-sm opacity-50 -z-10"/>
			</div>
			
		</div>
	</div>
</a>
