import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PageConstrucao2Page } from './page-construcao2.page';

describe('PageConstrucao2Page', () => {
  let component: PageConstrucao2Page;
  let fixture: ComponentFixture<PageConstrucao2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageConstrucao2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PageConstrucao2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
