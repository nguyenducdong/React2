
import {ADD_ARTICLE} from '../constants/action_types'
const forbiddenWords = ['span', 'money'];

// export const forbiddenWordsMiddleware = ({dispatch}) => {
//     return (next) => {
//         return (action) => {
//             if(action.type === ADD_ARTICLE) {
//                 const foundWord = forbiddenWords.filter(word => {
//                     return action.payload.title.includes(word)
//                 });
//                 if (foundWord.length){
//                     return dispatch({type: 'FOUND_BAD_WORD'});
//                 }
//             }
//             return next(action);
//         }
//     }

// }

export const forbiddenWordsMiddleware = ({dispatch}) => next => action => {
    if(action.type === ADD_ARTICLE) {
        const foundWord = forbiddenWords.filter(word => {
            return action.payload.title.includes(word)
        });
        if (foundWord.length){
            return dispatch({type: 'FOUND_BAD_WORD'});
        }
    }
    
    return next(action);
}
