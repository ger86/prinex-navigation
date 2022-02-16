import {useEffect, useState} from 'react';

export default function useFetch(url) {
  const [fetchState, setFetchState] = useState({
    state: 'loading',
    data: null,
    error: null
  });

  useEffect(
    function () {
      async function fetchData() {
        try {
          setFetchState((currentValue) => ({
            state: 'loading',
            data: currentValue.data,
            error: null
          }));
          const response = await fetch(url);
          if (response.ok) {
            const json = await response.json();
            setFetchState({
              state: 'success',
              data: json,
              error: null
            });
          } else {
            setFetchState({
              state: 'error',
              data: null,
              error: new Error(response.status)
            });
          }
        } catch (error) {
          setFetchState({
            state: 'error',
            data: null,
            error: error
          });
        }
      }
      fetchData();
    },
    [url]
  );

  return fetchState;
}
