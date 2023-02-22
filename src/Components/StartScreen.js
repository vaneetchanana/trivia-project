import './StartScreen.css'

export default function StartScreen(props) {

    return (
        <div className="start-screen">
            <h1 className="heading">Quizzical</h1>
            <p className="subheading">Some description if needed</p>
            <button className="button" onClick={props.gameStarter}>Start quiz</button>
        </div>
    )
}