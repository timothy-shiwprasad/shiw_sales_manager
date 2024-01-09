import { View, Text, StyleSheet } from "@react-pdf/renderer";

export default function Table() {
  const styles = StyleSheet.create({
    TableBody: {
      display: "flex",
      margin: 10,
      padding: 10,
      flexGrow: 1,
      flexDirection: "column",
      textAlign: "center",
    },
    TableHeading: {
      marginRight: 10,
      fontSize: 30,
    },
  });
  return (
    <View style={styles.TableBody}>
      <View>
        <Text style={styles.TableHeading}>Quantity</Text>
        <Text style={styles.TableHeading}>Case Size</Text>
        <Text style={styles.TableHeading}>Description</Text>
        <Text style={styles.TableHeading}>Unit Price</Text>
        <Text style={styles.TableHeading}>Amount</Text>
      </View>
      <View></View>
    </View>
  );
}
