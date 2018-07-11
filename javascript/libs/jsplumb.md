# jsplumb


### solutions

* use `addEndpoint` to replace `makeSource` & `makeTarget`
* `unmakeEveryTarget` & `unmakeEverySource` after scroll(use `_.debounce` ), then re `makeSource` & `makeTarget`


concepts:
* anchors
* connectors
* endpoints
* overlays
* groups


```js

jsPlumb.ready(function() {
    ...         
    // your jsPlumb related init code goes here
    ...
});

```

```js

var firstInstance = jsPlumb.getInstance();

firstInstance.importDefaults({
  Connector : [ "Bezier", { curviness: 150 } ],
  Anchors : [ "TopCenter", "BottomCenter" ]
});

// jsPlumb uses the id attribute of any element with which it interacts.
// If id is not set, jsPlumb will create an id for the element
firstInstance.connect({
  source:"element1",
  target:"element2",
  scope:"someScope"
});

```

##### Container

```js

var j = jsPlumb.getInstance({
  Container:"foo"
});

```


## Connections

use default configurations:
```js
// a Connection in jsPlumb consists of two Endpoints,
// a Connector, and zero or more Overlays.
jsPlumb.connect({source:"element1", target:"element2"});

```

more configuration gives to jsplumb:
```js

jsPlumb.connect({
  source:"element1",
  target:"element2",
  anchors:["Right", "Left" ],
  endpoint:"Rectangle",
  endpointStyle:{ fill: "yellow" }
});

```

* `anchor`:  this array tells jsPlumb where the source and target Endpoints should be located on their parent elements.
* `endpoint`
* `endpointStyle`

reusing common settings:
```js

var common = {
  anchors:[ "BottomCenter", "TopCenter" ],
  endpoints:["Dot", "Blank" ]
};

jsPlumb.connect({ source:"someElement", target:"someOtherElement" }, common);

jsPlumb.connect({ source:"aThirdElement", target:"yetAnotherElement" }, common);

```

detaching connection

default settings allows to detach the connection. change the setting.

```js

jsPlumb.importDefaults({
  ...
  ConnectionsDetachable:false
  ...
});

```

or

```js

jsPlumb.connect({
  source:"aThirdElement",
  target:"yetAnotherElement",
  detachable:false
});

```

drag & drop connections:

```js

var endpointOptions = { isSource:true };
var endpoint = jsPlumb.addEndpoint('elementId', endpointOptions);

```
