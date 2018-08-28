import React, { Component } from 'react';
import '../component/Navibar';
import Navibar from '../component/Navibar';
import List from '../component/List';


class Home extends Component {
    render(){
        const opts = {
            height : '390',
            width: '640',
            playerVars: {
                autoplay: 1
            }
        };  
        return (
                <div>
                    <Navibar />
                    <List/>
                    
                </div>
        )
    }
}

export default Home;