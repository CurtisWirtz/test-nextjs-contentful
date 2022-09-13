import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { documentToReactComponents } from "@contentful/rich-text-html-renderer";

export const imageReducer = image => {
  //   console.log(image);
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
  post.copy = richTextReducer(rawPost.fields.content);
  return post;
};

export const richTextReducer = rawRichText => {
  const parsedRichText = documentToHtmlString(rawRichText);
  //   const parsedRichText = documentToReactComponents(rawRichText);
  return parsedRichText;
};
