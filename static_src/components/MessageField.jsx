import React from "react";
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import Message from './Message';
import '../styles/styles.css';


export default class MessageField extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    };

    state = {
        messages: [{ text: "Привет!", sender: 'bot' }, { text: "Как дела?", sender: 'bot' }],
        input: '',
        isEditingMessage: false,
    };

    componentDidMount() {
        this.textInput.current.focus();
    } 
 
    componentDidUpdate() {
        if (this.state.messages[this.state.messages.length - 1].sender === 'me') {
            setTimeout(() =>
                    this.setState({
                        messages: [ ...this.state.messages, {text: 'Не приставай ко мне, я робот!', sender: 'bot'} ] }),
                1000);
        }
    }
 
    handleClick = () => {
        if (this.state.isEditingMessage) {
            let messages = this.state.messages;
            messages[this.state.myLastMessageIndex].text = this.state.input;
            this.setState({ messages: messages, isEditingMessage: false, input:'' });
        } else {
            this.setState(
                { messages: [ ...this.state.messages, {text: this.state.input, sender: 'me'} ], input: '' },
                this.setState({ myLastMessageIndex: this.state.messages.length - 1})
            );
        }
    };

    handleInput = (e) => {
        this.setState({ [e.target.name]: event.target.value});
    };

    
    handleKeyUp = (event, message) => {
       if (event.keyCode === 13) { 
           this.handleClick();
       } else if (event.keyCode === 38) { //редактирование по стрелке ввверх
            if (this.state.myLastMessageIndex) {
                this.setState({ input: this.state.messages[this.state.myLastMessageIndex].text, isEditingMessage: true});
            }
       }
    };
 
 
    render() {
        const messageElements = this.state.messages.map((message, index) => (
            <Message key={ index } text={ message.text } sender= { message.sender }/>));     
 
       return (
       <div className='layout'>
            <div className='message-field'>
                {messageElements}
            </div>
            <div style={ { width: '100%', display: 'flex' } }>
                <TextField 
                fullWidth = { true }
                hintText="Введите сообщение"
                style={ { fontSize: '20px', marginLeft: '20px' }}
                ref={ this.textInput }
                onChange = { this.handleInput } 
                onKeyUp = { (event) => this.handleKeyUp(event, 'Нормально') } 
                value = { this.state.input }
                name = 'input'/>
                <FloatingActionButton 
                onClick={ this.handleClick }
                style={ { marginRight: '20px', marginBottom: '10px'} }>
                    <SendIcon/>
                </FloatingActionButton>
            </div>
       </div>
       )
   }
}
