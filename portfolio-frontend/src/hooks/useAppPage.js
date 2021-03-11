import { useState } from "react";

const useAppPage = () => {
  const [appPage, setAppPage] = useState("index");
  return {
    appPage,
    setAppPage,
  };
};
export default useAppPage;
