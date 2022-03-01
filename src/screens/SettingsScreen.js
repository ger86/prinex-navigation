import React, {useEffect, useRef, useState} from 'react';
import {Button, Text, View} from 'react-native';
import {useUserContext} from '#/contexts/UserContext';

const style = {flex: 1, justifyContent: 'center', alignItems: 'center'};

export default function SettingsScreen({navigation}) {
  const [isVisible, setIsVisible] = useState(true);
  const {logout} = useUserContext();

  function handleLogout() {
    logout();
  }

  return (
    <View style={style}>
      <View>
        <Text>Settings</Text>
        <Button onPress={() => setIsVisible((v) => !v)} title="Mostrar / Ocultar" />
        <Button onPress={handleLogout} title="Logout" />
        {isVisible && <Counter />}
      </View>
    </View>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const isMounted = useRef(true);

  function handleClick() {
    setTimeout(function () {
      if (isMounted.current) {
        setCount((c) => c + 1);
      }
    }, 3000);
  }

  useEffect(function () {
    return function () {
      isMounted.current = false;
    };
  }, []);

  return (
    <View>
      <Text>{count}</Text>
      <Button onPress={handleClick} title="Púlsame" />
    </View>
  );
}
