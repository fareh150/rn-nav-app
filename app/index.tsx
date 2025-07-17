import { Link, Redirect } from 'expo-router';
import { View, Text, SafeAreaView } from 'react-native';

const App = () => {
  //return <Redirect href="/home" />;
  //return <Redirect href="/tabs" />;
  return <Redirect href="/drawer" />;
  // return (
  //   <SafeAreaView>
  //     <View className="mx-2.5 mt-5">
  //       <Text className="font-work-black text-5xl text-primary">Hola mundo!</Text>
  //       <Text className="font-work-black text-3xl text-secondary">Hola mundo!</Text>
  //       <Text className="font-work-medium text-2xl text-secondary-100">Hola mundo!</Text>
  //       <Text className="font-work-light text-xl text-tertiary">Hola mundo!</Text>
  //       <Link href="/products">Ir a Products</Link>
  //     </View>
  //   </SafeAreaView>
  // );
};

export default App;
