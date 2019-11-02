# Website Journal

## Michael Bottini

### Links:

* Site is located at [https://mbottini.github.io](https://mbottini.github.io).
* Repository is located at
 [https://github.com/mbottini/mbottini.github.io](https://github.com/mbottini/mbottini.github.io).
* An HTML version of this journal is available at
 [https://mbottini.github.io/journal.html](https://mbottini.github.io/journal.html).

### Basic Philosophy

* The website should be simple. Static webpages should be very lightweight and
show text and links. No Jumbotron stuff, no animations. I get that I'm not
allowed to style my website like [Fabrice Bellard](https://bellard.org/) or
[Larry Wall](http://www.wall.org/~larry/), but I would if I could.

* Simple styling, standard sans-serif font, small width on the page (Newspapers
print in multiple columns for a reason!), reasonable padding. Simple navbar
buttons for linking.

* Good project descriptions. That's the whole point of this website, honestly.

### Dependencies:

None. It's vanilla CSS and HTML.

### What worked:

Everything that I really wanted to work.

### What I had trouble with:

* A flawed understanding of margins vs padding. The classroom lecture didn't go
into very much detail on exactly what they involved, and a lot of the online
resources also assumed that you can figure it out yourself. This led to a lot of
[Fun](https://www.dwarffortresswiki.org/index.php/Fun) before I figured it out.
* Getting the navbar buttons to align the way I wanted them to. See above.
* A flawed idea of the purpose of buttons vs links. Apparently, you use buttons
when triggering something on the page, such as execution of a Javascript
executable. You don't do it for plain ol' links to other parts of your
website. Those are just links.
* Getting contact form buttons to take up the proper width of the form and stay
aligned properly.

### A few entries from `git diff`

* (Oct 23) Add very basic bio, projects, and contact form page.
* (Oct 23) Flesh out the bio page with content.
* (Oct 23) Try and fail miserably at styling navbar buttons.
* (Oct 24) Fix the navbar buttons by making them not-buttons.
* (Oct 24) Add a hover effect to the header buttons, along with modifying the
style of the button corresponding to the current page.
* (Oct 25) Add Github button to the header bar.
* (Oct 25) Align the Contact form to be similar to how the other two pages work.
* (Oct 28) Revamp Projects webpage with better descriptions of the things I've
worked on.
* (Oct 31) Add section to Projects page describing a couple of closed-source
work projects I've worked on.
* (Nov 1) Clean up styles further, add Javascript bindings to contact buttons.
* (Nov 1) Change button-row display style to Flexbox. It's just so much easier.

### Checklist of Objectives

* Create a repo. YES
* Contain an about page with information about yourself. YES
* Projects page with projects you have previously worked on. YES
* Contact page with a contact form. YES
* Technologies covered in class: HTML, CSS, and Javascript. YES
* Individual work: YES
* Write my own code. YES
* At least 8 commits: `git log --oneline | wc -l` returns `24`. Most of them
were crappy little commits, but it should be more than enough.
* Keep a journal. (See above!)
* Links to the public GitHub repo and the deployed site: YES
* Time: Well, the labor theory of value is bunk. But I did spend a fair amount
of time on this, especially fumbling around with getting alignment correct. YES