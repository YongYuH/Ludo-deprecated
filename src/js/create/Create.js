import React from 'react';
import Masonry from 'react-masonry-component';

import CreateContent from './CreateContent';
import CreateLudoList from './CreateLudoList';

import { rawLudoData } from '../playground/LudoData';

/* LUDO TODO: make columnWidth a variable */
const masonryOptions = {
    itemSelector: ".grid-item",
    columnWidth: 280,
}

export default class Create extends React.Component {
    render() {
        return (
            <Masonry 
                options={masonryOptions}>
                <CreateContent />
                <CreateLudoList data={rawLudoData}/>
            </Masonry>
        );
    }
}

