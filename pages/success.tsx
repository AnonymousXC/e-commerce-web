import Head from 'next/head';
import {
  Flex,
  Text,
} from '@chakra-ui/react'


export default function Home() {
  return (
    <Flex w={'full'} h={'100vh'} justifyContent={'center'} alignItems={'center'}>
      <Head>
        <title>Ordered successfully</title>
      </Head>
      <Text>
        Ordered successfully.
      </Text>
    </Flex>
  )
}
