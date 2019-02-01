import React from 'react';
import { Flex } from 'rebass';
import Slide from '../Slide'
import styled from 'styled-components';


const boardValue = [[{id:0,src:'https://source.unsplash.com/random/1280x720',title:'Title1',text: 'Music'},
                    {id:1,src:'https://source.unsplash.com/random/1280x720',title:'Title1',text: 'Sport'},
                    {id:2,src:'https://source.unsplash.com/random/1280x720',title:'Title2',text: 'Travel'}],
                    [{id:3,src:'https://source.unsplash.com/random/1280x720',title:'Title3',text: 'Food'},
                    {id:4,src:'https://source.unsplash.com/random/1280x720',title:'Title4',text: 'Tech'},
                    {id:5,src:'https://source.unsplash.com/random/1280x720',title:'Title5',text: 'Asdsfsadfsadfsadfsadfsadfasdfsdfksdjfkjsldjflksdjflkjsdslfjkasd'}],
                    [{id:6,src:'https://source.unsplash.com/random/1280x720',title:'Title6',text:'Word 6'},
                    {id:7,src:'https://source.unsplash.com/random/1280x720',title:'Title7',text:'Word 7'},
                    {id:8,src:'https://source.unsplash.com/random/1280x720',title:'Title8',text: 'Word 8'}]]
 
const StyledFlex = styled.div`
        background: linear-gradient(#fff,#eee);

        flexDirection:"column",
        justifyContent:'space-between'
`;
                                   
 const Grid = ({gridValue,onClick}) => ( 
    boardValue.map((row,idRow) => 
        MakeRow(row,idRow,onClick)     
    )
);
const MakeRow = function(rowValues,idRow,onClick){
    const row = [];
    rowValues.map((cellProps)=>
            row.push(<Slide title={cellProps.title} imagePath={cellProps.src} text = {cellProps.text} key={cellProps.id} onClick={"alert('hola')"}  />)
    );
    return <Flex  key={idRow}>{row}</Flex>
}
 

/* const Grid = () => (
   
        <Wrapper>
            <Box>
                { Slide }
            </Box>
            
        </Wrapper>   
   
 ); */

export default Grid;