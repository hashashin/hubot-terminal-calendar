// Description
//   Linux terminal calendar for
//
// Configuration:
//   LIST_OF_ENV_VARS_TO_SET
//
// Commands:
//    hubot calendar( me)? - display this month's calendar
//
// Notes:
//   <optional notes required for the script>
//
// Author:
//   BrianSipple <Bsipple57@gmail.com>

var
    REG_EXPS = {
        calendar: {
            currentMonth: [
                /calendar( me)?/i,
                /let me see (?:the|this month's) calendar/i,
                /show me the calendar/i
            ]
        }
    },
    childProcess = require('child_process');

module.exports = (jarvis) => {
    for (var regExp of REG_EXPS.calendar.currentMonth) {
        jarvis.respond(regExp, (msg) => {
            childProcess.exec('ncal', ['-hMb'], (error, stdout, stderr) => {
                msg.send(stdout);
            });
        });
    }
};
