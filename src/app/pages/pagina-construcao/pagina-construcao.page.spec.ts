import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaginaConstrucaoPage } from './pagina-construcao.page';

describe('PaginaConstrucaoPage', () => {
  let component: PaginaConstrucaoPage;
  let fixture: ComponentFixture<PaginaConstrucaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaConstrucaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaginaConstrucaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
