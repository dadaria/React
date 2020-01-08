import React from 'react';
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import { Switch, Route } from 'react-router-dom';
import Layout from './Layout';
// import Profile from './Profile';
import { showProfileInfo } from '../actions/profileActions';



class Router extends React.Component {
   render() {
       return (
           <Switch>
               <Route exact path='/' component={ Layout } />
               <Route exact path='/profile/' component={ Profile } />
               <Route
                   exact
                   path='/chat/:chatId/'
                   render={ obj => <Layout
                       chatId={ Number(obj.match.params.chatId) }
                   />
                   }
               />
           </Switch>
       )
   }
}

const mapStateToProps = ({ profileReducer }) => ({
    profile: profileReducer.profile,
 });
 
 const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
 
 export default connect(mapStateToProps, mapDispatchToProps)(Router);
 
