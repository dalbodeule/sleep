"use strict";

/**
 * Sleep module.
 * @module sleep
 */

 /**
 * 일정 시간동안 스크립트의 실행을 중지합니다. <en>Stops script execution for a period of time.</en>
 * @param {number} time 중지할 시간입니다. 단위는 ms 입니다. <en>Time to stop. The unit is ms.</en>
 * @returns {Promise} 성공할 경우 아무것도 반환하지 않습니다. 실패할 경우 error를 반환합니다. <en>If it succeeds, it returns nothing. Returns an error on failure.</en>
 */
module.exports = (time) => {
    return new Promise((resolve, reject) => {
        if(typeof time != 'number') {
            reject(Error(time+' is not number'));
        } else {
            try {
                setTimeout(resolve, time);
            } catch(e) {
                reject(e);
            }
        }
    });
}