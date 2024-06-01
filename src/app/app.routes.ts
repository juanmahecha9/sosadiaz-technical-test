import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "github",
    loadComponent: () =>
      import("src/app/pages/github/github.page").then((m) => m.GithubPage),
  },
  {
    path: "main",
    loadComponent: () =>
      import("src/app/pages/main/main.page").then((m) => m.MainPage),
  },
  {
    path: "",
    redirectTo: "/main",
    pathMatch: "full",
  },
];
