<script>
	// I think I went about rendering the modals completely wrong but only time will tell. It feels awkward calling it in one component and hiding it in another, though.
	//Okay yeah so that don't work. showModal never goes back to false in the contact component.
	import { fade } from "svelte/transition";
	export let modalType;
</script>

<!-- Success -->
{#if modalType == "success"}
	<div
		transition:fade={{ duration: 200 }}
		class="fixed z-50 inset-0 overflow-y-auto backdrop-brightness-50"
	>
		<div class="flex items-center justify-center min-h-screen px-4">
			<div class="bg-white rounded-lg overflow-hidden shadow-xl p-6">
				<div class="my-2 flex flex-col items-center justify-center">
					<img src="/checkmark.svg" alt="checkmark" />
					<h2 class="text-xl md:text-3xl font-bold text-center">
						Success
					</h2>
				</div>
				<div class="flex flex-col items-center justify-center">
					<p class="text-sm md:text-lg text-center">
						I'll get back to you in a day or two
					</p>
					<button
						on:click={() => {
							modalType = "";
						}}
						class="py-2 px-12 rounded-lg my-2 bg-rose-400 text-white hover:bg-rose-500 w-full"
						>Sounds good</button
					>
				</div>
			</div>
		</div>
	</div>
{/if}

<!-- Failure -->
{#if modalType == "failure"}
	<div
		transition:fade={{ duration: 200 }}
		class="fixed z-50 inset-0 overflow-y-auto backdrop-brightness-50"
	>
		<div class="flex items-center justify-center min-h-screen px-4">
			<div class="bg-white rounded-lg overflow-hidden shadow-xl p-6">
				<div class="my-2 flex flex-col items-center justify-center">
					<img src="/x.svg" alt="checkmark" />
					<h2 class="text-xl md:text-3xl font-bold text-center">Oh no!</h2>
				</div>
				<div class="flex flex-col items-center justify-center">
					<p class="text-sm md:text-lg text-center">
						It seems my messenger has misplaced your note
					</p>
					<p class="md:text-sm text-xs my-1">
						You can always try again, or <span
							><a
								href="mailto:joemmalatesta@gmail.com"
								class="underline underline-offset-2 ">contact me directly</a
							></span
						>
					</p>
					<button
						on:click={() => {
							modalType = "";
						}}
						class="py-2 px-12 rounded-lg my-2 bg-rose-400 text-white hover:bg-rose-500"
						>Sigh..</button
					>
				</div>
			</div>
		</div>
	</div>
{/if}
