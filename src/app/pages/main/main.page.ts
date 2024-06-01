import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from "@ionic/angular/standalone";
import { GreetComponent } from "src/app/components/partial/greet/greet.component";
import { HeaderComponent } from "src/app/components/partial/header/header.component";
import { GraphComponent } from "src/app/components/partial/graph/graph.component";
import { IconComponent } from "src/app/components/util/icon/icon.component";

@Component({
  selector: "app-main",
  templateUrl: "./main.page.html",
  styleUrls: ["./main.page.scss"],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    HeaderComponent,
    GreetComponent,
    IconComponent,
    GraphComponent,
  ],
})
export class MainPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
