import { Component, OnInit } from "@angular/core";
import { IconComponent } from "../../util/icon/icon.component";
import { NgClass, NgFor, NgIf } from "@angular/common";
import { BarComponent } from "./bar/bar.component";
import { DonutComponent } from "./donut/donut.component";

@Component({
  selector: "app-graph",
  templateUrl: "./graph.component.html",
  styleUrls: ["./graph.component.scss"],
  standalone: true,
  imports: [IconComponent, NgFor, NgClass, NgIf, BarComponent, DonutComponent],
})
export class GraphComponent implements OnInit {
  public btnStyle: string = "text-stone-400"; //default value

  public btnList: string[] = ["Days", "Week", "Month", "Year", "Choose date"];
  selectedButton: number | null = 1;
  constructor() {}

  ngOnInit() {}

  activeButton(index: number) {
    this.selectedButton = index;
  }
}
