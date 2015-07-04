---
title: Pattern Library
---

{{#markdown}}


# What are pattern libraries?
A pattern library is a collection of [user interface design patterns].  It breaks down the overall design into element that solve common design problems and can be reused consistently.  

A pattern library defines not only how an element of an application looks, but also provides simple examples of how each piece should be implemented.  This allows designers to give examples of how each element looks and feels, while providing developers with tools to bring the design to life.


### Atomic design principles
The [atomic design] principles outlined by [Brad Frost] have served as a significant influence to this pattern library.  The concept of breaking down a design into its components (atoms, molecules, templates & pages) lends itself very well to the goals of a pattern library and leveraged heavily throughout.

 Component    | Description
 ---------    | -----------
 **Atom**     | A component of your design that will not be broken down in to smaller pieces.  (button, text input, header, etc.)
 **Molecue**  | A composition of more than one Atom. (menu, navigation, contact form, etc.)
 **Template** | A common structure for building a page that is designed for reuse.  (blog post, news article, product detail, etc.)
 **Page**     | A single implementation for a specific use case that requires styles that intentionally deviate from the patterns defined in the library. (home page, any custom page)


In addition to the concepts of [atomic design] the pattern library follows some general principles for [CSS style guidance].


# What is a pattern?
A pattern consists of three basic elements (name & description, visual example, code example) that should fully describe the element.  Each pattern in the pattern library is defined individually and organized by it atomic design hierarchy.

 Element                         | Description
 -------                         | -----------
 <nobr>**Name & description**</nobr> | The narrative should describe the pattern and provide basic guidance for its use.  Any special circumstances or additional guidance should be included here.
 <nobr>**Visual example**</nobr>     | The visual should be provided as an implementation of both the HTML markup and CSS styles.  The combination of these elements should provide a desired visual display of the pattern.
 <nobr>**Code sample**</nobr>        | The sample should provides a snippet of markup that can be used to recreate the pattern.  Any implementation specific details should be removed from the code example.  

 *Atoms are often combined into related groups to reduce clutter and make the pattern library easier to navigate and consume.*


# Creating a pattern
At a high-level each pattern is created in the folder corresponding to its atomic hierarchy and is defined by two files (one for the pattern the other for the CSS styles).


### List Example
To create a new pattern for create a new pattern for a fictitious "Content List" atom that is intended to style lists of text within the body of some content:

*NOTE: In addition to following these steps you must also rebuild the pattern library in order see the changes described in this example.*


1. Create a new file ```src/atoms/contentList.md``` with the basic pattern elements (name & description, visual example, code example)

1. Create a new file ```src/atoms/contentList.scss``` with the styles for the list (bullet style, line height, indent size, etc.)


**contentList.md**
````md
\---
title: Content List
\---

\## Content List
The content list pattern is used within content pages to display textual information in a bulleted list.

\### Examples
<div class="library\__example">
  <ul class="content\__list">
    <li class="content\__list-item">The first list item</li>
    <li class="content\__list-item">The second list item</li>
    <li class="content\__list-item">The third list item</li>
  </ul>
</div>

\### Code
\```
<ul class="content\__list">
  <li class="content\__list-item"></li>
</ul>
\```
````

**contentList.scss**
```scss
content\__list {
  list-style-type: circle;
  margin: 10px 0px;
}

content\__list-item {
  padding: 10px;
}
```


# Building the pattern library
The pattern library build system uses the [Grunt] build automation tool to dynamically generate a static pattern library website.  Additionally the styles used to create the patterns are bundled into a single css file designed to be used in an application.

<nobr>Grunt Tasks</nobr>         | Description
------------------------         | -----------
<nobr>```grunt```</nobr>         | Builds the pattern library and standalone patterns, runs a webserver to host the site, and monitors files for changes.  Automatically rebuilds the site when changes are detected.
<nobr>```grunt build```</nobr>   | Builds the pattern library and standalone patterns.
<nobr>```grunt build```</nobr>   | Builds the pattern library.
<nobr>```grunt build```</nobr>   | Builds the patterns only.
<nobr>```grunt release```</nobr> | Creates a new release of the pattern library and commits and pushes the changes to the origin git repository.

To build the pattern library for the first time you must first install the node module dependencies using npm, then run the ```grunt build```.

```bash
npm install
grunt build
```


# Reviewing your work
The pattern library is generated as a static website.  For convenience a simple node webserver configuration is included, designed to host the library (http://localhost:8888) during active development.  This is also accomplished using [Grunt].  In fact the default grunt task is designed to support active  development of new patterns. The task will not only build the application, but also rebuild it changes are made.

```bash
npm install
grunt
```

The default task is also integrated with [LiveReload].  If you use the browser plugin any changes will also be automatically reflected in the browser.


# Using the patterns in an application
As stated earlier, the pattern library is a collection of user interface patterns.  These patterns are designed for use in an HTML based website or application.  The CSS styles generated from the pattern library are the primary asset used by an application.  Simply importing the styles from the pattern library will provide the application the look and feel defined in the pattern library.

The pattern library has been designed to be used as a dependency of your application.  Using either [Bower] or [npm] you may reference the pattern library you create.  this allows the application and pattern library to be related, yet remain loosely coupled to one another.

To use the pattern library in your application you need to install the pattern library as a dependency.  Then simply reference the CSS file located in ```bower_components``` folder.

```bash
bower install example-app-pattern-library --save-dev
```

```html
<style src="bower_components/example-app-pattern-library/dist/css/example-app-pattern-library.css"
```

**Public vs private dependencies**
In this example we reference the pattern library by name.  This requires that the name be defined in the bower.json in the pattern library but *more importantly* that the pattern library be [published to the public bower registry](http://bower.io/docs/creating-packages/).

Making your pattern library publicly accessible may not be desirable for some projects.  If you wish to work with a pattern library without making the code available to the world, follow the instructions for use as a private dependency.


## Private dependency instructions
With a little more work you can realize the benefits of the dependency models promoted by [Bower] and [npm] while keeping your code private.  In you application rather than simply referring to the pattern library by name, you will also need to point to the git repository that contains your pattern library.  

In this example, the application "example-app" defines a the "example-app-pattern-library" as its dependency.  The "example-app-pattern-library" exists in a private git repository on bitbucket.org owned by the user "jondoe".

**bower.json**
```json
{
  "name": "example-app",
  "devDependencies": {
    "example-app-pattern-library": "git@bitbucket.org:jondoe/example-app-pattern-library.git"
  }
}
```

**package.json**
```json
{
  "name": "example-app",
  "devDependencies": {
    "example-app-pattern-library": "git@bitbucket.org:jondoe/example-app-pattern-library.git"
  }
}
```

*NOTE: you will need to run ```bower install``` or ```npm install``` to install the pattern library as a dependency to your application.*


# Pattern library configuration
There are two primary modes that the pattern library is designed to support.  By default the pattern library generates all the assets to support both modes of operation.  Once you decide upon a desired mode, you may optimize the [Grunt] build process to only perform that tasks relevant to your preference.

### Pattern Library mode
This mode is designed for complete separation of the pattern library and your application.  The pattern library is generated as a static website, that you may choose to host and will provide a simple interface for navigating all the patterns in your library.

**Choose this mode if you need a simple pattern library with the least amount of effort.**

### Patterns mode
This mode is designed for tighter integration with your application.  The patterns are generated as standalone snippets of HTML, but no website structure is created.  This is ideal for more dynamic applications they need to inject information or behavior into the pattern library.  

**Choose this mode if you want the pattern library to demonstrate the *behaviors* of your application.**


# Creating a pattern library release
Once an application takes a dependency on the pattern library it becomes important manage revisions to the pattern library.  This allows the application to be assured that the styles will not change, unintentionally breaking the application design.

Following the [semantic versioning] principles helps keep this process simple and consistent.

[Grunt] tasks have been created to simplify this process.  In fact it's as simple as:

```bash
grunt build
grunt release
```

This sequence of commands will:

1. Build the pattern library
1. Copy the build to the dist folder
1. Increment (patch) the bower.json and package.json version numbers
1. Commit the changes locally
1. Add a tag with the version number
1. Push the changes to the git origin

There are additional [Grunt] tasks that follow the [SemVer] patterns and allow explicit control of the version increment.
```bash
grunt release-patch
grunt release-minor
grunt release-major
```

## Version usage
At some point you will probably wish to limit your application to a specific version of the pattern library.  The pattern library follows the standard versioning pattern for both [Bower] and [npm].  So simply specifying a version number will work if you have registered the pattern library in a public repository.  However if you have chosen to use a private repository you must specify the git [commit-ish](https://www.kernel.org/pub/software/scm/git/docs/#_identifier_terminology) that you are interested in.

```
git@bitbucket.org:jondoe/example-app-pattern-library.git#1.0.0
```

In this example the commit-ish is the tag of 1.0.0 create when the 1.0.0 release of the pattern library was established.

See the [npm documentation on URL dependencies](https://docs.npmjs.com/files/package.json#git-urls-as-dependencies) for more examples of how versions can be referenced.


# Templates & Snippets
Tokens described with the ```{ }``` should be replaced values relevant to the implementation.

### Pattern Template
````md
\---
title: {name}
\---

\## {name}
{description}

\### Examples
<div class="library\__example">
  {example-markup}
</div>

\### Code
\```
  {code-snippet}
\```
````


# Additional Notes
## Weird Quirks
* Adding a new scss file in `assets/sass` requires you to run `grunt styles` to see the changes




[atoms]: /atoms
[molecules]: /molecues
[pages]: /pages


[user interface design patterns]: http://ui-patterns.com/
[atomic design]: http://bradfrost.com/blog/post/atomic-web-design
[Brad Frost]: http://bradfrost.com
[CSS style guidance]: https://bitbucket.org/slalom-consulting/dallas-css-standards
[Grunt]: http://gruntjs.com/

[LiveReload]: http://livereload.com/

[Bower]: http://bower.io

[npm]: http://www.npmjs.com

[semantic versioning]: http://semver.org/
[SemVer]: http://semver.org/
{{/markdown}}
