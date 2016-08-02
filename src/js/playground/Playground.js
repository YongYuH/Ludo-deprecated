import React from 'react';
import Radium from 'radium';
import 'masonry-layout';

import Card from './Card';
import QuickStart from './QuickStart';
import Search from '../app/Search';
import { rawCardData } from './CardData';

export default class Playground extends React.Component {
    render() {
        return (
            <div className="playground">
                <div className="grid" data-masonry='{ "itemSelector": ".grid-item", "columnWidth": 230 , "isFitWidth": true }'>
                    <QuickStart />
                    <Card data={rawCardData} />
                </div>
                <Search />
            </div>
        );
    }
}

//Playground = Radium(Playground)