import { Database, JSONDriver } from "st.db";
import path from "path";
const Example = new Database({
  driver: new JSONDriver(path.resolve("src/Database/Data/Example.json")),
});

export default Random;
