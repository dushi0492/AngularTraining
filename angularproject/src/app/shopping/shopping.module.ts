import { NgModule } from "@angular/core";
import { ProductsComponent } from './products.component';
import { CartitemsComponent } from './cartitems.component';
import { ManageComponent } from './manage.component';
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { CategoriesComponent } from './categories.component';
import { SharedModule } from "../shared/shared.module";

@NgModule({  declarations: [ProductsComponent, CartitemsComponent, ManageComponent, CategoriesComponent],
    imports:[RouterModule.forChild([{path:"manage",component:ManageComponent},{path:"categories",component:CategoriesComponent}])
              ,CommonModule,FormsModule,SharedModule],
    exports: [CartitemsComponent,ProductsComponent]
})
export class ShoppingModule{
    constructor() {
        console.log("I am inside Shopping Module")
        }
}
