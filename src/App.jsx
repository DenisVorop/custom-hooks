import DebounceHook from "./components/DebounceHook";
import HoverHook from "./components/HoverHook"
import InputHook from "./components/InputHook"
import RequestHook from "./components/RequestHook"
import ScrollHook from "./components/ScrollHook"

function App() {
  return (
    <div>
      <RequestHook />
      <InputHook />
      <HoverHook />
      <DebounceHook />
      <ScrollHook />
    </div>
  );
}

export default App;
