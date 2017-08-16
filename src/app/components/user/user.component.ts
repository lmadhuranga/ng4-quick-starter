import { Component, OnInit } from '@angular/core';
import { DataService} from '../../services/data.service'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  email:string;
  age:number;
  address:Address
  hobbies:any;
  posts:PostInterface;

  constructor(private dataService:DataService) { 
    console.log('mad_msg__ constractur ran');

  }

  ngOnInit() {
    console.log('mad_msg__ on init ran');
    this.name = 'madhuranga';
    this.age = 27;
    this.email = 'madhuranga@gasdflsd.lk';
    this.hobbies = ['Cricket', 'Sing', 'Reading'];
    this.address ={
      street:'Breakwoodplace',
      city:'colombo',
      state:'combo'
    }

    this.dataService.getPosts().subscribe((posts)=>{
      this.posts = posts;
    })
  }

  deleteHobby(oldHobby:string){
    for(let i =0; i <this.hobbies.length; i++){
      if(this.hobbies[i]==oldHobby){
        this.hobbies.splice(i,1);
      }
    }
  }

  onSubmit(newHobby:string){
    this.hobbies.unshift(newHobby)
  }

  onClick(newname:string){
    console.log('mad_msg__newname',newname);
    
    this.name = newname;
  }

}

interface Address {
  street : string,
  city: string,
  state:string
}

interface PostInterface{
  id:number,
  title:string,
  body:string,
  userId:number
}