import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/MessageField';

// const text = "Send";
// let messages = ["message sent"];
// const Element =(props)=><button onClick={()=>messages.push('message sent')} type="button" id="button">{props.text}</button>;
// console.log(messages);


// const MessageComponent = (props) => <div>{props.text}</div>;
// const MessageFields = (props) => {    
//     const messageElement = props.messages.map(messages => <MessageComponent text={messages} />);
//     return (
//         <div>
//             {Element}
//             {messageElement}
//         </div>
//     )
// };

ReactDOM.render(
   <App />,
   document.getElementById('root')
);

