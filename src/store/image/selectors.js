export function selectAllUsers(reduxState) {
  return reduxState.AllUserReducer.list.allUser;
}

export function selectAllImages(reduxState) {
  return reduxState.Images.image.allImages;
}
