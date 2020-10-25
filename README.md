# NodeJs Web Page Boilerplate

## Boilerplate to develop and maintain static web pages faster and efficiently

### Features:-
	- Customizable Bootstrap (with SCSS)
	- Twig Template Engine
	- Configurable Webpack

### Usage:-
	- clone this repo
	- cd into the directory
	- Execute `npm install`

### Note:-
	- Static Files (ie. images, js, css, etc) are served directly from the `public` folder
	- Change bootstrap variables in `src/custom.scss`
	- To develop a new page create `[filename].twig` in src folder and add `[filename]` in the array in `src/filenames.js`
	- Clicking on Anchor elements will not refresh the page (For Single Page Experience). For default behaviour, you can add `classic="yes"` attribute in anchor tags or you can change `index.js`.

### Commands:-
	`npm run dev`: Runs the development server
	`npm run build`: Builds the files in /build

---
---
