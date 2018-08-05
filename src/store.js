import {createStore} from 'redux';

const reducer = (state,action)=>{
	if(action.type==="SEND_MAIL"){
		return {
			...state,
			sent: state.sent.concat(action.sentMail)
		}	
	}
	return state;
}

export default createStore(reducer,{sent:[]})