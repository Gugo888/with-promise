import { Component } from "@angular/core";
import { BeerAPIService } from "./beer-api.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(private beerService: BeerAPIService) {}

 
}
