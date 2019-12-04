import React from "react";
import Message from './Message.jsx';

export default class MessageField extends React.Component {
   state = {
       allMessages: [
           {author: "Вася", message: "Привет!"},
           {author: "Вася", message: "Как дела?"},
        ]
   };

   componentDidUpdate() {
    if (this.state.allMessages.length % 2 === 1) {  
        setTimeout(() => this.setState({allMessages:  [...this.state.allMessages, {author: "Робот", message: "Не приставай ко мне, я робот!"}]}), 1000);
        }
    };

   handleClick = () => {  
        this.setState({allMessages:  [...this.state.allMessages, {author: "Вася", message: "Нормально"}]})
   };

   render() {
       const messageElements = this.state.allMessages.map((messageObject, index) => (<Message key={ index } text={`${ messageObject.author }: ${ messageObject.message }`} />));      
 
       return <div>
           {messageElements}
           <button onClick={ this.handleClick }>Отправить сообщение</button>
       </div>
   }
}
