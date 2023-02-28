import './StartScreen.css'
import { useNavigate } from 'react-router-dom'

export default function StartScreen(props) {
    const navigation = useNavigate()

    return (
        <div className="start-screen">
            <h1 className="heading">Quizzical</h1>
            <p className="subheading">Let's answer some questions</p>
            <button className="button" onClick={() => navigation('main')}>Start quiz</button>
        </div>
    )
}