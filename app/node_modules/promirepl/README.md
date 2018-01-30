# promirepl

A promise infused REPL.

Promirepl provides a Node.js REPL which will automagically unwrap [promise][]
values. It also is Node module, with a function that can add these magical
promise inspecting capabilities to your own custom REPLs.

This allows you to use promise based APIs from the REPL just as easily as old
fashioned synchronous APIs, without a lot of messing around with callbacks and
`console.log` to get at asynchronous values from the REPL.

## Usage

Promirepl can be installed with `npm install -g promirepl`. This installs the
`prominode` executable, which starts a Node.js REPL that has magical promise
unwraping capabilities.

Whenever a value evaluates to a promise (well, technically a [thenable][]),
promirepl will wait for the promise to resolve. If the promise is fulfilled,
it will evaluate to the promise's value. If the promise is rejected, it will
work as a thrown error.

If you want to stop waiting on a promise, just hit escape.

If you would like to disable the promirepl magic, just use the `.promise`
command to toggle promise unwrapping.

    $ npm install -g promirepl
    $ prominode
    > var Promise = require('es6-promise').Promise

Whenever a value evaluates to a promise (well, technically a [thenable][]),
promirepl will wait for the promise to resolve. If the promise is fulfilled,
it will evaluate to the promise's value.

    > Promise.resolve('hello')
    'hello'

    > new Promise(function (resolve) {
    ... setTimeout(function () { resolve('some time later'); }, 3000);
    ... })
    { promise: 'some time later' }

If the promise is rejected, it will evaluate as a thrown error.

    > Promise.reject(new Error('boom'))
    Promise rejected: Error: boom
        at repl:1:16
        at REPLServer.defaultEval (repl.js:135:27)

If you would like to stop waiting on a promise, hit escape.

    > new Promise(function () {})
    Hit escape to stop waiting on promise
    break.

If you would like to disable promise unwrapping, enter the `.promise` command.

    > .promise
    Promise auto-eval disabled

    > Promise.resolve('hello')
    {}

    > Promise.reject(new Error('boom'))
    {}

## Programmatic Usage

If you would like to use promirepl within your own custom REPL, just use the
exported `promirepl` function.

    var customRepl = createCustomRepl();
    require('promirepl').promirepl(customRepl.start({}));

 [promise]: https://promisesaplus.com/
 [thenable]: https://promisesaplus.com/#point-7
