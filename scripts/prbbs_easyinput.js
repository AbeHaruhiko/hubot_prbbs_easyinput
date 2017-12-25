// Description:
//   s2softの勤怠システムの簡易打刻ができるボット
// Commands:
//   ボット名 start     - 出勤打刻
'use strict';

const easyinput = require('prbbs_easyinput');

module.exports = (robot) => {
  robot.respond(/start (.+)( )(.+)/i, (msg) => {
    const user = msg.match[1].trim();
    const pass = msg.match[3].trim();
    const result = easyinput.easyInput(user, pass, 'start');
    msg.send(result);
});
robot.respond(/end (.+)( )(.+)/i, (msg) => {
  const user = msg.match[1].trim();
  const pass = msg.match[3].trim();
  const result = easyinput.easyInput(user, pass, 'end');
  msg.send(result);
});
};