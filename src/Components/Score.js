
import React from "react";


const Score = props => (
    <div className="container">
        <div className="desc row">
            <div className="desc">
                <h1>Can you pick out all the ramen? Click the same one twice and we'll never make it to dinner!</h1>
            </div>
        </div>
        <div className="scores">
            <div className="top-score">
                <strong>Top Score:</strong> {props.topScore}
            </div>
            <div className="score">
            <strong>Score:</strong> {props.score}
            </div>

        </div>
    </div>
)

export default Score;