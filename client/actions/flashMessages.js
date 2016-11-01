import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from './types';
import { v4 } from 'node-uuid';

export function addFlashMessage(message){
    // 这里的id生成还可以使用 shortid 这个包
    return {
        type: ADD_FLASH_MESSAGE,
        id: v4(),
        message
    }
}

export function deleteFlashMessage(id){
    return {
        type: DELETE_FLASH_MESSAGE,
        id
    }
}
