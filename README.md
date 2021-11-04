# Personal Site  
This is my personal site, built with NextJS.

## Languages
- TypeScript for React/NextJS development
- ChakraUI / SCSS for styling

## Docker
Build:
`docker build . -t personal-site`  
Run:
`docker run -p 3000:3000 personal-site`

## How is the site deployed?
This site is hosted on an AWS Lightsail instance behind an nginx reverse-proxy.
Both nginx and the site are containerized with Docker, and the containers are
run together with docker-compose. I am currently planning on setting some actions
to auto redeploy the site on push, and run some tests.