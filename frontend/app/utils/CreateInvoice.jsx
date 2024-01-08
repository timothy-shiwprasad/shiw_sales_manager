//import easyinvoice from "easyinvoice";
import React from "react";
import ReactPDF from "@react-pdf/renderer";
import {
  pdf,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

export default async function EasyInvoice(products) {
  console.log("I hope this is being called");
  // Create styles
  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: "#E4E4E4",
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
  });

  // Create Document Component
  const MyDoc = (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Section #1</Text>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
  );

  const fileName = "test.pdf";
  const blob = await pdf(MyDoc).toBlob();

  var link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "file.pdf";
  document.body.append(link);
  link.click();
  link.remove();
}

// var data = {
//   // "customize": {
//   //     "template": "SGVsbG8gd29ybGQh" // Must be base64 encoded html. This example contains 'Hello World!' in base64
//   // },
//   images: {
//     logo: "https://public.easyinvoice.cloud/img/logo_en_original.png",
//     background: "https://public.easyinvoice.cloud/img/watermark-draft.jpg",
//   },
//   sender: {
//     company: "Shiw Sales and Service",
//     address: "Lot 73 La Bonne Intention",
//     zip: "",
//     city: "East Coast Demerara",
//     country: "Guyana",
//     // "custom1": "custom value 1",
//     // "custom2": "custom value 2",
//     // "custom3": "custom value 3"
//   },
//   client: {
//     company: "Client Corp",
//     address: "Clientstreet 456",
//     zip: "4567 CD",
//     city: "Clientcity",
//     country: "Clientcountry",
//     // "custom1": "custom value 1",
//     // "custom2": "custom value 2",
//     // "custom3": "custom value 3"
//   },
//   information: {
//     number: "2021.0001",
//     date: "12-12-2021",
//     "due-date": " ",
//   },
//   products: null,

//   "bottom-notice": "Goods not returnable after 7 days",
//   settings: {
//     currency: "", // See documentation 'Locales and Currency' for more info. Leave empty for no currency.
//   },

//   translate: {},
// };
// data["products"] = products;
// /*
// data["client"]["company"] = company,
// data["client"]["address"] = address;
// data["client"]["country"] = "Guyana"
// data["client"]["zip"] = "  ";
// data["client"]["city"] = "  ";
// data["information"]["number"] = InvoiceNumber();
// data["information"]["date"] = today();

// */
// console.log(data);

// const result = await easyinvoice.createInvoice(data);
// easyinvoice.download("myInvoice.pdf", result.pdf);
