import React from 'react';
import Diagram from '../bower_components/js-sequence-diagrams/dist/sequence-diagram-min.js';

class SequenceDiagram extends React.Component {
    componentDidMount() {
        const script_paths = ['js-sequence-diagrams/dist/sequence-diagram-min.js', 'bower-webfontloader/webfont.js',
            'snap.svg/dist/snap.svg-min.js', 'underscore-min.js'];
        script_paths.forEach(path => {
            let script = document.createElement('script');
            script.src = '../bower_components/' + path;
            document.body.appendChild(script);
        });
    }

    getSampleDiagram = () => {
        let diagram = Diagram.parse("A->B: Message");
        diagram.drawSVG("diagram", {theme: 'hand'});
    };

    render() {
        return (
            <div>
                <div id='diagram'/>
                {this.getSampleDiagram()}
            </div>
        )
    }

}

export default SequenceDiagram;