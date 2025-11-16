import React from 'react'
import { Text, StyleSheet } from 'react-native'

const PizzaText: React.FC = () => {
  return (
    <Text style={styles.mainText}>
      <Text style={styles.italic}>Pizza</Text> to bardzo smaczne włoskie danie. Wykonuje się ją z ciasta drożdżowego. Na ciasto wylewa się sos pomidorowy. Na wierzch kładzie się składniki:{' '}
      <Text style={styles.bold}>kiełbasę</Text>,{' '}
      <Text style={styles.bold}>ser żółty</Text>,{' '}
      <Text style={styles.bold}>oliwki</Text>,{' '}
      <Text style={styles.bold}>paprykę</Text>. Istnieje wiele rodzajów{' '}
      <Text style={styles.italic}>pizzy</Text>, może być mięsna, bezmięsna, rybna lub słodka z{' '}
      <Text style={styles.yellow}>ananasem</Text>.
    </Text>
  )
}

const styles = StyleSheet.create({
  mainText: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
    paddingHorizontal: 16,
  },
  italic: {
    fontStyle: 'italic',
  },
  bold: {
    fontWeight: 'bold',
  },
  yellow: {
    color: '#FFD700',
    fontWeight: 'bold',
  },
})

export default PizzaText
