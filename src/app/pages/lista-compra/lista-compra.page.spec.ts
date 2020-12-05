import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaCompraPage } from './lista-compra.page';

describe('ListaCompraPage', () => {
  let component: ListaCompraPage;
  let fixture: ComponentFixture<ListaCompraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCompraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaCompraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
