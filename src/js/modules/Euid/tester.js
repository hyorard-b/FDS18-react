import logger from './logger.js';
import utils from './utils.js';
/* -------------------------------------------------------------------------- */
// 테스트 유틸리티
const test = (title, callback) => {
  console.group('TEST → ' + title);
  try {
    logger.log('테스트 결과:');
    callback();
  } catch (error) {
    logger.error('테스트 실패: ' + error.message);
  }
  console.groupEnd(); // ??
};

// 익스펙트 유틸리티
const expect = (actual /* 결과 값 */) => ({
  toBe(expected /* 기대 값 */) {
    if (expected !== actual) {
      logger.error('결과 값(' + utils.serialize(actual) + ')과 기대 값("' + expected + '")이 다릅니다.');
    } else {
      logger.success('결과 값(' + utils.serialize(actual) + ')과 기대 값("' + expected + '")이 같습니다.');
    }
  },
  notToBe(expected) {
    // ...
  },
  toBeGreaterThan(expected) {
    // ...
  },
  toBeLessThan(expected) {
    // ...
  },
});

export default {
  test,
  expect,
};
