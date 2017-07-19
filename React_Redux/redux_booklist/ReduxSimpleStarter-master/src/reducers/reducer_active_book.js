// state argument is NOT application state, only the
// state this reducer is responsible for
export default function(state = null, action){
  switch(action.type) {
    case 'BOOK_SELECTED':
    return action.payload;
    //always return fresh object
  }

  return state;
}
