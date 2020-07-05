/**
 * Easy HTTP Library
 * Library for making HTTP requests
 *
 * @version 2.0.0
 * @author Jasja Prick
 * @license MIT
 *
 **/

class EasyHttp {
  // Make an HTTP GET request
  async get(url) {
    const response = await fetch(url);

    const resData = await response.json();
    return resData;
  }

  // Make an HTTP POST request
  async post(url, data) {
    const response = await fetch(url, {
      method: "POST",
      header: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const resData = await response.json();
    return resData;
  }

  // Maken an HTTP PUT request
  async put(url, data) {
    const response = await fetch(url, {
      method: "PUT",
      header: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const resData = await response.json();
    return resData;
  }

  // Make an HTTP DELETE request
 async delete(url) {
         const response = await fetch(url, {
        method: "DELETE",
        header: {
          "Content-type": "application/json",
        },
      });

      const resData = await 'Resource deleted... ';
      return resData;
  }
}
