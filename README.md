
#  JSON-tiny

Stringify objects beyond what `JSON.stringify` can!
JSON-tiny can reduce the size of JSON strings by strategically using scientific notation to reduce size of numbers. Objects stringifed with JSON-tiny will still work everywhere just like a normal JSON string would, it keeps to the [JSON standard](https://json.org).
|JSON.stringify|JSON-tiny|
|--|--|
|`200000`|`2e5`|
|`20e+30`|`20e30`|
|`2.6e+40`|`26e39`|
|`-5.6e-20`|`-56e-21`|
