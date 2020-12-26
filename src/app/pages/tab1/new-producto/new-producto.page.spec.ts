import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewProductoPage } from './new-producto.page';

describe('NewProductoPage', () => {
  let component: NewProductoPage;
  let fixture: ComponentFixture<NewProductoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProductoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewProductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
