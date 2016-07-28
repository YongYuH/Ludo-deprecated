import React from 'react';

import PlaygroundContents from './PlaygroundContents';
import PlaygroundRWD from './PlaygroundRWD';

export default class Playground extends React.Component {
    render() {
        return ( 
            <div className="playground">
                <PlaygroundContents />
            </div>
        );
    }
}
