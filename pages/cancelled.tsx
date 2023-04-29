import Head from 'next/head';
import {
  Flex,
  Text,
} from '@chakra-ui/react'


export default function Home() {
  return (
    <Flex w={'full'} h={'100vh'} justifyContent={'center'} alignItems={'center'}>
      <Head>
        <title>Order cancelled</title>
      </Head>
      <Text>
        Order cancelled.
      </Text>
    </Flex>
  )
}
