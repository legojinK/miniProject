import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import rockImg from "@/assets/img/rock.png";
import scissorImg from "@/assets/img/scissors.png";
import paperImg from "@/assets/img/paper.png";
import "@/App.css";
import MainBox from "@/component/MainBox";
import {Button, Card, CardHeader, Heading} from "@chakra-ui/react";

export type Choice = {
    name: string;
    img: string;
};

export type resultType = "tie" | "winner" | "loser" | null;

interface ChoiceMap {
    rock: Choice;
    scissors: Choice;
    paper: Choice;
}

const choice: ChoiceMap = {
    rock: {
        name: 'rock',
        img: rockImg,
    },
    scissors: {
        name: 'scissors',
        img: scissorImg,
    },
    paper: {
        name: 'paper',
        img: paperImg,
    }
};

const App: React.FC = () => {
    const [userSelect, setUserSelect] = useState<Choice | null>(null);
    const [comSelect, setComSelect] = useState<Choice | null>(null);
    const [result, setResult] = useState<resultType>(null);
    const [comResult, setComResult] = useState<resultType>(null);
    const [timer, setTimer] = useState<number>(30);
    const [userScore, setUserScore] = useState<number>(0);
    const [comScore, setComScore] = useState<number>(0);
    const [showPopup, setShowPopup] = useState<boolean>(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (timer > 0) {
            const countdown = setTimeout(() => setTimer(timer - 1), 1000);
            return () => clearTimeout(countdown);
        } else {
            setShowPopup(true);
        }
    }, [timer]);

    const handleRestart = () => {
        navigate('/');
    };

    const play = (userChoice: keyof ChoiceMap) => {
        if (showPopup) return;
        const userChoiceResult = choice[userChoice];
        setUserSelect(userChoiceResult);

        const comChoiceResult = randomChoice();
        setComSelect(comChoiceResult);

        const userGameResult = judgement(userChoiceResult, comChoiceResult);
        setResult(userGameResult);

        const comGameResult = comJudgement(userGameResult);
        setComResult(comGameResult);

        updateScore(userGameResult, comGameResult);
    };

    const randomChoice = (): Choice => {
        const itemArray = Object.keys(choice) as Array<keyof ChoiceMap>;
        const randomNum = Math.floor(Math.random() * itemArray.length);
        const finalChoice = itemArray[randomNum];
        return choice[finalChoice];
    };

    const judgement = (user: Choice, computer: Choice): resultType => {
        if (user.name === computer.name) {
            return "tie";
        } else if (user.name === "rock") {
            return computer.name === "scissors" ? "winner" : "loser";
        } else if (user.name === "scissors") {
            return computer.name === "paper" ? "winner" : "loser";
        } else if (user.name === "paper") {
            return computer.name === "rock" ? "winner" : "loser";
        }
        return "tie";
    };

    const comJudgement = (result: resultType): resultType => {
        if (result === "tie") {
            return "tie";
        } else if (result === "winner") {
            return "loser";
        } else if (result === "loser") {
            return "winner";
        }
        return "tie";
    };

    const updateScore = (userResult: resultType, comResult: resultType) => {
        if (userResult === "winner") {
            setUserScore((prev) => prev + 5);
        } else if (userResult === "tie") {
            setUserScore((prev) => prev + 3);
        } else if (userResult === "loser") {
            setUserScore((prev) => prev + 1);
        }

        if (comResult === "winner") {
            setComScore((prev) => prev + 5);
        } else if (comResult === "tie") {
            setComScore((prev) => prev + 3);
        } else if (comResult === "loser") {
            setComScore((prev) => prev + 1);
        }
    };

    const finalResult = userScore > comScore ? "You Win!" : userScore < comScore ? "Computer Wins!" : "It's a Tie!";

    return (
        <div className="app-container">
            <div className="header">
                <Card align='center' backgroundColor='rgba(255, 255, 255, 0.5)' >
                    <CardHeader>
                        <Heading size='md'  color='teal' > Time Left: {timer}s</Heading>
                    </CardHeader>
                </Card>
            </div>
            <div className="main">
                <MainBox title="You" item={userSelect} result={result} score={userScore}/>
                <MainBox title="Computer" item={comSelect} result={comResult} score={comScore}/>
            </div>
            <div className="controls">
                <button onClick={() => play("scissors")} disabled={showPopup}>
                    <img src={scissorImg} alt="Scissors" className="control-img"/>
                </button>
                <button onClick={() => play("rock")} disabled={showPopup}>
                    <img src={rockImg} alt="Rock" className="control-img"/>
                </button>
                <button onClick={() => play("paper")} disabled={showPopup}>
                    <img src={paperImg} alt="Paper" className="control-img"/>
                </button>
            </div>

            {showPopup && (
                <div className="popup">
                    <h1>Game Over</h1>
                    <h2>{finalResult}</h2>
                    <Button onClick={handleRestart} colorScheme="teal" variant='outline'>OK</Button>
                </div>

            )}
        </div>
    );
};

export default App;
