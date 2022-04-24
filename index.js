// * callbacks

// when the exit event occurs, the function will run
// process.on('exit', function() {
//  ;
// });

const { EventEmitter } = require('events');

// create a custom event
const eventEmitter = new EventEmitter();

eventEmitter.on('something', () => {
  console.log('something');
});

eventEmitter.emit('something');


// * file system

const { readFile, readFileSync } = require('fs');
const txt = readFileSync('./hello.txt', 'utf8'); // ! sync = blocking
console.log(`blocking: ${txt}`);

readFile('./hello.txt', 'utf8', (err, txt) => { // non-blocking
  console.log(`non-blocking: ${txt}`);
});


// * promises (alternative)
const { readFile: readFilePromise } = require('fs').promises;

async function hello() { // non blocking
  const file = await readFilePromise('./hello.txt', 'utf8');
  console.log(`non-blocking promise: ${file}`);
}
hello();


// * importing modules
const myModule = require('./my-module');
console.log(myModule);
// npm init -y