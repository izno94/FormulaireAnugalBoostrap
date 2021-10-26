import { Subject } from "rxjs";

export class UserService{
userSubject = new Subject<any[]>()

   private users = [
        {
          id : 1,  
          nom: 'Dune',
          description: 'Homme'
        },
        {
            id : 2,  
          nom: 'Père Castor',
          description: 'Femme'
        }
    
      ];
      emitUserSubject(){
          this.userSubject.next(this.users.slice());
      }

      addUser(nom:string, description:string){
        const userObject ={
          id: 0,
          nom:'',
          description:''
        };
        userObject.nom = nom;
        userObject.description = description;
        userObject.id = this.users[(this.users.length - 1)].id + 1;
        
        this.users.push(userObject);
        this.emitUserSubject()
    }
}