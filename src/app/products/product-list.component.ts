import { Component, OnInit, OnDestroy } from '@angular/core';
import { IProduct } from './product';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ProductItemComponent } from '../product-item/product-item.component';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from '../service/product.service';

@Component({
  selector:'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit
{
  productId: number;
  showImage: boolean = false;
  products: IProduct[];

  searchProduct: string;

  dataSource = this.products;
 
  constructor(private dialog: MatDialog, private productService: ProductService){

 }
  
  toggleImage():void{
    this.showImage = !this.showImage;
  }

  Search() {
    if (this.searchProduct !== '') {
      //@ts-ignore
      this.products = this.products.filter(results => {
        return results.productName.toLowerCase().includes(this.searchProduct);
      });
    }
    else if (!this.searchProduct) {
      this.ngOnInit();
    }
  }

  openDialog(productId): void {

    let dialogRef = this.dialog.open(ProductItemComponent, {
      width: '350px',
      height: '350px',
      data: { productId: productId}
    });
  }

  ngOnInit(): void {
    this.productService.getProduct().subscribe(
      productData => {
        this.products = productData;
      }
    )
  }
}
