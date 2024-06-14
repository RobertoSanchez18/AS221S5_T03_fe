import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { TranslationResponseDto } from '../../models/translationDTO.model';

@Component({
  selector: 'app-translation-list-inactives',
  templateUrl: './translation-list-inactives.component.html',
  styleUrl: './translation-list-inactives.component.css'
})
export class TranslationListInactivesComponent implements OnInit {

  translations: TranslationResponseDto[] = [];

  constructor(private translationService: TranslationService) { }

  ngOnInit(): void {
    this.getInactives();
  }

  getInactives() { 
    this.translationService.getInactive().subscribe(data => { 
      this.translations = data;
      console.log(data)
    })
  }

  restoreTranslation(id: number) { 
    this.translationService.restore(id).subscribe(data => { 
      console.log(data)
      this.getInactives();
    })
  }
}
