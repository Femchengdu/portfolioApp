import axios from "axios";

const testDatabaseConnection = async (cb) => {
  const res = await axios.get("/test_server");
  const { data } = res;
  cb(data);
};

export { testDatabaseConnection };
