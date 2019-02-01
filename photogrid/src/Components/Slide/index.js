import React from 'react';
import {
    Box,
    Card,
    Image,
    Heading,
    Text
  } from 'rebass'

const Slide = ({imagePath, title, text, onClick}) => (

    <Box width={256} >
  <Card
    p={1}
    bg='#f6f6ff'
    borderRadius={2}
    boxShadow='0 0 16px rgba(1, 1, 1, 1)'>
    <Image src={imagePath} />
    <Box px={2}>
      <Heading as='h3'>
        { title }
      </Heading>
      <Text fontSize={0}>
       { text }
      </Text>
    </Box>
  </Card>
</Box>
);

export default Slide;



