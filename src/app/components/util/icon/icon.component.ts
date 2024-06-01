import { NgIf, NgStyle } from "@angular/common";
import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ThemeService } from "src/app/services/theme/theme.service";

@Component({
  selector: "app-icon",
  templateUrl: "./icon.component.html",
  styleUrls: ["./icon.component.scss"],
  standalone: true,
  imports: [NgStyle, NgIf],
})
export class IconComponent implements OnInit, OnDestroy {
  @Input({ required: true }) icon: string = "";
  @Input({}) align: string = "center";
  @Input({ alias: "theme" }) theme: string = "";
  @Input() width: string = "";
  public icon_path: string = "";
  public style: string = `width: 100%; display: flex; justify-content: center; align-items: center;`;
  public img_width: string = "";
  private themeSubscription!: Subscription;
  isDarkTheme: boolean = false;
  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.icon_path = `assets/icons/${this.icon}.svg`;

    if (this.align !== "center") {
      this.style = `width: 100%; display: flex; justify-content: ${this.align}; `;
    }

    if (this.width !== "") this.img_width = `width: ${this.width}px;`;

    this.themeSubscription = this.themeService.isDarkTheme.subscribe(
      (isDarkTheme) => {
        console.log(isDarkTheme);
        this.isDarkTheme = isDarkTheme;
      }
    );
  }

  ngOnDestroy(): void {
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }
}
