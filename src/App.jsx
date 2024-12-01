import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import Header from "./Components/Header";
import DisplayCounter from "./Components/DisplayCounter";
import Controls from "./Components/Controls";
import { useSelector } from "react-redux";
import PrivacyMsg from "./Components/PrivacyMsg";
function App() {
  const togglePrivacy = useSelector((store) => store.privacy);
  return (
    <center className="bg-dark text-secondary px-4 py-5 text-center">
      <div className="py-5">
        <Header />
        <div className="col-lg-6 mx-auto">
          {togglePrivacy ? <PrivacyMsg /> : <DisplayCounter />}
          <Controls />
        </div>
      </div>
    </center>
  );
}

export default App;
