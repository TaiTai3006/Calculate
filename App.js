import React, { useState } from 'react';
import { Text, TouchableOpacity, View, TextInput, ScrollView, SafeAreaView, FlatList, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Feather } from "@expo/vector-icons";
import styles from "./styleSheet"
import PreviewLayout from "./PreviewLayout"

let arrResult = []
const Calculate = ({ navigation }) => {
  const [direction, setDirection] = useState("Calculate");
  const [text, setText] = useState('');
  const [result, setResult] = useState([]);
  const [equal, setEqual] = useState(0)
  const buttons = ['C', 'DEL', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '00', '.', '=']
  const subtend = ['+', '-', '*', '/']
  let n = text.length
  arrResult = result
  const handleInput = (str) => {
    if (subtend.includes(str)) {
      calculation(str)
      setEqual(0)
      return
    }
    switch (str) {
      case 'C':
        setText('')
        setEqual(0)
        return
      case 'DEL':
        if (n != equal) setText(text.slice(0, n - 1))
        setEqual(0)
        return
      case '=':
        if (buttons.includes(text[n - 1])) {
          if (!subtend.includes(text[n - 1])) {
            const history = [
              ...result, {
                expression: text + '=',
                result: String(eval(text))
              }]
            setResult(history)
            setText(String(eval(text)))
            setEqual(String(eval(text)).length)
          }
        }
        return
      case '.':
        if (n == equal || n == 0) setText('0.')
        else if (subtend.includes(text[n - 1])) setText((text) => text + '0.')
        else {
          let sum = 0
          for (let i = n - 1; !subtend.includes(text[n - 1]) && i >= 0; i--)
            if (text[i] == '.') {
              sum++
              break
            }
          if (sum == 0) setText((text) => text + '.')
        }
        setEqual(0)
        return
      case '00':
        if (n == equal || n == 0 || subtend.includes(text[n - 1])) number('0')
        else number('00')
        setEqual(0)
        return
    }
    number(str)
    setEqual(0)
  }
  const number = (str) => {
    if (n == equal) setText(str)
    else if (text[n - 1] === '0' && (subtend.includes(text[n - 2]) || n - 2 < 0)) {
      if (str == '00') str = '0'
      setText(text.slice(0, n - 1))
      setText((text) => text + str)
    }
    else {
      setText((text) => text + str)
    }
  }

  const calculation = (str) => {
    if (subtend.includes(text[n - 1])) {
      setText(text.slice(0, n - 1))
      setText((text) => text + str)
    } else {
      setText((text) => text + str)
    }
  }

  const Button = ({ backgroundColor, title, color, fontSize, minWidth }) => {
    return (
      <TouchableOpacity
        key={title}
        style={[styles.button, { backgroundColor: backgroundColor, minWidth: minWidth }]}
        onPress={() => { handleInput(title) }}>
        <Text style={[styles.textButton, { color: color, fontSize: fontSize }]}>{title}</Text>
      </TouchableOpacity>
    )
  }
  return (
    <View style={{ backgroundColor: 'white' }}>
      <PreviewLayout
        selectedValue={direction}
        values={["Calculate", "History"]}
        setSelectedValue={setDirection}
        navigation={navigation}>
      </PreviewLayout>

      <View style={styles.results}>
        <TextInput
          style={{ height: 60, fontSize: 50 }}
          placeholder=""
          onChangeText={newText => setText(newText)}
          value={text}
        />
      </View>

      <View style={styles.buttons}>
        {
          buttons.map((str) =>
            subtend.includes(str) ?
              <Button title={str} backgroundColor={'#FF6666'} color={'white'} fontSize={28}></Button>
              : str === 'C' || str === 'DEL' ?
                <Button title={str} backgroundColor={'#C0C0C0'} minWidth={'37%'}></Button>
                :
                <Button title={str} backgroundColor={'#FFFF'} fontSize={28}></Button>
          )
        }
      </View>
    </View>
  );
}

const History = ({ navigation }) => {
  const [direction, setDirection] = useState("History");
  const [search, setSearch] = useState(arrResult)
  const Item = ({ expression, result }) => (
    <Text style={{ fontSize: 35, padding: 10, color: '#7c7c7c' }}>{expression}{result}</Text>
  );
  const renderItem = ({ item }) => (
    <Item expression={item.expression} result={item.result} />
  );
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <PreviewLayout
        selectedValue={direction}
        values={["Calculate", "History"]}
        setSelectedValue={setDirection}
        navigation={navigation}>
      </PreviewLayout>

      <View style={styles.container}>
        <Feather
          name="search"
          size={25}
          color="black"
          style={{ marginLeft: 1, padding: 10 }}
        />

        <TextInput
          style={styles.input}
          placeholder="Search"
          onChangeText={(search) => {
            setSearch(arrResult.filter((item) => {
              return item.expression.toString().includes(search) ||
                item.result.toString().includes(search)
            }))
          }}
        />
      </View>

      <View style={styles.history}>
        <SafeAreaView>
          <FlatList
            data={search}
            renderItem={renderItem}
          />
        </SafeAreaView>
      </View>
    </ScrollView>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Calculate" component={Calculate} />
        <Stack.Screen name="History" component={History} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
