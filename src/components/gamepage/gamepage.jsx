import React from 'react';

import GameSide from '../gameside/gameside';
import GameTable from "../gametable/gametable"

import './gamepage.styles.scss';

const GamePage = () => (
    <div className="gamepage">
        GamePage
        <div className="gamepage-wrapper">
            <GameSide />
            <GameTable />
        </div>
    </div>
)

export default GamePage;