import React, { Component } from 'react';
import rockImg from "@/assets/img/rock.png";
import scissorImg from "@/assets/img/scissors.png";
import paperImg from "@/assets/img/paper.png";
import "@/App.css";
import MainBox from "@/component/MainBox";
import { Card, CardHeader, Heading } from "@chakra-ui/react";

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

class AppClass extends Component<any, any> {
    countdown: any;

    constructor(props: any) {
        super(props);
        this.state = {
            userSelect: null,
            comSelect: null,
            result: null,
            comResult: null,
            timer: 30,
            userScore: 0,
            comScore: 0,
            showPopup: false
        };
    }

    componentDidMount() {
        this.countdown = setInterval(() => {
            if (this.state.timer > 0) {
                this.setState((prevState: any) => ({
                    timer: prevState.timer - 1
                }));
            } else {
                this.setState({ showPopup: true });
                clearInterval(this.countdown);
            }
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.countdown);
    }

    handleRestart = () => {
        this.props.history.push('/');
    };

    play = (userChoice: keyof ChoiceMap) => {
        const userChoiceResult = choice[userChoice];
        const comChoiceResult = this.randomChoice();
        const userGameResult = this.judgement(userChoiceResult, comChoiceResult);
        const comGameResult = this.comJudgement(userGameResult);

        this.setState({
            userSelect: userChoiceResult,
            comSelect: comChoiceResult,
            result: userGameResult,
            comResult: comGameResult
        });

        this.updateScore(userGameResult, comGameResult);
    };

    randomChoice = (): Choice => {
        const itemArray = Object.keys(choice) as Array<keyof ChoiceMap>;
        const randomNum = Math.floor(Math.random() * itemArray.length);
        const finalChoice = itemArray[randomNum];
        return choice[finalChoice];
    };

    judgement = (user: Choice, computer: Choice): resultType => {
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

    comJudgement = (result: resultType): resultType => {
        if (result === "tie") {
            return "tie";
        } else if (result === "winner") {
            return "loser";
        } else if (result === "loser") {
            return "winner";
        }
        return "tie";
    };

    updateScore = (userResult: resultType, comResult: resultType) => {
        this.setState((prevState: any) => ({
            userScore: userResult === "winner" ? prevState.userScore + 5 : userResult === "tie" ? prevState.userScore + 3 : prevState.userScore + 1,
            comScore: comResult === "winner" ? prevState.comScore + 5 : comResult === "tie" ? prevState.comScore + 3 : prevState.comScore + 1
        }));
    };

    render() {
        const { userSelect, comSelect, result, comResult, timer, userScore, comScore, showPopup } = this.state;
        const finalResult = userScore > comScore ? "You Win!" : userScore < comScore ? "Computer Wins!" : "It's a Tie!";

        return (
            <div className="app-container">
                <div className="header">
                    <Card align='center' backgroundColor='rgba(255, 255, 255, 0.5)'>
                        <CardHeader>
                            <Heading size='md' color='teal'> Time Left: {timer}s</Heading>
                        </CardHeader>
                    </Card>
                </div>
                <div className="main">
                    <MainBox title="You" item={userSelect} result={result} score={userScore} />
                    <MainBox title="Computer" item={comSelect} result={comResult} score={comScore} />
                </div>
                <div className="controls">
                    <button onClick={() => this.play("scissors")}>
                        <img src={scissorImg} alt="Scissors" className="control-img" />
                    </button>
                    <button onClick={() => this.play("rock")}>
                        <img src={rockImg} alt="Rock" className="control-img" />
                    </button>
                    <button onClick={() => this.play("paper")}>
                        <img src={paperImg} alt="Paper" className="control-img" />
                    </button>
                </div>

                {showPopup && (
                    <div className="popup">
                        <h1>Game Over</h1>
                        <p>Final Score</p>
                        <p>Your Score: {userScore}</p>
                        <p>Computer Score: {comScore}</p>
                        <h2>{finalResult}</h2>
                        <button onClick={this.handleRestart}>OK</button>
                    </div>
                )}
            </div>
        );
    }
}

export default AppClass;
