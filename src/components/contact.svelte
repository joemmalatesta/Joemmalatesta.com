<script>
  import SectionHeader from "./SectionHeader.svelte";
  let name, subject, message

</script>
<main>
    <SectionHeader title={"Contact"} />
    <div class="container">
    <form action="/">
        <h4>Name</h4>
        <input type="text">
        <h4>Email</h4>
        <input type="text">
        <h4>Subject</h4>
        <input type="text">
        <h4>Message</h4>
        <input type="text">
        <br>
        <button type="submit" class="p-2 bg-slate-700">Send</button>
    </form>
    </div>
</main>

<style>
    input {
        @apply outline-double
    }
</style>