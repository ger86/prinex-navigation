import {useNavigation} from '@react-navigation/native';
import {useLayoutEffect} from 'react';

export default function useSetHeaderTitle(title) {
  const navigation = useNavigation();
  useLayoutEffect(
    function () {
      if (!title) {
        return;
      }
      navigation.setOptions({
        headerTitle: title
      });
    },
    [navigation, title]
  );
}
