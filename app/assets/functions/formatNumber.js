import React from 'react';
import {Text} from 'react-native';
import NumberFormat from 'react-number-format';

const Format = ({ value }) => {
  return (
    <NumberFormat
      value={value}
      displayType={'text'}
      thousandSeparator={true}
      prefix={'$'}
      renderText={formattedValue => <Text>{formattedValue}</Text>} // <--- Don't forget this!
    />
  );
}

export default Format;