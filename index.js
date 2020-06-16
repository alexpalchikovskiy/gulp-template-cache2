'use strict';

const Through = require('through2');
const File = require('vinyl');

const _str = require( './str' );

module.exports = options => {

    let outFile = '';

    const stream = Through.obj(
        function( file, enc, cb ){

            const name = file.path.split( '/' ).pop().split('.').slice(0, -1).join('.');
            const template = file.contents.toString().replace(/'/g, '\\\'').replace(/\n/g, '');

            outFile += `'${name}': '${template}',`;

            cb();

        },
        function( cb ){

            let file = new File( {
                path: options.fileName || 'templates.js',
                contents: new Buffer( `${_str[0]} ${outFile} ${_str[1]}` )
            } );

            return cb( null, file );

        }
    );

    return stream;

};
