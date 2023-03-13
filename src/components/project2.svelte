<script>
	import ProjectCard from "./ProjectCard.svelte";
	import ProjectCard2 from "./projectCard2.svelte";
	import SectionHeader from "./SectionHeader.svelte";
	import { slide, fade, crossfade, fly } from "svelte/transition";
	import { flip } from "svelte/animate";

	const projects = [
		{
			id: 0,
			title: "Auto Typer",
			tech: "Python, Selenium, MatPlotLib",
			description:
				"Auto complete a typing test at a specified WPM, taking into account computational delays",
			url: "https://github.com/joemmalatesta/Auto-Typer",
			buttonText: "Learn more",
			image: "projects/auto-typer.jpg",
			logos: ["python.png", "selenium.png", "matplotlib.png"],
			colors: ["#8fa770", "#b8a6c1"]
		},
		{
			id: 1,
			title: "Personal Website V1",
			tech: "HTML, CSS, Bootstrap, PHP, MySQL",
			description:
				"The first iteration of my website! My introduction to front end development.",
			url: "https://dev.joemmalatesta.com/",
			buttonText: "Visit old site",
			image: "projects/old-website.jpg",
			logos: ["bootstrap.png", "css.png", "html.png", "github.svg"],
			colors : ["#70a1b1", "#1d1d1d"]
		},
		{
			id: 2,
			title: 'Discord "Yvy" Bot',
			tech: "Python, REST APIs, MongoDB",
			description:
				"Commands return concise information regarding osu! plays, and players.",
			url: "https://github.com/joemmalatesta/yvy-discord-bot",
			buttonText: "Learn more",
			image: "projects/yvy-bot.jpg",
			logos: ["python.png", "pi.png", "mongo.png", "osu.png"],
			colors : ["#33387d", "#424659"]
		},
		{
			id: 3,
			title: "CaptChart",
			tech: "Javascript, Chartjs, Bootstrap",
			description:
				"Captcha completed by correctly identifying parts of a linear graph",
			url: "https://joemmalatesta.github.io/CapChart/",
			buttonText: "Live demo",
			image: "projects/capchart.jpg",
			logos: ["js.png", "bootstrap.png", "github.svg", "chart.png"],
			colors : ["#e89850", "#c8bbde"]
		},
	];
	let active;
	let delay = 0;
</script>

<SectionHeader
	title={"Projects"}
	subtitle={"blood, sweat, and carpal tunnel has lead me to this"}
/>

<div class="lg:flex flex-col hidden justify-center items-center relative">
	{#if projects[active]}
	<div class="p-6 rounded-lg xl:w-3/4 w-full "
	style="background: linear-gradient(to right, {projects[active].colors[0]} 0%, {projects[active].colors[1]} 100%)"
	in:fade
	out:fade>
		<ProjectCard2
			title={projects[active].title}
			tech={projects[active].tech}
			description={projects[active].description}
			url={projects[active].url}
			buttonText={projects[active].buttonText}
			image={projects[active].image}
			active={true}
			colors={projects[active].colors}
		/>
	</div>
	{/if}
	<div class="flex items-center {projects[active] ? "justify-between" : "flex-wrap justify-center"}">
		{#each projects as project, index}
			{#if index != active}
				<div
					class="m-4"
					on:click={() => {
						active = index;
					}}
					on:keypress={() => {
						active = index;
					}}
				>
					<ProjectCard2
						title={project.title}
						tech={project.tech}
						description={project.description}
						url={project.url}
						buttonText={project.buttonText}
						image={project.image}
						active={false}
						logos={project.logos}
					/>
				</div>
			{/if}
		{/each}
	</div>
</div>



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
			phoneScreen={true}
			logos={project.logos}
		/>
	{/each}
</div>
