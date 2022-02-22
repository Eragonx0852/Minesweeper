import {Injectable} from '@angular/core';
import {getFunctions, httpsCallable} from "firebase/functions";
import firebase from "firebase/compat";
import HttpsCallableResult = firebase.functions.HttpsCallableResult;
import {Level} from "../interfaces/request.interface";

@Injectable({
  providedIn: 'root'
})
export class CloudFunctionsService {

  constructor() {
  }

  getHttpsCallableMethod(methodName: string, body: any): Promise<HttpsCallableResult> {
    const method = httpsCallable(getFunctions(), methodName);
    return method(body)
  }

  generateGame(size: number, mines: number): Promise<HttpsCallableResult> {
    const method = httpsCallable(getFunctions(), 'generateGame');
    return method({size, mines});
  }

  log(level: Level, message: string, data?: any): Promise<HttpsCallableResult> {
    const method = httpsCallable(getFunctions(), 'log');
    return method({level, message, data});
  }


}

