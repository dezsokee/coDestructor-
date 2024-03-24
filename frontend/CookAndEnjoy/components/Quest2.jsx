import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

export default function Welcomeuest2({ route }) {

  const { questData } = route.params;

  let methodarray = questData.method.split('/');

  methodarray.shift();

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.titleview}>
          <Text style={styles.title}>But how to prepare? ✌️</Text>
          <View style={styles.line}>
          </View>
        </View>

        <View style={styles.titleview}>
          {methodarray.map((step, index) => (
            <View>
              <Text key={index} style={styles.step}>{`${index + 1}. ${step}`}</Text>
              <View style={styles.line2}>
              </View>
            </View>
          ))}
        </View>

      </ScrollView>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    alignContent: 'center',
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  titleview: {
    marginBottom: 16,
    marginTop: 16,
  },
  step: {
    fontSize: 16,
    marginBottom: 8,
  },
  line: {
    borderBottomColor: '#006400',
    borderBottomWidth: 1,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    width: '80%',
    alignSelf: 'center',
  },
  line2: {
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    width: '80%',
    alignSelf: 'center',
  },
});