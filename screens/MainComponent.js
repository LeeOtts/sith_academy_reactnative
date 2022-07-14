import { useState } from 'react';
import { View } from 'react-native';
import { SITHPLANETS } from '../shared/sithplanets';
import SithPlanetInfoScreen from './SithPlanetInfoScreen';
import DirectoryScreen from './DirectoryScreen';

const Main = () => {
    const [sithplanets, setSithPlanets] = useState(SITHPLANETS);
    const [selectedSithPlanetId, setSelectedSithPlanetId] = useState();

    return (
        <View style={{ flex: 1 }}>
            <DirectoryScreen
                sithplanets={sithplanets}
                onPress={(sithplanetId) => setSelectedSithPlanetId(sithplanetId)}
            />
            <SithPlanetInfoScreen
                sithplanet={
                    sithplanets.filter(
                        (sithplanet) => sithplanet.id === selectedSithPlanetId
                    )[0]
                }
            />
        </View>
    );
};

export default Main;
