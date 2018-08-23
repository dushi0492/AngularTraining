import { Injectable } from "@angular/core";
import { Category } from "../../models/categories.models";
import { HttpClient } from "@angular/common/http";


@Injectable()
export class CategoryService{
    private categoryData:Category[];
    restUrl="http://localhost:3000/wscategories"; 
    constructor(private httpObj:HttpClient){};

    getCategories()
    {
      return this.httpObj.get<Category[]>(this.restUrl);
    }
    addCategory(newcategory:Category)
    {
         return this.httpObj.post<Category>(this.restUrl,newcategory);
    }
    deleteCategory(catid:number)
    {
         return this.httpObj.delete(this.restUrl+"/"+catid);
    }
    UpdateCategory(modifiedCategory:Category)
    {
         return this.httpObj.put<Category>(this.restUrl+"/"+modifiedCategory.id,modifiedCategory);
    }

}