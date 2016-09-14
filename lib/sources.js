'use strict';

const program = require('commander')
  .usage('[source dir|glob] {options}')
  // .command('[sources]', `A path or glob to a directory of translations`)
  .option('-s, --shared [source]', `A path or glob to a directory of shared translations`)
  .option('-w, --writeShared', `Generate a compiled JSON file of the the shared translations. Default setting is false`
  ).on('--help', function() {
    console.log('  Examples:');
    console.log();
    console.log('    $ hof-transpiler ./apps/**/translations/src --shared apps/common/translations/src --writeShared');
  })
  .parse(process.argv);


if (!process.argv.slice(2).length) {
  program.help();
}

module.exports = program;

