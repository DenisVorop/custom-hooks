import CookieHook from "./components/CookieHook";
import DebounceHook from "./components/DebounceHook";
import FetchHook from "./components/FetchHook";
import HoverHook from "./components/HoverHook"
import InputHook from "./components/InputHook"
import KeyPressHook from "./components/KeyPressHook";
import LocalStorageHook from "./components/LocalStorageHook";
import OutsideHook from "./components/OutsideHook";
import RequestHook from "./components/RequestHook"
import ScrollHook from "./components/ScrollHook"

function App() {
  return (
    <div>
      <KeyPressHook />
      <FetchHook />
      <CookieHook />
      <OutsideHook />
      <LocalStorageHook />
      <RequestHook />
      <InputHook />
      <HoverHook />
      <DebounceHook />
      <ScrollHook />
    </div>
  );
}

export default App;
