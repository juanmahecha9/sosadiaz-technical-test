import { Component, Inject, OnDestroy, OnInit } from "@angular/core";
import {
  IonApp,
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from "@ionic/angular/standalone";
import { IconComponent } from "./components/util/icon/icon.component";
import { ToastrService } from "ngx-toastr";
import { OfflineService } from "./services/offline/offline.service";
import { Subscription } from "rxjs";
import { HeaderComponent } from "./components/partial/header/header.component";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  standalone: true,
  imports: [
    IonApp,
    IonRouterOutlet,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
    IconComponent,
    HeaderComponent,
  ],
})
export class AppComponent implements OnInit, OnDestroy {
  private networkStatusSubscription!: Subscription;
  constructor(
    private toastr: ToastrService,
    private offlineService: OfflineService
  ) {}

  ngOnInit(): void {
    this.networkStatusSubscription = this.offlineService.onlineStatus$.subscribe(
      (isOnline: boolean) => {
        if (!isOnline) {
          this.disconnection();
          return;
        }
        this.connection();
        return;
      }
    );
  }

  ngOnDestroy(): void {
    if (this.networkStatusSubscription) {
      this.networkStatusSubscription.unsubscribe();
    }
  }

  connection() {
    this.toastr.success(
      "",
      "Conexión exitosa o recuperada a un servicio de internet"
    );
  }

  disconnection() {
    this.toastr.error("", "Conexión perdida a un servicio de internet");
  }
}
