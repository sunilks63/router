import React, {Component} from 'react';
import {OneCoulmnLayout} from '../Layouts';
import {MainContent} from '../Components/MainContent';
class Overview extends Component{
    render(){
        return(
            <OneCoulmnLayout>
                   <MainContent>
                       <h1>this is the main content section of Overview</h1>
                   </MainContent>
            </OneCoulmnLayout>
        );
    }
}
export default Overview;