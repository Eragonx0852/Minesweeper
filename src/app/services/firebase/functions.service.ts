import {Injectable} from '@angular/core';
import {httpsCallable} from "firebase/functions";
import firebase from "firebase/compat";
import {Level} from "../../interfaces/request.interface";
import {Functions} from '@angular/fire/functions';
import HttpsCallableResult = firebase.functions.HttpsCallableResult;

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  constructor(private functions: Functions) {
  }

  getHttpsCallableMethod(methodName: string, body: any): Promise<HttpsCallableResult> {
    const method = httpsCallable(this.functions, methodName);
    return method(body)
  }

  generateGame(size: number, mines: number): Promise<HttpsCallableResult> {
    const method = httpsCallable(this.functions, 'generateGame');
    return method({size, mines});
  }

  log(level: Level, message: string, data?: any): Promise<HttpsCallableResult> {
    const method = httpsCallable(this.functions, 'log');
    return method({level, message, data});
  }


}
