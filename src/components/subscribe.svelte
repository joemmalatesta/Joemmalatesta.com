<!-- Note for this, for some reason, you need to use translate-y-[..rem] for phone sizes. Not sure why but ok..
	wait but it works for one of them. I'm so confused...
-->
<script>
	// You know, the classic
	const sleep = (milliseconds) => {
		return new Promise((resolve) => setTimeout(resolve, milliseconds));
	};

	//Initialize important values
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	let email = "";
	let subscribeAnimation = false;
	let title = "Get Notified";
	let message = "Stay up to date on new blog posts!";
	let hideExtras = false;
	let showEmailError = false;
	export let forPost = false;

	//Change title If I want. It looks good without changing though
	$: if (hideExtras) {
		title = "Subscribed!";
	} else {
		title = "Get Notified";
	}

	//Send request
	function subscribeClicked() {
		if (validateEmail() == false) {
			return;
		}
		const payload = {
			email: email,
		};
		fetch("/api/subscribe", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(payload),
		})
			.then((response) => response.json())
			.then((data) => {})
			.catch((error) => {
				console.error(error);
			});
		email = "";
		if (!forPost) {
			animate();
		} else {
			title = "Subscribed!";
			message = "Thanks, welcome to the club!";
		}
	}

	function validateEmail() {
		showEmailError = false;
		if (!emailRegex.test(email)) {
			showEmailError = true;
			return false;
		}
	}
	async function animate() {
		subscribeAnimation = true;
		hideExtras = true;
		await sleep(1200);
		subscribeAnimation = false;
		await sleep(600);
		hideExtras = false;
	}
</script>

<div class="flex-col justify-center items-center">
	<div class="flex flex-col pt-4 items-center justify-center">
		<!-- NOTIFY ANIMATION... LOTS OF DIVS -->
		<div class="poppins xl:text-5xl text-4xl relative font-extrabold">
			<h4
				class=" outline-text text-indigo-100"
			>
				{title}
			</h4>
			<!-- {#if !forPost} -->
				<div
					class="absolute inset-0 translate-y-3 bg-indigo-300 rounded-xl text-transparent bg-clip-text {subscribeAnimation
						? 'lg:translate-y-[2.5rem] translate-y-[1.5rem] bg-opacity-100'
						: 'bg-opacity-50 translate-y-[.5rem]'} transition-all duration-700 -z-10"
				>
					<p>{title}</p>
				</div>
				<div
					class="absolute  inset-0 translate-y-3 bg-indigo-300 rounded-xl text-transparent bg-clip-text {subscribeAnimation
						? 'lg:translate-y-20 translate-y-[3rem] bg-opacity-100'
						: 'bg-opacity-0'} transition-all duration-700 -z-10"
				>
					<p>{title}</p>
				</div>
				<div
					class="absolute  inset-0 translate-y-3 bg-indigo-300 rounded-xl text-transparent bg-clip-text {subscribeAnimation
						? 'lg:translate-y-[7.5rem] translate-y-[4.5rem] bg-opacity-100'
						: 'bg-opacity-0'} transition-all duration-700 -z-10"
				>
					<p>{title}</p>
				</div>
				<div
					class="absolute inset-0 translate-y-6  bg-indigo-400 rounded-xl text-transparent bg-clip-text  {subscribeAnimation
						? 'lg:translate-y-40 translate-y-[6rem] bg-opacity-100'
						: 'bg-opacity-40 translate-y-[1rem]'} transition-all duration-700  -z-20"
				>
					<p>{title}</p>
				</div>
				<div
					class="absolute inset-0 translate-y-6  bg-indigo-400 rounded-xl text-transparent bg-clip-text {subscribeAnimation
						? 'lg:translate-y-[12.5rem] translate-y-[7.5rem] bg-opacity-100'
						: 'bg-opacity-0'} transition-all duration-700  -z-20"
				>
					<p>{title}</p>
				</div>
				<div
					class="absolute inset-0 translate-y-9 bg-indigo-500 rounded-xl text-transparent bg-clip-text  {subscribeAnimation
						? 'lg:translate-y-60 translate-y-[9rem] bg-opacity-100'
						: 'bg-opacity-30 translate-y-[1.5rem]'} transition-all duration-700  -z-30"
				>
					<p>{title}</p>
				</div>
				<div
					class="absolute inset-0 translate-y-9  bg-indigo-500 rounded-xl text-transparent bg-clip-text  {subscribeAnimation
						? 'lg:translate-y-[17.5rem] translate-y-[10.5rem] bg-opacity-100'
						: 'bg-opacity-0'} transition-all duration-700  -z-30"
				>
					<p>{title}</p>
				</div>
				<div
					class="absolute inset-0 translate-y-12  bg-indigo-600 rounded-xl text-transparent bg-clip-text {subscribeAnimation
						? 'lg:translate-y-80 translate-y-[12rem] bg-opacity-100'
						: 'bg-opacity-20 translate-y-[2rem]'} transition-all duration-700  -z-40 "
				>
					<p>{title}</p>
				</div>
			<!-- {/if} -->
		</div>
		
		<form action="POST" class="mt-8 w-full flex flex-col justify-center items-center">
		<input
			bind:value={email}
			type="email"
			name="email"
			placeholder="Your email here"
			class=" {hideExtras
				? 'opacity-0'
				: 'opacity-100'} drop-shadow-md z-20 transition-all duration-75 lg:p-2 mt-2 p-1 w-full placeholder:text-neutral-600/90 placeholder:text-center font-sans text-xl rounded-t-md focus:placeholder:opacity-0 text-neutral-900 focus:outline-none"
		/>
		<button
			on:click|preventDefault={subscribeClicked}
			class="
			{hideExtras
				? 'opacity-0'
				: 'opactiy-100'} transition-all duration-75 lg:p-2 p-1 bg-indigo-500 text-white hover:bg-indigo-600 hover:shadow-md shadow-black hover:text-white w-full font-sans text-xl rounded-b-md"
			>Subscribe!</button>
			<!-- Message not even necessary but we leave it JIC -->
			<p
			class=" text-sm lg:text-md  text-center mx-4 transition-all duration-75 font-semibold {hideExtras
				? 'opacity-0'
				: 'opacity-100'}"
		>
			No spam, just thought provoking posts
		</p>
		</form>
		{#if showEmailError}
			<p class="text-red-500 text-sm">Enter Valid Email</p>
		{/if}
	</div>
</div>
