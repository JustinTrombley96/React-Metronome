import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Metronome from './components/Metronome.js';
import ToolTip from './components/ToolTip.js'
import 'shards-ui/dist/css/shards.min.css';
import Card from './components/Card'

ReactDOM.render(
    <>
        <Metronome />
        <Card />
        {/* <ToolTip /> */}
    </>
    , document.getElementById('root'));
