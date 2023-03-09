<script>
	export let title;
	export let description;
	export let tech;
	export let url;
	export let buttonText = "Learn more";
	export let image; //Maybe use but nah...
	export let active;
	export let phoneScreen = false;
</script>

<!-- bg-gradient-to-r from-rose-400 to-sky-300 -->
<!-- style="background-image: url({image}); background-size: cover; background-repeat: no-repeat" -->

<!-- ACTIVE -->
{#if active && !phoneScreen}
	<div class="flex flex-col h-fit w-fit justify-between">
		<div class="">
			<img src={image} alt="{title} image" class="object-cover aspect-video w-[480px] h-[270px]"/>
		</div>
		<div>
			<p class="text-neutral-700/40">{tech}</p>
			<h3>{title}</h3>
			<p>{description}</p>

		</div>
	</div>
{/if}

{#if !active && !phoneScreen}
	<div
		class="relative h-36 bg-cover bg-center hover:scale-105 transition-all duration-300 active:scale-95 rounded-xl"
		style="background-image: url({image});"
	>
		<div class="absolute inset-0 bg-gray-900 opacity-75 rounded-xl" />
		<div class="absolute inset-0 flex items-center justify-center">
			<h3 class="text-4xl font-bold text-white text-center px-2">{title}</h3>
		</div>
	</div>
{/if}



<!-- Very messy workaround -->
{#if phoneScreen}
	<a href={url} target="_blank" rel="noopener noreferrer">
		<div
			class="relative h-36 bg-cover bg-center rounded-xl"
			style="background-image: url({image});"
		>
			<div class="absolute inset-0 bg-gray-900 opacity-75 rounded-xl" />
			<div class="absolute inset-0 flex items-center justify-center flex-col">
				<h3 class="text-3xl font-bold text-white text-center p-2">{title}</h3>
				<h6 class="text-lg font-bold text-neutral-200 text-center">
					{buttonText}
				</h6>
			</div>
		</div>
	</a>
{/if}
