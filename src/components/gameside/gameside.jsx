import React from 'react';

import GameControl from "../gamecontrol/gamecontrol";
import GameField from "../gamefield/gamefield";
import './gameside.styles.scss';

const GameSide = () => (
    <div className="game-side">
        <GameControl />
        <GameField />
    </div>
)

export default GameSide;