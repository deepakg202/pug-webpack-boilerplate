# NodeJs Web Page Boilerplate

## Boilerplate to develop and maintain static web pages faster and efficiently

### Features:-
	- Customizable Bootstrap (with SCSS)
	- Pug Template Engine
	- Configurable Webpack
	- Deploy to Github Pages with one command

### Instructions:-
	- clone this repo
	- remove the `.git` folder (Make sure you can see hidden files and folders)
	- Execute `git init` and set git accordingly or simply copy the `.git` folder of your repo
	- Execute `npm init` and change `package.json` accordingly
	- Execute `npm install`

### Commands:-
	`npm run dev`: Runs the development server at localhost:3000
	`npm run build`: Builds the file in /build
	`npm run deploy-gh`: Builds the file and pushes it to `gh-pages` branch of your repo 

### Note:-
	- Static Files (ie. images, js, css, etc) are served directly from the `public` folder
	- Change bootstrap variables in `src/custom.scss`
	- To develop a new page create `[filename].twig` in src folder and add `[filename]` in the array in `src/filenames.js`
	- Clicking on Anchor elements will not refresh the page (For Single Page Experience). For default behaviour, you can add `classic="yes"` attribute in anchor tags or you can change `index.js`.



---
---
