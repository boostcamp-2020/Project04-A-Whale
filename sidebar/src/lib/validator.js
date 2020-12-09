/* eslint-disable no-useless-escape */
import { isDuplicated } from './api';

const regExp = {
  id: /^[a-zA-Z0-9]{5,25}$/,
  password: /(?=.*\d{1,64})(?=.*[~`!@#$%&*\^()-+=]{1,64})(?=.*[a-zA-Z]{2,64}).{8,64}$/,
  nickname: /^[^~`!@#$%&*\^()-+=]{2,25}$/,
  notEmpty: /.+/,
};

export const isID = (str) => regExp.id.test(str);
export const duplicatedID = async (str) => {
  const result = await isDuplicated(str);
  return !result.data.isDuplicated;
};
export const isPassword = (str) => regExp.password.test(str);
export const isNickname = (str) => regExp.nickname.test(str);
export const isNotEmpty = (str) => regExp.notEmpty.test(str);
export const repeatCheck = (str1, str2) => str1 === str2;
