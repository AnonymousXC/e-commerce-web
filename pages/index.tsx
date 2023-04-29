import Head from 'next/head';
import NavBar from './components/Navigation Bar';
import Item from './components/Buying Items';
import {
  Box,
  Flex,
} from '@chakra-ui/react'


export default function Home() {
  return (
    <Box w={'full'} h={'100vh'}>
      <Head>
        <title>E commerce website example</title>
      </Head>
      <NavBar />
      <Flex my={4} gap={4} px={4} wrap={'wrap'} justifyContent={'center'}>
        <Item name='IPhone 14' price={1500} img='https://www.trustedreviews.com/wp-content/uploads/sites/54/2022/09/iPhone-14-Pro-3.png' />
        <Item name='Laptop' price={2000} img='https://i.somethingawful.com/u/ctstalker/2014/lap2.jpg' />
        <Item name='Keyboard' price={200} img='https://i0.wp.com/techacute.com/wp-content/uploads/2014/08/razer-chroma-blackwidow-usage-example-profile-press-shot-video-led-keyboard-gaming-gear-equipment.jpg?fit=1400%2C788&ssl=1' />
      </Flex>
    </Box>
  )
}
