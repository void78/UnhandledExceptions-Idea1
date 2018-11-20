import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {Button} from 'react-bootstrap';
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
class PollListTable extends Component {
  constructor(props){
      super(props);

  }

    onClickChartButton(cell, row, rowIndex){
        console.log('Chart Button '+ row);
    }
 
   chartButton(cell, row, enumObject, rowIndex) {
        return (
            <Button 
            type="button" 
            onClick={() => 
            this.onClickChartButton(cell, row, rowIndex)}
            >
            View Results
            </Button>
        )
    }

    onClickClosePollButton(cell, row, rowIndex){
        console.log('Close Poll Button : '+row.toString());
    }
 
   closePollButton(cell, row, enumObject, rowIndex) {
        return (
            <Button 
            type="button" 
            onClick={() => 
            this.onClickClosePollButton(cell, row, rowIndex)}
            >
            Close Poll
            </Button>
        )
    }

  render() {
    return (
      <div>
        <BootstrapTable  data={this.props.data} tableStyle={{marginBottom:'50px'}}  containerStyle={{width:'80%'}} striped={true} multiColumnSearch={true} search={true}   hover>
          <TableHeaderColumn isKey dataField='pollid' dataSort={true}>
            Poll ID
          </TableHeaderColumn>
          <TableHeaderColumn  dataField='name' dataSort={true}>
            Poll Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField='chartButton' dataFormat={this.chartButton.bind(this)} dataAlign="center" >Chart</TableHeaderColumn>
          <TableHeaderColumn dataField='closePollButton' dataFormat={this.closePollButton.bind(this)} dataAlign="center" >Close</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default PollListTable;