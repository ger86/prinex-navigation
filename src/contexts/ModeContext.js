import React, {createContext, useCallback, useContext, useMemo, useState} from 'react';

const ModeContext = createContext();

export function useModeContext() {
  return useContext(ModeContext);
}

export function ModeContextProvider({children}) {
  const [_, setCount] = useState(0);
  const [mode, setMode] = useState('dark');

  const toggleMode = useCallback(function () {
    setMode((m) => (m === 'light' ? 'dark' : 'light'));
  }, []);

  const value = useMemo(
    function () {
      return {
        mode,
        toggleMode,
        setCount
      };
    },
    [mode, toggleMode, setCount]
  );

  return <ModeContext.Provider value={value}>{children}</ModeContext.Provider>;
}

export default ModeContext;
