import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchgridComponent } from './searchgrid.component';

describe('SearchgridComponent', () => {
  let component: SearchgridComponent;
  let fixture: ComponentFixture<SearchgridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchgridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
