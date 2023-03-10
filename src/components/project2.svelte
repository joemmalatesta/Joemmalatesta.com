<script>
	import ProjectCard from "./ProjectCard.svelte";
	import ProjectCard2 from "./projectCard2.svelte";
	import SectionHeader from "./SectionHeader.svelte";
	import { slide, fade, crossfade, fly } from "svelte/transition";
	import { flip } from "svelte/animate";
	import { each } from "svelte/internal";

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
		},
	];
	let active = 0;
	let delay = 0;
</script>

<SectionHeader
	title={"Projects"}
	subtitle={"blood, sweat, and carpal tunnel has lead me to this"}
/>

<div class="lg:flex flex-col hidden justify-center items-center">
	<div class="p-6 bg-slate-400 from-rose-200 to-rose-400 rounded-lg w-3/4 bg-opacity-50 ring-rose-400 ring-4">
		<ProjectCard2
			title={projects[active].title}
			tech={projects[active].tech}
			description={projects[active].description}
			url={projects[active].url}
			buttonText={projects[active].buttonText}
			image={projects[active].image}
			active={true}
		/>
	</div>
	<div class="flex justify-center items-center">
		{#each projects as project, index}
			{#if index != active}
				<div
					class="scale-[.8] hover:scale-90 transition-all duration-300"
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
					/>
				</div>
			{/if}
		{/each}
	</div>
</div>

<!-- 

<div class="justify-center items-center hidden lg:flex flex-col">
	{#each projects as project, index (project.id)}
	
		{#if index == active}<div>
		<div>
			<ProjectCard2
				title={project.title}
				tech={project.tech}
				description={project.description}
				url={project.url}
				buttonText={project.buttonText}
				image={project.image}
				active={true}
			/>
		</div>
	</div>
		{:else}
		<div class="flex">
		<div class=""
		on:click={() => {active = index}}
		on:keypress={() => {active = index}}>
			<ProjectCard2
				title={project.title}
				tech={project.tech}
				description={project.description}
				url={project.url}
				buttonText={project.buttonText}
				image={project.image}
				active={false}
			/>
		</div>
	</div>
		{/if}
	{/each}
</div>
 -->

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
		/>
	{/each}
</div>
