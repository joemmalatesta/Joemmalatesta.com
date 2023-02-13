<script>
  import SectionHeader from "./SectionHeader.svelte";
  let name, subject, message
  function sendEmail(){
    console.log("Email successfully sent!")
  }
</script>
<main>
    <SectionHeader title={"Contact"} />
    <div class="container flex flex-row justify-center items-center">
    <form action="/" class="mx-3 md:mx-auto">
        <div class="md:flex flex-row">
            <input type="text" placeholder="Name" class="outline-double p-2 focus:placeholder:opacity-0 focus:transition-all rounded-md m-1 w-full md:w-auto">
            <input type="text" placeholder="Email" class="outline-double p-2 focus:placeholder:opacity-0 rounded-md m-1 w-full md:w-auto">
        </div>
        <div class="md:flex flex-col">
            <input type="text" placeholder="Subject" class="outline-double p-2 focus:placeholder:opacity-0 rounded-md m-1 w-full md:w-auto">
            <input type="text" placeholder="Message" class="outline-double p-2 focus:placeholder:opacity-0 rounded-md m-1 w-full md:w-auto">
        </div>
        <button type="submit" class="p-2 bg-neutral-800 hover:bg-neutral-900 border border-red-200 w-full text-white rounded-lg" on:click={sendEmail()}>Send</button>
    </form>
    </div>
</main>
