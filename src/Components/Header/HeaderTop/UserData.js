import React, {Component} from 'react';
import styled from 'styled-components';

const UserName= styled.h5`
    display:inline-block;
    vertical-align:middle;
    float:right;
`
class UserInfo extends Component{
    render(){
        return(
            <UserName>John Paul Green</UserName>
        )
    }
}
export default UserInfo;   