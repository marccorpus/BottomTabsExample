import { StyleSheet, View, Text } from "react-native";

const UserScreen = () => {
  return (
    <View style={styles.container}>
      <Text>
        This is a <Text style={styles.highlight}>User Screen</Text>.
      </Text>
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  highlight: {
    color: "#d70f64",
    fontWeight: "bold",
  },
});
