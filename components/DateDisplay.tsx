import React from 'react'
import { Text } from 'react-native'

const DateDisplay: React.FC = () => {
  const currentDate = new Date().toLocaleString()
  return <Text>{currentDate}</Text>
}

export default DateDisplay;