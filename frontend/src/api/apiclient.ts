﻿/* tslint:disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v11.12.13.0 (NJsonSchema v9.10.14.0 (Newtonsoft.Json v9.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';

import { Observable } from 'rxjs/Observable';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { Http, Headers, ResponseContentType, Response } from '@angular/http';

export const API_BASE_URL = new InjectionToken('API_BASE_URL');

@Injectable()
export class AttendeesClient {
    private http: Http;
    private baseUrl: string;
    protected jsonParseReviver: (key: string, value: any) => any = undefined;

    constructor(@Inject(Http) http: Http, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "http://localhost:62417";
    }

    getSingle(attendeeId: string): Observable<Attendee> {
        let url_ = this.baseUrl + "/api/attendees/{attendeeId}";
        if (attendeeId === undefined || attendeeId === null)
            throw new Error("The parameter 'attendeeId' must be defined.");
        url_ = url_.replace("{attendeeId}", encodeURIComponent("" + attendeeId)); 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGetSingle(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetSingle(<any>response_);
                } catch (e) {
                    return <Observable<Attendee>><any>Observable.throw(e);
                }
            } else
                return <Observable<Attendee>><any>Observable.throw(response_);
        });
    }

    protected processGetSingle(response: Response): Observable<Attendee> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? Attendee.fromJS(resultData200) : <any>null;
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<Attendee>(<any>null);
    }

    insert(attendee: Attendee): Observable<void> {
        let url_ = this.baseUrl + "/api/attendees";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(attendee);

        let options_ : any = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processInsert(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processInsert(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response_);
        });
    }

    protected processInsert(response: Response): Observable<void> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            return Observable.of<void>(<any>null);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<void>(<any>null);
    }

    update(attendee: Attendee): Observable<void> {
        let url_ = this.baseUrl + "/api/attendees";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(attendee);

        let options_ : any = {
            body: content_,
            method: "put",
            headers: new Headers({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processUpdate(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processUpdate(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response_);
        });
    }

    protected processUpdate(response: Response): Observable<void> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            return Observable.of<void>(<any>null);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<void>(<any>null);
    }

    delete(attendeeId: string): Observable<void> {
        let url_ = this.baseUrl + "/api/attendees";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(attendeeId);

        let options_ : any = {
            body: content_,
            method: "delete",
            headers: new Headers({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processDelete(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processDelete(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response_);
        });
    }

    protected processDelete(response: Response): Observable<void> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            return Observable.of<void>(<any>null);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<void>(<any>null);
    }
}

@Injectable()
export class LunchesClient {
    private http: Http;
    private baseUrl: string;
    protected jsonParseReviver: (key: string, value: any) => any = undefined;

    constructor(@Inject(Http) http: Http, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "http://localhost:62417";
    }

    getAll(): Observable<Lunch[]> {
        let url_ = this.baseUrl + "/api/lunches";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGetAll(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetAll(<any>response_);
                } catch (e) {
                    return <Observable<Lunch[]>><any>Observable.throw(e);
                }
            } else
                return <Observable<Lunch[]>><any>Observable.throw(response_);
        });
    }

    protected processGetAll(response: Response): Observable<Lunch[]> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (resultData200 && resultData200.constructor === Array) {
                result200 = [];
                for (let item of resultData200)
                    result200.push(Lunch.fromJS(item));
            }
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<Lunch[]>(<any>null);
    }

    post(lunch: Lunch): Observable<string> {
        let url_ = this.baseUrl + "/api/lunches";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(lunch);

        let options_ : any = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processPost(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processPost(<any>response_);
                } catch (e) {
                    return <Observable<string>><any>Observable.throw(e);
                }
            } else
                return <Observable<string>><any>Observable.throw(response_);
        });
    }

    protected processPost(response: Response): Observable<string> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 !== undefined ? resultData200 : <any>null;
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<string>(<any>null);
    }

    get(navigationUrl: string): Observable<Lunch> {
        let url_ = this.baseUrl + "/api/lunches/{navigationUrl}";
        if (navigationUrl === undefined || navigationUrl === null)
            throw new Error("The parameter 'navigationUrl' must be defined.");
        url_ = url_.replace("{navigationUrl}", encodeURIComponent("" + navigationUrl)); 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGet(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGet(<any>response_);
                } catch (e) {
                    return <Observable<Lunch>><any>Observable.throw(e);
                }
            } else
                return <Observable<Lunch>><any>Observable.throw(response_);
        });
    }

    protected processGet(response: Response): Observable<Lunch> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? Lunch.fromJS(resultData200) : <any>null;
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<Lunch>(<any>null);
    }
}

export class Attendee implements IAttendee {
    id: string;
    lunchId: string;
    name?: string;
    choice?: string;

    constructor(data?: IAttendee) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.id = data["id"];
            this.lunchId = data["lunchId"];
            this.name = data["name"];
            this.choice = data["choice"];
        }
    }

    static fromJS(data: any): Attendee {
        let result = new Attendee();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["lunchId"] = this.lunchId;
        data["name"] = this.name;
        data["choice"] = this.choice;
        return data; 
    }
}

export interface IAttendee {
    id: string;
    lunchId: string;
    name?: string;
    choice?: string;
}

export class Lunch implements ILunch {
    id: string;
    navigationUrl?: string;
    location?: string;
    menuUrl?: string;
    attendees?: Attendee[];

    constructor(data?: ILunch) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.id = data["id"];
            this.navigationUrl = data["navigationUrl"];
            this.location = data["location"];
            this.menuUrl = data["menuUrl"];
            if (data["attendees"] && data["attendees"].constructor === Array) {
                this.attendees = [];
                for (let item of data["attendees"])
                    this.attendees.push(Attendee.fromJS(item));
            }
        }
    }

    static fromJS(data: any): Lunch {
        let result = new Lunch();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["navigationUrl"] = this.navigationUrl;
        data["location"] = this.location;
        data["menuUrl"] = this.menuUrl;
        if (this.attendees && this.attendees.constructor === Array) {
            data["attendees"] = [];
            for (let item of this.attendees)
                data["attendees"].push(item.toJSON());
        }
        return data; 
    }
}

export interface ILunch {
    id: string;
    navigationUrl?: string;
    location?: string;
    menuUrl?: string;
    attendees?: Attendee[];
}

export class SwaggerException extends Error {
    message: string;
    status: number; 
    response: string; 
    headers: { [key: string]: any; };
    result: any; 

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isSwaggerException = true;

    static isSwaggerException(obj: any): obj is SwaggerException {
        return obj.isSwaggerException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
    if(result !== null && result !== undefined)
        return Observable.throw(result);
    else
        return Observable.throw(new SwaggerException(message, status, response, headers, null));
}

function blobToText(blob: any): Observable<string> {
    return new Observable<string>((observer: any) => {
        if (!blob) {
            observer.next("");
            observer.complete();
        } else {
            let reader = new FileReader(); 
            reader.onload = function() { 
                observer.next(this.result);
                observer.complete();
            }
            reader.readAsText(blob); 
        }
    });
}