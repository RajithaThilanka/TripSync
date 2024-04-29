export const imageAssets = {
  logo: require("../../assets/homelogo.jpg"),
  loginLogo: require("../../assets/mainlogo.png"),
  defaultProfile: require("../../assets/defaulrprofile.jpg"),
  default: require("../../assets/homelogo.jpg"),
};

export const getImage = (imageName) => {
  const image = imageAssets[imageName];
  return image || imageAssets.default;
};
