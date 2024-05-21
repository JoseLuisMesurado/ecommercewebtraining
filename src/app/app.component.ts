import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./share/components/header/header.component";
import { HeaderlinkComponent } from "./share/components/headerlink/headerlink.component";
import { FooterComponent } from "./share/components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, HeaderComponent, HeaderlinkComponent, FooterComponent]
})
export class AppComponent {
  title = 'A17Ecommerce';
}

export type Fruit = "Orange" | "Apple" | "Banana";
