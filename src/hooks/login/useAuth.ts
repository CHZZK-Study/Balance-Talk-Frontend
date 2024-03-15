export const useAuth = () => {
  const checkLoggedIn = (): { isLoggedIn: boolean } => {
    const jwtCookieKey = 'Authorization';
    // cookie가 하나만 있다고 가정한 로직
    const cookies = document.cookie.split('; ').map((cookie: string) => {
      const [key, value] = cookie.split('=');
      return { key, value };
    });

    const jwtCookieValue = cookies.filter(
      (cookie) => cookie.key === jwtCookieKey,
    )[0]?.value;

    return {
      isLoggedIn: jwtCookieValue !== undefined && jwtCookieValue !== ' ',
    };
  };

  return { checkLoggedIn };
};
