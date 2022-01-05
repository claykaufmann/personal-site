---
title: Personal Website
description: My personal coding portfolio
github: https://github.com/claykaufmann/personal-site
---

This is my personal website. It houses my current resume, a quick blurb about me, and contains links towards my projects.

Its primary purpose is to give readers information about me, and where to find work that I have done.

## Tech Stack

- NextJS/React in typescript
- ChakraUI and SCSS for styling
- Docker

## Development

I used this project as a way to learn typescript, as well as NextJS. I had worked with react before, however I did not have experience with typescript, or NextJS beyond the basics.

Currently, not much advanced NextJS is used, mainly just one section of dynamic routing used to handle this projects section. As time goes on, and I have more time to develop, I plan to add a blog section to this website. That being said, the simplicity of the website makes it much easier to maintain, which I personally value in a portfolio site, as it does not need to do much.

### Code style/lint

Formatting is handled by Prettier, and linting is handled by ESLint. The config files can be found at the GitHub repo, which can be found by clicking on the button below.

## Deployment

The website is hosted in my own AWS instance, within a docker container. In my AWS setup, I use multiple docker containers to containerize all applications. On top of that, an nginx reverse proxy handles all incoming requests, routing them to the specific container as needed based on the subdomain. If there is no subdomain on the URL, or the subdomain is `www`, nginx routes the request to this website, found at claykaufmann.com.
