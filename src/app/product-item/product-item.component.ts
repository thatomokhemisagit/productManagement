import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductListComponent } from '../products/product-list.component';
import { IProduct } from '../products/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  product: IProduct;

  constructor(@Inject(MAT_DIALOG_DATA) public data: IProduct, public dialogRef: MatDialogRef<ProductItemComponent>) { }

  ngOnInit(): void { }
}
