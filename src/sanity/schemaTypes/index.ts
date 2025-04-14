import { type SchemaTypeDefinition } from "sanity";

import { restaurantType } from "./restaurantType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [restaurantType],
};
