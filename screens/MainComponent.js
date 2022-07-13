import { useState } from 'react';
import { SITHPLANETS } from '../shared/sithplanets';
import DirectoryScreen from './DirectoryScreen';

const Main = () => {
    const [sithplanets, setSithPlanets] = useState(SITHPLANETS);

    return <DirectoryScreen sithplanets={sithplanets} />;
};

export default Main;
