import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../shared/services/category.service';
import { Category } from '../models/categories.models';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styles: []
})
export class CategoriesComponent implements OnInit {

  categories:Category[]=[];
  constructor(private ctgsvc:CategoryService) { }

  ngOnInit() {

    this.getCategories();    
  }
  frmCategory:Category=new Category(null,null);

  private getCategories() {
    this.ctgsvc.getCategories().subscribe((data) => {
      console.log("GET Success", data);
      this.categories = data;
    }, (err) => { console.log("GET Failure", err); });
  }

  addCategory()
  {
    this.ctgsvc.addCategory(this.frmCategory).subscribe(
       data=>{console.log("Sucess") 
       this.getCategories()      
      //or we can data bind like below
     // this.categories.push(this.frmCategory);
      },err=>{console.log("Failure")}

    );
    this.frmCategory=new Category(null,null);
  }
  deleteCategory(id:number)
  {
    this.ctgsvc.deleteCategory(id).subscribe(
      data=>{console.log("Delete Sucess") 
      //this.getCategories()   
     let idx= this.categories.findIndex((e)=>e.id==id);
     this.categories.splice(idx,1);
     },err=>{console.log("Delete Failure")}
    )
       
  }
  EditCategory(category:Category)
  {
    console.log("Edit")
    //this.frmCategory=category;
    //this above statement will modify grid data also when we modify data as object refrence is mapped
    //to avaoid object mapping we have to deep copy the object like below
    Object.assign(this.frmCategory,category);
    
  }
  UpdateCategory()
  {
    this.ctgsvc.UpdateCategory(this.frmCategory).subscribe(
      (data)=>{console.log("Update Sucess")
      let idx= this.categories.findIndex((e)=>e.id==data.id);
      this.categories[idx]=data;
    
    },
      err=>{console.log("Delete Failure")}
    )
    this.frmCategory=new Category(null,null);
  }
  
}
