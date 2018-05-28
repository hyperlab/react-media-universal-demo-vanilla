A demonstration of the problem when hydrating server side rendered react-media.

This demo shows that when using `hydrate`, React expects us to render the same thing on the client at the first render. Otherwise we can get DOM inconsitencies, such as in this example where the color of the heading is not the expected one.

# Setup and running

First install dependencies:

`yarn`

Then build server and client:

`yarn build`

And run server:

`yarn start`
