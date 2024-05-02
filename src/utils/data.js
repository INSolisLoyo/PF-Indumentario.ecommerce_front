export const getToken = () => {

    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      const [cookieName, cookieValue] = cookie.trim().split('=');
      if (cookieName === 'token') {
        return cookieValue;
      }
    }

    return null;

  }