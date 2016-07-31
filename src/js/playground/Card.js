import React from 'react';
import Radium from 'radium';

const cardDoorUrl = './images/open-door.png';

export default class Card extends React.Component {
    constructor() {
        super();
        this.state = { cardContent:[] }
    }

    getDifferentCardContent() {
        this.state.cardContent = this.props.data.map( (data, index) => {
            return (
                <div className={`post-${index}`} key={index}>
                    <div className="launchDate">{data.launchDate}</div>
                    <div className="type">{data.type}</div>
                    <div className="duration">{data.duration}</div>
                    <div className="introduction">{data.introduction}</div>
                    <div className="condition">{data.condition}</div>
                    <div className="marblesNumber">{data.marblesNumber}</div>
                </div>
            )
        });
    }

    getRWDCard() {
        const CardData = rawCardData.map( (cardObject, index) => {
            return (
                <div>
                    
                </div>
            )
        });
    }

    render() {
        this.getDifferentCardContent();
        return (
            <div>
               {this.state.cardContent}
            </div>
        );
    }
}

Card = Radium(Card);

// Card.propTypes = {
//     launchDate: React.PropTypes.string.isRequired,
//     type: React.PropTypes.number.isRequired,
//     duration: React.PropTypes.number.isRequired,
//     introduction: React.PropTypes.string.isRequired,
//     condition: React.PropTypes.string.isRequired,
//     marblesNumber: React.PropTypes.number.isRequired,
// };

const screenWidth = window.innerWidth;
const sidebarWidth = 100;
const cardWidth = 230;
const cardPaddingX = 15;
const cardPaddingTop = 10;
const columnWidth = cardWidth + cardPaddingX;
const mainWidth = screenWidth - sidebarWidth;
const totalColumn = Math.floor(mainWidth / columnWidth);
const contentPaddingX = Math.round( (mainWidth - totalColumn * columnWidth + cardPaddingX)/2 );

const totalHeightOfColumn = new Array(totalColumn); 

// totalHeightOfColumn array initiation
// for (const i = 0; i < totalColumn; i++) {
//     totalHeightOfColumn[i] = 0;
// }

// const post = 0;
// const postHeight = 0;
// //const ColOfPost = 0;
// //const XofPost = 0;
// const totalPost = rawCardData.length;

// // Todo... modify for to map
// totalHeightOfColumn.map( (cardObject, postNum) => {
//     const ColOfPost = postNum % totalColumn;
//     // x axis
//     const XOfPost = ColOfPost * (cardWidth + cardPaddingX);
//     // y axis

//     // get height of current post
//     post = main.children().children().eq(postNum);
//     postHeight = post.height();
//     totalHeightOfColumn[ColOfPost] = totalHeightOfColumn[ColOfPost] + postHeight + cardPaddingTop;
// });

// // positioning column
// for (let postNum = 0; postNum < totalPost; postNum++) {
//     currentCol = postNum % totalColumn;

//     // x axis
//     currentCardDistanceX = currentCol * (cardWidth + cardPaddingX);
//     $('.column-' + postNum).css('left', currentCardDistanceX);

//     // y axis
//     $('.post-'+ postNum).css('top', totalHeightOfColumn[currentCol]);

//     // get height of current post
//     post = main.children().children().eq(postNum);
//     postHeight = post.height();
//     totalHeightOfColumn[currentCol] = totalHeightOfColumn[currentCol] + postHeight + cardPaddingTop;
// }

const styles = {
    card: {
        position: 'absolute',
        width: 230,
        backgroundColor: 'white',
        boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.2)',
        WebkitboxShadow: '0px 1px 2px 0px rgba(0,0,0,0.2)',
        MozboxShadow: '0px 1px 2px 0px rgba(0,0,0,0.2)',
        borderRadius: 5,
        textAlign: 'center',

        ':hover': {
            boxShadow: ['0 8px 16px 0 rgba(0,0,0,0.2)', '0 6px 20px 0 rgba(0,0,0,0.19)'],
            transition: '0.3s',
        }
    },
    cardElement: {
        position: 'absolute',
    },
    cardDoor: {
        top: 15,
        left: 33,
        backgroundImage: `url(${cardDoorUrl})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
    }
}

/*            <div className="playground-main">
                <div className="column column-0">
                    <div className="background-img-setting card post-0 quick-start"></div>
                </div>
                <div className="column column-1">
                    <div className="card post-1">
                         <div className="card-content">
                             <h4>title</h4>
                             <p>content</p>
                             <p>content</p>
                             <p>content</p>
                         </div>
                         <div className="card-message">
                             <div className="background-img-setting card-element card-icon"></div>
                             <div className="background-img-setting card-element card-door"></div>
                             <div className="background-img-setting card-element card-pin"></div>
                         </div>
                    </div>
                </div>
                <div className="column column-2">
                    <div className="card post-2">
                         <div className="card-content">
                             <h4>title</h4>
                             <p>content</p>
                             <p>content</p>
                             <p>content</p>
                             <p>content</p>
                             <p>content</p>
                             <p>content</p>
                             <p>content</p>
                         </div>
                         <div className="card-message">
                             <div className="background-img-setting card-element card-icon"></div>
                             <div className="background-img-setting card-element card-door"></div>
                             <div className="background-img-setting card-element card-pin"></div>
                         </div>
                    </div>
                </div>
                <div className="column column-3">
                    <div className="card post-3">
                         <div className="card-content">
                             <h4>title</h4>
                             <p>content</p>
                             <p>content</p>
                             <p>content</p>
                             <p>content</p>
                             <p>content</p>
                         </div>
                         <div className="card-message">
                             <div className="background-img-setting card-element card-icon"></div>
                             <div className="background-img-setting card-element card-door"></div>
                             <div className="background-img-setting card-element card-pin"></div>
                         </div>
                    </div>
                </div>
                <div className="column column-4">
                    <div className="card post-4">
                         <div className="card-content">
                             <h4>title</h4>
                             <p>content</p>
                         </div>
                         <div className="card-message">
                             <div className="background-img-setting card-element card-icon"></div>
                             <div className="background-img-setting card-element card-door"></div>
                             <div className="background-img-setting card-element card-pin"></div>
                         </div>
                    </div>
                </div>
                <div className="column column-5">
                    <div className="card post-5">
                         <div className="card-content">
                             <h4>title</h4>
                             <p>content</p>
                             <p>content</p>
                             <p>content</p>
                         </div>
                         <div className="card-message">
                             <div className="background-img-setting card-element card-icon"></div>
                             <div className="background-img-setting card-element card-door"></div>
                             <div className="background-img-setting card-element card-pin"></div>
                         </div>
                    </div>
                </div>
                <div className="column column-6">
                    <div className="card post-6">
                         <div className="card-content">
                             <h4>title</h4>
                             <p>content</p>
                             <p>content</p>
                             <p>content</p>
                             <p>content</p>
                             <p>content</p>
                             <p>content</p>
                             <p>content</p>
                         </div>
                         <div className="card-message">
                             <div className="background-img-setting card-element card-icon"></div>
                             <div className="background-img-setting card-element card-door"></div>
                             <div className="background-img-setting card-element card-pin"></div>
                         </div>
                    </div>
                </div>
                <div className="column column-7">
                    <div className="card post-7">
                         <div className="card-content">
                             <h4>title</h4>
                             <p>content</p>
                             <p>content</p>
                             <p>content</p>
                             <p>content</p>
                             <p>content</p>
                         </div>
                         <div className="card-message">
                             <div className="background-img-setting card-element card-icon"></div>
                             <div className="background-img-setting card-element card-door"></div>
                             <div className="background-img-setting card-element card-pin"></div>
                         </div>
                    </div>
                </div>
                <div className="column column-8">
                    <div className="card post-8">
                         <div className="card-content">
                             <h4>title</h4>
                             <p>content</p>
                         </div>
                         <div className="card-message">
                             <div className="background-img-setting card-element card-icon"></div>
                             <div className="background-img-setting card-element card-door"></div>
                             <div className="background-img-setting card-element card-pin"></div>
                         </div>
                    </div>
                </div>
                <div className="column column-9">
                    <div className="card post-9">
                         <div className="card-content">
                             <h4>title</h4>
                             <p>content</p>
                             <p>content</p>
                             <p>content</p>
                         </div>
                         <div className="card-message">
                             <div className="background-img-setting card-element card-icon"></div>
                             <div className="background-img-setting card-element card-door"></div>
                             <div className="background-img-setting card-element card-pin"></div>
                         </div>
                    </div>
                </div>
                <div className="column column-10">
                    <div className="card post-10">
                        <div className="card-content">
                            <h4>title</h4>
                            <p>content</p>
                            <p>content</p>
                            <p>content</p>
                            <p>content</p>
                            <p>content</p>
                            <p>content</p>
                            <p>content</p>
                        </div>
                        <div className="card-message">
                            <div className="background-img-setting card-element card-icon"></div>
                            <div className="background-img-setting card-element card-door"></div>
                            <div className="background-img-setting card-element card-pin"></div>
                        </div>
                    </div>
                </div>
                <div className="column column-11">
                    <div className="card post-11">
                        <div className="card-content">
                            <h4>title</h4>
                            <p>content</p>
                            <p>content</p>
                            <p>content</p>
                            <p>content</p>
                            <p>content</p>
                        </div>
                        <div className="card-message">
                            <div className="background-img-setting card-element card-icon"></div>
                            <div className="background-img-setting card-element card-door"></div>
                            <div className="background-img-setting card-element card-pin"></div>
                        </div>
                    </div>
                </div>
            </div> */