<script>
  import SectionHeader from "./SectionHeader.svelte";
  let name, email, message
  function sendEmail(){
    console.log("Email successfully sent!")
  }
</script>
<main>
    <SectionHeader title={"Contact"} subtitle={"Say what you gotta say"} />
    <div class="flex justify-center">
    <form action="/" class="mx-3 flex flex-col lg:w-1/3 w-full">
            <input type="text" bind:value={name} placeholder="Name" class="appearance-none ring ring-neutral-700 p-2 focus:outline-none focus:ring-neutral-800 focus:placeholder:opacity-0 rounded-md m-2">
            <input type="text" bind:value={email} placeholder="Email" class="appearance-none ring ring-neutral-700 p-2 focus:outline-none focus:ring-neutral-800 focus:placeholder:opacity-0 rounded-md m-2">
            <input type="text" bind:value={message} placeholder="Message" class="appearance-none ring ring-neutral-700 p-2 focus:outline-none focus:ring-neutral-800 focus:placeholder:opacity-0 rounded-md m-2 h-40 pt-2">
          <button type="submit" class="p-2 bg-rose-400 hover:bg-rose-500 text-white rounded-lg" on:click={sendEmail}>Get in Touch</button>
    </form>
    </div>
</main>
