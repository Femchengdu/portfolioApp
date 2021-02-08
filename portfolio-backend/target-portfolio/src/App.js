import useTestServer from "./hooks/useTestServer";

function App() {
  const serverResponse = useTestServer();
  let serverMessage;
  if (serverResponse) {
    const { test: testServer, is: message } = serverResponse;
    serverMessage = `the ${testServer}  is ${message}`;
  }
  return (
    <div className="App">
      <div>It works! {serverMessage && serverMessage}</div>
    </div>
  );
}

export default App;
