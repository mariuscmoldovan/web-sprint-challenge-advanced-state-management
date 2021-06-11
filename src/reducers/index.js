import { FETCHING_START, FETCHING_SUCCESS, FETCHING_FAILURE, ADDING_SMURF, DISPLAY_ERROR } from '../actions/index'

export const initialState = {
    smurfs: [],
    isLoading: false,
    error: "",

}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case FETCHING_START:
      return {
          ...state, 
          isLoading: true, 
          smurfs: action.payload}
    
    case FETCHING_SUCCESS:
      return {
          ...state, 
          isLoading: false, 
          smurfs: action.payload}
    
    case FETCHING_FAILURE:
      return {
          ...state, 
          isLoading: false, 
          error: action.payload}
    
    case ADDING_SMURF:
      return {
          ...state, 
          smurfs: [...state.smurfs, action.payload] }

    case DISPLAY_ERROR:
      return {
          ...state, 
          isLoading: false, 
          errorMessage: action.payload}
      
    default: 
      return state;
  }

}

export default reducer;