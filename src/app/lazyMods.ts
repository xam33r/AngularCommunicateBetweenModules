import { NgModuleFactory, Type } from "@angular/core";

export const lazyMods: {
  path: string;
  loadChildren: () => Promise<NgModuleFactory<any> | Type<any>>;
}[] = [
  {
    path: "lazy",
    loadChildren: () =>
      import("./lazy/lazy.module").then(m =>m.LazyModule)
  },
  {
    path: "more-lazy",
    loadChildren: () =>
      import("./moreLazy/more-lazy.module").then(m =>m.MoreLazyModule)
  }
];

export function lazyArrayToObj() {
  const result = {};
  for (const w of lazyMods) {
    result[w.path] = w.loadChildren;
  }
  return result;
}
