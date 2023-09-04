import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit{
// this.editar.reset(Login);
data:any[] = [];


  public editar: FormGroup = new FormGroup({
    id: new FormControl ('',Validators.required),
    title: new FormControl ('',Validators.required),
    body: new FormControl ('',Validators.required),
    userId: new FormControl ('',Validators.required),
  })

  loginForms = this.formBuilder.group({
    id: ['',Validators.required],
    title: ['',Validators.required],
    body: ['',Validators.required],
    userId: ['',Validators.required],
    
  })

  constructor(
    private formBuilder:FormBuilder,
    private router:Router,
    private loginService:LoginService,
  ){}



  ngOnInit(): void {
   this.loginService.getData().subscribe(data =>{
    this.data=data;
    console.log(this.data);
   })
  }

  login(){
    if(this.loginForms.valid){
      console.log("Guardado");
      this.loginService.Login(this.loginForms.value );
    }
    else{
      alert("Campos Requeridos")
    }
  }
  

}
