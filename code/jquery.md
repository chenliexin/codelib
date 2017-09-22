```js

$(':hidden')
$(':visible')

```


```js

allElement = [htmlString, Selector, jQuery, Element];
easing = 'swing' || 'linear';

.toggle()
    .toggle()
    .toggle(display)
    .toggle(duration, easing?, complete?)
    .toggle({
        duration: 400,
        queue: true,
        queue: 'queuename',
        //Added 1.7
        easing: 'swing',
        specialEasing: {
            width: 'linear',
            height: 'swing'
        },
    })
    .toggle(handler, handler, handler*)
    //Remove

.trigger()
    .trigger(eventType[, extraParameters])
    .trigger(event[, extraParameters])
.triggerHandler()
    .triggerHandler(eventType[, extraParameters])
    .triggerHandler(event[, extraParameters])

.val()
    .val()
    .val(value)
    .val((index, value) => {})

.width()
    .width()
    .width(value)
    .width((index, value) => {})

.wrap()
    .wrap(allElement)
    .wrap((index) => {})
.wrapAll()
    .wrapAll(allElement)
    .wrapAll(() => {})
.wrapInner()
    .wrapInner(allElement)
    .wrapInner((index) => {})


Offset
    .offset()
    .offset(coordinates)
    .offset((index, coordinates) => {})

```

## Deprecated Remove

```js

.unbind()
.undelegate()
    //Deprecated 3.0 
    .off()

.unload()
    //Deprecated 1.8
    //Removed
    .on('unload', (event) => {})

```