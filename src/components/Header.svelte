<script>
	let showNav = false;
	let burgerClass;
	$: if (showNav) {
		burgerClass = " transform rotate-90 transition-all";
	} else {
		burgerClass = "transform transition-all";
	}
	let fillColor = "#f1f5f9";
	import { slide, fade } from "svelte/transition";
</script>

<!-- LARGE SCREEN SIZES -->
<nav
	class=" hidden md:flex items-center justify-between  text-2xl xl:mx-36 lg:mx-10 md:mx-5"
>
	<!-- Name -->
	<a href="/">
		<svg
			width="100"
			viewBox="0 0 2400 2400"
			preserveAspectRatio="xMidYMid meet"
			on:mouseenter={() => {
				fillColor = "url(#Gradient)";
			}}
			on:mouseleave={() => {
				fillColor = "#f1f5f9";
			}}
		>
			<defs>
				<linearGradient id="Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
					<stop offset="0%" style="stop-color:#f1f5f9;stop-opacity:1" />
					<stop offset="100%" style="stop-color:#6366f1;stop-opacity:1" />
				</linearGradient>
			</defs>
			<g
				transform="translate(0.000000,2400.000000) scale(0.100000,-0.100000)"
				stroke="none"
				fill={fillColor}
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
			class="mx-2 hover:border-b-2 border-spacing-3 border-indigo-500 transition duration-100"
			href="/about">About</a
		>
		<a
			class="mx-2 hover:border-b-2 border-spacing-3 border-indigo-500 transition duration-100"
			href="/#blog">Blog</a
		>
		<a
			class="mx-2 hover:border-b-2 border-spacing-3 border-indigo-500 transition-all duration-100"
			href="/#projects">Projects</a
		>
		<a
			class="ml-2 hover:border-b-2 border-spacing-3 border-indigo-500 transition-all duration-100"
			href="/#contact">Contact</a
		>
	</div>
</nav>

<!-- PHONE SCREEN SIZES -->
<nav class="md:hidden flex flex-col items-start justify-start px-3 text-lg">
	<div class="flex justify-between items-center w-full py-2 px-2">
		<a href="/">
			<svg
				width="70"
				viewBox="0 0 2400 2400"
				preserveAspectRatio="xMidYMid meet"
				on:mouseenter={() => {
					fillColor = "url(#Gradient)";
				}}
				on:mouseleave={() => {
					fillColor = "#f1f5f9";
				}}
			>
				<defs>
					<linearGradient id="Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
						<stop offset="0%" style="stop-color:#f1f5f9;stop-opacity:1" />
						<stop offset="100%" style="stop-color:#38bdf8;stop-opacity:1" />
					</linearGradient>
				</defs>
				<g
					transform="translate(0.000000,2400.000000) scale(0.100000,-0.100000)"
					stroke="none"
					fill="#f1f5f9"
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
			}}
			><img
				src="/toggleNavButtonWhite.png"
				alt="Navigation menu toggler"
				width="40"
				id="navToggler"
				class={burgerClass}
			/></button
		>
	</div>

	{#if showNav}
		<div class="wrapper" transition:slide>
			<div class="mx-2 mb-4 flex flex-col text-2xl">
				<a class="" href="/about">▹About</a>
				<a class="" href="/#blog">▹Blog</a>
				<a class="" href="/#projects">▹Projects</a>
				<a class="" href="/#contact">▹Contact</a>
			</div>
		</div>
	{/if}
</nav>
