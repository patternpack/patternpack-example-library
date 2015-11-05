module.exports = function (grunt) {
  grunt.initConfig({
    patternpack: {
      options: {
        assets: "./src/assets"
        // Add a custom theme by specifying a theme package.
        // theme: "patternpack-example-theme"
        //
        // You may also point directly to a theme by path if you wish to make
        // the theme part of your pattern library itself.
        // theme: "./theme/"
      },
      run: {},
      build: {},
      release: {},
      "release-major": {},
      "release-minor": {},
      "release-patch": {}
    }
  });

  grunt.loadNpmTasks("patternpack");

  grunt.registerTask("run", ["patternpack:run"]);
  grunt.registerTask("build", ["patternpack:build"]);
  grunt.registerTask("release", ["patternpack:release"]);
  grunt.registerTask("release-major", ["patternpack:release-major"]);
  grunt.registerTask("release-minor", ["patternpack:release-minor"]);
  grunt.registerTask("release-patch", ["patternpack:release-patch"]);
  grunt.registerTask("default", ["run"]);
};
