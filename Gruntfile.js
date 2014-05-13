module.exports = function (grunt) {
    var files = ['routes/**/*.ts','models/**/*.ts','config/**/*.ts','*.ts'];

    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-nodemon');
    
    grunt.initConfig({
        concurrent: {
            dev: {
                tasks: ['watch', 'nodemon'],
                options: {
                    logConcurrentOutput: true
                }
            }
        },
        typescript: {
            base: {
                src: files,
                options: {
                    module: 'commonjs', 
                    sourceMap: true
                }
            }
        },
        nodemon: {
            dev: {
                script: 'bin/www'
            }
        },
        watch: {
            files: files,
            tasks: ['typescript']
        },


    });
 
    grunt.registerTask('default', ['concurrent']);
 
}