<script>
	export let title;
	export let description;
	export let tech;
	export let url;
	export let buttonText = "Learn more";
	let toggleDescription = false
</script>


<div
	class="container bg-gradient-to-r from-rose-400 to-sky-300 rounded-lg p-5 flex flex-col items-start"
>
	<h2 class="text-2xl">{title}</h2>
	<p class="text-sm md:text-base mb-2 text-neutral-700">{tech}</p>
	<p class="mb-3 sm:text-lg text-base">{description}</p>
	<a
		href={url}
		target="_blank"
		rel="noreferrer"
		class="bg-neutral-200 px-4 py-2 rounded-full text-black hover:text-white font-medium hover:bg-rose-500 hover:transition ease-in-out shadow-black shadow-md"
		>{buttonText}</a
	>
</div>


