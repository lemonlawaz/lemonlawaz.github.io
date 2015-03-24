I changed the markdown engine out for a new one - one that handles nested bullets better

- Now we can have

- Nested Lists

    - Like this

    - and like this

Can you adjust your sublime settings to use four space tabs (you can do this in the lower right of sublime next to the syntax setter). It makes the tabs easier to see.

Lets also separate bullets with hard returns

With this new nested bullet thing we don't need <br> tags or ">" to manipulate white space. I'd actually prefer to not use those since I want to make this stuff as easy for him to do as possible

I've been using mostly bullets (instead of letters and roman numerals), But if I feel like I must use letters and numbers for the circumstances, then I've found it works best like this:

- Foo

- Bar

    - A. Foo

    - B. Bar.

        - 1) asdfasdfasdf
        - 2) asdfasdfsadfsa

Numbers can't have the single dot on the right side so I'm using a parenthisis instead. The dot will confuse the md engine


btw, doing this doesn't seem to work

- one
- two
- three
    1. one
    1. two
    1. three

(using nested numbers in bullets) I guess when you start with bullets you have to go all bullets

Go ahead and finish Louisiana to South Dakota with the new formatting. See the states after SD for ideas on how I was doing it. I'm going back and refactoring the Alabama to Kentucky with the new bullets idea. 