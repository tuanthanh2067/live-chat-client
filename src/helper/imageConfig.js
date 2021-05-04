export const getThumbNail = (path) => {
  // https://res.cloudinary.com/dsqq6qdlf/image/upload/v1619993702/gossip-app/theme-park_dlnk0a.jpg
  const url = path.split("/upload/");
  const thumbNail = "/upload/w_260,c_scale/";
  return url[0] + thumbNail + url[1];
};
