import { NgModule } from "@angular/core";
import { MySignInComponent } from "./mysignin.component";
import { ProductService } from "./services/product.service";
import { CartItemService } from "./services/cart.service";
import { CategoryService } from "./services/category.service";
import { FilterPipe } from "./filterdata.pipe";
import {ReactiveFormsModule} from "@angular/forms"
import{CommonModule} from"@angular/common"

//Use exports as we have used MysigninComponent in Login module
//Module import 
@NgModule({
    declarations:[MySignInComponent,FilterPipe],
    exports:[MySignInComponent,FilterPipe],
    providers:[ProductService,CartItemService,CategoryService],
    imports:[ReactiveFormsModule,CommonModule]
})
export class SharedModule
{

}