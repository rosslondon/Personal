import {Component} from 'angular2/core'
import {AuthorService} from './author.service'
import {AutoGrowDirective} from './auto-grow.directive'

@Component({
    selector: 'authors',
    template: `
        <h2>Authors</h2>
        {{ title }}
        <input type="text" autoGrow />
        <ul>
            <li *ngFor="#author of authors">
            {{ author }}
            </li>
        </ul>
        `,
     providers: [AuthorService],
     directives: [AutoGrowDirective]
})
export class AuthorsComponent {
    title = "The title of authors page";
    
    constructor(authorService: AuthorService) {
        this.authors = authorService.getAuthors();
    }
}