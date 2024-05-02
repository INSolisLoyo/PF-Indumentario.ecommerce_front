export const getToken = () => {

    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      const [cookieName, cookieValue] = cookie.trim().split('=');
      if (cookieName === 'token') {
        console.log('Document.cookie = ', document.cookie);
        return cookieValue;
      }
    }

    return null;

  }