import { Injectable } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

@Injectable({
  providedIn: "root",
})
export class Util {
  getFormChanges(control: string, formGroup: FormGroup, fn: any) {
    const observable = formGroup.get(control);
    if (observable != null) {
      observable.valueChanges.subscribe({
        next: fn,
      });
    }
  }
}
