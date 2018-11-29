import React, {Component} from 'react';
import styled from "styled-components";

const FooterWrapper=styled.footer``

class FooterSection extends Component{
    render(){
        return(
            <FooterWrapper>
                 <h6>
                    <span>Densu Aegis Network</span> <a href="#">Innovating the way brands are build <br/> &copy; 2018 Densu Aegis Network. All rights reserved.</a>
                 </h6>
            </FooterWrapper>
        )
    }
}
export default FooterSection;