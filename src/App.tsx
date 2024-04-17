import {TicketList} from "./components/TicketList";
import {Filter} from "./components";

function App() {

  return (
    <div className={'flex my-4 mx-auto justify-center'}>
      <Filter/>
      <TicketList/>
    </div>
  );
}

export default App;
