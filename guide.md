I've made the header anchors point to all the right filenames (I think). When you name stuff .md, it will become .html. So for instance, his current site has .com/attorneys/   but we'll end up having .com/attorneys.html. This will also mean you'll do a lot of these pages on the web root.

I think the only pages that probably wont be on the web root are the "states" pages found in the lemonlaws folder. These are all the states found at the bottom of http://lemonlawaz.com/lemonlaws/  I made an index page which is our version of this. It has a bullet point list going at the bottom which is dynamic based on you making the state pages.

Just be sure that the state pages have "state: Arizona" in the top of the page

Speaking of which the top of each page needs to have the following "Front Matter" properties:
---
layout: page
title: Pryor, Ramirez & Amar
seo: Lemon Law
---

the "title" property becomes the page's h2 tag which is the bigger text at the top of each page

"seo" is the property that shows up in the h1 tag (the smaller text on the upper right of each page)

I think you'll see how these work if your examine the home page and see where the parts go

Be sure to include all files from the webroot:
Good: [foo](/foo.html)
Bad: [foo](foo.html)

Let's do **bold like this**
and *italic like this*

For images, because we want to float them, do:
<img src="#"> for float left, and
<img src="#" class="right"> for float right
This is because the normal markdown way of doing images doesnt allow us to add classes. Plus I the MD way is just as exotic as the HTML way for him to learn so I think the HTML way makes sense.

Don't worry about the Thank You Letter PDFs

Don't worry about the Free Case Review page

On his links page, remove any links that are 404s. I'll tell him some links went away

Try to match his content as close as you can. You can technically use HTML in markdown files but we're going to try not to except with the <img> tags. We can even use # for h1's several times on the page where you see 

Remember the links in the footer too.

Do as much as you want to do with the markdown stuff. Let me know if you get to the 8 hour mark though. Thanks you