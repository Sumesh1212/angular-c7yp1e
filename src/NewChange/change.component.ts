import { Component, Input } from '@angular/core';
import { ChangeService } from '../Shared/change.service';
import { AngularFirestore }from '@angular/fire/firestore';
@Component({
  selector: 'change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.css'],
})
export class ChangeComponent implements OnInit {
  @Input() name: string;
  constructor(private service:ChangeService,private firestore:AngularFirestore){

  }
  ngOnInit(){
    this.resetForm();
  }
  resetForm(form ?: NgForm){
    if(form!=null)
    form.restForm();
    this.service.formData={
      ActivityName:null,
    }
  }
  onSubmit(form: NgForm){
    let Data=form.value;
    this.firestore.collection('change').add(Data);
    this.resetForm(form);
  }
}
