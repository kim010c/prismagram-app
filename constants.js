import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");
console.log({ width, height });
export default { width, height };
