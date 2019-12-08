import React from 'react';
// import MobileTearSheet from '../../../MobileTearSheet';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';


export default class ChatList extends React.Component {

    render() 
    {
        return (
            <div className="chats">  
                <List>
                  <Subheader style={ { fontSize: "18px" } }>Recent chats</Subheader>
                  <ListItem
                    primaryText="Brendan Lim"
                    leftAvatar={<Avatar />}
                    rightIcon={<CommunicationChatBubble />}
                  />
                  <ListItem
                    primaryText="Eric Hoffman"
                    leftAvatar={<Avatar />}
                    rightIcon={<CommunicationChatBubble />}
                  />
                  <ListItem
                    primaryText="Grace Ng"
                    leftAvatar={<Avatar />}
                    rightIcon={<CommunicationChatBubble />}
                  />
                  <ListItem
                    primaryText="Kerem Suer"
                    leftAvatar={<Avatar />}
                    rightIcon={<CommunicationChatBubble />}
                  />
                  <ListItem
                    primaryText="Raquel Parrado"
                    leftAvatar={<Avatar />}
                    rightIcon={<CommunicationChatBubble />}
                  />
                </List>
            </div>
        )
    }
}