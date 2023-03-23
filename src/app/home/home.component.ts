import { Component } from '@angular/core';
import { Skill } from './home';


@Component({
  selector: 'cv-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  authorName = 'Adelakun Abayomi';

  authorJob = 'Software Engineer';

  moreLess = "read more";
  lessMore = "read less";

  readMore = true;

  skills : Skill = {
    frontEnd : 'HTML, CSS,  JavaScript,  ReactJs',
    backEnd : 'Python, Django',
    myTools:'Git, Vsc , Figma',
    myOthers: 'Good team working skills, Analytical skills,Lab Safety',
  }

  toggle(){
    this.readMore = !this.readMore
    // this.moreLess = this.lessMore,
    // this.lessMore = this.moreLess
  };
}
