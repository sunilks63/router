import React, {Component} from 'react';
import {Logo} from './HeaderTop';
import {UserInfo} from './HeaderTop';
import {MenuBar} from './HeaderMenu';
import AppBar from '@material-ui/core/AppBar';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

const styles = Theme =>({
    headerStyle:{
        position:"static",
    }
})

const ContainerTop= styled.div`
    display:block;
`
const ReportOf= styled.h1`
    font-size:20px;
`

class Header extends Component{
    render(){

        const {classes}=this.props;
        return(
                <AppBar className={classes.headerStyle}>
                    <ContainerTop className="header-top">
                        <Logo />
                        <UserInfo />
                    </ContainerTop>
                    <ReportOf>
                        General Motors Europe Reporting
                        <Typography>
                            Media purchase report in General Motors Europe
                        </Typography>
                    </ReportOf>
                    <MenuBar />
                   
                </AppBar>
                
        );
    }
}

export default withStyles(styles)(Header);