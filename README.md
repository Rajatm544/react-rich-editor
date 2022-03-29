<h1 align="center">
<img src="https://user-images.githubusercontent.com/42696800/160535822-5391d81a-9256-4ff1-8dd6-3e1a9e67966d.png" alt="logo" width="30" height="30" />
Rich Editor
<p align='center'>

<img src='https://img.shields.io/github/license/Rajatm544/react-rich-editor?style=flat-square' alt='license'>
<img src='https://img.shields.io/github/last-commit/Rajatm544/react-rich-editor' alt='last commit'>
<img src='https://img.shields.io/maintenance/yes/2022'
<img src='https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat' alt='maintained'>
</p>
	
</h1>

A rich text editor built using React and Slate as part of the internship assignment for Plotline. The app includes a toolbar with several editing options. An additional functionality apart from the rest of the edit options is the ability to highlight text and display them as tags. The problem statement file can be found [here](https://www.figma.com/file/THHsLsoa8vHW4JKPqXMVB0/Frontend-PS?node-id=201%3A67)

## Getting Started

-   Fork this repo and run the `git clone <forked repo>` command from your terminal/bash.
-   Run `npm install`
-   Run `npm start` to get started on localhost

## Demo

The app has been hosted on Netlify [here](https://reactricheditor.netlify.app/). 

<div align="center">

<img src="https://user-images.githubusercontent.com/42696800/160537599-2d1e9df4-2b37-400d-a4cd-f15600095a56.png" alt="home page" width="534" height="300" />
<img src="https://user-images.githubusercontent.com/42696800/160537605-aa095f72-8417-4cb5-9006-a22eebb76cc6.png" alt="login" width="534" height="300" />

</div>

## Info

-   The rich editor is built using React.js, Slate.js and Materialize CSS
-   The highlighted tags show up in the container beside the main editor component
-   The editor supports hot keys for **bold**, _italic_, underline and `code`.
-   The last option in the toolbar is used for highlighting text
-   There are 30 colors assigned randomly for the different lines of text
-   The user authentication and authorisation has been implemented in two ways:

## Potential Improvements

-   Adding a hovering toolbar for easy access to frequently used tools
-   Responsive design
-   More hot key support
-   More color options for text highlight to avoid issues when huge documents are edited

Any more suggestions are always welcome in the PRs!

## Tools Used

-  [React.js](https://reactjs.org/): A JavaScript library for building user interfaces.
- [Slate.js](https://www.slatejs.org): A completely customizable framework for building rich text editors.
- [Materialize CSS](https://materializecss.com/): A modern responsive front-end framework based on Material Design
