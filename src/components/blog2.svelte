<script>
	import BaseHead from "../components/BaseHead.astro";
	import Footer from "../components/Footer.astro";
	import BlogCard from "../components/blogCard.svelte";
	import SectionHeader from "./SectionHeader.svelte";
	import { crossfade, fade } from "svelte/transition";
	import BlogCard2 from "./blogCard2.svelte";
	import { flip } from "svelte/animate";
  export let postTypes;
  export let posts;
  let active = 1;
  export let quotes;

  let activePosts = posts[0].slice(0, 3);

  function handleClick(index) {
    console.log(activePosts[0].frontmatter.title);
    if (index == 1) {
      return;
    }
    if (index == 0) {
      rotateRight();
    }
    if (index == 2) {
      rotateLeft();
    }
  }

  function rotateLeft() {
    const temp = activePosts[0];
    for (let i = 0; i < activePosts.length - 1; i++) {
      activePosts[i] = activePosts[i + 1];
    }
    activePosts[activePosts.length - 1] = temp;

  }

  function rotateRight() {
    const temp = activePosts[activePosts.length - 1];
    for (let i = activePosts.length - 1; i > 0; i--) {
      activePosts[i] = activePosts[i - 1];
    }
    activePosts[0] = temp;

  }
</script>

<main>
  <SectionHeader title={"Blog"} subtitle={"A place for my thoughts about things"} />

  <div class="flex justify-center items-center">
    {#each activePosts as post, index}
    <div
      class="-mx-7 {index == 1 ? 'scale-105 z-50' : 'scale-90 opacity-70'}"
      on:click={() => handleClick(index)}
      on:keypress={() => handleClick(index)}
    >
      <BlogCard2
        title={post.frontmatter.title}
        description={post.frontmatter.cardDescription}
        date={post.frontmatter.pubDate}
        url={post.url}
        image={post.frontmatter.heroImage}
      />
    </div>
    {/each}
  </div>
</main>
