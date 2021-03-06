module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    wp_readme_to_markdown: {
      target: {
        files: {
          'readme.md': 'readme.txt'
        },
      },
    },
    replace: {
      dist: {
        options: {
          patterns: [
            {
              match: /^/,
              replacement: '[![Build Status](https://travis-ci.org/pfefferle/wordpress-webmention.svg?branch=master)](https://travis-ci.org/pfefferle/wordpress-webmention) [![Issue Count](https://codeclimate.com/github/pfefferle/wordpress-webmention/badges/issue_count.svg)](https://codeclimate.com/github/pfefferle/wordpress-webmention) \n\n'
            }
          ]
        },
        files: [
          {
            src: ['readme.md'],
            dest: './'
          }
        ]
      }
    },
    makepot: {
      target: {
        options: {
          mainFile: 'webmention.php',
          domainPath: '/languages',
          exclude: ['bin/.*', '.git/.*', 'vendor/.*'],
          potFilename: 'wordpress-webmention.pot',
          type: 'wp-plugin',
          updateTimestamp: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-wp-readme-to-markdown');
  grunt.loadNpmTasks('grunt-replace');
  grunt.loadNpmTasks('grunt-wp-i18n');

  // Default task(s).
  grunt.registerTask('default', ['wp_readme_to_markdown', 'replace']);
};
