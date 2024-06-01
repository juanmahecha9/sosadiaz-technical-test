import { Component, Inject, OnInit } from "@angular/core";
import { CommonModule, NgFor, NgIf } from "@angular/common";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from "@angular/forms";
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonInput,
} from "@ionic/angular/standalone";
import { HeaderComponent } from "src/app/components/partial/header/header.component";
import { ApiService } from "src/app/services/github/api.service";
import { catchError, finalize } from "rxjs";
import { ApiGitHub, GitHubData } from "src/app/models/github/api";
import { ToastrService } from "ngx-toastr";
import { Util } from "src/lib/util";

@Component({
  selector: "app-github",
  templateUrl: "./github.page.html",
  styleUrls: ["./github.page.scss"],
  standalone: true,
  imports: [
    IonInput,
    IonItem,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    HeaderComponent,
    NgFor,
    ReactiveFormsModule,
    NgIf,
  ],
})
export class GithubPage implements OnInit {
  public data_to_show: GitHubData[][] = [];
  public page: number = 0;
  public formGroup!: FormGroup;
  public is_new_request: boolean = false;
  public user: string = "juanmahecha9";

  public is_api_error: boolean = false;

  public default_message: string =
    "No se ha generado una consulta nueva, favor ingrese un usario a buscar";

  constructor(
    private gitHubApiService: ApiService,
    private toastr: ToastrService,
    private util: Util,
    private formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      user: new FormControl(""),
    });
  }

  ngOnInit() {
    this.util.getFormChanges("user", this.formGroup, (value: string) => {
      this.user = value;
    });
  }

  public found() {
    this.default_message = "Cargando información...";
    if (!this.is_new_request) this.is_new_request = !this.is_new_request;
    this.getInfo(this.user);
  }

  private getInfo(user: string) {
    this.gitHubApiService
      .getInfo(user)
      .pipe(
        finalize(() => {
          console.log("conexion realizada");
          this.is_api_error = false;
        }),
        catchError((error: any) => {
          console.log(error);
          this.data_to_show = [];

          if (error.status === 403) {
            this.default_message = error.error.message.concat(
              " TRY AGAIN LATER"
            );
          }
          this.toastr.error("", "Error con la petición del servicio");
          return [];
        })
      )
      .subscribe({
        next: (res: ApiGitHub) => {
          if (res.total_count === 0) {
            this.toastr.warning(
              "",
              "No se han encontrado datos relacionados con el parametro de busqueda"
            );
            return;
          }
          this.page = 1;
          this.data_to_show = res.items.reduce((all: any, one: any, i: any) => {
            const ch = Math.floor(i / 10);
            all[ch] = [].concat(all[ch] || [], one);
            return all;
          }, []);

          console.log(res);
        },
      });
  }

  nextPage() {
    this.page += 1;
  }

  previousPage() {
    this.page -= 1;
  }
}
