export const ERROR = {
  EMAIL: {
    NOT_EXIST: '존재하지 않는 이메일입니다.',
    EXIST: '이미 존재하는 이메일입니다.',
    FORM: '이메일 형식이 올바르지 않습니다.',
  },
  PASSWORD: {
    NOT_MATCH: '비밀번호가 일치하지 않습니다.',
    FORM: '영문+숫자 10자 이상 20자 이하로 입력해주세요.',
  },
  CODE: {
    NOT_MATCH: '인증번호가 일치하지 않습니다.',
  },
  NICKNAME: {
    NOT_EXIST: '존재하지 않는 닉네임입니다.',
    EXIST: '이미 존재하는 닉네임입니다.',
  },
  LOGIN: {
    FAIL: '이메일 또는 비밀번호가 일치하지 않습니다. 다시 확인해주세요.',
  },
} as const;

export const SUCCESS = {
  EMAIL: {
    AVAILABLE: '인증되었습니다. 해당 이메일로 인증번호가 발송되었습니다.',
  },
  CODE: {
    MATCH: '인증번호가 일치합니다.',
  },
  NICKNAME: {
    AVAILABLE: '사용 가능한 닉네임입니다.',
  },
} as const;
