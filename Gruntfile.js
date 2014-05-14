module.exports = function (grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    //"build/main.min.css": "app/less/**/*.less"
                    "build/main.min.css": "app/less/main.less"
                }
            }
        },

        watch: {
            styles: {
                files: ['app/less/**/*.less'],
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            }
        },
    });


    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');



    grunt.registerTask('default', ['less', 'watch']);
}