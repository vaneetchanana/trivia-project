import './StartScreen.css'

export default function StartScreen(props) {

    return (
        <div className="start-screen">
            <h1 className="heading">Quizzical</h1>
            <p className="subheading">Let's answer some questions</p>
            <button className="button" onClick={props.gameStarter}>Start quiz</button>
        </div>
    )
}