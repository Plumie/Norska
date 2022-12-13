import AmbientLight from "./AmbientLight";
import DirectionalLight from "./DirectionalLight";
import HemisphereLight from "./HemisphereLight";
import PointLight from "./PointLight";
import SpotLight from "./SpotLight";
import RectAreaLight from "./RectAreaLight";

const lights: Record<string, any> = {
  AmbientLight,
  DirectionalLight,
  HemisphereLight,
  PointLight,
  SpotLight,
  RectAreaLight,
};

export default lights;