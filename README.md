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
Currently, this site is just simply hosted on a Vercel instance for free. I am
currently in the process of migrating it to my own AWS instance, for practice
with AWS and docker. Eventually, it will be a container running on a personal
AWS instance, behind an nginx proxy under the main route. nginx will also be
running on its own container.