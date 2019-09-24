import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProductosComponent } from './productos/productos.component';
import { NgModule } from '@angular/core';
import { StockComponent } from './stock/stock.component';
import { ScheduleComponent } from './schedule/schedule.component';


const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch:'full'},
    { path: 'inicio', component: InicioComponent},
    { path: 'stock', component: StockComponent},
    { path: 'productos', component: ProductosComponent},
    { path: 'contacto', component: ContactoComponent },
    { path: 'schedule', component: ScheduleComponent}    
]

@NgModule({
    imports:[
        RouterModule.forRoot(
            routes,{enableTracing:true}
        )
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }