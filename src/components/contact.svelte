<script>
  import SectionHeader from "./SectionHeader.svelte";
  let name, subject, message

</script>
<main>
    <SectionHeader title={"Contact"} />
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
        <button type="submit">Send</button>
    </form>
</main>

<style>
    input {
        @apply outline-double
    }
</style>