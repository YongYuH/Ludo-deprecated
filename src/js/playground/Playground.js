import React from 'react';
import 'masonry-layout';

import QuickStart from './QuickStart';
import PlaygroundLudoList from './PlaygroundLudoList';
import Search from '../app/Search';

import { rawLudoData } from './LudoData';

export default class Playground extends React.Component {
    render() {
        return (
            <div className="playground">
                <div className="grid" data-masonry='{ "itemSelector": ".grid-item", "columnWidth": 270 , "isFitWidth": true }'>
                    <QuickStart />
                    <PlaygroundLudoList data={rawLudoData}/>
                    <Search />
                </div>
            </div>
        );
    }
}