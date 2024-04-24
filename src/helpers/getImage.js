export const imageAssets = {
  logo: require("../../assets/homelogo.jpg"),
  loginLogo: require("../../assets/deliveryLogo.jpg"),
  default: require("../../assets/homelogo.jpg"),
};

export const getImage = (imageName) => {
  const image = imageAssets[imageName];
  return image || imageAssets.default;
};
