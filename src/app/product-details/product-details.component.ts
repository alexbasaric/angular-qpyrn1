import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { products } from "../products";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  product;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // First get the product id from the current router
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get("productId"));

    //Find the product by id
    this.product = products.find(product => product.id === productIdFromRoute);
  }
}
