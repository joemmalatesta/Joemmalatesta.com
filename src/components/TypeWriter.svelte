<script>
	import { onMount } from "svelte";

	//Use in async
	const sleep = (milliseconds) => {
		return new Promise((resolve) => setTimeout(resolve, milliseconds));
	};

	export let words = [
		"innovation",
		"potential",
		"creativity",
		"progress",
		"challenge",
		"possibility",
	];
	let output = "";
	let wordIndex = 0;
	let letterIndex = 0;

	//Delete word letter by letter
	async function deleteWord() {
		let word = words[wordIndex];
		//Delete letters one at a time, with a wait
		for (let i = word.length - 1; i >= 0; i--) {
			output = output.slice(0, -1);
			await sleep(50);
		}
		letterIndex = 0;
	}

	async function type() {
		//initial part could probably be put in a different function
		let word = words[wordIndex];
		while (letterIndex < word.length) {
			output += word[letterIndex];
			letterIndex++;
			await sleep(50);
		}
		// Word sits for a second before deleting
		await sleep(1000);
		await deleteWord();
		await sleep(200);

		// Loop through all possible words and restart at end
		if (wordIndex < words.length - 1) {
			wordIndex++;
		} else {
			wordIndex = 0;
		}

		//Loop forever!
		await type();
	}

	onMount(async () => {
		await sleep(200);
		await type();
	});
</script>

{output}<span class=" blink">|</span>

<!-- 
THIS IS BEST PRACTICE FOR SVELTE ACCORDING TO CHATGPT BUT NOT READABLE FOR ME BUT KEEP IN MIND IF PERFORMANCE ISSUES



import { onMount, writable } from 'svelte';

const sleep = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));
const words = ["innovation", "the future", "creativity", "challenge", "possibility"];

const output = writable("");
let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function deleteWord() {
    let word = words[wordIndex];
    for (let i = word.length; i >= 0; i--) {
        output.update(o => o.slice(0, -1));
    }
}

onMount(() => {
    function type() {
        let word = words[wordIndex];
        if (isDeleting) {
            deleteWord();
            isDeleting = false;
        } else {
            let i = 0;
            for (i; i < word.length; i++) {
                output.update(o => o + word[i]);
            }
            letterIndex = i;
            isDeleting = true;
        }
        if (wordIndex === words.length - 1) {
            wordIndex = 0;
        } else {
            wordIndex++;
        }
        setTimeout(type, 1000);
    }

    type();
});




 -->

 
<style>
	.blink {
		animation: blink-animation 0.7s steps(5, start) infinite;
		-webkit-animation: blink-animation 0.7s steps(5, start) infinite;
	}
	@keyframes blink-animation {
		to {
			visibility: hidden;
		}
	}
	@-webkit-keyframes blink-animation {
		to {
			visibility: hidden;
		}
	}
</style>
