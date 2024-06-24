import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import BusTime from "../../components/BusTime/BusTime";
import { Dimensions } from "react-native";
const BusTimeTable = () => {
  const route = useRoute();
  const { busSchedules, direction, from, to, date } = route.params;

  const windowHeight = Dimensions.get("window").height;

  return (
    <View style={styles.container}>
      <ScrollView>
        {busSchedules.length === 0 ? (
          <View
            style={{
              height: windowHeight * 1,
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={styles.noDataText}>
              No buses available on the selected route{" "}
            </Text>
          </View>
        ) : (
          busSchedules.map((bus) => (
            <BusTime
              key={bus.id}
              busID={bus.id}
              busRegNo={bus.regNo}
              routeNo={bus.routeNo}
              fromStop={from}
              toStop={to}
              direction={direction}
              date={date}
            />
          ))
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  noDataText: {
    marginTop: 100,
    textAlign: "center",
    fontSize: 18,
    color: "black",
    marginTop: 20,
  },
});

export default BusTimeTable;