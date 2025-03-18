import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import TicketForm from "./component/TicketForm";
import ticketReducer from "./reducers/ticketReducer";
import { useReducer } from "react";
import TicketList from "./component/TicketList";

function App() {

  const initialState = { tickets: [] };
  const [state, dispatch] = useReducer(ticketReducer, initialState);

  return (
    <div className="App">
      <div className="container">
        <h1>Bug Blaster</h1>
        <TicketForm dispatch={dispatch} />

        <h2>All Tickets</h2>
        {
          state.tickets.length > 0 ? (
            <TicketList tickets={state.tickets} dispatch={dispatch} />
          ) : (
            <p>No tickets found</p>
          )
        }

      </div>
    </div>
  );
}

export default App;
