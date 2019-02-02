import React from 'react';
import { Flex } from 'rebass';
import Slide from '../Slide'
import { connect } from 'react-redux';
                                   
 const Grid = ({gridValue,onClick}) => ( 
    gridValue.map((row,idRow) => 
        MakeRow(row,idRow,onClick)     
    )
);
const MakeRow = function(gridValue,idRow,onClick){
    const row = [];
    gridValue.map((cellProps)=>
            row.push(<Slide title={cellProps.title} imagePath={cellProps.src} text = {cellProps.text} key={cellProps.id} onClick={onClick}  />)
    );
    return <Flex flexWrap='wrap' p="1"  key={idRow}>{row}</Flex>
}


const mapStateToProps = state =>({
    gridValue: state.home.gridValue,
})
export default connect(mapStateToProps)(Grid);