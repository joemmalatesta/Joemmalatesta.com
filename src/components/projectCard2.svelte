<script>
	export let title, description, tech, url, image, buttonText;
	export let active = false;
    let urlHover = false
</script>

<!-- <a href={url} class="p-2"> -->
<!-- <div class=" flex flex-col w-96 h-96 relative">
    <div class="h-full">
        <img src={image} alt="{title} Image" class="object-cover rounded-t-lg">
    </div>
    <div class="flex flex-col bg-rose-200 p-4 h-1/2 rounded-b-lg absolute align-bottom">
        <p>{tech}</p>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
</div> -->
<!-- </a> -->

{#if active}
	<div class="flex">
		<div class="w-1/2">
			<img src={image} alt="{title} image" class="object-cover rounded-xl" />
		</div>
		<div class="w-1/2 flex flex-col justify-center items-start mx-5">
			<p>{tech}</p>
			<h4 class="font-bold text-3xl">{title}</h4>
			<p class="text-xl">{description}</p>
			<a href={url} class="flex items-center"
            on:mouseenter={() => {urlHover = true }}
            on:mouseleave={() => {urlHover = false }}>{buttonText}
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" class="{urlHover ? "mx-6" : "mx-1"} transition-all duration-500"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
            </a>
		</div>
	</div>
{/if}

{#if !active}
	<div class="relative">
		<img src={image} alt="" class="w-[480px] h-[270px] rounded-xl" />
		<div class="absolute inset-0 bg-gray-900 opacity-75 rounded-xl" />
		<div class="absolute inset-0 flex items-center justify-center">
			<h3 class="text-4xl font-bold text-white text-center px-2">{title}</h3>
		</div>
	</div>
{/if}
