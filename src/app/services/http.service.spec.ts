/* =======================================================
 *
 * Created by anele on 2020/10/08.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { HttpService } from './http.service';
import { TestBed } from '@angular/core/testing';

describe('HttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpService = TestBed.get(HttpService);
    expect(service).toBeTruthy();
  });
});
