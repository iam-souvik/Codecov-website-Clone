
import { Box, Container, Grid, GridItem, Heading, HStack, Stack, Text } from '@chakra-ui/layout'
import { Button, FormControl, FormLabel, Image, Input, Select, Textarea } from '@chakra-ui/react'
import React from 'react'

const GetDemo = () => {
  return (
    <div>
      
      <HStack display="flex" justifyContent="space-around" >
        <Box boxSize="900px" bg="#0f1b29"lineHeight={-50} mr="250px" mt="-30px" p={5} h="120vh" >
          <Image p={10} w="250px" src='https://about.codecov.io/wp-content/themes/codecov/assets/brand/logos/codecov.svg' alt='Dan Abramov' />
          <Heading as="h3" textAlign="center" mt="200px" color="white">Schedule a Demo.</Heading>
          <Text textAlign="center" mt={-20} color="white">Fill out the form to immediately schedule a demo with our team.</Text>
          <HStack gap={5} mt="150px" justifyContent="center">
          <Image w="100px"  src='https://about.codecov.io/wp-content/uploads/2020/10/adobe.svg' alt='Adov' />
          <Image w="50px" src='https://about.codecov.io/wp-content/uploads/2021/06/butterfly_network-1.svg' alt='Adov' />
          <Image w="100px" src='https://about.codecov.io/wp-content/uploads/2020/08/tile.svg' alt='Adov' />
          <Image w="200px" src='https://about.codecov.io/wp-content/uploads/2020/08/the-washington-post.svg' alt='Adov' />
          </HStack>
        </Box>
        
        <Stack    >
         <Container>
         <Grid templateColumns='repeat(2, 1fr)' gap={6} w="400px" mt="-60px"  boxShadow='lg' p='10' rounded='md' bg='white'  >

         <GridItem colSpan={2}  >
            <FormControl isRequired>
              <FormLabel>First Name</FormLabel>
              <Input  type="text" name="email"    />
            </FormControl>

          </GridItem>



          <GridItem colSpan={2}  >
            <FormControl isRequired>
              <FormLabel>Last Name</FormLabel>
              <Input  type="text" name="name"    />
            </FormControl>

          </GridItem>

          <GridItem colSpan={2} >
            <FormControl isRequired>
              <FormLabel>Email Address</FormLabel>
              <Input  type="email" name="email"    />
            </FormControl>

          </GridItem>

          <GridItem colSpan={2} >
            <FormControl isRequired>
              <FormLabel>Phone Number</FormLabel>
              <Input  type="number" name="phone"    />
            </FormControl>

          </GridItem>

         

          <GridItem colSpan={2} >
            <FormControl isRequired>
              <FormLabel>Company Name</FormLabel>
              <Textarea  type="text" name="address"   resize="none" />
            </FormControl>

          </GridItem>
        

         

          <GridItem   colSpan={2}>
            <FormControl >
              <Button w="full" bg="#ff0077" color="white"  >Schedual Demo</Button>
             
            </FormControl>

          </GridItem>

          
          
        </Grid>

         </Container>

        </Stack>

      </HStack>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

    </div>
  )
}

export default GetDemo
