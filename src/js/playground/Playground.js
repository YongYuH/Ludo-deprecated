import React from 'react';
import Radium from 'radium';
// import Masonry from 'react-masonry-component';

import Card from './Card';
import { rawCardData } from './CardData';

export default class Playground extends React.Component {
    render() {
        return ( 
            <div className="playground" style={styles.base}>
                <Card data={rawCardData}/>
            </div>
        );
    }
}

Playground = Radium(Playground)

const screenWidth = window.innerWidth;
const sidebarWidth = 100;
const cardWidth = 230;
const cardPaddingX = 15;
const cardPaddingTop = 10;
const columnWidth = cardWidth + cardPaddingX;
const mainWidth = screenWidth - sidebarWidth;
const totalColumn = Math.floor(mainWidth / columnWidth);
const contentPaddingX = Math.round( (mainWidth - totalColumn * columnWidth + cardPaddingX)/2 );

const styles = {
    base: {
        position: 'relative',
        top: 112,
        marginRight: `${sidebarWidth}px`,
        paddingTop: 14,
        paddingRight: `${contentPaddingX}px`,
        paddingLeft: `${contentPaddingX}px`,
        backgroundColor: 'rgba(232, 235, 237, 1)',
    }
}