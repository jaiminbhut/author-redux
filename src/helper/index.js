import R from 'ramda';

export function generateUUID(digits = 8) {
  let str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVXZ';
  let uuid = [];
  for (let i = 0; i < digits; i++) {
    uuid.push(str[Math.floor(Math.random() * str.length)]);
  }
  return uuid.join('');
}

export function isNull(data) {
  if (R.isNil(data) || R.isEmpty(data)) {
    return true;
  } else {
    false;
  }
}

export function has(path, object) {
  if (!isNull(path) && !isNull(object)) {
    return R.has(path, object);
  } else {
    return false;
  }
}
