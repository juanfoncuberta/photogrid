import React from 'react';
import { Flex } from 'rebass';
import Slide from '../Slide'


const boardValue = [[{id:0,src:'https://source.unsplash.com/random/1280x720',title:'Title1'},{id:1,src:'https://source.unsplash.com/random/1280x720',title:'Title1'},{id:2,src:'https://source.unsplash.com/random/1280x720',title:'Title2'}],
                    [{id:3,src:'https://source.unsplash.com/random/1280x720',title:'Title3'},{id:4,src:'https://source.unsplash.com/random/1280x720',title:'Title4'},{id:5,src:'https://source.unsplash.com/random/1280x720',title:'Title5'}],
                    [{id:6,src:'https://source.unsplash.com/random/1280x720',title:'Title6'},{id:7,src:'https://source.unsplash.com/random/1280x720',title:'Title7'},{id:8,src:'https://source.unsplash.com/random/1280x720',title:'Title8'}];
                    
const Slide = ({gridValue,onClick}) => ( 
    boardValue.map((row,idRow) => 
        MakeRow(row,idRow,onClick)     
    )
);

const MakeRow = function(rowValues,idRow,onClick){
    
    const row = [];
    rowValues.map((cellProps)=>
            row.push(<Slide key={cellProps.id} onClick={onClick} />)
    );
    return <Flex key={idRow}>{row}</Flex>
}

export default Board;