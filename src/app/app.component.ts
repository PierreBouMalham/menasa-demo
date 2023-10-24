import { ChangeDetectorRef, Component } from '@angular/core';
import { Firestore, query, collection, getDocs } from '@angular/fire/firestore';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'menasa-demo';
  menuList: any = [];
  public mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => any;

  constructor(
    private fireStore: Firestore,
    media: MediaMatcher,
    changeDetectorRef: ChangeDetectorRef
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 992px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  async ngOnInit() {
    console.log('bbb');
    this.menuList = await this.getData();
    console.log('aaaa ', this.menuList);
  }

  async getData() {
    return (await getDocs(query(collection(this.fireStore, 'menu')))).docs.map(
      (menu) => menu.data()
    );
  }
}
