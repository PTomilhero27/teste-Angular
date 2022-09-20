import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { Skills } from 'src/app/models/skills';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card: Skills;

  public like: string = '../../../assets/svg/heart.svg'
  public more: boolean =  false;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    
  }

  onLike(card: Skills){
    // TODO: incrementar o like, salvar via rest

    let item  = card

    item.likes = card.likes+1;
    console.log(item)

    this.httpClient.put('/api/skills', card).subscribe((res: any) => {
        console.log(res);
      })


      if(item.likes < 5) {
        this.like = "../../../assets/svg/heart.svg"
      } else if(item.likes >= 5 && item.likes <= 9) {
        this.like = "../../../assets/svg/heart-5.svg"
      } else if(item.likes >= 10 ) {
        this.like = "../../../assets/svg/heart-10.svg"
      }
 
  }

  onShare(){
    // TODO: abrir o link do seu linkedin
    window.location.assign('https://www.linkedin.com/in/pedro-tomilhero-2696981b5/')
  }

  seeMore() {
    this.more = !this.more
  }

}
