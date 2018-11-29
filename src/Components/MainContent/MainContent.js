import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';

const styles= Theme=>({
    contentStyle:{
        minHeight: "300px",
    }
})
class MainContent extends Component{
    render(){
        const {classes}= this.props;
        return(
            <main className={classes.contentStyle}>
                <Grid container>
                    {this.props.children}
                </Grid>
            </main>
        );
    }
}

export default withStyles(styles)(MainContent);