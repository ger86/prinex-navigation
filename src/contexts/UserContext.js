import React, {createContext, useCallback, useContext, useEffect, useMemo, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ASYNC_STORAGE_KEY = '@navigationproject.user';

const UserContext = createContext();
export default UserContext;

export function useUserContext() {
  return useContext(UserContext);
}

export function UserContextProvider({children}) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const login = useCallback(async function (loggedUser) {
    try {
      await AsyncStorage.setItem(ASYNC_STORAGE_KEY, JSON.stringify(loggedUser));
      setUser(loggedUser);
    } catch (e) {
      console.log(e);
      setError(e);
    }
  }, []);

  const logout = useCallback(async function () {
    await AsyncStorage.removeItem(ASYNC_STORAGE_KEY);
    setUser(null);
  }, []);

  useEffect(function () {
    async function fetchFromAsynStorage() {
      const userFromAsyncStorage = await AsyncStorage.getItem(ASYNC_STORAGE_KEY);
      if (userFromAsyncStorage) {
        setUser(JSON.parse(userFromAsyncStorage));
      }
      setIsLoading(false);
    }
    fetchFromAsynStorage();
  }, []);

  const contextValue = useMemo(
    function () {
      return {
        login,
        logout,
        user,
        error,
        isLoading
      };
    },
    [user, login, logout, error, isLoading]
  );

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
}
