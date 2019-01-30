import React from 'react';
import {
    Box,
    Card,
    Image,
    Heading,
    Text
  } from 'rebass'


const img = 'https://source.unsplash.com/random/1280x720';
const Slide = ({imagePath}) => (

    <Box width={256}>
  {imagePath}
  <Card
    p={1}
    borderRadius={2}
    boxShadow='0 0 16px rgba(0, 0, 0, .25)'>
    <Image src={img} />
    <Box px={2}>
      <Heading as='h3'>
        Card
      </Heading>
      <Text fontSize={0}>
        Small meta text
      </Text>
    </Box>
  </Card>
</Box>
);

export default Slide;



