import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Website")
    .items([
      S.documentTypeListItem("restaurant").title("Restaurants"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !["restaurant"].includes(item.getId()!)
      ),
    ]);
