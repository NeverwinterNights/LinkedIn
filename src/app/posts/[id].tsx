import React from 'react';
import {StyleSheet, Text} from 'react-native';
import posts from "./../../../assets/data/posts.json"
import PostListItem from "../../components/PostListItem";
import {useLocalSearchParams} from "expo-router";

type PostDetailsScreenPropsType = {}

export const PostDetailsScreen = ({}: PostDetailsScreenPropsType) => {
    const {id} = useLocalSearchParams()

    const post = posts.find((item) => item.id === id)

    if (!post) {
        return <Text>Not found</Text>;
    }

    return (
        <PostListItem post={post}/>
    );
};

const styles = StyleSheet.create({
    container: {}
});
