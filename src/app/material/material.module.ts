import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
    imports: [
        MatCardModule,
        MatToolbarModule,
        MatInputModule,
        MatDividerModule,
        MatGridListModule
    ],
    exports: [
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatDividerModule,
    MatGridListModule
]
})
export class MaterialModule { }
