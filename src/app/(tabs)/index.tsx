import { Text } from '@ui/text';
import { Wrapper } from '@ui/wrapper';
import { useCart } from '@hooks/use-cart'

export default function Home() {
  const { cart } = useCart()
  return (
    <Wrapper title='Home'>
      <Text text={`Cart: ${cart?.id}`} />
    </Wrapper>
  );
}
