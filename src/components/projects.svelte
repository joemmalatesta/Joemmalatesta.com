<script>
import ProjectCard from "./ProjectCard.svelte";
import SectionHeader from "./SectionHeader.svelte";
import { slide, fade, crossfade, fly } from "svelte/transition";

let active = null
const projects = [
	{
		title: "Auto Typer",
		tech: "Python, Selenium, MatPlotLib",
		description:
			"Auto complete a typing test at a specified WPM, taking into account computational delays",
		url: "https://github.com/joemmalatesta/Auto-Typer",
		buttonText: "Learn more",
		image: "/auto-typer.jpg",
	},
	{
		title: "Personal Website V1",
		tech: "HTML, CSS, Bootstrap, PHP, MySQL",
		description:
			"The first iteration of my website! My introduction to front end development.",
		url: "https://dev.joemmalatesta.com/",
		buttonText: "Visit old site",
		image: "/old-website.jpg",
	},
	{
		title: 'Discord "Yvy" Bot',
		tech: "Python, REST APIs, MongoDB",
		description:
			"Commands return concise information regarding osu! plays, and players.",
		url: "https://github.com/joemmalatesta/yvy-discord-bot",
		buttonText: "Learn more",
		image: "/yvy-bot.jpg",
	},
	{
		title: "CaptChart",
		tech: "Javascript, Chartjs, Bootstrap",
		description:
			"Captcha completed by correctly identifying parts of a linear graph",
		url: "https://joemmalatesta.github.io/CapChart/",
		buttonText: "Live demo",
		image: "/capchart.jpg",
	},
];
</script>


<SectionHeader title={"Projects"} subtitle={"blood, sweat, and carpal tunnel has lead me to this"}/>


{#if projects[active]} 
<!-- active = 0 == false so ++ type beat -->
<div class="justify-center hidden lg:flex flex-row">
	<!-- active item -->
	<div class="w-2/3 mx-5 my-3 h-max"
	>
			<ProjectCard
					title={projects[active].title}
					tech={projects[active].tech}
					description={projects[active].description}
					url={projects[active].url}
					buttonText={projects[active].buttonText}
					image={projects[active].image}
					active={true}
				/>
	</div>

	<!-- not active -->
	<div class="w-1/4">
		{#each projects as project, index}
			{#if index != active}
				<div class="my-3"
				on:click={() => {active = index}}
				on:keypress={() => {active = index}}
				transition:slide={{duration: 500}}
				>
					<ProjectCard
						title={project.title}
						tech={project.tech}
						description={project.description}
						url={project.url}
						buttonText={project.buttonText}
						image={project.image}
						active={false}
					/>
				</div>
			{/if}
		{/each}
	</div>
</div>
{/if}



<!-- Original place. -->
{#if active == null}
<div class="grid-cols-1 gap-4 md:grid-cols-2 hidden lg:grid">
	{#each projects as project, index}
			<div
			on:click={() => {active = index}}
			on:keypress={() => {active = index}}
			>
				<ProjectCard
					title={project.title}
					tech={project.tech}
					description={project.description}
					url={project.url}
					buttonText={project.buttonText}
					image={project.image}
				/>
			</div>
		{/each}
</div>
{/if}




<!-- Maybe use for phone sizes.  -->

<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:hidden">
	{#each projects as project}
				<ProjectCard
					title={project.title}
					tech={project.tech}
					description={project.description}
					url={project.url}
					buttonText={project.buttonText}
					image={project.image}
					phoneScreen = {true}
				/>
		{/each}
</div>