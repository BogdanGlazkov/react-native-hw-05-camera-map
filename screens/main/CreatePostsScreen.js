import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  TextInput,
  Keyboard,
} from "react-native";
// import { Feather } from "@expo/vector-icons";

const CreatePostsScreen = ({ navigation }) => {
  const [isPhoto, setIsPhoto] = useState(false);

  const keyboardHide = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerFlex}>
            <TouchableOpacity
              style={styles.exit}
              onPress={() => navigation.navigate("Posts")}
            >
              <Image source={require("../../assets/images/arrow-left.png")} />
            </TouchableOpacity>
            <View>
              <Text style={styles.headerTitle}>Create post</Text>
            </View>
            <View></View>
          </View>
        </View>

        <View style={styles.postsContainer}>
          <View style={styles.post}>
            <View style={styles.photo}>
              <View style={styles.photoInput}>
                <TouchableOpacity style={styles.photoIconWrp}>
                  <Image
                    style={styles.photoIcon}
                    source={require("../../assets/images/camera.png")}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.photoTextWrapper}>
                <Text style={styles.photoText}>Download photo</Text>
              </View>
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Title..."
                placeholderTextColor="#BDBDBD"
              />
            </View>
            <View style={styles.inputWrapper}>
              <Image
                source={require("../../assets/images/map.png")}
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Location..."
                placeholderTextColor="#BDBDBD"
              />
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                ...styles.btn,
                backgroundColor: isPhoto ? "#FF6C00" : "#F6F6F6",
              }}
              disabled={!isPhoto}
            >
              <Text
                style={{
                  ...styles.btnTitle,
                  color: isPhoto ? "#FFFFFF" : "#BDBDBD",
                }}
              >
                Post
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.delete} disabled={!isPhoto}>
            <Image source={require("../../assets/images/trash.png")} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
    justifyContent: "space-between",
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
  post: {},
  photo: {
    marginBottom: 32,
  },
  photoInput: {
    position: "relative",
    height: 267,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
  photoIconWrp: {
    position: "absolute",
    top: "40%",
    alignSelf: "center",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
  },
  photoIcon: {
    width: 25,
    height: 25,
  },
  photoTextWrapper: {
    marginTop: 8,
  },
  photoText: {
    fontSize: 16,
    color: "#BDBDBD",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    marginBottom: 16,
  },
  input: {
    width: "100%",
    fontSize: 16,
    color: "#212121",
  },
  inputIcon: {
    marginRight: 4,
    height: 24,
    width: 24,
  },
  btn: {
    height: 51,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
    borderRadius: 100,
  },
  btnTitle: {
    fontSize: 16,
  },
  delete: {
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 40,
    alignSelf: "center",
    borderRadius: 20,
    backgroundColor: "#F6F6F6",
  },
});

export default CreatePostsScreen;
