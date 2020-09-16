import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button'

@NgModule ({
    imports: [MatDialogModule, MatTableModule, MatButtonModule],
    exports: [MatDialogModule, MatTableModule, MatButtonModule]
})

export class MaterialModule {

}
