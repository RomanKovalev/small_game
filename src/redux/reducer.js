const INITIAL_STATE = {
	gameState: 'ready',
	gameConfig: {},
	name: '',
	mode: '',
	message: '',
	squaresAI: [],
	squaresHuman: [],
	active: '',
	status: '',
	clicked: false,
	resultTable: [],
	page: 0,
	showed: [],
	buttonLabel: 'Play',
};

const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'SET_GAME_CONFIG':
			return {
				...state,
				gameConfig: action.payload,
			};
		case 'SET_NAME':
			return {
				...state,
				name: action.payload,
			};
		case 'SET_MODE':
			return {
				...state,
				mode: action.payload,
			};
		case 'SET_MESSAGE':
			return {
				...state,
				message: action.payload,
			};
		case 'ADD_AI_SQUARE':
			return {
				...state,
				squaresAI: action.payload,
			};
		case 'ADD_HUMAN_SQUARE':
			return {
				...state,
				squaresHuman: action.payload,
			};
		case 'SET_ACTIVE':
			return {
				...state,
				active: action.payload,
			};
		case 'SET_STATUS':
			return {
				...state,
				status: action.payload,
			};
		case 'SET_RESULT_TABLE':
			return {
				...state,
				resultTable: action.payload,
			};
		case 'SET_SHOWED':
			return {
				...state,
				showed: action.payload,
			};
		case 'SET_PAGE':
			return {
				...state,
				page: action.payload,
			};
		case 'SET_BUTTON_LABEL':
			return {
				...state,
				buttonLabel: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
