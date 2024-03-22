/* eslint-disable prefer-template */
interface JwtType {
  memberId: number;
  sub: string;
  iat: number;
  exp: number;
}

export const useParseJwt = (token: string | undefined): JwtType => {
  if (!token) {
    return {} as JwtType;
  }
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map((c) => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join(''),
  );
  return JSON.parse(jsonPayload) as JwtType;
};
