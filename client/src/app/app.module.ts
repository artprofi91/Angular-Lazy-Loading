import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { GridComponent } from "./components/grid/grid.component";
import { CardComponent } from "./components/card/card.component";
import { CardShimmerComponent } from "./components/card-shimmer/card-shimmer.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    CardComponent,
    CardShimmerComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
