import fetch from 'isomorphic-unfetch';

const wrap = async <T>(task: Promise<Response>): Promise<T> =>
  await new Promise((resolve, reject) => {
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fetcher = async <T = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<T> => await wrap<T>(fetch(input, init));

export default fetcher;
