# robus
robus is a little web app that I built to play around using Backbone. It's a workout tracker in which it's only goal is to show you the amount of weight / sets you performed the last time you did the workout.

It uses [Junior](http://justspamjustin.github.io/junior/#home) to manage the animations between views, but more importantly this app has taught me how to structure things using the MV* pattern and Backbone. By no means is everything in here perfect, so don't take any of this as best practice. Also thanks to the [Ratchet](http://maker.github.io/ratchet/) framework for providing quick styling and markup structure for a mobile app.

### TODO
- Figure out a better way to manage the templates, such that they aren't all in the `index.html` file (load via Ajax? when needed?)
- Implement localStorage, such that you can add a workout and it's exercises without having to manually edit a JSON file.
- Help fork the Junior framework so that you can specify where to inject views.
- Week to week tracking, archives.
- Multiple user tracking
