<script>
	import Modal from "./Modal.svelte";
	import SectionHeader from "./SectionHeader.svelte";
	let name, email, message;
	let showError = false
	let showEmailError = false
	let showModal = false
	let modalType = 'success'
	function sendEmail() {
		const payload = {
		name: name,
		email: email,
		message: message
		};
		fetch("/api/contact", {
			method: "POST",
			headers: {
        		"Content-Type": "application/json"
    		},
			body: JSON.stringify(payload)
		})	.then(response => response.json())
			.then(data => {
				modalType = data.message
				showModal = true
			})
			.catch(error => {
				console.error(error);
			});
		name = ""; email= ""; message= "";
	}

	function validateForm() {
		if (!name || !email || !message) {
			showError = true
			return
		}
		if (!email.contains("@") || !email.contains(".")){
			showEmailError = true
			return
		}
		sendEmail()
	}
</script>

{#if showModal}
<Modal type={modalType} />
{/if}
<main>
	<SectionHeader title={"Contact"} subtitle={"Say what you gotta say"} />
	<div class="flex justify-center">
			<form method="POST" class="mx-3 flex flex-col md:w-2/3 w-full" >
			<!-- Email and Name -->
			<div class="flex flex-col xl:flex-row">
				<div class="xl:w-full xl:mr-5 m-2">
					<label class="text-sm text-rose-500 my-2" for="name">Name</label>
					<input
						type="text"
						name="name" id="name"
						bind:value={name}
						placeholder="Drahkma Smeltorge"
						class="appearance-none ring ring-neutral-700/80 p-2 focus:outline-none focus:ring-neutral-800/80 focus:placeholder:opacity-0 placeholder:transition-all placeholder:duration-200  rounded-md w-full"
					/>
				</div>
				<div class="xl:w-full xl:mr-5 m-2">
					<label class="text-sm text-rose-500 my-2" for="email">Email</label>
					<input
						type="email" 
						name="email" id="email"
						bind:value={email}
						placeholder="example@gmail.com"
						class="appearance-none ring ring-neutral-700/80 p-2 focus:outline-none focus:ring-neutral-800/80 focus:placeholder:opacity-0 placeholder:transition-all placeholder:duration-200  rounded-md w-full"
					/>
				{#if showEmailError}
				<h6 class="text-red-700 text-sm mx-2">Please enter a valid email</h6>
				{/if}
				</div>
			</div>


			<div class="flex flex-col mt-3 m-2">
        <label class="text-sm text-rose-500 my-1" for="message">Message</label>
				<textarea
					type="text"
					name="message" id="message"
					bind:value={message}
					placeholder="Hey Joe, this is totally random but..."
					class="appearance-none ring ring-neutral-700/80 p-2 focus:outline-none focus:ring-neutral-800/80 focus:placeholder:opacity-0 placeholder:transition-all placeholder:duration-200 rounded-md h-40"
				/>
			</div>
			{#if showError}
			<h6 class="text-red-700 text-sm mx-2">All fields must be filled out</h6>
			{/if}
			<button
				class="p-2 bg-rose-400 hover:bg-rose-500 text-white rounded-lg"
				on:click|preventDefault={sendEmail}>Get in Touch</button
			>
		</form>
	</div>
</main>
