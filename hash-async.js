
const BlockClass = require('./block.js');

const myBlock = new BlockClass.Block("Test Block");

// Generating the block hash
myBlock.generateHash().then((result) => {
    let self = this;
    console.log(JSON.stringify(result, undefined, 2));
    console.log(`Block Hash: ${result.hash}`);
}).catch((error) => {
    console.log(error);
});

