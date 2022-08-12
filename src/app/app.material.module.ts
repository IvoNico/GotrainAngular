import { NgModule } from "@angular/core";
import { MatTableModule } from '@angular/material/table';
import { MatSliderModule } from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon'
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { AlumnsTablaComponent } from "./components/alumns-tabla/alumns-tabla.component";



@NgModule({
    exports:[
        MatTableModule,
        MatSliderModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
    ],
    declarations: [
      AlumnsTablaComponent
    ]
})

export class AppMaterialModule{}