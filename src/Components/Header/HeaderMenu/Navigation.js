import React, {Component} from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import {Link} from "react-router-dom";
import {withStyles} from "@material-ui/core/styles";

const styles= Theme =>({
    navStyle:{
        display: "inline-block",
    },
    navWrapper:{
        background:"transparent",
        boxShadow: "none",
    },
    navItem:{
        color: "#ffffff",
        textDecoration:"none",
    }

})
class MenuBar extends Component{   
    render(){
        const {classes}= this.props;
        return(
            <Paper className={classes.navWrapper}>
                <MenuItem className={classes.navStyle}>
                    <Link to="/" className={classes.navItem}>Overview</Link>
                </MenuItem>
                <MenuItem className={classes.navStyle}> 
                    <Link to="/Connection" className={classes.navItem}>Connection</Link>
                </MenuItem>
                <MenuItem className={classes.navStyle}>
                    <Link to="/Datasets" className={classes.navItem}>Datasets</Link>
                </MenuItem>
            </Paper>
        );
    }
}

export default withStyles(styles)(MenuBar);