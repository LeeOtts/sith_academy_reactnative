import { FlatList, Text } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';

const DirectoryScreen = (props) => {
    const renderDirectoryItem = ({ item: sithplanet }) => {
        return (
            <ListItem onPress={() => props.onPress(sithplanet.id)}>
                <Avatar source={sithplanet.image} rounded />
                <ListItem.Content>
                    <ListItem.Title>{sithplanet.name}</ListItem.Title>
                    <ListItem.Subtitle>
                        {sithplanet.description}
                    </ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        );
    };
    return (
        <FlatList
            data={props.sithplanets}
            renderItem={renderDirectoryItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

export default DirectoryScreen;