import { ADD_FLASH_MESSAGE } from '../actions/types';


const flashMessages = (state=[], action) => {
    switch (action.type){
        case ADD_FLASH_MESSAGE:
            return [
                ...state,
                {
                    id: action.id,
                    type: action.message.type,
                    text: action.message.text
                }
            ];
        default:
            return state;
    }
};

export default flashMessages;