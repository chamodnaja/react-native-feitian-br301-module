import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import CardReaderModule, {
  multiply,
} from 'react-native-feitian-br301-module';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();
  const [result2, setResult2] = React.useState<string | undefined>();
  const [result3, setResult3] = React.useState<string | undefined>();

  React.useEffect(() => {
    multiply(3, 7).then(setResult);
    CardReaderModule.sample().then(setResult2);
    CardReaderModule.sayhello((err, data) => {
      setResult3(data);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result-multiply: {result}</Text>
      <Text>Result-sample: {result2}</Text>
      <Text>Result-sayhello: {result3}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
