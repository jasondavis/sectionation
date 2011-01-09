## About

Sectionation is a small jQuery plugin that allows a single page to be sectioned up, linking those sections to navigation. The navigation will auto-highlight based on which section the user has scrolled to, and clicking the navigation will animate scrolling to the top of that specific section.

### Specificity

For now, the usage is specific and there aren't a great deal of options to tinker with. That may change in the future.

## Usage

Sectionation requires jQuery (tested with 1.4.4). Sample usage can been seen at [nickwalsh.net/sectionation](http://nickwalsh.net/sectionation).

* Items given a class of `sectionation` are considered the top of a new section. The selector can be changed in the `var sections` declaration
* Each section should have a corresponding nav element. By default, the selector is `#nav a`, but can be changed in the `var nav` declaration
* If there is a fixed header at the top of the page, or you otherwise want some space above each section top element to be considered, the `headerOffset` variable (in pixels) sets this

## Compatibility

For now, Sectionation has been tested on the following browsers:

* IE 7 & 8
* FF 3.6
* Safari 5
* Chrome 8

## Contact

Questions or concerns? Send me a message on GitHub.