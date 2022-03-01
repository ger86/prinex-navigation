import React, {useEffect, useRef, useState} from 'react';
import {AppState} from 'react-native';
import {QueryClient, QueryClientProvider} from 'react-query';
import AppNavigationStack from './AppNavigationStack';
import {DbContextProvider} from './contexts/DbContext';
import {ModeContextProvider} from './contexts/ModeContext';
import {UserContextProvider} from './contexts/UserContext';

const queryClient = new QueryClient();

export default function App() {
  const [appState, setAppState] = useState(AppState.currentState);
  const currentAppState = useRef(AppState.currentState);

  useEffect(
    function () {
      const subscription = AppState.addEventListener('change', function (nextAppState) {
        if (
          currentAppState.current === 'active' &&
          ['inactive', 'background'].includes(nextAppState)
        ) {
          console.log('App will go to background');
        }
        if (currentAppState.current !== nextAppState) {
          currentAppState.current = nextAppState;
          setAppState(nextAppState);
        }
      });
      return function () {
        subscription.remove();
      };
    },
    [appState]
  );
  return (
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <ModeContextProvider>
          <DbContextProvider>
            <AppNavigationStack />
          </DbContextProvider>
        </ModeContextProvider>
      </UserContextProvider>
    </QueryClientProvider>
  );
}
