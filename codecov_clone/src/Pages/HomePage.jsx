import React from 'react'
import { Box, Button, Image, Text, Grid, VStack, Highlight, Container,  HStack, GridItem } from '@chakra-ui/react'

function HomePage() {
    return (
        <div>

            <Grid templateColumns='repeat(2, 1fr)' gap={2} alignItems="center" p={10} m={12} >
                <VStack >
                    <Text as="b" fontSize='5xl'>Ship healthier code faster with less risk.</Text>
                    <Container>
                        <Highlight as="b" query='code coverage' styles={{ px: '1', py: '1', bg: 'pink.100', color: "#ff0077" }}>
                            Join 1M+ developers worldwide in shipping healthier code with code coverage from Codecov.
                        </Highlight>
                    </Container>

                    <br />
                    <HStack spacing="3">
                        <Button colorScheme='pink'>Get Started</Button>
                        <Text as="b" color="#ff0077" >Schedule a Demo</Text>

                    </HStack>

                </VStack>

                <Box  >
                    <Image w="400px" src='https://about.codecov.io/wp-content/themes/codecov/assets/templates/home/pull-request-comments.svg' alt='error' />
                </Box>

            </Grid>
            <br />

            {/* ************Company_Logo**************** */}

            <Text as="b" fontSize='15px' >29,000+ ORGANIZATIONS ARE ALREADY USING CODECOV</Text>
              <br/>
              <br/>

           
               <Container w="40%" display="flex" justifyContent="center" gap={20}>
               <GridItem   >
                    <Box boxSize='70px'>
                        <Image src='https://about.codecov.io/wp-content/uploads/2022/05/Logo-Robinhood.png' alt='Dan Abramov' />
                    </Box>
                </GridItem>
                <GridItem  >
                    <Box boxSize='70px'>
                        <Image src='https://about.codecov.io/wp-content/uploads/2020/08/python-logo.svg' alt='Dan Abramov' />
                    </Box></GridItem>
                <GridItem   >
                    <Box boxSize='70px'>
                        <Image src='https://about.codecov.io/wp-content/uploads/2020/10/lyft.svg' alt='Dan Abramov' />
                    </Box> </GridItem>
                <GridItem    >
                    <Box boxSize='70px'>
                        <Image src='https://about.codecov.io/wp-content/uploads/2021/07/wework-logo.svg' alt='Dan Abramov' />
                    </Box> 
                    </GridItem>
                <GridItem   >
                    <Box boxSize='70px'>
                        <Image src='https://about.codecov.io/wp-content/uploads/2021/06/Hewlett_Packard_Enterprise_logo.svg' alt='Dan Abramov' />
                    </Box>
                 </GridItem>
                 <GridItem  >
                    <Box boxSize='70px'>
                        <Image src='https://about.codecov.io/wp-content/uploads/2020/08/grab.svg' alt='Dan Abramov' />
                    </Box>
                 </GridItem>
               </Container>
            


            {/* ************************Development cycles Area ********************** */}





        </div>
    )
}



export default HomePage

