import { usePage } from '@hooks/use-pagination';
import { useProduct } from '@hooks/use-products';
import { Wrapper } from '@ui/wrapper';
import { useEffect } from 'react';
import { FlatList } from 'react-native';
import { ProductCard } from './card';

interface Props {
  product: 'NEW_RELEASES' | 'MEN' | 'WOMEN';
  title: string;
}

export const ProductList: React.FC<Props> = ({ product, title }) => {
  const { handleCurrPage, endpoints, nextPage } = usePage();
  useEffect(() => {
    handleCurrPage(endpoints[product]);
  }, [endpoints, product, handleCurrPage]);
  const { products, isLoading } = useProduct();
  const handleRefresh = () => {
    handleCurrPage(endpoints[product]);
  }

  return (
    <Wrapper
      title={title}
      className='flex flex-row justify-center'
    >
      <FlatList
        className='flex flex-1'
        data={products}
        numColumns={2}
        keyExtractor={(item) => item.id }
        renderItem={({ item }) => <ProductCard product={item} />}
        refreshing={isLoading}
        onRefresh={handleRefresh}
      />
    </Wrapper>
  );
};
