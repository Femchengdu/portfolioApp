import { useEffect, useState } from "react";
import { testDatabaseConnection } from "../utils/testServer";

const useTestServer = () => {
  const [serverResponse, setServerResponse] = useState();
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      testDatabaseConnection(setServerResponse);
    }
    return () => {
      isMounted = false;
    };
  }, []);
  return serverResponse;
};

export default useTestServer;
