import { View, Text, SafeAreaView } from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View className="mx-2.5 mt-5">
        <Text className="font-work-black text-5xl text-primary">Hola mundo!</Text>
        <Text className="font-work-black text-3xl text-secondary">Hola mundo!</Text>
        <Text className="font-work-medium text-2xl text-secondary-100">Hola mundo!</Text>
        <Text className="font-work-light text-xl text-tertiary">Hola mundo!</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
