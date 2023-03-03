---
layout: "../../../layouts/BlogPost.astro" #Constant
title: "I used Astro wrong..."
cardDescription: "I strayed far away from Astros intended use, and I'm ashamed. A cautionary tale."
description: "In this article, the author reflects on their experience building a website using the Astro framework. They admit to not fully utilizing Astro's best features and instead relying heavily on Svelte components, which caused the project not to be recognized as an \"Astro\" project on GitHub. The author also shares their thoughts on their component layout and styling choices, acknowledging that they need to improve their design process for future projects. Despite these challenges, the author enjoyed using Astro as a playground for experimenting with JavaScript, Svelte, and Tailwind, and plans to apply their learnings to upcoming projects, including a Scattergories game for the Svelte hackathon."
pubDate: "Mar 1, 2023"
heroImage: "/teaching.jpeg"
---



I did astro all wrong. I know they support integration with svelte and other frameworks for a reason but I feel bad that my project, created in astro, Isn't even marked as "Astro" in github because of the amount of svelte components I used. I didn't make use of their best features like Astro islands because essentially everything on the screen needed to load javascript in one way or another.. The only thing I kept that was actually useful was Astro's support for markdown files generated as pages, which is actually why I chose Astro in the first place. This was supposed to be more of a blog than a portfolio website and I went too far with creating fun components rather than focusing on the content, which is where Astro is meant to excel

On the same note, I don't necessarily like the way I layed out the components, either. Almost every component is used only on the index page, so it doesn't make me feel good that they are components, but a lot of the reason I made these components is because I didn't want to write vanilla javascript, like astro forces you to do. I wanted to use Svelte so I suppose that making these components helped me in doing that.

Final thing I didn't like about my project was the way I laid out styling. I didn't decide beforehand if my padding and margins were meant to be styled in the components or in the pages themselves. In doing this, I made it a scavenger hunt for where I padded my section for each specific component. This isn't too bad for now, given the size of the website, but for future projects I do need to figure out and then stick to a design for increased readability / maintainability. 

### Final thoughts.
This website was like a javascript, svelte, and tailwind playground for me, and I think that is reflected in the homepage. I messed around a lot with transitions and different quirks that a website really shouldn't have a ton of. I enjoyed the process but I wasted a lot of time messing around with different layouts, colors, and everything design wise. I think I need to put some time into learning something like Figma so I can increase my productivity for my next creations. I have two projects lined up for myself, and I'm very excited to take what I learned here and apply it to my next websites. I want to make a project for the svelte hackathon and think I will try making a [Scattergories](https://en.wikipedia.org/wiki/Scattergories) game, or at the very least, list generator (Although there is already a [beautiful one](https://swellgarfo.com/scattergories/) that has been created).