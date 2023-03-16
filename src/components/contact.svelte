<script>
	import Modal from "./Modal.svelte";
	import SectionHeader from "./SectionHeader.svelte";
	let name, email, message;
	let showError = false;
	let showEmailError = false;
	let modalType = "";
	function sendEmail() {
		if (validateForm() == false) {
			console.log("here");
			return;
		}
		const payload = {
			name: name,
			email: email,
			message: message,
		};
		fetch("/api/contact", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(payload),
		})
			.then((response) => response.json())
			.then((data) => {
				modalType = data.message;
			})
			.catch((error) => {
				console.error(error);
			});
		name = "";
		email = "";
		message = "";
	}

	function validateForm() {
		showError = false
		showEmailError = false
		if (!name || !email || !message) {
			showError = true;
			return false;
		}
		if (!email.includes("@") || !email.includes(".")) {
			showEmailError = true;
			return false;
		}
		return true;
	}
</script>

<Modal bind:modalType />

<main>
	<SectionHeader title={"Contact"} subtitle={"Say what you gotta say"} />
	<div class="flex justify-center">
		<form method="POST" class="mx-3 flex flex-col md:w-2/3 w-full">
			<!-- Email and Name -->
			<div class="flex flex-col xl:flex-row">
				<div class="xl:w-full xl:mr-5 m-2">
					<label class="text-sm text-slate-300 my-2" for="name">Name</label>
					<input
						type="text"
						name="name"
						id="name"
						bind:value={name}
						placeholder="Jane Goodall"
						class="bg-slate-300 placeholder:text-slate-800 appearance-none ring-2 ring-slate-600 p-2 focus:outline-none focus:ring-slate-200/80 focus:placeholder:opacity-0 placeholder:transition-all placeholder:duration-200 rounded-sm  drop-shadow-lg text-black w-full"
					/>
				</div>
				<div class="xl:w-full m-2">
					<label class="text-sm text-slate-300 my-2" for="email">Email</label>
					<input
						type="email"
						name="email"
						id="email"
						bind:value={email}
						placeholder="example@gmail.com"
						class="bg-slate-300 placeholder:text-slate-800 appearance-none ring-2 ring-slate-600 p-2 focus:outline-none focus:ring-slate-200/80 focus:placeholder:opacity-0 placeholder:transition-all placeholder:duration-200 rounded-sm drop-shadow-lg text-black w-full"
					/>
					{#if showEmailError}
						<h6 class="text-red-500 text-sm m-px">
							Please enter a valid email
						</h6>
					{/if}
				</div>
			</div>

			<div class="flex flex-col mt-3 m-2">
				<label class="text-sm text-slate-300 my-1" for="message"
					>Message</label
				>
				<textarea
					type="text"
					name="message"
					id="message"
					bind:value={message}
					placeholder="Hey Joe, this is totally random but..."
					class="bg-slate-300 placeholder:text-slate-800 appearance-none ring-2 ring-slate-600 p-2 focus:outline-none focus:ring-slate-200/80 focus:placeholder:opacity-0 placeholder:transition-all placeholder:duration-20 rounded-sm  drop-shadow-lg text-black h-40"
				/>
			</div>
			{#if showError}
				<h6 class="text-red-500 text-sm mx-2">All fields must be filled out</h6>
			{/if}
			<button
				class="p-2 bg-sky-400 hover:bg-sky-500 text-white rounded-lg"
				on:click|preventDefault={sendEmail}>Get in Touch</button
			>
		</form>
	</div>
</main>
