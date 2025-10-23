import path from "path";
import { YAMLDriver, Database } from "st.db";

const YamlConfig = new Database({
  driver: new YAMLDriver(path.resolve("Config.yaml")),
});

export default YamlConfig;
