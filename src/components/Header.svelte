<script>
	let showNav = false
</script>


<!-- LARGE SCREEN SIZES -->
<nav class="hidden md:flex items-center justify-between p-4 text-xl shadow-lg mb-4 px-24">
	<!-- Name -->
	<a class="text-2xl mx-5" href="/">Joe Malatesta</a>
	<!-- Main Links -->
	<div class="flex items-center">
		<a class="mx-2" href="/blog">Blog</a>
		<a class="mx-2" href="/about">Projects</a>
		<a class="mx-2" href="/about">About</a>
	</div>
	<!-- Image links -->
	<div class="flex mx-5 items-center">
		<a class="mx-2" href="https://twitter.com/josumalatesta"><img src="/twitter.png" alt="Twitter Icon" width="35"></a>
		<a class="mx-2" href="https://github.com/joemmalatesta"><img src="/github.png" alt="Github Icon" width="35"></a>
		<a class="mx-2" href="https://www.linkedin.com/in/joe-malatesta/"><img src="/linkedin.png" alt="Linkedin Icon" width="35"></a>
	</div>
</nav>



<!-- PHONE SCREEN SIZES -->
<nav class="md:hidden flex flex-col items-start justify-start p-3 text-lg shadow-lg mb-4">
	<div class="flex justify-between items-center w-11/12 py-2 mx-auto">
		<a href="/">Joe Malatesta</a>
	 	<button on:click={() => {showNav = !showNav; console.log(showNav)}}><img src="/toggleNavButton.png" alt="Navigation menu toggler" width="40" id="navToggler" class="transform -scale-x-100"></button>
	</div>

	<!-- TODO: add functionality to toggleNav button  -->
	{#if (showNav)}
	<div class="mx-2 mb-4 flex flex-col">
		<a class="px-2" href="/blog">Blog</a>
		<a class="px-2" href="/blog">Projects</a>
		<a class="px-2" href="/about">About</a>
	</div>
	<div class="flex flex-row mx-2">
		<a class="px-2"  href="https://twitter.com/josumalatesta"><img src="/twitter.png" alt="Twitter Icon" width="25"></a>
		<a class="px-2"  href="https://github.com/joemmalatesta"><img src="/github.png" alt="Github Icon" width="25"></a>
		<a class="px-2"  href="https://www.linkedin.com/in/joe-malatesta/"><img src="/linkedin.png" alt="Linkedin Icon" width="25"></a>
	</div>
	{/if}
</nav>



