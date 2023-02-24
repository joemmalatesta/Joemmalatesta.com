<script>
	export let title;
	export let description;
	export let tech;
	export let url;
	export let buttonText = "Learn more";
	export let image; //Maybe use but nah...
	export let active
</script>
<!-- bg-gradient-to-r from-rose-400 to-sky-300 -->
<!-- style="background-image: url({image}); background-size: cover; background-repeat: no-repeat" -->


<!-- ACTIVE -->
{#if active}
<div class="outline flex flex-col w-full">
	<img src="" alt="">
	
</div>
{/if}


<!-- INACTIVE -->
<!-- <div
	class="container rounded-lg p-5 flex flex-col items-start bg-gradient-to-r from-rose-200 to-rose-300 relative"
	style="background-image: url({image}); background-size: cover; background-repeat: no-repeat; background-color: rgba(0, 0, 0, 0.1);"
>
	
	<h3 class="text-2xl font-semibold">{title}</h3>
	<h5 class="text-sm md:text-base mb-2 text-neutral-600">{tech}</h5>
	{#if active}
		<p class="mb-3 sm:text-lg text-base hidden lg:block ">{description}</p>
	{/if}
	<a
		href={url}
		target="_blank"
		rel="noreferrer"
		class="bg-neutral-200 px-4 py-2 rounded-full text-black hover:text-white font-medium hover:bg-black hover:transition ease-in-out shadow-black shadow-md"
		>{buttonText}</a
	>
	<div class="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80"></div>
</div> -->

{#if !active}
	<div class="relative h-64 bg-cover bg-center" style="background-image: url({image});">
	<div class="absolute inset-0 bg-gray-900 opacity-50"></div>
	<div class="absolute inset-0 flex items-center justify-center">
	  <h1 class="text-4xl font-bold text-white text-center">Your text here</h1>
	</div>
	<div class="absolute inset-0 transform hover:scale-105 transition-all duration-300">
	</div>
  </div>
{/if}



