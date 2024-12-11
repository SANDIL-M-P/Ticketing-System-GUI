import { Component } from '@angular/core';
import { StartStopComponent } from "../start-stop/start-stop.component";
import { InputFormComponent } from "../input-form/input-form.component";
import { HttpClientModule } from '@angular/common/http';
import { TotalOutputComponent } from "../total-output/total-output.component";


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [StartStopComponent, InputFormComponent, HttpClientModule, TotalOutputComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
