<script>
    export let title, description, date, url, image;
</script>

<!-- <a href={url} class="p-2"> -->
<div class="outline flex flex-col w-60 h-88 rounded-lg">
    <div>
        <img src={image} alt="{title} Image" class="">
    </div>
    <div class="flex flex-col bg-rose-200 p-4">
        <p>{date}</p>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
</div>
<!-- </a> -->