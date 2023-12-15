<script>
	export let title;
	export let description;
	export let tech;
	export let url;
	export let buttonText = "Learn more";
	export let image; //Maybe use but nah...
	export let active;
	export let phoneScreen = false;
	export let logos;
</script>

<a href={url} target="_blank" rel="noopener noreferrer">
	<div
		class="relative h-36 bg-cover bg-center rounded-2xl ring-2 ring-neutral-700/50"
		style="background-image: url({image});"
	>
		<div class="absolute inset-0 bg-neutral-800 opacity-75 rounded-xl" />
		<div class="absolute inset-0 flex items-center justify-center flex-col">
			<div class="flex justify-center items-center text-slate-100/80 text-sm">
				{tech}
			</div>
			<h3 class="sm:text-3xl text-2xl font-bold text-white text-center p-1">{title}</h3>
			<!-- This isolate thing is LIT -->
			<div
				class="absolute bottom-0 h-1/3 w-full bg-red isolate flex justify-center items-center"
			>
			<div class="flex justify-center items-center">
				<h6 class="font-bold text-center text-white text-sm sm:text-lg px-2">
					{buttonText}
				</h6>
				<img src="external-link.svg" alt="external link">
			</div>
				<div
					class="absolute inset-0 w-full bg-gradient-to-b from-transparent via-gray-900/40 to-gray-900/60 opacity-80 -z-10 rounded-b-2xl"
				/>
			</div>
		</div>
	</div>
</a>
