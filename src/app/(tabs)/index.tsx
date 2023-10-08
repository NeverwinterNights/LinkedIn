import {FlatList, StyleSheet} from 'react-native';
import posts from "./../../../assets/data/posts.json"
import PostListItem from "../../components/PostListItem";


export default function HomeScreen() {
    return (
        <FlatList data={posts}
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{gap: 20}}
                  keyExtractor={(item) => item.id}
                  renderItem={({item}) => <PostListItem post={item}/>}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
