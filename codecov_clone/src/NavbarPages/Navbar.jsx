import { Link } from "react-router-dom";
import { Box, Button, Flex, HStack,Image,Text} from "@chakra-ui/react"


function Navbar() {
    return (
        <div>
           


            <Flex minWidth='max-content' alignItems='center' gap='2' my="1" py="2" mx="10" 
                border="0.1rem solid gray">

                 <Box>
                    <HStack spacing='60px' mx="5">
                    <Link to="/logo"><Image boxSize='150px' src='https://about.codecov.io/wp-content/themes/codecov/assets/brand/logos/codecov.svg' alt='Dan Abramov' /></Link>

                    <Link to="/"><Text as='b'>Product</Text></Link>
                    <Link to="/doco"><Text as='b'>Docomentation</Text></Link>
                    <Link to="/customer"><Text as='b'>Customer</Text></Link>
                    <Link to="/resources"><Text as='b'>Resources</Text></Link>
                    <Link to="/pricing"><Text as='b'>Pricing</Text></Link>
                    <Link to="/contact"><Text as='b'>Contact</Text></Link>


                    <HStack spacing='70px' mx="5"  >
                    <Link to="/login" ><Text as='b'>Login</Text></Link>
                    
                     <Link to="/get_demo"><Button colorScheme='blue' >Get Demo</Button></Link>
                   
                    </HStack>
                    
                    </HStack>
                </Box>


            </Flex>

        </div>
    )
}
export default Navbar