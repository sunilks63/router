import React, {Component} from 'react';
import {Header} from '../Components/Header';
import {FooterSection} from '../Components/Footer';


class OneCoulmnLayout extends Component{
    render(){
        return(
            <React.Fragment>
                <Header />
               
                    {this.props.children}
               
                <FooterSection />
            </React.Fragment>
        )
    }
}
export default OneCoulmnLayout;