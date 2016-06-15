# Cyberview Template - Powered by Foundation 6

[![devDependency Status](https://david-dm.org/zurb/foundation-zurb-template/dev-status.svg)](https://david-dm.org/zurb/foundation-zurb-template#info=devDependencies)

This is the Cyberview Template for use with [Foundation for Sites](http://foundation.zurb.com/sites). It has a Gulp-powered build system with these features:

- Handlebars HTML templates with Panini
- Sass compilation and prefixing
- JavaScript concatenation
- Built-in BrowserSync server
- For production builds:
  - CSS compression
  - JavaScript compression
  - Image compression

## Installation

To use this template, your computer needs:

- [NodeJS](https://nodejs.org/en/) (0.12 or greater)
- [Git](https://git-scm.com/)

This template can be installed with the Foundation CLI, or downloaded and set up manually.


### Setup

To set up the template, first clone it with Git:

```bash
git clone https://narifhamid@bitbucket.org/cyberview/cyberview_web.git
```

Then open the folder in your command line, and install the needed dependencies:

```bash
cd projectname
npm install
bower install
```

Finally, run `npm start` to run Gulp. Your finished site will be created in a folder called `dist`, viewable at this URL:

```
http://localhost:8000
```

To create compressed, production-ready assets, run `npm run build`.


### Templating Mechanism

Inside the `src folder` you will find subfolders used for the templating engine:

- layouts
- pages
- partials

**Layouts** consist of the main HTML boilerplate to generate all the pages

**Pages** consist of the pages and its content that will be injected into the layouts

**Partials** consist of all the components that are used in either layout or page or both
