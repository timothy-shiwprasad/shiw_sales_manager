import { View, Text, StyleSheet } from "@react-pdf/renderer";

export default function Header() {
  const styles = StyleSheet.create({
    section: {
      display: "flex",
      margin: 10,
      padding: 10,
      flexGrow: 1,
      flexDirection: "column",
      textAlign: "center",
    },
    name: {
      fontSize: 20,
      flex: 1,
    },
  });
  return (
    <>
      <View style={styles.section}>
        <Text style={styles.name}>Shiw's Sales and Service</Text>
        <Text>73 La Bonne Intention, East Coast Demerara,Guyana</Text>
        <Text>
          Telephone: 220-3565 Cellphone: 624-5900 Email:
          operations@shiwsalesandservice.com
        </Text>
        <Text>
          Suppliers of Marvex Bleach, Salted Fish, Fish Spray,ItalPastas,
          Phidelia Products and assorted food and beverages.
        </Text>
        <Text>TIN #: 110137497</Text>
        <Text>Wholesale and Retail</Text>
      </View>
    </>
  );
}
