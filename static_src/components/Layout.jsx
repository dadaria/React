import React from 'react';
import Header from './Header';
import MessageField from './MessageField';
import ChatList from './ChatList';


export default class Layout extends React.Component {

    render()
        { 
        return(
            <div style={ { height: '100%'}}>
                <Header />
                <div className="mainContent">
                    <ChatList />
                    <MessageField />
                </div>
            </div>
        )
    }
}