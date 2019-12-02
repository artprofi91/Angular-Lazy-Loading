import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import ItemInterface from "../interfaces/item.interface";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  private pageNumber = 1;

  constructor(private http: HttpClient) {}

  fetchItems(): Observable<ItemInterface[]> {
    return this.http.get<ItemInterface[]>(
      `http://localhost:5000/api/items/page/${this.pageNumber}/amount/8`
    );
  }

  paginatePage(): void {
    this.pageNumber++;
  }
}
