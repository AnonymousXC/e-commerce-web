import {
    VStack,
    Text,
    Image,
    Button,
    Box,
    useColorModeValue,
} from '@chakra-ui/react';

interface Props {
    name: string,
    price: number,
    img: string,
}

function Item(props : Props) {

    const bg  = useColorModeValue('gray.200', 'black')

    return (
        <>
            <VStack w={'full'} maxW={'300px'} bg={bg}  py={4} gap={4} rounded={8} pb={8}>
                <Image src={props.img} h={'200px'} />                
                <Box>
                    <Text>{props.name}</Text>
                    <Text>$ {props.price}</Text>
                </Box>
                <form action={`/api/checkout?price=${props.price}&product=${props.name}`} method='POST'>
                    <Button colorScheme='teal' type='submit'>
                        Buy Now.
                    </Button>
                </form>
            </VStack>
        </>
    )
}

export default Item;