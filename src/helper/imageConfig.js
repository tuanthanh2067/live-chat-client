export const getThumbNail = (path) => {
  if (!path) return;
  const url = path.split("/upload/");
  const middle = "/upload/w_260,c_scale/";
  return url[0] + middle + url[1];
};

export const getSmallCircleImage = (path) => {
  if (!path) return;
  const url = path.split("/upload/");
  const middle = "/upload/w_50,h_50,c_scale/";
  return url[0] + middle + url[1];
};
