

import { ChevronDownIcon } from '@chakra-ui/icons'
import { Box, Container, Flex, Grid, GridItem, Heading, HStack, Spacer, Stack, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import React from 'react'

const FooterPage = () => {
    return (
        <div>

            <Box bg="#0f1b29" h="full" >

                <HStack gap={30}>
                <Image  w="60px"  src='https://about.codecov.io/wp-content/themes/codecov/assets/brand/icons/codecov/codecov-circle.svg' alt='error' />
                <Image w="180px" bg="#0f1b29" src='https://cdn.pixabay.com/photo/2021/02/08/15/44/social-media-5995266_960_720.png' alt='error' />
                
                </HStack>
                

                <Grid templateColumns='repeat(6, 1fr)' gap={6} textAlign="left" ml={5}>

                    <GridItem color="white"  >
                        <br />
                        <br />
                        <Heading color="white" as="h2" size='sm'>PRODUCT</Heading>
                        <br />
                        <Text fontSize='sm' >Features</Text>
                        <Text fontSize='sm' >Integrations</Text>
                        <Text fontSize='sm' >Documentation</Text>
                        <Text fontSize='sm' >API</Text>
                        <Text fontSize='sm' >Status</Text>
                    </GridItem  >
                    <GridItem color="white" >
                        <br />
                        <br />
                        <Heading size='sm'>SOLUTIONS</Heading>
                        <br />
                        <Text fontSize='sm' >Open Source</Text>
                        <Text fontSize='sm' >Enterprise</Text>
                        <Text fontSize='sm' >Startups</Text>
                        <Text fontSize='sm' >Education</Text>

                    </GridItem >
                    <GridItem color="white" >
                        <br />
                        <br />
                        <Heading size='sm'>CUSTOMERS</Heading>
                        <br />
                        <Text fontSize='sm' >Customers</Text>

                        <Text fontSize='sm' >Case Studies</Text>

                        <Text fontSize='sm' >Community</Text>

                    </GridItem>
                    <GridItem color="white" >
                        <br />
                        <br />
                        <Heading size='sm'>RESOURCES</Heading>
                        <br />
                        <Text>Webinars</Text>
                        <Text>Blog</Text>
                        <Text>Documentation</Text>

                    </GridItem>
                    <GridItem color="white" >
                        <br />
                        <br />
                        <Heading size='sm'>COMPANY</Heading>
                        <br />
                        <Text fontSize='sm' >Team</Text>
                        <Text fontSize='sm' >Press</Text>
                        <Text fontSize='sm' >Careers</Text>
                        <Text fontSize='sm' >Write for us</Text>

                    </GridItem>
                    <GridItem color="white"  >
                        <br />
                        <br />
                        <Heading size='sm'>CONTACT US</Heading>
                        <br />
                        <Text fontSize='sm' >Contact</Text>
                        <Text fontSize='sm' >Demo</Text>
                        <Text fontSize='sm' >Support</Text>

                    </GridItem>
                </Grid>

            </Box>


            <Box display="flex" justifyContent="space-around" bg="#0c1622" h="15vh" >

                <Box color="white" >
                    <br />
                    <Text fontSize='sm'>Select Language | <ChevronDownIcon /></Text>
                </Box>
                <Box color="white">
                    <br />
                    <HStack gap={3}>

                        <Text fontSize='sm'>Terms & Conditions</Text>
                        <Text fontSize='sm'>Privacy</Text>
                        <Text fontSize='sm'> Security</Text>
                        <Text fontSize='sm'>EULA </Text>
                        <Text fontSize='sm'>GDPR</Text>
                    </HStack>
                </Box>
                <Box color="white">
                    <br />
                    <Text fontSize='sm'>© Codecov 2022</Text>
                </Box>
            </Box>



        </div>
    )
}

export default FooterPage