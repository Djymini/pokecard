import {Component, computed, inject, signal} from '@angular/core';
import {FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {Auth} from '../../../authentification/services/auth';
import {LoginFormModel} from '../../../authentification/models/login-model';
import {LoginDto} from '../../../authentification/dto/login-dto';
import {ProductFormModel} from '../../models/product-form.model';
import {CardModel} from '../../../../shared/models/card.model';
import {CardStore} from '../../../card/services/card-store';
import {CardFacade} from '../../../card/services/card-facade';
import {Loader} from '../../../../core/loading/components/loader/loader';
import {ProductStore} from '../../services/product-store';
import {ProductModel} from '../../models/productModel';

@Component({
  selector: 'app-product-form',
  imports: [
    ReactiveFormsModule,
    Loader
  ],
  templateUrl: './product-form.html',
  styleUrl: './product-form.scss'
})
export class ProductForm {
  private formBuilder = inject(NonNullableFormBuilder);
  private cardStore = inject(CardStore);
  private productStore = inject(ProductStore);
  private cardFacade = inject(CardFacade);

  cardInfo = computed(()=> this.cardStore.newCard());

  productForm: FormGroup<ProductFormModel> = this.formBuilder.group({
    name: this.formBuilder.control('', Validators.required),
    price: this.formBuilder.control(0, Validators.required),
    stock: this.formBuilder.control(0, Validators.required),
    discount: this.formBuilder.control(0, Validators.required)
  });

  onKeyUp = (event: any) => {
    setTimeout(() => {
      this.cardFacade.loadCardByName(event.target.value);
    }, 500);
  }

  onSubmit() {
    if(this.cardInfo() !== null){
      const newProduct: ProductModel = {
        card: this.cardInfo()!,
        price: this.productForm.getRawValue().price,
        stock: this.productForm.getRawValue().stock,
        discount: this.productForm.getRawValue().discount
      }
      this.productStore.addproduct(newProduct);
    }
  }
}
