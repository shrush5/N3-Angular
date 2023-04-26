import { Component } from '@angular/core';
import{FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
   sampleForm!:FormGroup
   
   onRegister(){
    if(this.sampleForm.valid)
    {
       //for getting the value
    console.log(this.sampleForm.value)
    }
   
   }

   //create an instance for sampleForm using  FormGrup
   ngOnInit():void{
    this.sampleForm=new FormGroup({'email':new FormControl('',[Validators.required,Validators.email]),'password':new FormControl('',[Validators.required]),'rpassword':new FormControl('',[Validators.required])});
   }


}
