import React from 'react';

import Card from './Card';
import { CardData } from './CardData';

export default class PlaygroundContents extends React.Component {
    render() {
        return ( 
            <div className="playground-content">
                <Card data={CardData}/>
            </div>
        );
    }
}