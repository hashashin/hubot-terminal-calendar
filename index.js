var
  fs = require('fs'),
  path = require('path');


module.exports = (robot, scripts) => {

  var scriptsPath = path.resolve(__dirname, 'src');

  if (fs.existsSync(scriptsPath)) {

    for (var script of fs.readdirSync(scriptsPath).sort()) {

      if (scripts && ~!scripts.indexOf('*')) {

        if (~scripts.indexOf(script)) {
          robot.loadFile(scriptsPath, script);
        }

      } else {
        robot.loadFile(scriptsPath, script);
      }
    }
  }
};
