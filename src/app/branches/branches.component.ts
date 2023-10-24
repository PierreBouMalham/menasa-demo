import { Component } from '@angular/core';
import { Firestore, query, collection, getDocs } from '@angular/fire/firestore';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.scss'],
})
export class BranchesComponent {
  constructor(private fireStore: Firestore) {}
  branches: any[] = [];

  async ngOnInit() {
    this.branches = await this.getBranches();
  }

  async getBranches() {
    return (
      await getDocs(query(collection(this.fireStore, 'branches')))
    ).docs.map((branch) => branch.data());
  }

  openGoogleMaps(coordinates: string) {
    const [latitude, longitude] = coordinates.split(',').map(parseFloat);
    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(url, '_blank');
  }
}
