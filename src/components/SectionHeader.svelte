<script>
	export let title;
	export let subtitle = "";
</script>

<div class="flex flex-col justify-center items-center p-5 text-center">
	<h1
		class="bg-neutral-800 bg-clip-text text-center text-5xl py-2 font-extrabold text-transparent lg:text-7xl"
	>
		{title}
	</h1>
	<h5 class="md:text-xl text-lg lg:w-1/2">{subtitle}</h5>
</div>
