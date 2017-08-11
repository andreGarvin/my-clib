const grunt = require('grunt')
const exec = require('child-process').exec

const branch = grunt.option('branch')

module.exports = function(grunt) {
    grunt.registerTask('publish-docs', () => {

        exec(`cd out && git commit -am "New docuemntation for my-clib updated" && git push origin ${ branch }`, (err, stdout, stderr) {
            if (err || stderr) return console.log( err || stderr )

            console.log(`The new documentation has been published to the ${ branch } branch`);
        })
    })
};
