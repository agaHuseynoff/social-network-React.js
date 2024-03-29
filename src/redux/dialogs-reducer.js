const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {
            id: 1,
            name: 'Dima'
        }, {
            id: 2,
            name: 'Andrey'
        }, {
            id: 3,
            name: 'Sveta'
        }, {
            id: 4,
            name: 'Sasha'
        }, {
            id: 5,
            name: 'Victor'
        }, {
            id: 6,
            name: 'Victor'
        }
    ],

    messages: [
        {
            id: 1,
            message: 'Hi'
        }, {
            id: 2,
            message: 'How are you'
        }, {
            id: 3,
            message: 'Thank you..'
        }, {
            id: 4,
            message: 'Thank you..'
        }, {
            id: 5,
            message: 'Thank you..'
        }, {
            id: 6,
            message: 'Thank you..'
        }
    ],

    newMessageBody: ''

}

const dialogsReducer = (state = initialState , action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            return state;

        default:
            return state;
    }
};

export const sendMessageCreater = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreater = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;