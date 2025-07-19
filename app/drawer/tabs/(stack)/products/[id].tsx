import { View, Text } from 'react-native'
import { Redirect, useLocalSearchParams } from 'expo-router'
import { products } from 'store/products.store'

const ProductScreen = () => {
    const { id } = useLocalSearchParams()
    const product = products.find((product) => product.id === id)

    if (!product) return <Redirect href="/" />
  return (
    <View className='px-5 mt-2'>
          <Text className='text-2xl font-work-black'>{product.title}</Text>
          <Text>{product.description}</Text>
          <Text className='font-work-black'>${product.price}</Text>
    </View>
  )
}

export default ProductScreen