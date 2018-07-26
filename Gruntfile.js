module.exports = function (grunt) {
    grunt.initConfig({
        webpack: {
            options: {
                stats: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
            },
        }
    });

    grunt.loadNpmTasks('grunt-webpack');
};
