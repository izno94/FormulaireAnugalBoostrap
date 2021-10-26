import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-bootstrap-form',
  templateUrl: './bootstrap-form.component.html',
  styleUrls: ['./bootstrap-form.component.css']
})
export class BootstrapFormComponent implements OnInit {



  users  : any[]
  userSubcription: Subscription
  
  constructor(private userService : UserService) {}

  ngOnInit() {
    
    this.userSubcription = this.userService.userSubject.subscribe((
      users:any[])=>{
        this.users = users
      }
      );
    this.userService.emitUserSubject()  
  }


  //rércupere les valeurs du formulaire 
onSubmit(form: NgForm){
  console.log(form.value)
  const nom = form.value['nom'];
  const description = form.value['description'];
  this.userService.addUser(nom, description)
  }

}
 
