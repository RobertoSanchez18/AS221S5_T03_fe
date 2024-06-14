import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { TranslationResponseDto } from '../../models/translationDTO.model';

@Component({
  selector: 'app-translation-list',
  templateUrl: './translation-list.component.html',
  styleUrl: './translation-list.component.css'
})
export class TranslationListComponent implements OnInit {

  translations: TranslationResponseDto[] = [];
  page = 1;
  pageSize = 5;
  pagedTranslations: TranslationResponseDto[] = [];

  constructor(private translationService: TranslationService) { }

  ngOnInit(): void {
    this.getActive();
  }

  getActive() {
    this.translationService.getActive().subscribe((res) => {
      this.translations = res;
      this.refreshPagedTranslations();
    })
  }

  refreshPagedTranslations(): void {
    const start = (this.page - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.pagedTranslations = this.translations.slice(start, end);
  }

  deleteTranslation(id: number) { 
    this.translationService.remove(id).subscribe(data => { 
      console.log(`Translation delete with id: ${id}`)
      this.getActive();
    })
  }

  editTranslation(translation: TranslationResponseDto) {
    console.log('Transalation', translation);
    this.translationService.selectedTranslation.set(translation);
    window.scroll(0, 0);
  }

}
