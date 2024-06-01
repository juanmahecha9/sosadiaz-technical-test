import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable, retry } from "rxjs";
import { ApiGitHub } from "src/app/models/github/api";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getInfo(query: string): Observable<ApiGitHub> {
    return this.http
      .get<ApiGitHub>(`${environment.GITHUB_API}/search/users?q=${query}`)
      .pipe(retry(2));
  }
}
