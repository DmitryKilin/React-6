import './style.css'

import React from 'react'
import SmilesModal from '../SmilesModal/SmilesModal.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default class ChatInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // text: '',
        };
        this.inputTextBox = React.createRef();
    }

    send = () => {
        // this.props.sendFunction(this.props.author, this.state.text);
        // this.setState({ text: '' });
        this.props.sendFunction(this.props.author, this.inputTextBox.current.innerHTML);
        this.inputTextBox.current.innerHTML = ""
    }

    sendOnKeyboard = (e) => {
        if (e.key == 'Enter') {
            this.send();
        }
    }

    changeInput = event => {
        let val = event.target.innerText;
        this.setState( {text: val} );
    }

    addSmileToInput = (smileTag) => {
        this.inputTextBox.current.innerHTML = this.inputTextBox.current.innerHTML + smileTag;
    }

    render() {
        // let { text } = this.state;
        return(
            <div className="chat-input d-flex">
                <div id = "input-text-box" ref = { this.inputTextBox } contentEditable = "true" onKeyPress = { this.sendOnKeyboard }></div>
                {/* onChange = { this.changeInput }  */}
                {/* <input type="text" className = "input-text-box" value= { text } onChange = { this.changeInput } onKeyPress = { this.sendOnKeyboard } /> */}
                <div className="buttons-block">
                    <SmilesModal addSmile = { this.addSmileToInput } />
                    {/* <button className="chat-input-button send-button" onClick={ this.send }><FontAwesomeIcon icon={faEnvelope} /></button> */}
                    <button className="chat-input-button send-button" onClick={ this.send }><FontAwesomeIcon icon={faEnvelope} /></button>
                </div>
            </div>
        )
    }
}