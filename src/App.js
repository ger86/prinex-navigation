import React from 'react';
import AppNavigationStack from './AppNavigationStack';
import {ModeContextProvider} from './contexts/ModeContext';

export default function App() {
  return (
    <ModeContextProvider>
      <AppNavigationStack />
    </ModeContextProvider>
  );
}
