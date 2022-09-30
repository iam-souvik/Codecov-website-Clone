import React from 'react'
import { Box, Button, Image, Text, Grid, VStack, Highlight, Container, HStack, GridItem, Spacer, Heading, ListItem, List } from '@chakra-ui/react'

import { ArrowForwardIcon, CheckIcon } from "@chakra-ui/icons"



import Navbar from '../NavbarPages/Navbar'
import FooterPage from './FooterPage'
function HomePage() {
    return (
        <div>

            <Box bgImage="https://about.codecov.io/wp-content/themes/codecov/assets/backgrounds/bg-blobs-02.svg" bgPosition="right" bgSize="cover" p={10} >

                <div>
                    <Navbar />

                </div>

                <Box>


                    <Grid templateColumns='repeat(2, 1fr)' gap={2} alignItems="center" p={10} m={12} >

                        <VStack >
                            <Heading as="b" fontSize='5xl'>Ship healthier code faster with less risk.</Heading>

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
                </Box>





                {/* ************Company_Logo**************** */}

                <Text as="b" fontSize='15px' alignItems="center" >29,000+ ORGANIZATIONS ARE ALREADY USING CODECOV</Text>
                <br />
                <br />


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
                <br />
                <br />
                <br />
                <br />
                <br />



            </Box>


            {/* ************************Development cycles Area ********************** */}

            <Text as="b" textAlign="center" fontSize='3xl'>Development cycles are spinning faster than ever...</Text>
            <br />
            <br />


            <Box w="80%" display="flex" justifyContent="center" p={15} >
                <Spacer />
                <Container w="500px">
                    <Image src='https://about.codecov.io/wp-content/themes/codecov/assets/templates/home/devops.svg' alt='error' />

                </Container>
                <Container w="35%">
                    {/* <Box > */}
                    <Text as="b">With everything from doorbells to rockets running on code, it's more important than ever to ensure quality code is being delivered with every release.</Text>
                    <br />
                    <br />


                    <Text as="b"> Code coverage is one of the most important metrics companies rely on to ship healthier code, faster, and with less risk.</Text>
                    <br />
                    <br />



                    <Text as="b">Codecov gives companies actionable coverage insights when and where they need them to ensure they are shipping quality code.</Text>
                    <br />

                    <br />
                    {/* </Box> */}
                </Container>
            </Box>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />



            {/* ***********************How CodeCov Help Area***************** */}

            <Heading fontSize='3xl'>How Codecov helps...</Heading>


            <Box ml="70px" w="90%" h="400px" display="flex" justifyContent="center" p={15} gap={5} bgImage="https://about.codecov.io/wp-content/themes/codecov/assets/backgrounds/blob-03.svg" bgPosition="center" bgSize="cover" >
                <Spacer />
                <Container w="400px" ml={30} >
                    <VStack>
                        <Box display="flex">
                            <Image w="80px" src='https://about.codecov.io/wp-content/themes/codecov/assets/brand/icons/solutions/flexible.svg' alt='Dan Abramov' />
                            <Text p={7} as="b">Flexible / Unified Reporting </Text>
                        </Box>
                        <Box display="flex">
                            <Image w="80px" src='https://about.codecov.io/wp-content/themes/codecov/assets/brand/icons/solutions/seamless.svg' alt='Dan Abramov' />
                            <Text p={7} as="b">Flexible / Unified Reporting </Text>
                        </Box>
                        <Box display="flex">
                            <Image w="80px" src='https://about.codecov.io/wp-content/themes/codecov/assets/brand/icons/solutions/robust.svg' alt='Dan Abramov' />
                            <Text p={7} as="b">Flexible / Unified Reporting </Text>
                        </Box>

                    </VStack>


                </Container>
                <Container w="80%" boxShadow='2xl' bg='white' mt="40px" h="235px"  >
                    <VStack>
                        <Text fontWeight='bold'>
                            <Highlight query='compatible format' styles={{ py: '1', fontWeight: 'normal', color: "#ff0077" }}>
                                As long as your code has tests and your coverage tool can output coverage results in a compatible format, you can use Codecov.
                            </Highlight>
                        </Text>

                        {/* <Container w="40%"></Container> */}

                        <Container h="80px" textAlign="left"  >
                            <List spacing={3} >
                                <ListItem color="#ff0077">
                                    
                                    <CheckIcon bg="pink.100" />

                                    Source Code Coverage
                                </ListItem>
                                <ListItem color="#ff0077">
                                    
                                    <CheckIcon bg="pink.100"/>
                                    20+ Languages and CI/CD Agnostic
                                </ListItem>
                                <ListItem color="#ff0077">
                                   
                                    <CheckIcon bg="pink.100"/>
                                    Report Merging
                                </ListItem>
                                
                                <ListItem color="#ff0077">
                                    <CheckIcon bg="pink.100"/>
                                    Coverage Isolation
                                </ListItem>
                            </List>
                        </Container>

                    </VStack>



                </Container>
            </Box>



            {/* ***********************Code Coverage For Any Tech Stack********************* */}



           



            {/*************************************Resources _Area******************************* */}

            <br />
            < HStack gap={5} justify="center"  >

                <Box boxSize='330px' height="200px">
                    <Image src='https://about.codecov.io/wp-content/uploads/2021/11/cover.jpg' alt='Dan Abramov' />

                    <Box boxShadow='2xl' p='6' rounded='md' bg='white'>
                        <Button display="block" size='xs' color="#ff0077" bg="pink.100" variant='ghost' >Page</Button>
                        <Spacer />
                        <Heading as="b" size='sm'>What should my code coverage goal be?</Heading>
                        <br />
                        <br />
                        <br />
                       

                        <Box>
                            <Button display="block" mr="30px" as="bold" variant="link" size='xs' color="#ff0077" >Learn More <ArrowForwardIcon /> </Button>
                        </Box>
                    </Box>
                </Box>



                <Box boxSize='330px' height={200}>
                    <Image src='https://about.codecov.io/wp-content/uploads/2021/02/2020-state-of-open-source-code-coverage.jpg' alt='Dan Abramov' />

                    <Box boxShadow='2xl' p='6' rounded='md' bg='white'>
                        <Button display="block" ml={5} size='xs' color="#ff0077" bg="pink.100" variant='ghost' >INFOGRAPHIC</Button>
                        <Spacer />
                        <Heading as="b" size='sm'>2020 State of Open Source Code Coverage</Heading>
                        <br />




                        <Box>
                            <Button as="bold" variant="link" size='xs' color="#ff0077" >View Infographic <ArrowForwardIcon /> </Button>
                        </Box>
                    </Box>
                </Box>

                <Box boxSize='330px' height={200}>
                    <Image src='https://about.codecov.io/wp-content/uploads/2021/02/8-factors-Influencing.png' alt='Dan Abramov' />

                    <Box boxShadow='2xl' p='6' rounded='md' bg='white'>
                        <Button display="block" size='xs' color="#ff0077" bg="pink.100" variant='ghost' >BLOG POST</Button>
                        <Spacer />
                        <Heading as="b" size='sm'>8 Factors Influencing Your Approach to Code Coverage</Heading>
                        <br />
                        <br />
                        <br />

                        <Box>
                            <Button as="bold" variant="link" size='xs' color="#ff0077" >Learn More <ArrowForwardIcon /> </Button>
                        </Box>
                    </Box>
                </Box>

            </HStack>


            {/* ***********************Ready to get Coverage*********************** */}

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Box  ml={80}  >
                <Box w="700px" height="45vh" p={6} boxShadow='dark-lg'  rounded='20px' bg='white'  >
                    <Heading as="h2" fontSize='3xl'  >Ready to get covered?</Heading>
                   <Box w="570px"  p={10}>
                   <Text alignItems="center" as="b" fontSize='lg' >Join over a million developers in shipping healthier code today. Sign up with your code host below.</Text>

                   </Box >
                    <Box display="flex" justifyContent="space-around" w="670px" >

                        <Button bg="black" color="white" w={300} h="50px" >Schedual Demo</Button>
                        <Button bg="#ff0077" color="white" w={300} h="50px">Get Started</Button>

                    </Box>
                </Box>
            </Box>

            <br/>
            <br/>
            <br/>
            <br/>



            <div>
                <FooterPage/>
            </div>











        </div>
    )
}



export default HomePage

