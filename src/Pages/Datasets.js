import React, {Component} from 'react';
import {OneCoulmnLayout} from '../Layouts';
import {MainContent} from '../Components/MainContent';
class Dataset extends Component{
    render(){
        return(
            <OneCoulmnLayout>
                   <MainContent>
                       <h1>this is the main content section of Dataset</h1>
                   </MainContent>
            </OneCoulmnLayout>
        );
    }
}
export default Dataset;