export const imageReducer = image => {
  return {
    url: `https:${image.fields.file.url}`,
    alt: image.fields.title,
    height: image.fields.file.details.image.height,
    width: image.fields.file.details.image.width,
    contentType: image.fields.file.contentType
  };
};

export const postReducer = rawPost => {
  let post = { ...rawPost.fields };
  post.id = rawPost.sys.id;
  post.image = imageReducer(rawPost.fields.image);
  return post;
};
