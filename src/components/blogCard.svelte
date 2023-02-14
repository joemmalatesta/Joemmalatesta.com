
<script>
	export let title, description, date, url
</script>


<!-- This looked okay--  hover:bg-violet-400 -->
<div
	class="container flex flex-col from-rose-200 to-rose-300 p-2 border-b border-spacing-4 border-neutral-800"
>
	<div class="flex flex-row justify-between w-full">
		<h4 class="text-lg md:text-2xl font-semibold">{title}</h4>
		<h6 class="text-sm text-neutral-500">{date}</h6>
	</div>
		<p class="hidden text-lg lg:block">{description}</p>
		<a href={url} class="underline underline-offset-2 text-rose-500 hover:text-rose-600 text-lg w-fit">read more</a>
</div>
