module.exports = function (grunt) {
  grunt.initConfig({
    patternpack: {
      options: {
        assets: "./src/assets",
        cssPreprocessor: "less",
        integrate: "../patternpack-example-app/node_modules/patternpack-example-library"

        // Add a custom theme by pointing to the location of the theme files
        // This can be added to your pattern library or in an external repository
        // like the patternpack-example-theme.
        // pattern: "./node_modules/patternpack-example-theme"
      },
      integrate: {},
      run: {},
      build: {},
      release: {}
    }
  });

  grunt.loadNpmTasks("patternpack");

  grunt.registerTask("test", ["patternpack:integrate"]);
  grunt.registerTask("run", ["patternpack:run"]);
  grunt.registerTask("build", ["patternpack:build"]);
  grunt.registerTask("release", ["patternpack:release"]);
  grunt.registerTask("default", ["run"]);
};
