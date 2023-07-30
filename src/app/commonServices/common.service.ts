import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NetworkService } from './network.service';
import { FbApiConstants } from '../utils/fb-api-constants';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient,
    private networkService: NetworkService,
    private fbapiConstants: FbApiConstants) { }

  signup(params: any): Observable<any> {
console.log("pae",params)
    return this.networkService.postRequest(params,this.fbapiConstants.ApiUrls.register)
  }
}
