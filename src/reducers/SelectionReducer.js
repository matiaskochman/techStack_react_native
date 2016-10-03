//if state is undefined, which will be in the startup,
//it will be defaulted to the value of null
//we need that because a reducer can't return undefined 
//there is not a selected library in the beginning
export default (state = null,action) => {
	switch (action.type){
		case 'select_library':
			return action.payload;
			
		default:
			return state;
	}
}