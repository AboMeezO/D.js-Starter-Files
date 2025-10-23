import { Database, JSONDriver } from "st.db";
import path from "path";
const Random = new Database({
  driver: new JSONDriver(path.resolve("src/Database/Data/Random.json")),
});

export default Random;
