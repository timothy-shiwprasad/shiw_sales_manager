import {
  PDFViewer,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

import Header from "./InvoiceTemplate/Header";
import Details from "./InvoiceTemplate/Details";

export default function PDFTemplate() {
  // Create styles
  const styles = StyleSheet.create({
    page: {
      backgroundColor: "tomato",
    },
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Header></Header>
        <Details></Details>
      </Page>
    </Document>
  );
}
