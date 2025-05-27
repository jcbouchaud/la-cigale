import createImageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { dataset, projectId } from "../env";

// https://www.sanity.io/docs/image-url

const config = {
  dataset,
  projectId,
};

const builder = createImageUrlBuilder(config);

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};
