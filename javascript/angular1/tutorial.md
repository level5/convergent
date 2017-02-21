# angular 1

### bootstrapping

Bootstrapping AngularJS applications automatically using the `ngApp` directive is very easy and suitable for most cases.

There are 3 important things that happen during the bootstrap phase:

1. The injector that will be used for dependency injection is created.

2. The injector will then create the root scope that will become the context for the model of our application.

3. AngularJS will then "compile" the DOM starting at the `ngApp` root element, processing any directives and bindings found along the way.


###  components

it is considered a good practice to avoid using the scope directly. We can (and should) use our controller instance; i.e. assign our data and methods on properties of our controller (the "this" inside the controller constructor), instead of directly to the scope.
