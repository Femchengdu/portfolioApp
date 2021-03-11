//import useTestServer from "./hooks/useTestServer";
import LandingPage from "./components/Header/LandingPage";
import ProjectsContainer from "./components/Containers/ProjectsContainer";
import MainFooter from "./components/Footer/MainFooter";
import useAppPage from "./hooks/useAppPage";
import usePageTitle from "./hooks/usePageTitle";
import AppContext from "./context/AppContext";
import "./app.css";
const App = () => {
  const appPageObj = useAppPage();
  usePageTitle(appPageObj);
  // const serverResponse = useTestServer();
  // let serverMessage;
  // if (serverResponse) {
  //   const { test: testServer, is: message } = serverResponse;
  //   serverMessage = `the ${testServer}  is ${message}`;
  // }
  return (
    <AppContext.Provider value={appPageObj}>
      <div className="App">
        <LandingPage />
        <ProjectsContainer />
        <MainFooter />
      </div>
    </AppContext.Provider>
  );
};

export default App;
