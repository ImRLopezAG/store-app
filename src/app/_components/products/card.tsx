import { Text } from '@ui/text';
import { Image, View } from 'react-native';
import { cartService } from '@services/cart'
interface ProductCardProps {
  product: Product;
}
export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { title, price, subtitle, images } = product;
  const { currentPrice } = price;
  const { portraitURL } = images;
  const { f } = cartService()
  return (
    <View className='flex flex-col w-64 py-2 gap-2'>
      <Image source={{ uri: portraitURL }}  style={{ width: 170, height: 170 }} className='rounded-lg' />
      <View className='flex flex-col'>
        <Text className='font-bold w-32' text={title} />
        <Text className='truncate' text={subtitle} />
        <Text>
          {f(currentPrice)} 
        </Text>
      </View>
    </View>
  );
};
