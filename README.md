# Examples of diska

Here are a couple of examples on how to use Diska, a dependency injection framework in Javascript.

They are sorted by Ecmascript version.

Please note, these examples are for basic usage with Node.
If you need exhaustive examples on the diska API, please see the tests for diska.
https://github.com/mattias800/diskajs/blob/master/test/di/InjectorSpec.js

## Node

First clone the repo.

```
git clone git@github.com:mattias800/diskajs-demo.git
cd diskajs-demo
```

Then install diska.

`
npm install diskajs
`

#### ES5 in Node

Then you can run the ES5 example using Node.

`
node es5/coffee/CoffeeApp.js
`

#### ES6 in babel-node

Or the ES6 example using Babel.

`
babel-node es6/coffee/CoffeeApp.js
`

## React Native

This is an example on how to use diska with React Native.

It doesn't show you have to structure your code or do DI with React Native, 
but rather is an example of a setup that works.

See `example/src/` files for the (very simple) source code.

### Usage

Go to `react native/example/` and run `npm start`.
Open the XCode project and press play.

### Setup

This uses `react-native-webpack-server` to enable Babel with with React Native.

https://github.com/mjohnston/react-native-webpack-server

Other than installing it and following their instructions, 
I have only run `npm install diska`.




