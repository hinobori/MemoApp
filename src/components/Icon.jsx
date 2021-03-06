import React from 'react';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import { useFonts } from '@use-expo/font';

import icomoon from '../../assets/fons/icomoon.ttf';
import selection from '../../assets/fons/selection.json';

export default function Icon(props) {
    const [fontLoaded] = useFonts({ icomoon });
    const { name, size, color } = props;
    const CustomIcon = createIconSetFromIcoMoon(selection);

    if (!fontLoaded) {
        return null;
    }

    return <CustomIcon name={name} size={size} color={color} />;
}
