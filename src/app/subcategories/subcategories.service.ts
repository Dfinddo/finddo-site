import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Subcategory } from './models/subcategory';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SubcategoriesService {

  private subcategoriesPath = 'subcategories';

  constructor(private http: HttpClient) { }

  getSubcategories(): Observable<Subcategory[]> {
    return this.http.get<Subcategory[]>(`${environment.apiUrl}/${this.subcategoriesPath}`)
      .pipe(
        map(subcategories => subcategories.map((subcat) => new Subcategory(subcat.name, subcat.id, subcat.category)))
      );
  }
}
