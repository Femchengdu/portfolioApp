import useTestServer from "./hooks/useTestServer";
import LandingPage from "./components/Header/LandingPage";
import "./app.css";
function App() {
  const serverResponse = useTestServer();
  let serverMessage;
  if (serverResponse) {
    const { test: testServer, is: message } = serverResponse;
    serverMessage = `the ${testServer}  is ${message}`;
  }
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;
