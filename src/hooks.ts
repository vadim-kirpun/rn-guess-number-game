import { useEffect, useState } from 'react';

import { Orientation } from 'expo-screen-orientation';
import * as ScreenOrientation from 'expo-screen-orientation';

export const useIsLandscape = () => {
  const [isLandscape, setIsLandscape] = useState(false);

  const setLandscape = (orientation: Orientation) => {
    setIsLandscape(
      orientation === Orientation.LANDSCAPE_LEFT ||
        orientation === Orientation.LANDSCAPE_RIGHT
    );
  };

  useEffect(() => {
    void ScreenOrientation.getOrientationAsync().then(setLandscape);

    const { remove } = ScreenOrientation.addOrientationChangeListener(
      ({ orientationInfo: { orientation } }) => setLandscape(orientation)
    );

    return remove;
  }, []);

  return isLandscape;
};
