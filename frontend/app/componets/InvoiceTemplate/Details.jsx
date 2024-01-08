import { View, Text, StyleSheet } from "@react-pdf/renderer";

export default function Details() {
  const styles = StyleSheet.create({
    section: {
      display: "flex",
      margin: 10,
      padding: 10,
      flexGrow: 1,
      flexDirection: "row",
      textAlign: "left",
    },
    BoxOne: {
      display: "flex",
      fontSize: 20,
      flex: 1,
      flexDirection: "column",
      padding: 10,
    },
    BoxTwo: {
      display: "flex",
      fontSize: 20,
      flex: 1,
      flexDirection: "column",
      margin: 10,
    },
    NameOfCustomer: {},
    Address: {},
  });
  return (
    <View style={styles.section}>
      <View style={styles.BoxOne}>
        <Text style={styles.NameOfCustomer}>Name of the Customer</Text>
        <Text style={styles.Address}>Address of the Customer</Text>
        <Text>Date of Purchase</Text>
      </View>
      <View>
        <Text>Invoice Number</Text>
      </View>
    </View>
  );
}
