import {
    VStack,
    Text,
    Image,
    Button,
    Box,
} from '@chakra-ui/react';

interface Props {
    name: string,
    price: string,
    img: string,
}

function Item(props : Props) {
    return (
        <>
            <VStack w={'full'} maxW={'300px'} bg={'black'}  py={4} gap={4} rounded={8} pb={8}>
                <Image src={props.img} h={'200px'} />                
                <Box>
                    <Text>{props.name}</Text>
                    <Text>{props.price}</Text>
                </Box>
                <Button colorScheme='teal'>
                    Buy Now.
                </Button>
            </VStack>
        </>
    )
}

export default Item;