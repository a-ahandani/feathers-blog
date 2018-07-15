// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const fs = require('fs');
const testFolder = __dirname.substring(0, __dirname.length - 5) + 'models';

// function readFiles(dirname, onFileContent, onError) {
//
//
//     fs.readdir(testFolder, function(err, filenames) {
//         if (err) {
//             onError(err);
//             return;
//         }
//         console.log(filenames)
//         filenames.forEach(function(filename) {
//             fs.readFile(dirname + filename, 'utf-8', function(err, content) {
//                 if (err) {
//                     onError(err);
//                     return;
//                 }
//                 onFileContent(filename, content);
//             });
//         });
//     });
// }
// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
    return async context => {
        // readFiles('/', function(filename, content) {
        //     data[filename] = content;
        // }, function(err) {
        //     throw err;
        // });
        let array = []
        for (prop in context.app.services) {
            if (prop !== 'authentication' && prop !== 'makers') {
                array.push(prop)
            }
        }

        //context.result = array

        return (context)
    };
};
