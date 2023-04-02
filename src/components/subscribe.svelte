<script>
	// You know, the classic
	const sleep = (milliseconds) => {
		return new Promise((resolve) => setTimeout(resolve, milliseconds));
	};

	//Initialize important values
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	let email = "";
	let subscribeAnimation = false;
	let message = "Get Notified";
	let hideExtras = false;
	let showEmailError = false;

	//Change message If I want. It looks good without changing though
	$: if (hideExtras) {
		message = "Success!";
	} else {
		message = "Get Notified";
	}

	//Send request
	function subscribeClicked() {
		if (validateEmail() == false){
			return
		}
		const payload = {
			email: email,
		};
		console.log("me")
		fetch("/api/subscribe", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(payload),
		})
			.then((response) => response.json())
			.then((data) => {
			})
			.catch((error) => {
				console.error(error);
			});
		email = "";
		animate()
	}


	function validateEmail() {
		showEmailError = false;
		if (!emailRegex.test(email)) {
			showEmailError = true;
			return false;
		}
	}
async function animate(){
	subscribeAnimation = true;
		hideExtras = true;
		await sleep(1200)
		subscribeAnimation = false;
		await sleep(600)
		hideExtras = false;
}
</script>

<div class="flex-col justify-center items-center">
	<div class="flex flex-col pt-4 items-center justify-center">
		<!-- NOTIFY ANIMATION... LOTS OF DIVS -->
		<div class="poppins xl:text-5xl text-4xl relative font-extrabold">
			<h4 class="text-indigo-100 outline-text">{message}</h4>
			<div
				class="absolute inset-0 translate-y-3 bg-indigo-300 rounded-xl text-transparent bg-clip-text {subscribeAnimation
					? 'lg:translate-y-[2.5rem] translate-y-10 bg-opacity-100'
					: 'bg-opacity-70'} transition-all duration-700 -z-10"
			>
				<p>{message}</p>
			</div>
			<div
				class="absolute inset-0 translate-y-3 bg-indigo-300 rounded-xl text-transparent bg-clip-text {subscribeAnimation
					? 'lg:translate-y-20 translate-y-10 bg-opacity-100'
					: 'bg-opacity-0'} transition-all duration-700 -z-10"
			>
				<p>{message}</p>
			</div>
			<div
				class="absolute inset-0 translate-y-3 bg-indigo-300 rounded-xl text-transparent bg-clip-text {subscribeAnimation
					? 'lg:translate-y-[7.5rem] translate-y-10 bg-opacity-100'
					: 'bg-opacity-0'} transition-all duration-700 -z-10"
			>
				<p>{message}</p>
			</div>
			<div
				class="absolute inset-0 translate-y-6  bg-indigo-400 rounded-xl text-transparent bg-clip-text  {subscribeAnimation
					? 'lg:translate-y-40 translate-y-20 bg-opacity-100'
					: 'bg-opacity-60'} transition-all duration-700  -z-20"
			>
				<p>{message}</p>
			</div>
			<div
				class="absolute inset-0 translate-y-6  bg-indigo-400 rounded-xl text-transparent bg-clip-text {subscribeAnimation
					? 'lg:translate-y-[12.5rem] translate-y-20 bg-opacity-100'
					: 'bg-opacity-0'} transition-all duration-700  -z-20"
			>
				<p>{message}</p>
			</div>
			<div
				class="absolute inset-0 translate-y-9  bg-indigo-500 rounded-xl text-transparent bg-clip-text  {subscribeAnimation
					? 'lg:translate-y-60 translate-y-[7.5rem] bg-opacity-100'
					: 'bg-opacity-50'} transition-all duration-700  -z-30"
			>
				<p>{message}</p>
			</div>
			<div
				class="absolute inset-0 translate-y-9  bg-indigo-500 rounded-xl text-transparent bg-clip-text  {subscribeAnimation
					? 'lg:translate-y-[17.5rem] translate-y-[7.5rem] bg-opacity-100'
					: 'bg-opacity-0'} transition-all duration-700  -z-30"
			>
				<p>{message}</p>
			</div>
			<div
				class="absolute inset-0 translate-y-12  bg-indigo-600 rounded-xl text-transparent bg-clip-text {subscribeAnimation
					? 'lg:translate-y-80 translate-y-40 bg-opacity-100'
					: 'bg-opacity-40'} transition-all duration-700  -z-40 "
			>
				<p>{message}</p>
			</div>
		</div>
		<p
			class=" text-xl lg:text-2xl mt-12 text-center mx-4 transition-all duration-75 {hideExtras
				? 'opacity-0'
				: 'opacity-100'}"
		>
			Subscribe to stay up to date on new blog posts!
		</p>
		<input
			bind:value={email}
			type="email"
			placeholder="Your email here"
			class="{hideExtras
				? 'opacity-0'
				: 'opacity-100'} transition-all duration-75 lg:p-2 mt-2 p-1 w-4/5 placeholder:text-neutral-600/90 placeholder:text-center font-sans text-xl rounded-t-lg border-b-2 border-black/60 focus:placeholder:opacity-0 text-neutral-900 focus:outline-none"
		/>
		<button
			on:click={subscribeClicked}
			class="{hideExtras
				? 'opacity-0'
				: 'opactiy-100'} transition-all duration-75 lg:p-2 p-1 bg-indigo-500 text-white hover:bg-indigo-600 hover:shadow-md shadow-black hover:text-white font-bold w-4/5 font-sans text-xl rounded-b-lg"
			>Subscribe!<button /></button
		>
		{#if showEmailError}
		<p class="text-red-500 text-lg">Enter Valid Email</p>
		{/if}
	</div>
</div>
