import { useState } from 'react';
import { SITHPLANETS } from '../shared/sithplanets';
import DirectoryScreen from './DirectoryScreen';

const Main = () => {
    const [sithplanets, setCampsites] = useState(SITHPLANETS);

    return <DirectoryScreen campsites={sithplanets} />;
};

export default Main;