import React from 'react';
import { Document, Page, Text, View, Image, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { padding: 30, fontSize: 12 },
  photo: { width: 100, height: 100, borderRadius: 8, marginBottom: 20 },
  section: { marginBottom: 10 },
  heading: { fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
  expItem: { marginBottom: 8, paddingLeft: 10, borderLeft: '2px solid #3498db' },
  langItem: { marginBottom: 8, paddingLeft: 10, borderLeft: '2px solid #2ecc71' }
});

const MyDocument = ({ cvData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {cvData.photo && (
        <Image src={cvData.photo} style={styles.photo} />
      )}
      <View style={styles.section}>
        <Text style={styles.heading}>Dane osobowe</Text>
        <Text>Imie i nazwisko: {cvData.name}</Text>
        <Text>E-mail: {cvData.email}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Doswiadczenie</Text>
        {cvData.experience.map((exp, idx) => (
          <View key={idx} style={styles.expItem}>
            <Text>Stanowisko: {exp.position}</Text>
            <Text>Firma: {exp.company}</Text>
          </View>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Jezyki programowania</Text>
        {cvData.languages.map((lang, idx) => (
          <View key={idx} style={styles.langItem}>
            <Text>Jezyk: {lang.name}</Text>
            <Text>Poziom: {lang.level}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

export default MyDocument;
