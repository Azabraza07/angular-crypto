import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private readonly toastr: ToastrService) {}

  handleErrorToast(err: HttpErrorResponse): void {
     this.toastr.error(err.message);
  }

  handleSuccessToast(value: string): void {
    this.toastr.success(value)
  } 
}
