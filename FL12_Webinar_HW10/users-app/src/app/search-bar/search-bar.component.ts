import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Output()
  
  handleInputChange($event) {    
    const value = $event.target.value;
  }

}
