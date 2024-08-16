import React from 'react';
import { Button } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

const StartPage: React.FC = () => {
    const navigate = useNavigate();

    const startGame = () => {
        navigate('/game');
    };

    return (
        <div className="start-page">
            <h1>Rock Paper Scissors</h1>
            <Button onClick={startGame} colorScheme="teal"  variant='outline'>Start Game</Button>
        </div>
    );
};

export default StartPage;
