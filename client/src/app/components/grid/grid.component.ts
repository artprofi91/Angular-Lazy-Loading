import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../services/api.service";

import ItemInterface from "../../interfaces/item.interface";

@Component({
  selector: "app-grid",
  templateUrl: "./grid.component.html",
  styleUrls: ["./grid.component.scss"]
})
export class GridComponent implements OnInit {
  cards: ItemInterface[] = [];
  isLoading = false;
  loadedAll = false;
  isFirstLoad = true;
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getCards();
    this.handleScroll();
  }

  getCards() {
    this.isLoading = true;
    this.apiService.fetchItems().subscribe(res => {
      res.length ? this.cards.push(...res) : (this.loadedAll = true);
      this.isLoading = false;
      this.isFirstLoad = false;
    });
  }

  handleScroll() {
    window.onscroll = () => this.detectBottom();
  }

  detectBottom() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      if (!this.loadedAll) {
        this.apiService.paginatePage();
        this.getCards();
      }
    }
  }
}
