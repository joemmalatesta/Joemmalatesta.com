<script>
    export let title
    export let description
    export let tech
    export let url
</script>



<div class="container bg-gradient-to-r from-rose-400 to-sky-300 rounded-lg p-6">
    <h2 class="text-2xl">{title}</h2>
    <p class="text-md mb-2">{tech}</p>
    <p class="mb-6 text-lg">{description}</p>
    <a href="{url}" target="_blank" rel="noreferrer" class="bg-neutral-700 px-4 py-2 rounded-full text-white font-medium hover:bg-indigo-800 transition ease-in-out duration-150">Learn More</a>
</div>

