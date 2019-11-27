import React from 'react';
import ReactDOM from 'react-dom';

const text = "Send";
// addMessage = () =>  {  
//     messages.push('message sent')
// }; 
let messages = ["message sent"];
const Element =(props)=><button onClick={()=>messages.push('message sent')} type="button" id="button">{props.text}</button>;
console.log(messages);



const MessageComponent = (props) => <div>{props.text}</div>;
const MessageFields = (props) => {    
    const messageElement = props.messages.map(messages => <MessageComponent text={messages} />);
    return (
        <div>
            {Element}
            {messageElement}
        </div>
    )
};

ReactDOM.render(
    <div>
        <Element text= {text}/>
        <MessageFields messages = {messages}/>
    </div> ,
   document.getElementById('root')
);

