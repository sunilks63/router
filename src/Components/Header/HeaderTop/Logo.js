import React, {Component} from 'react';
import logo from './img/logo.png';
import {withStyles} from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';

const LogoWrapper= styled.figure`
    display:inline-block;
`
const styles = Theme => ({
    logoStyle:{
        display:"inline-block",
        verticalAlign:"middle",
        marginRight:10,
    }
})


class Logo extends Component{
    render(){
        const {classes} = this.props;
        return(
            <LogoWrapper>
                <img src={logo} alt="Logo" className={classes.logoStyle}/>
                <Typography className={classes.logoStyle}>Global Data Platform</Typography>
            </LogoWrapper>
        );
    }
}

export default withStyles (styles)(Logo) ;