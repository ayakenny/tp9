import { AfterContentInit, Component, ContentChild, ElementRef} from '@angular/core';
import { faAddressCard, faShield, faEnvelope, faFile, faPen} from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-input-decorator-component',
  templateUrl: './input-decorator-component.component.html',
  styleUrls: ['./input-decorator-component.component.scss']
})

export class InputDecoratorComponentComponent implements AfterContentInit {
  @ContentChild('input')
  input!: ElementRef;
  
  currentIcon:any;
  
  constructor(){}
  
  ngAfterContentInit(): void {
    console.log(this.input.nativeElement.type);
    
    if(this.input.nativeElement.type == 'text')
      this.currentIcon = faAddressCard;
    else if(this.input.nativeElement.type == 'password')
      this.currentIcon = faShield;
    else if(this.input.nativeElement.type == 'email')
      this.currentIcon = faEnvelope;
    else if(this.input.nativeElement.type == 'file')
      this.currentIcon = faFile;
    else if(this.input.nativeElement.type == "textarea")
      this.currentIcon = faPen;
    
  }
  
  getIcon(){
    return this.currentIcon;
  }
}