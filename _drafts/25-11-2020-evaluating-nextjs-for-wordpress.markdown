I've been building a version of the [Go Tripod](https://gotripod.com) website using [Next JS](https://nextjs.org/) for a few months and I've reached the point where I feel like I can comment on whether this was a good idea. 

The reason for embarking on this voyage of discovery was threefold:

- To improve site performance
- To improve maintainability by stripping out unused CSS
- To investigate new technology to see what benefits it could bring

Let's see how we got on.

Choosing the tech

Our site is built on Wordpress, and I wanted to retain the backend  I really like React's and JSX for organising code, and by adding CSS-in-JS into the mix I felt I could get a handle on CSS maintainability. A few options turned up after a quick Google search:

Gatsby

A static site builder with its sights set high, Gatsby has a section in its documentation on
