export const initialState = {
  userName: null,
  avatarURL: null,
  userID: null,
}

export const actionTypes ={
  SET_USER: "SET_USER"
}

const reducer = (state,action) => {
  console.log(action)
  switch(action.type){
    case actionTypes.SET_USER:
      return {
        ...state,
        userName: action.user.displayName,
        avatarURL: action.user.photoURL,
        userID: action.user.uid,
      }
    default: 
      return state
  }
}

export default reducer;