import { Injectable }from'@angular/core';
import { Change }from'./change.model';
@Injectable({
  providedIn:'root'
})

export class ChangeService{
  formData:Change;
  constructor(){

  }
}