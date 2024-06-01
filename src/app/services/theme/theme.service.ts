import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  private darkTheme = new BehaviorSubject<boolean>(false);
  isDarkTheme = this.darkTheme.asObservable();

  constructor() {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    this.darkTheme.next(prefersDark.matches);
    prefersDark.addEventListener("change", (e) => {
      this.darkTheme.next(e.matches);
    });
  }

  setDarkTheme(isDark: boolean): void {
    this.darkTheme.next(isDark);
    document.body.classList.toggle("dark-theme", isDark);
  }
}
