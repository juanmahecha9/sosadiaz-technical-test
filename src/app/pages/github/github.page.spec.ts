import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GithubPage } from './github.page';

describe('GithubPage', () => {
  let component: GithubPage;
  let fixture: ComponentFixture<GithubPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
