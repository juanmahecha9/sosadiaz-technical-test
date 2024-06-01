import { Injectable, NgZone } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Platform } from "@ionic/angular";
import { Network } from "@capacitor/network";

@Injectable({
  providedIn: "root",
})
export class OfflineService {
  private onlineStatus = new BehaviorSubject<boolean>(navigator.onLine);
  public onlineStatus$ = this.onlineStatus.asObservable();

  constructor(private ngZone: NgZone, private platform: Platform) {
    this.platform.ready().then(() => {
      this.initializeNetworkEvents();
    });
  }

  private async initializeNetworkEvents() {
    const status = await Network.getStatus();
    this.updateOnlineStatus(status.connected);

    Network.addListener("networkStatusChange", (status) => {
      this.updateOnlineStatus(status.connected);
    });
  }

  private updateOnlineStatus(isOnline: boolean): void {
    this.ngZone.run(() => {
      this.onlineStatus.next(isOnline);
      //console.log(`Network status: ${isOnline ? "ON" : "OFF"}`);
    });
  }
}
