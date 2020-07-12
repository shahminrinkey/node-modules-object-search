# object-search-js

Simple javascript object search module to make it possible searching an object in different ways using only one function which comes with all possible types of results!

## Installation

npm i object-search-js

## Note

objectSearch() function expects four parameters:

1)data [javascript object]

2)query [key / value / javascript object]

3)searchBy [default = 'pair', other possible values = 'key', 'value']

4)resultType [default = 'pair', other possible values = 'key', 'value', 'index', 'pair']

## Usage

```javascript
const objectSearch = require('object-search-js');
let result;

result = objectSearch.objectSearch({'foo1': 'bar1', 'foo2':'bar2'}, 'bar1', 'value');
console.log(result);
result = objectSearch.objectSearch({'foo1': 'bar1', 'foo2':'bar2'}, 'bar1', 'value', 'pair');
console.log(result);
result = objectSearch.objectSearch({'foo1': 'bar1', 'foo2':'bar2'}, 'bar1', 'value', 'key');
console.log(result);
result = objectSearch.objectSearch({'foo1': 'bar1', 'foo2':'bar2'}, 'bar1', 'value', 'index');
console.log(result);

result = objectSearch.objectSearch({'foo1': 'bar1', 'foo2':'bar2'}, 'foo2', 'key');
console.log(result);
result = objectSearch.objectSearch({'foo1': 'bar1', 'foo2':'bar2'}, 'foo2', 'key', 'pair');
console.log(result);
result = objectSearch.objectSearch({'foo1': 'bar1', 'foo2':'bar2'}, 'foo2', 'key', 'value');
console.log(result);
result = objectSearch.objectSearch({'foo1': 'bar1', 'foo2':'bar2'}, 'foo2', 'key', 'index');
console.log(result);


result = objectSearch.objectSearch({'foo1': 'bar1', 'foo2':'bar2'}, {'foo2':'bar2'}, 'pair');
console.log(result);
result = objectSearch.objectSearch({'foo1': 'bar1', 'foo2':'bar2'}, {'foo2':'bar2'}, 'pair', 'pair');
console.log(result);
result = objectSearch.objectSearch({'foo1': 'bar1', 'foo2':'bar2'}, {'foo2':'bar2'}, 'pair', 'value');
console.log(result);
result = objectSearch.objectSearch({'foo1': 'bar1', 'foo2':'bar2'}, {'foo2':'bar2'}, 'pair', 'key');
console.log(result);
result = objectSearch.objectSearch({'foo1': 'bar1', 'foo2':'bar2'}, {'foo2':'bar2'}, 'pair', 'index');
console.log(result);

result = objectSearch.objectSearch({'foo1': 'bar1', 'foo2':'bar2'}, 'hello', 'value', 'index');
console.log(result);
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
