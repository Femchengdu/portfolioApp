//import useTestServer from "./hooks/useTestServer";
import LandingPage from "./components/Header/LandingPage";
import ProjectsContainer from "./components/Containers/ProjectsContainer";
import MainFooter from "./components/Footer/MainFooter";
import "./app.css";
function App() {
  // const serverResponse = useTestServer();
  // let serverMessage;
  // if (serverResponse) {
  //   const { test: testServer, is: message } = serverResponse;
  //   serverMessage = `the ${testServer}  is ${message}`;
  // }
  return (
    <div className="App">
      <LandingPage />
      <ProjectsContainer />
      <MainFooter />
    </div>
  );
}

export default App;
