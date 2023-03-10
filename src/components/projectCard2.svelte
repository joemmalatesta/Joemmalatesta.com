<script>
    export let title, description, tech, url, image;
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


<div class="relative">
    <img src={image} alt="" class="w-[480px] h-[270px]">
    <div class="absolute inset-0 bg-gray-900 opacity-75 rounded-xl" />
    <div class="absolut botto">
        <p>{tech}</p>
        <h3 class="text-4xl font-bold text-white px-2">{title}</h3>
        <p>{description}</p>

    </div>
</div>



<!-- <div
		class="relative h-36 bg-cover bg-center hover:scale-105 transition-all duration-300 active:scale-95 rounded-xl"
		style="background-image: url({image});"
	>
		<div class="absolute inset-0 bg-gray-900 opacity-75 rounded-xl" />
		<div class="absolute inset-0 flex items-center justify-center">
			<h3 class="text-4xl font-bold text-white text-center px-2">{title}</h3>
		</div>
	</div> -->