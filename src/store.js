import {createStore} from 'redux';

const reducer = (state,action)=>{

	if(action.type==="SEND_MAIL"){
		return {
			...state,
			sent: state.sent.concat(action.sentMail)
		}	
	}
	if(action.type==="LOG_IN"){
		return {
			...state,
			logged: true
		}	
	}
	if(action.type==="SHOW_MAILS"){
		return {
			...state,
			show: action.show
		}	
	}
	if(action.type==="SEND_DRAFT"){
		return {
			...state,
			draft: action.draft
		}	
	}
	return state;
}

export default createStore(reducer,{sent:[]})