<script>
    let email = ""
	let outputMessage
    let showEmailError = false
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	function unsubscribeClicked() {
		if (validateEmail() == false) {
			return;
		}
		const payload = {
			email: email,
		};
		fetch("/api/unsubscribe", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(payload),
		})
			.then((response) => response.json())
			.then((data) => {outputMessage = data.message})
			.catch((error) => {
				console.error(error);
			});
		email = "";
	}

	function validateEmail() {
		showEmailError = false;
		if (!emailRegex.test(email)) {
			showEmailError = true;
			return false;
		}
	}
</script>


<!-- DEFO MAKE THEM VALIDATE THIS SHIT. -->
<div class="flex flex-col justify-center items-center">
	<form action="" class="w-80 flex flex-col">
        <input class="text-black p-2 text-lg rounded-t-md placeholder:text-center" type="text" bind:value={email} placeholder="Your email"/>
        <button class="z-20 drop-shadow-md text-white p-2 text-lg bg-indigo-500 hover:bg-indigo-600 rounded-b-md" on:click|preventDefault={unsubscribeClicked}>Unsubscribe :(</button>
        {#if showEmailError}
            <p class="text-red-500">Enter a valid email.</p>
        {/if}
    </form>
	<h4 class="pt-5 text-lg {outputMessage? "" : "hidden"}">{outputMessage}</h4>
</div>
