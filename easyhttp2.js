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
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  // Make an HTTP POST request
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        header: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  // Maken an HTTP PUT request
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "PUT",
        header: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  // Make an HTTP DELETE request
  delete(url) {
   return new Promise((resolve, reject) => {
     fetch(url, {
       method: "DELETE",
       header: {
         "Content-type": "application/json",
       },
     })
       .then((res) => res.json())
       .then(() => resolve('Resource deleted... '))
       .catch((err) => reject(err));
   });
 }
}
