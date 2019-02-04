import React from 'react';
import {
    Box,
    Card,
    Image,
    Heading,
    Text
  } from 'rebass'

const Slide = ({imagePath, title, text, onClick}) => (

   <Box width={256} px="1" >
    <Card
      p={2}
      bg='#f6f6ff'
      borderRadius={2}
      boxShadow='0 0 16px rgba(1, 1, 1, 1)'>
      <Image src={imagePath} height={'150px'} width={'250px'} />
      <Box px={1}>
        <Heading as='h3'>
          { title }
        </Heading>
      </Box>
    </Card>
</Box>
);

export default Slide;



