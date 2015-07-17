module.exports = function (grunt) {
  grunt.initConfig({
    patternpack: {
      options: {
        assets: "./src/assets"

        // Add a custom theme by pointing to the location of the theme files
        // This can be added to your pattern library or in an external repository
        // like the patternpack-example-theme.
        // pattern: "./node_modules/patternpack-example-theme"
      },
      run: {
        options: {
          server: {
            open: {
              target: "http://localhost:8888"
            }
          }
        }
      },
      build: {
        options: {
          task: "build"
        }
      },
      release: {
        options: {
          task: "release"
        }
      }
    }
  });

  grunt.loadNpmTasks("patternpack");

  grunt.registerTask("run", ["patternpack:run"]);
  grunt.registerTask("build", ["patternpack:build"]);
  grunt.registerTask("release", ["patternpack:release"]);
  grunt.registerTask("default", ["run"]);
};
