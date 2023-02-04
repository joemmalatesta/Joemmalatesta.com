<script>
	let showNav = false;
	import { slide } from "svelte/transition";
</script>

<!-- LARGE SCREEN SIZES -->
<nav class=" hidden md:flex items-center justify-between  text-2xl mx-44">
	<!-- Name -->
	<a href="/">
		<svg
			width="90"
			viewBox="0 0 2400 2400"
			preserveAspectRatio="xMidYMid meet"
			class="fill-black hover:fill-purple-500  duration-200"
		>
			<g
				transform="translate(0.000000,2400.000000) scale(0.100000,-0.100000)"
				stroke="none"
			>
				<path
					d="M6565 15083 c7 -3226 6 -3503 -9 -3562 -71 -277 -333 -456 -613 -421 -217 28 -391 173 -466 390 l-22 65 -3 1238 -3 1237 -1695 0 -1695 0 4 -1397 c4 -1522 1 -1452 62 -1788 171 -941 676 -1783 1430 -2384 546 -436 1191 -715 1885 -817 608 -89 1413 -31 2070 148 1109 303 1935 924 2397 1803 l63 120 0 -2147 0 -2148 1605 0 1605 0 0 3423 c0 2978 2 3430 15 3484 48 204 213 374 415 428 71 19 220 19 293 0 112 -29 222 -100 300 -195 47 -56 102 -168 116 -238 8 -38 11 -706 11 -2292 l0 -2240 1600 0 c880 0 1600 1 1601 3 0 1 7 1001 14 2223 15 2464 9 2272 82 2421 41 85 130 186 210 239 31 21 93 50 137 66 69 24 97 28 186 28 90 0 117 -4 187 -29 176 -61 298 -185 365 -371 l23 -65 3 -2257 2 -2258 1600 0 1600 0 -3 3343 -2 3342 -23 98 c-92 399 -286 739 -608 1062 -575 577 -1512 1003 -2486 1129 -340 44 -752 53 -1043 22 -743 -80 -1340 -338 -1754 -760 l-64 -65 -86 86 c-181 181 -364 310 -616 433 -401 197 -794 291 -1337 321 -628 34 -1378 -95 -2013 -346 -165 -65 -495 -228 -640 -315 -517 -313 -901 -703 -1105 -1125 -93 -192 -138 -336 -171 -545 -17 -112 -17 -61 -18 1998 l-1 2112 -1706 0 -1706 0 7 -3497z"
				/>
			</g>
		</svg>
	</a>
	<!-- Main Links -->
	<div class="flex items-center">
		<a
			class="mr-2 hover:border-b-2 border-spacing-3 border-purple-500 hover:font-extrabold transition duration-200"
			href="#blog">Blog</a
		>
		<a
			class="mx-2 hover:border-b-2 border-spacing-3 border-purple-500 hover:font-extrabold transition duration-200"
			href="#projects">Projects</a
		>
		<a
			class="ml-2 hover:border-b-2 border-spacing-3 border-purple-500 hover:font-extrabold transition duration-200"
			href="#about">About</a
		>
	</div>
</nav>

<!-- PHONE SCREEN SIZES -->
<nav class="md:hidden flex flex-col items-start justify-start p-3 text-lg">
	<div class="flex justify-between items-center w-11/12 py-2">
		<a href="/">
			<svg
				width="70"
				viewBox="0 0 2400 2400"
				preserveAspectRatio="xMidYMid meet"
			>
				<g
					transform="translate(0.000000,2400.000000) scale(0.100000,-0.100000)"
					fill="#000000"
					stroke="none"
				>
					<path
						d="M6565 15083 c7 -3226 6 -3503 -9 -3562 -71 -277 -333 -456 -613 -421 -217 28 -391 173 -466 390 l-22 65 -3 1238 -3 1237 -1695 0 -1695 0 4 -1397 c4 -1522 1 -1452 62 -1788 171 -941 676 -1783 1430 -2384 546 -436 1191 -715 1885 -817 608 -89 1413 -31 2070 148 1109 303 1935 924 2397 1803 l63 120 0 -2147 0 -2148 1605 0 1605 0 0 3423 c0 2978 2 3430 15 3484 48 204 213 374 415 428 71 19 220 19 293 0 112 -29 222 -100 300 -195 47 -56 102 -168 116 -238 8 -38 11 -706 11 -2292 l0 -2240 1600 0 c880 0 1600 1 1601 3 0 1 7 1001 14 2223 15 2464 9 2272 82 2421 41 85 130 186 210 239 31 21 93 50 137 66 69 24 97 28 186 28 90 0 117 -4 187 -29 176 -61 298 -185 365 -371 l23 -65 3 -2257 2 -2258 1600 0 1600 0 -3 3343 -2 3342 -23 98 c-92 399 -286 739 -608 1062 -575 577 -1512 1003 -2486 1129 -340 44 -752 53 -1043 22 -743 -80 -1340 -338 -1754 -760 l-64 -65 -86 86 c-181 181 -364 310 -616 433 -401 197 -794 291 -1337 321 -628 34 -1378 -95 -2013 -346 -165 -65 -495 -228 -640 -315 -517 -313 -901 -703 -1105 -1125 -93 -192 -138 -336 -171 -545 -17 -112 -17 -61 -18 1998 l-1 2112 -1706 0 -1706 0 7 -3497z"
					/>
				</g>
			</svg>
		</a>
		<button
			on:click={() => {
				showNav = !showNav;
				console.log(showNav);
			}}
			><img
				src="/toggleNavButton.png"
				alt="Navigation menu toggler"
				width="40"
				id="navToggler"
				class="transform -scale-x-100"
			/></button
		>
	</div>

	{#if showNav}
		<div class="wrapper" transition:slide>
			<div class="mx-2 mb-4 flex flex-col text-2xl">
				<a class="" href="#blog">Blog</a>
				<a class="" href="/blog">Projects</a>
				<a class="" href="/about">About</a>
			</div>
			<div class="flex flex-row mx-2">
				<a
					class="pr-2"
					href="https://twitter.com/josumalatesta"
					target="_blank"
					rel="noreferrer"
					><img src="/twitter.png" alt="Twitter Icon" width="25" /></a
				>
				<a
					class="px-2"
					href="https://github.com/joemmalatesta"
					target="_blank"
					rel="noreferrer"
					><img src="/github.png" alt="Github Icon" width="25" /></a
				>
				<a
					class="px-2"
					href="https://www.linkedin.com/in/joe-malatesta/"
					target="_blank"
					rel="noreferrer"
					><img src="/linkedin.png" alt="Linkedin Icon" width="25" /></a
				>
			</div>
		</div>
	{/if}
</nav>
