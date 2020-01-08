import update from 'react-addons-update';

import { SHOW_PROFILE_INFO } from '../actions/profileActions';

const initialStore = {
    profile: {
        name: 'Гик',
        email: 'geek@geekbrains.ru',
        number: '+7 999 999 99 99'
    }
};

export default function profileReducer (store = initialStore, action) {
    switch (action.type) {
        case SHOW_PROFILE_INFO: {
            return update(store, {
                profile: {$merge: {name: action.name, email: action.email, number: action.number}},
            })
        }
        default: return store;
    }
}