<script>
    export let title, description, date, url, image;
</script>

<!-- <a href={url} class="p-2"> -->
<div class=" flex flex-col w-96 h-96 justify-between">
    <div class="h-1/2">
        <img src={image} alt="{title} Image" class="object-cover rounded-t-lg">
    </div>
    <div class="flex flex-col bg-indigo-200 p-4 h-1/2 align-bottom rounded-b-lg">
        <p>{date}</p>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
</div>
<!-- </a> -->