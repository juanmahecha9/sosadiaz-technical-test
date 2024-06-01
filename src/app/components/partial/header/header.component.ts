import { Component, Input, OnInit, input } from "@angular/core";
import {
  IonToolbar,
  IonHeader,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
} from "@ionic/angular/standalone";
import { IconComponent } from "../../util/icon/icon.component";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  standalone: true,
  imports: [
    IonButton,
    IonToolbar,
    IonHeader,
    IonTitle,
    IonGrid,
    IonRow,
    IonCol,
    IconComponent,
  ],
})
export class HeaderComponent implements OnInit {
  @Input() title: string = "Track my progress";
  constructor() {}

  ngOnInit() {}
}
