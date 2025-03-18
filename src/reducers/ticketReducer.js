export default function ticketReducer(state, action) {
  switch (action.type) {
    case "ADD_TICKET":
      return {...state , tickets: [...state.tickets , action.payload]}
    default:
      return state;
  }
}
