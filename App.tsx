import React, { useState } from 'react';
import { useEffect } from 'react';
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
import { ListItem, TodoItem } from './src/components/listitem';

const App = () => {
  const [dataSource, setDataSource] = useState<TodoItem[]>([])
  
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  const fetchData = async () => {
    try {
      const res = await fetch("https://apidemo.showkhun.co/lists")
      const data = await res.json()
      if (data?.lists) {
        setDataSource([...data.lists])
      }
    } catch (error) {
      console.log('Error : ', error)
    }
  }

  useEffect(() => {
    fetchData().then()
  }, [])

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={{
        padding:6
      }}>
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
              <ListItem item={item} />
            )
          }}
          keyExtractor={item => item.id + ""}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
