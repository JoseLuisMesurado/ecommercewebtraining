import { Component } from '@angular/core';
import { HeaderComponent } from "../../share/components/header/header.component";
import { HeaderlinkComponent } from "../../share/components/headerlink/headerlink.component";
import { ItemcarouselComponent } from "./components/itemcarousel/itemcarousel.component";
import { FooterComponent } from "../../share/components/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [HeaderComponent, HeaderlinkComponent, ItemcarouselComponent, FooterComponent]
})
export class HomeComponent {

}
