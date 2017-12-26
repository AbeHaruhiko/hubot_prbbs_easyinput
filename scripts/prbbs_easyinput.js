// Description:
//   s2softの勤怠システムの簡易打刻ができるボット
// Commands:
//   ボット名 start     - 出勤打刻
'use strict';

const easyinput = require('prbbs_easyinput');

module.exports = (robot) => {
  robot.respond(/start (.+)/i, (msg) => {
    const paramArray = msg.match[1].split(' ');
    const user = paramArray[0];
    const pass = paramArray[1];
    const time = paramArray.length >= 3 ? paramArray[2] : null;
    const promise = easyinput.easyInput(user, pass, 'start', time);
    promise.then((result) => {
      console.log(result);
      msg.send(result);
    });
  });
  robot.respond(/end (.+)/i, (msg) => {
    const paramArray = msg.match[1].split(' ');
    console.log(paramArray);
    const user = paramArray[0];
    const pass = paramArray[1];
    const time = paramArray.length >= 3 ? paramArray[2] : null;
    const promise = easyinput.easyInput(user, pass, 'end', time);
    promise.then((result) => {
      console.log(result);
      msg.send('出勤時刻: ' + result.intime + ', 退勤時刻: ' + result.outtime);
    });
  });
};