import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerFlex}>
          <View></View>
          <View>
            <Text style={styles.headerTitle}>Posts</Text>
          </View>
          <TouchableOpacity style={styles.exit}>
            <Image source={require("../../assets/images/log-out.png")} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.postsContainer}>
        <View style={styles.post}>
          <Image
            style={styles.postImage}
            source={require("../../assets/images/user-photo.png")}
          />
          <View style={styles.postText}>
            <Text style={styles.postTitle}>Natali Romanova</Text>
            <Text style={styles.postEmail}>email@example.com</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    height: 88,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#BDBDBD",
  },
  headerFlex: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: "500",
  },
  exit: {
    width: 24,
    height: 24,
  },
  postsContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
  post: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    marginBottom: 16,
  },
  postImage: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  postText: {
    marginLeft: 8,
  },
  postTitle: {
    fontSize: 13,
    fontWeight: "700",
  },
  postEmail: {
    fontSize: 11,
    color: "rgba(33, 33, 33, 0.8)",
  },
});

export default PostsScreen;
