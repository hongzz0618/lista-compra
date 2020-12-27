import { TestBed } from '@angular/core/testing';

import { ListaCompraService } from '../services/lista-compra.service';

describe('ListaCompraService', () => {
  let service: ListaCompraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaCompraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
