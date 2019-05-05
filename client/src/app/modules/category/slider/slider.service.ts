import { Injectable } from '@angular/core';
import { CategoryModel } from "../services/data.service";

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  category: CategoryModel;
  constructor(
  ) { }

}
