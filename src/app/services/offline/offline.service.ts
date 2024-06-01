import { Injectable, NgZone } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class OfflineService {
  private onlineStatus = new BehaviorSubject<boolean>(navigator.onLine);
  public onlineStatus$ = this.onlineStatus.asObservable();

  constructor(private ngZone: NgZone) {
    window.addEventListener("online", () => this.updateOnlineStatus(true));
    window.addEventListener("offline", () => this.updateOnlineStatus(false));
  }

  private updateOnlineStatus(isOnline: boolean): void {
    this.ngZone.run(() => {
      this.onlineStatus.next(isOnline);
      console.log(`Network status: ${isOnline ? "ON" : "OFF"}`);
    });
  }
}
