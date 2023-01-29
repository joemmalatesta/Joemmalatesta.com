<script>
	let showNav = false
	import { slide } from 'svelte/transition';
</script>


<!-- LARGE SCREEN SIZES -->
<nav class=" hidden md:flex items-center justify-between  text-2xl">
	<!-- Name -->
	<a href="/"><img src="favicon.svg" alt="" width="90"></a>
	<!-- Main Links -->
	<div class="flex items-center">
		<a class="mr-2 hover:border-b-2 border-violet-500 hover:transition-all" href="/blog">Blog</a>
		<a class="mx-2 hover:border-b-2 border-violet-500 hover:transition-all" href="/about">Projects</a>
		<a class="ml-2 hover:border-b-2 border-violet-500 hover:transition-all" href="/about">About</a>
	</div>
</nav>



<!-- PHONE SCREEN SIZES -->
<nav class="md:hidden flex flex-col items-start justify-start p-3 text-lg mb-3 ">
	<div class="flex justify-between items-center w-11/12 py-2">
		<a href="/"><img src="favicon.svg" alt="" width="70"></a>
	 	<button on:click={() => {showNav = !showNav; console.log(showNav)}}><img src="/toggleNavButton.png" alt="Navigation menu toggler" width="40" id="navToggler" class="transform -scale-x-100"></button>
	</div>

	
	{#if showNav}
	<div class="wrapper" transition:slide>
		<div class="mx-2 mb-4 flex flex-col text-2xl" >
			<a  class="hover:border-b-2 border-violet-500 hover:transition-all" href="/blog">Blog</a>
			<a class="hover:border-b-2 border-violet-500 hover:transition-all" href="/blog">Projects</a>
			<a class="hover:border-b-2 border-violet-500 hover:transition-all" href="/about">About</a>
		</div>
		<div class="flex flex-row mx-2">
			<a class="pr-2"  href="https://twitter.com/josumalatesta" target="_blank" rel="noreferrer"><img src="/twitter.png" alt="Twitter Icon" width="25"></a>
			<a class="px-2"  href="https://github.com/joemmalatesta" target="_blank" rel="noreferrer"><img src="/github.png" alt="Github Icon" width="25"></a>
			<a class="px-2"  href="https://www.linkedin.com/in/joe-malatesta/" target="_blank" rel="noreferrer"><img src="/linkedin.png" alt="Linkedin Icon" width="25"></a>
		</div>
	</div>
	{/if}
</nav>
