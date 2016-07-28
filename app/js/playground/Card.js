import React from 'react';

export default class Card extends React.Component {
    constructor() {
        super();
        this.state = { cardContent:[] }
    }
    getDifferentCardContent() {
        this.state.cardContent = this.props.data.map( (data, index) => {
            return (
                <div key={index}>
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
    render() {
        this.getDifferentCardContent();
        return (
            <div>
               {this.state.cardContent}
            </div>
        );
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