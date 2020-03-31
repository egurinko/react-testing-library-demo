import fetch from 'isomorphic-unfetch';

const wrap = <T>(task: Promise<Response>): Promise<T> => {
  return new Promise((resolve, reject) => {
    task
      .then((response) => {
        if (response.ok) {
          response
            .json()
            .then((json) => {
              resolve(json);
            })
            .catch((error) => {
              reject(error);
            });
        } else {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const fetcher = <T = any>(input: RequestInfo, init?: RequestInit): Promise<T> => {
  return wrap<T>(fetch(input, init));
};

export default fetcher;
