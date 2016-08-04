import React from 'react';
import 'masonry-layout';

import CreateContent from './CreateContent';
import CreateLudoList from './CreateLudoList';

import { rawLudoData } from '../playground/LudoData';

export default class Create extends React.Component {
    render() {
        return (
            <div className="grid" data-masonry='{ "itemSelector": ".grid-item", "columnWidth": 275 }'>
                <CreateContent />
                <CreateLudoList data={rawLudoData}/>
            </div>
        );
    }
}

