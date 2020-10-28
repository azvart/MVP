export const Reducer =(state,action)=>{
            switch(action.type){
                case 'REGISTER':
                    return{
                        ...state,
                        ...action.payload
                    };
                case 'AUTH':
                    return{
                        ...state,
                        ...action.payload
                    }
                    case 'ADD':
                        return{
                            ...state,
                            ...action.payload
                        }
                    case 'ADD_ANSWER_USER':
                        return{
                            ...state,
                            ...action.payload
                        }
                    case 'ANSWER':
                        return{
                            ...state,
                            ...action.payload
                        }
                    case 'UPDATE_RAITING':
                            return{
                                ...state,
                                ...action.payload
                            }
                default:
                    return state;
            }
};