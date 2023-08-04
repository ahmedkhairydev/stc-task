import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadingMap: Map<string, boolean> = new Map<string, boolean>();

  isLoading = new BehaviorSubject<boolean>(false);

  setLoading(loading: boolean, url: string): void {
    if (loading) {
      this.loadingMap.set(url, loading);
      this.isLoading.next(true);
    } else if (!loading && this.loadingMap.has(url)) {
      this.loadingMap.delete(url);
    }

    if (!this.loadingMap.size) {
      this.isLoading.next(false);
    }
  }
}
