import React, {Component} from 'react';
import {OneCoulmnLayout} from '../Layouts';
import {MainContent} from '../Components/MainContent';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import {withStyles} from "@material-ui/core/styles";
import Collapse from '@material-ui/core/Collapse';
import SearchBar from 'material-ui-search-bar'
const styles= Theme =>({
    tableStyle:{
        width: "100%",
    }
})

class Connection extends Component{
    render(){
        const {classes} =this.props;
        return(
            <OneCoulmnLayout>
                   <MainContent>
                   <Paper className={classes.tableStyle}>
                 
            <Table >
                <TableHead>
                   
                    <TableRow>
                        <TableCell>Connector Name</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Frequency</TableCell>
                        <TableCell>Last Run</TableCell>
                        <TableCell>Last Run status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Report name 1</TableCell>
                        <TableCell>Google DCM</TableCell>
                        <TableCell>Every Tuesday 06:00 (BST)</TableCell>
                        <TableCell>2018-06-19(06:00:00) On time</TableCell>
                        <TableCell>Running</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Report name 2</TableCell>
                        <TableCell>Google DCM</TableCell>
                        <TableCell>Every Tuesday 06:00 (BST)</TableCell>
                        <TableCell>2018-06-19(06:00:00) On time</TableCell>
                        <TableCell>Stopped</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Report name 2</TableCell>
                        <TableCell>Google DCM</TableCell>
                        <TableCell>Every Tuesday 06:00 (BST)</TableCell>
                        <TableCell>2018-06-19(06:00:00) On time</TableCell>
                        <TableCell>Stopped</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Report name 2</TableCell>
                        <TableCell>Google DCM</TableCell>
                        <TableCell>Every Tuesday 06:00 (BST)</TableCell>
                        <TableCell>2018-06-19(06:00:00) On time</TableCell>
                        <TableCell>Stopped</TableCell>
                    </TableRow>
                    
                    <TableRow>
                        <TableCell>Report name 2</TableCell>
                        <TableCell>Google DCM</TableCell>
                        <TableCell>Every Tuesday 06:00 (BST)</TableCell>
                        <TableCell>2018-06-19(06:00:00) On time</TableCell>
                        <TableCell>Stopped <Collapse >
                        {
                            <h1>hidden data </h1>
                        }
                        </Collapse>
                        </TableCell>
                    </TableRow>
                    
                </TableBody>
            </Table>
            
        </Paper>
                   </MainContent>
            </OneCoulmnLayout>
        );
    }
}
export default withStyles(styles)(Connection);