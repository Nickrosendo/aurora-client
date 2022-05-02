import { IAdoptionItem } from "@root/types";
import { objectId } from "@root/helpers";

export const mock_data: Array<IAdoptionItem> = [
  { id: objectId(), title: "foo" },
  { id: objectId(), title: "foo2" },
  { id: objectId(), title: "foo4" },
  { id: objectId(), title: "foo5" },
  { id: objectId(), title: "foo6" },
  { id: objectId(), title: "foo7" },
  { id: objectId(), title: "foo8" },
];
