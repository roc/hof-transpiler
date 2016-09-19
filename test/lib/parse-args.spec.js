'use strict';

const parse = require('../../lib/parse-args');

describe('parse-args', () => {
  describe('no args!', () => {
    [[], Number(), '', null, undefined].forEach((type) => {
      it(`${typeof type} '${type}' should throw`, () => {
        (() => {
          parse(type);
        }).should.throw('No src folder or pattern specified');
      });
    });
  });

  describe('args!', () => {
    describe('just sources', () => {
      let result = parse(['foo/**/bar']);

      it('returns sources', () => result.sources.should
        .deep.equal(['foo/**/bar']));

      it('shared is undefined', () => {
        should.not.exist(result.shared);
      });

      it('throws with array');

    });

    describe('sources and shared', () => {
      let src = 'foo/**/bar';
      describe('without --writeShared', () => {
        let result = parse([
          src,
          '-s', 'common/**/foo',
          '-s', 'common/**/bar'
        ]);

        it('returns sources', () => result.sources.should
          .deep.equal(['foo/**/bar']));

        it('shared is an array', () => {
          result.shared.should.be.an('Array');
        });

        it('shared is parsed, reversed', () => {
          result.shared.should.deep.equal([
            'common/**/bar',
            'common/**/foo'
          ]);
        });
      });
      describe('with --writeShared', () => {

        it('makes no actual difference to entire thing');

        let result = parse([
          'app/**/translations',
          '-w',
          '-s', 'common/**/foo',
          '-s', 'common/**/bar'
        ]);

        it('returns sources', () => result.sources.should
          .deep.equal(['app/**/translations']));

        it('shared is an array', () => {
          result.shared.should.be.an('Array');
        });

        it('shared is parsed', () => {
          result.shared.should.deep.equal([
            'common/**/bar',
            'common/**/foo'
            ]);
        });

      });
    });
  });
});
