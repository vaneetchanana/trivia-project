import React from "react"

export default function Button(props) {

    const {correctAnswer, wrongAnswer, clicked, id, option} = props.optionObj

    function setStyle() {

        if(correctAnswer) {
            return {
                backgroundColor : "#94D7A2",
                border : "1px solid #94D7A2"
            }
        }else if(wrongAnswer) {
            return {
                backgroundColor : "#F8BCBC",
                border : "1px solid #F8BCBC"
            }
        } else if(clicked) {
            return {
                backgroundColor : "#D6DBF5",
                border : "1px solid #D6DBF5"
            }
        }else {
            return {}
        }
    }

    const style = setStyle()

    return (
        <button
            onClick={(event) => props.clicked(event)}
            style={style}
            className={'main-button'}
            id={id}
        >
            {option}
        </button>
    )
}