'use strict';

const program = require('commander');

program
  .option('-s, --shared', 'A path or glob to a directory of shared translations')
  .option('-w, --writeShared', `Generate a built JSON file of the the shared
                     translations. Default setting is false`)
  .parse(process.argv);

console.log(program);

// var sources = argv._;
// var shared = argv.s || argv.shared;
// var writeShared = argv.writeShared || argv.w;

// console.log(sources);

// if (!sources.length) {
//   throw new Error('No src specified');
// }

// var sindex = sources.indexOf(shared);
// if (writeShared !== true && sindex > -1) {
//   sources.splice(sindex, 1);
// }






// hof-transpiler [source dir|glob] {OPTIONS}

//        --shared, -s  A path or glob to a directory of shared translations

//   --writeShared, -w  Generate a built JSON file of the the shared
//                      translations. Default setting is false.
