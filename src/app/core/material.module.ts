import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatToolbarModule, MatInputModule, MatCardModule, MatProgressSpinnerModule, MatDialogModule, MatTableModule } from '@angular/material';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        MatInputModule,
        MatCardModule ,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatTableModule     
     ],
    exports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatTableModule
    ]    
})
export class CustomMaterialModule {}