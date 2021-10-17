import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  FlatList
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen'
interface TodoItem {
  id: number
  todo: string
  detail: string
  status: string
}
const App = () => {
  const [dataSource, setDataSource] = useState<TodoItem[]>([])
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View>
        <Text style={{
          fontSize: 25,
          fontWeight: 'bold'
        }}>Todo Lists</Text>
      </View>
      <FlatList
        data={dataSource}
        renderItem={({ item }) => {
          return (
            <Text>{JSON.stringify(item)}</Text>
          )
        }}
        keyExtractor={item => item.id + ""}
      />
    </SafeAreaView>
  );
};

export default App;
