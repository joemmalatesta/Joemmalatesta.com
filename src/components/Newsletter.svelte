<script>
	let email = "";

	function sendEmail() {
		console.log(`sent email to ${email}`);
	}
</script>

<div class="flex flex-col text-center">
	<h1 class="m-0 p-0">Sign up for my Newsletter!</h1>
	<p class="m-0 p-0">I post high quality Content I promise {email}</p>
</div>
<div class="flex flex-col md:flex-row mx-2 md:mx-6">
	<input
		bind:value={email}
		class="md:w-4/5 bg-violet-300/80 focus:placeholder:opacity-0 p-1 rounded-md"
		type="text"
		placeholder="Email here please..."
	/>
	<div class="md:w-1/5  bg-violet-400 flex justify-center p-1 rounded-md">
		<button on:click={sendEmail}>Subscribe</button>
	</div>
</div>
