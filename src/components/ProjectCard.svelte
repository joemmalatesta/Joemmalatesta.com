<script>
	export let title;
	export let description;
	export let tech;
	export let url;
	export let buttonText = "Learn more";
	export let image; //Maybe use but nah...
	export let active
	export let phoneScreen = false
</script>
<!-- bg-gradient-to-r from-rose-400 to-sky-300 -->
<!-- style="background-image: url({image}); background-size: cover; background-repeat: no-repeat" -->


<!-- ACTIVE -->
{#if active && !phoneScreen}
<div class="flex flex-col h-full">
	<div>
		<img src="{image}" alt="{title} image">
	</div>
	<div>
		<h3>{title}</h3>
	</div>
</div>
{/if}


{#if !active && !phoneScreen}
	<div class="relative h-48 bg-cover bg-center hover:scale-105 transition-all duration-300 active:scale-95 rounded-xl" style="background-image: url({image});">
	<div class="absolute inset-0 bg-gray-900 opacity-75 rounded-xl"></div>
	<div class="absolute inset-0 flex items-center justify-center">
	  <h3 class="text-4xl font-bold text-white text-center px-2">{title}</h3>
	</div>
	</div>

{/if}


<!-- Very messy workaround -->
{#if phoneScreen} 
	<a href="{url}" target="_blank" rel="noopener noreferrer">
	<div class="relative h-48 bg-cover bg-center hover:scale-105 transition-all duration-300 active:scale-95 rounded-xl" style="background-image: url({image});">
	<div class="absolute inset-0 bg-gray-900 opacity-75 rounded-xl"></div>
	<div class="absolute inset-0 flex items-center justify-center">
	  <h3 class="text-4xl font-bold text-white text-center px-2">{title}</h3>
	</div>
	</div>
	</a>
{/if}



