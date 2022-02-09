import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import {styles} from '../components/styles';

const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          padding: 35,
        }}
      >
        <Text style={styles.PageText}>You are on Profile Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});