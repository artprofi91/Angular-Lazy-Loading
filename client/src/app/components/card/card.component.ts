import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent implements OnInit {
  @Input() type: string;
  @Input() title: string;
  @Input() img: string;
  @Input() description: string;
  @Input() tags: string[];

  constructor() {}

  ngOnInit() {}
}
