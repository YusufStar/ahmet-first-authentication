import LeftContainer from "./components/LeftContainer";
import RightContainer from "./components/RightContainer";
import "./App.css";

const App = () => {
  return (
    <div className="flex w-screen h-screen">
      <LeftContainer />

      <RightContainer />
    </div>
  );
};

export default App;
