import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NameSearchPipePipe } from '../../pipes/name-search-pipe.pipe';

@NgModule({
  declarations: [ProductsListComponent, NameSearchPipePipe],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [ProductsListComponent, HttpClientModule, NameSearchPipePipe]
})
export class ProductsModule {}
