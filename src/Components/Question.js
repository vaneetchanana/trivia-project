import Button from './Button'
import { nanoid } from 'nanoid'

export default function Question(props) {


    const buttons = props.options.map(optionObj => {
        return (
            <Button
                optionObj={optionObj}
                clicked={props.clicked}
                key={nanoid()}
            />)
    })

    return (
        <div className="question">
            <h2 className="main-heading">{props.question}</h2>
            <div className="buttons">
                {buttons}
            </div>
            <hr className='divider' />
        </div>
    )
}