(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common/http'),exports, require('rxjs'), require('rxjs/operators'), require('@angular/core'), require('@angular/common/http')) :
	typeof define === 'function' && define.amd ? define(['@angular/core','@angular/common/http','exports', 'rxjs', 'rxjs/operators', '@angular/core', '@angular/common/http'], factory) :
	(factory(global.ng.core,global.ng.common.http,(global.ng = global.ng || {}, global.ng.inMemoryWebApi = {}),global.rxjs,global.rxjs.operators,global.ng.core,global.ng.common.http));
}(this, (function (ɵngcc0,ɵngcc1,exports,rxjs,operators,core,http) { 'use strict';

var STATUS = {
    CONTINUE: 100,
    SWITCHING_PROTOCOLS: 101,
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NON_AUTHORITATIVE_INFORMATION: 203,
    NO_CONTENT: 204,
    RESET_CONTENT: 205,
    PARTIAL_CONTENT: 206,
    MULTIPLE_CHOICES: 300,
    MOVED_PERMANTENTLY: 301,
    FOUND: 302,
    SEE_OTHER: 303,
    NOT_MODIFIED: 304,
    USE_PROXY: 305,
    TEMPORARY_REDIRECT: 307,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    PAYMENT_REQUIRED: 402,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    NOT_ACCEPTABLE: 406,
    PROXY_AUTHENTICATION_REQUIRED: 407,
    REQUEST_TIMEOUT: 408,
    CONFLICT: 409,
    GONE: 410,
    LENGTH_REQUIRED: 411,
    PRECONDITION_FAILED: 412,
    PAYLOAD_TO_LARGE: 413,
    URI_TOO_LONG: 414,
    UNSUPPORTED_MEDIA_TYPE: 415,
    RANGE_NOT_SATISFIABLE: 416,
    EXPECTATION_FAILED: 417,
    IM_A_TEAPOT: 418,
    UPGRADE_REQUIRED: 426,
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504,
    HTTP_VERSION_NOT_SUPPORTED: 505,
    PROCESSING: 102,
    MULTI_STATUS: 207,
    IM_USED: 226,
    PERMANENT_REDIRECT: 308,
    UNPROCESSABLE_ENTRY: 422,
    LOCKED: 423,
    FAILED_DEPENDENCY: 424,
    PRECONDITION_REQUIRED: 428,
    TOO_MANY_REQUESTS: 429,
    REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
    UNAVAILABLE_FOR_LEGAL_REASONS: 451,
    VARIANT_ALSO_NEGOTIATES: 506,
    INSUFFICIENT_STORAGE: 507,
    NETWORK_AUTHENTICATION_REQUIRED: 511
};
/*tslint:disable:quotemark max-line-length one-line */
var STATUS_CODE_INFO = {
    '100': {
        'code': 100,
        'text': 'Continue',
        'description': '\"The initial part of a request has been received and has not yet been rejected by the server.\"',
        'spec_title': 'RFC7231#6.2.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.2.1'
    },
    '101': {
        'code': 101,
        'text': 'Switching Protocols',
        'description': '\"The server understands and is willing to comply with the client\'s request, via the Upgrade header field, for a change in the application protocol being used on this connection.\"',
        'spec_title': 'RFC7231#6.2.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.2.2'
    },
    '200': {
        'code': 200,
        'text': 'OK',
        'description': '\"The request has succeeded.\"',
        'spec_title': 'RFC7231#6.3.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.1'
    },
    '201': {
        'code': 201,
        'text': 'Created',
        'description': '\"The request has been fulfilled and has resulted in one or more new resources being created.\"',
        'spec_title': 'RFC7231#6.3.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.2'
    },
    '202': {
        'code': 202,
        'text': 'Accepted',
        'description': '\"The request has been accepted for processing, but the processing has not been completed.\"',
        'spec_title': 'RFC7231#6.3.3',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.3'
    },
    '203': {
        'code': 203,
        'text': 'Non-Authoritative Information',
        'description': '\"The request was successful but the enclosed payload has been modified from that of the origin server\'s 200 (OK) response by a transforming proxy.\"',
        'spec_title': 'RFC7231#6.3.4',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.4'
    },
    '204': {
        'code': 204,
        'text': 'No Content',
        'description': '\"The server has successfully fulfilled the request and that there is no additional content to send in the response payload body.\"',
        'spec_title': 'RFC7231#6.3.5',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.5'
    },
    '205': {
        'code': 205,
        'text': 'Reset Content',
        'description': '\"The server has fulfilled the request and desires that the user agent reset the \"document view\", which caused the request to be sent, to its original state as received from the origin server.\"',
        'spec_title': 'RFC7231#6.3.6',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.6'
    },
    '206': {
        'code': 206,
        'text': 'Partial Content',
        'description': '\"The server is successfully fulfilling a range request for the target resource by transferring one or more parts of the selected representation that correspond to the satisfiable ranges found in the requests\'s Range header field.\"',
        'spec_title': 'RFC7233#4.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7233#section-4.1'
    },
    '300': {
        'code': 300,
        'text': 'Multiple Choices',
        'description': '\"The target resource has more than one representation, each with its own more specific identifier, and information about the alternatives is being provided so that the user (or user agent) can select a preferred representation by redirecting its request to one or more of those identifiers.\"',
        'spec_title': 'RFC7231#6.4.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.4.1'
    },
    '301': {
        'code': 301,
        'text': 'Moved Permanently',
        'description': '\"The target resource has been assigned a new permanent URI and any future references to this resource ought to use one of the enclosed URIs.\"',
        'spec_title': 'RFC7231#6.4.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.4.2'
    },
    '302': {
        'code': 302,
        'text': 'Found',
        'description': '\"The target resource resides temporarily under a different URI.\"',
        'spec_title': 'RFC7231#6.4.3',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.4.3'
    },
    '303': {
        'code': 303,
        'text': 'See Other',
        'description': '\"The server is redirecting the user agent to a different resource, as indicated by a URI in the Location header field, that is intended to provide an indirect response to the original request.\"',
        'spec_title': 'RFC7231#6.4.4',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.4.4'
    },
    '304': {
        'code': 304,
        'text': 'Not Modified',
        'description': '\"A conditional GET request has been received and would have resulted in a 200 (OK) response if it were not for the fact that the condition has evaluated to false.\"',
        'spec_title': 'RFC7232#4.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7232#section-4.1'
    },
    '305': {
        'code': 305,
        'text': 'Use Proxy',
        'description': '*deprecated*',
        'spec_title': 'RFC7231#6.4.5',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.4.5'
    },
    '307': {
        'code': 307,
        'text': 'Temporary Redirect',
        'description': '\"The target resource resides temporarily under a different URI and the user agent MUST NOT change the request method if it performs an automatic redirection to that URI.\"',
        'spec_title': 'RFC7231#6.4.7',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.4.7'
    },
    '400': {
        'code': 400,
        'text': 'Bad Request',
        'description': '\"The server cannot or will not process the request because the received syntax is invalid, nonsensical, or exceeds some limitation on what the server is willing to process.\"',
        'spec_title': 'RFC7231#6.5.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.1'
    },
    '401': {
        'code': 401,
        'text': 'Unauthorized',
        'description': '\"The request has not been applied because it lacks valid authentication credentials for the target resource.\"',
        'spec_title': 'RFC7235#6.3.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7235#section-3.1'
    },
    '402': {
        'code': 402,
        'text': 'Payment Required',
        'description': '*reserved*',
        'spec_title': 'RFC7231#6.5.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.2'
    },
    '403': {
        'code': 403,
        'text': 'Forbidden',
        'description': '\"The server understood the request but refuses to authorize it.\"',
        'spec_title': 'RFC7231#6.5.3',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.3'
    },
    '404': {
        'code': 404,
        'text': 'Not Found',
        'description': '\"The origin server did not find a current representation for the target resource or is not willing to disclose that one exists.\"',
        'spec_title': 'RFC7231#6.5.4',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.4'
    },
    '405': {
        'code': 405,
        'text': 'Method Not Allowed',
        'description': '\"The method specified in the request-line is known by the origin server but not supported by the target resource.\"',
        'spec_title': 'RFC7231#6.5.5',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.5'
    },
    '406': {
        'code': 406,
        'text': 'Not Acceptable',
        'description': '\"The target resource does not have a current representation that would be acceptable to the user agent, according to the proactive negotiation header fields received in the request, and the server is unwilling to supply a default representation.\"',
        'spec_title': 'RFC7231#6.5.6',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.6'
    },
    '407': {
        'code': 407,
        'text': 'Proxy Authentication Required',
        'description': '\"The client needs to authenticate itself in order to use a proxy.\"',
        'spec_title': 'RFC7231#6.3.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.2'
    },
    '408': {
        'code': 408,
        'text': 'Request Timeout',
        'description': '\"The server did not receive a complete request message within the time that it was prepared to wait.\"',
        'spec_title': 'RFC7231#6.5.7',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.7'
    },
    '409': {
        'code': 409,
        'text': 'Conflict',
        'description': '\"The request could not be completed due to a conflict with the current state of the resource.\"',
        'spec_title': 'RFC7231#6.5.8',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.8'
    },
    '410': {
        'code': 410,
        'text': 'Gone',
        'description': '\"Access to the target resource is no longer available at the origin server and that this condition is likely to be permanent.\"',
        'spec_title': 'RFC7231#6.5.9',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.9'
    },
    '411': {
        'code': 411,
        'text': 'Length Required',
        'description': '\"The server refuses to accept the request without a defined Content-Length.\"',
        'spec_title': 'RFC7231#6.5.10',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.10'
    },
    '412': {
        'code': 412,
        'text': 'Precondition Failed',
        'description': '\"One or more preconditions given in the request header fields evaluated to false when tested on the server.\"',
        'spec_title': 'RFC7232#4.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7232#section-4.2'
    },
    '413': {
        'code': 413,
        'text': 'Payload Too Large',
        'description': '\"The server is refusing to process a request because the request payload is larger than the server is willing or able to process.\"',
        'spec_title': 'RFC7231#6.5.11',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.11'
    },
    '414': {
        'code': 414,
        'text': 'URI Too Long',
        'description': '\"The server is refusing to service the request because the request-target is longer than the server is willing to interpret.\"',
        'spec_title': 'RFC7231#6.5.12',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.12'
    },
    '415': {
        'code': 415,
        'text': 'Unsupported Media Type',
        'description': '\"The origin server is refusing to service the request because the payload is in a format not supported by the target resource for this method.\"',
        'spec_title': 'RFC7231#6.5.13',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.13'
    },
    '416': {
        'code': 416,
        'text': 'Range Not Satisfiable',
        'description': '\"None of the ranges in the request\'s Range header field overlap the current extent of the selected resource or that the set of ranges requested has been rejected due to invalid ranges or an excessive request of small or overlapping ranges.\"',
        'spec_title': 'RFC7233#4.4',
        'spec_href': 'http://tools.ietf.org/html/rfc7233#section-4.4'
    },
    '417': {
        'code': 417,
        'text': 'Expectation Failed',
        'description': '\"The expectation given in the request\'s Expect header field could not be met by at least one of the inbound servers.\"',
        'spec_title': 'RFC7231#6.5.14',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.14'
    },
    '418': {
        'code': 418,
        'text': 'I\'m a teapot',
        'description': '\"1988 April Fools Joke. Returned by tea pots requested to brew coffee.\"',
        'spec_title': 'RFC 2324',
        'spec_href': 'https://tools.ietf.org/html/rfc2324'
    },
    '426': {
        'code': 426,
        'text': 'Upgrade Required',
        'description': '\"The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.\"',
        'spec_title': 'RFC7231#6.5.15',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.15'
    },
    '500': {
        'code': 500,
        'text': 'Internal Server Error',
        'description': '\"The server encountered an unexpected condition that prevented it from fulfilling the request.\"',
        'spec_title': 'RFC7231#6.6.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.6.1'
    },
    '501': {
        'code': 501,
        'text': 'Not Implemented',
        'description': '\"The server does not support the functionality required to fulfill the request.\"',
        'spec_title': 'RFC7231#6.6.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.6.2'
    },
    '502': {
        'code': 502,
        'text': 'Bad Gateway',
        'description': '\"The server, while acting as a gateway or proxy, received an invalid response from an inbound server it accessed while attempting to fulfill the request.\"',
        'spec_title': 'RFC7231#6.6.3',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.6.3'
    },
    '503': {
        'code': 503,
        'text': 'Service Unavailable',
        'description': '\"The server is currently unable to handle the request due to a temporary overload or scheduled maintenance, which will likely be alleviated after some delay.\"',
        'spec_title': 'RFC7231#6.6.4',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.6.4'
    },
    '504': {
        'code': 504,
        'text': 'Gateway Time-out',
        'description': '\"The server, while acting as a gateway or proxy, did not receive a timely response from an upstream server it needed to access in order to complete the request.\"',
        'spec_title': 'RFC7231#6.6.5',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.6.5'
    },
    '505': {
        'code': 505,
        'text': 'HTTP Version Not Supported',
        'description': '\"The server does not support, or refuses to support, the protocol version that was used in the request message.\"',
        'spec_title': 'RFC7231#6.6.6',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.6.6'
    },
    '102': {
        'code': 102,
        'text': 'Processing',
        'description': '\"An interim response to inform the client that the server has accepted the complete request, but has not yet completed it.\"',
        'spec_title': 'RFC5218#10.1',
        'spec_href': 'http://tools.ietf.org/html/rfc2518#section-10.1'
    },
    '207': {
        'code': 207,
        'text': 'Multi-Status',
        'description': '\"Status for multiple independent operations.\"',
        'spec_title': 'RFC5218#10.2',
        'spec_href': 'http://tools.ietf.org/html/rfc2518#section-10.2'
    },
    '226': {
        'code': 226,
        'text': 'IM Used',
        'description': '\"The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.\"',
        'spec_title': 'RFC3229#10.4.1',
        'spec_href': 'http://tools.ietf.org/html/rfc3229#section-10.4.1'
    },
    '308': {
        'code': 308,
        'text': 'Permanent Redirect',
        'description': '\"The target resource has been assigned a new permanent URI and any future references to this resource SHOULD use one of the returned URIs. [...] This status code is similar to 301 Moved Permanently (Section 7.3.2 of rfc7231), except that it does not allow rewriting the request method from POST to GET.\"',
        'spec_title': 'RFC7238',
        'spec_href': 'http://tools.ietf.org/html/rfc7238'
    },
    '422': {
        'code': 422,
        'text': 'Unprocessable Entity',
        'description': '\"The server understands the content type of the request entity (hence a 415(Unsupported Media Type) status code is inappropriate), and the syntax of the request entity is correct (thus a 400 (Bad Request) status code is inappropriate) but was unable to process the contained instructions.\"',
        'spec_title': 'RFC5218#10.3',
        'spec_href': 'http://tools.ietf.org/html/rfc2518#section-10.3'
    },
    '423': {
        'code': 423,
        'text': 'Locked',
        'description': '\"The source or destination resource of a method is locked.\"',
        'spec_title': 'RFC5218#10.4',
        'spec_href': 'http://tools.ietf.org/html/rfc2518#section-10.4'
    },
    '424': {
        'code': 424,
        'text': 'Failed Dependency',
        'description': '\"The method could not be performed on the resource because the requested action depended on another action and that action failed.\"',
        'spec_title': 'RFC5218#10.5',
        'spec_href': 'http://tools.ietf.org/html/rfc2518#section-10.5'
    },
    '428': {
        'code': 428,
        'text': 'Precondition Required',
        'description': '\"The origin server requires the request to be conditional.\"',
        'spec_title': 'RFC6585#3',
        'spec_href': 'http://tools.ietf.org/html/rfc6585#section-3'
    },
    '429': {
        'code': 429,
        'text': 'Too Many Requests',
        'description': '\"The user has sent too many requests in a given amount of time (\"rate limiting\").\"',
        'spec_title': 'RFC6585#4',
        'spec_href': 'http://tools.ietf.org/html/rfc6585#section-4'
    },
    '431': {
        'code': 431,
        'text': 'Request Header Fields Too Large',
        'description': '\"The server is unwilling to process the request because its header fields are too large.\"',
        'spec_title': 'RFC6585#5',
        'spec_href': 'http://tools.ietf.org/html/rfc6585#section-5'
    },
    '451': {
        'code': 451,
        'text': 'Unavailable For Legal Reasons',
        'description': '\"The server is denying access to the resource in response to a legal demand.\"',
        'spec_title': 'draft-ietf-httpbis-legally-restricted-status',
        'spec_href': 'http://tools.ietf.org/html/draft-ietf-httpbis-legally-restricted-status'
    },
    '506': {
        'code': 506,
        'text': 'Variant Also Negotiates',
        'description': '\"The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.\"',
        'spec_title': 'RFC2295#8.1',
        'spec_href': 'http://tools.ietf.org/html/rfc2295#section-8.1'
    },
    '507': {
        'code': 507,
        'text': 'Insufficient Storage',
        'description': '\The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.\"',
        'spec_title': 'RFC5218#10.6',
        'spec_href': 'http://tools.ietf.org/html/rfc2518#section-10.6'
    },
    '511': {
        'code': 511,
        'text': 'Network Authentication Required',
        'description': '\"The client needs to authenticate to gain network access.\"',
        'spec_title': 'RFC6585#6',
        'spec_href': 'http://tools.ietf.org/html/rfc6585#section-6'
    }
};
/**
 * get the status text from StatusCode
 */
function getStatusText(status) {
    return STATUS_CODE_INFO[status].text || 'Unknown Status';
}
/**
 * Returns true if the the Http Status Code is 200-299 (success)
 */
function isSuccess(status) { return status >= 200 && status < 300; }

// Replaces use of RxJS delay. See v0.5.4.
/** adds specified delay (in ms) to both next and error channels of the response observable */
function delayResponse(response$, delayMs) {
    return new rxjs.Observable(function (observer) {
        var completePending = false;
        var nextPending = false;
        var subscription = response$.subscribe(function (value) {
            nextPending = true;
            setTimeout(function () {
                observer.next(value);
                if (completePending) {
                    observer.complete();
                }
            }, delayMs);
        }, function (error) { return setTimeout(function () { return observer.error(error); }, delayMs); }, function () {
            completePending = true;
            if (!nextPending) {
                observer.complete();
            }
        });
        return function () {
            return subscription.unsubscribe();
        };
    });
}

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
* Interface for a class that creates an in-memory database
*
* Its `createDb` method creates a hash of named collections that represents the database
*
* For maximum flexibility, the service may define HTTP method overrides.
* Such methods must match the spelling of an HTTP method in lower case (e.g, "get").
* If a request has a matching method, it will be called as in
* `get(info: requestInfo, db: {})` where `db` is the database object described above.
*/
var InMemoryDbService = /** @class */ (function () {
    function InMemoryDbService() {
    }
    return InMemoryDbService;
}());
/**
* Interface for InMemoryBackend configuration options
*/
var InMemoryBackendConfigArgs = /** @class */ (function () {
    function InMemoryBackendConfigArgs() {
    }
    return InMemoryBackendConfigArgs;
}());
/////////////////////////////////
/**
*  InMemoryBackendService configuration options
*  Usage:
*    InMemoryWebApiModule.forRoot(InMemHeroService, {delay: 600})
*
*  or if providing separately:
*    provide(InMemoryBackendConfig, {useValue: {delay: 600}}),
*/
var InMemoryBackendConfig = /** @class */ (function () {
    function InMemoryBackendConfig(config) {
        if (config === void 0) { config = {}; }
        Object.assign(this, {
            // default config:
            caseSensitiveSearch: false,
            dataEncapsulation: false,
            delay: 500,
            delete404: false,
            passThruUnknownUrl: false,
            post204: true,
            post409: false,
            put204: true,
            put404: false,
            apiBase: undefined,
            host: undefined,
            rootPath: undefined // default value is actually set in InMemoryBackendService ctor
        }, config);
    }
    InMemoryBackendConfig = __decorate([ __metadata("design:paramtypes", [InMemoryBackendConfigArgs])
    ], InMemoryBackendConfig);
InMemoryBackendConfig.ɵfac = function InMemoryBackendConfig_Factory(t) { return new (t || InMemoryBackendConfig)(ɵngcc0.ɵɵinject(InMemoryBackendConfigArgs)); };
InMemoryBackendConfig.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: InMemoryBackendConfig, factory: function (t) { return InMemoryBackendConfig.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(InMemoryBackendConfig, [{
        type: core.Injectable
    }], function () { return [{ type: InMemoryBackendConfigArgs }]; }, null); })();
    return InMemoryBackendConfig;
}());
/** Return information (UriInfo) about a URI  */
function parseUri(str) {
    // Adapted from parseuri package - http://blog.stevenlevithan.com/archives/parseuri
    // tslint:disable-next-line:max-line-length
    var URL_REGEX = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
    var m = URL_REGEX.exec(str);
    var uri = {
        source: '',
        protocol: '',
        authority: '',
        userInfo: '',
        user: '',
        password: '',
        host: '',
        port: '',
        relative: '',
        path: '',
        directory: '',
        file: '',
        query: '',
        anchor: ''
    };
    var keys = Object.keys(uri);
    var i = keys.length;
    while (i--) {
        uri[keys[i]] = m[i] || '';
    }
    return uri;
}
function removeTrailingSlash(path) {
    return path.replace(/\/$/, '');
}

/**
 * Base class for in-memory web api back-ends
 * Simulate the behavior of a RESTy web api
 * backed by the simple in-memory data store provided by the injected `InMemoryDbService` service.
 * Conforms mostly to behavior described here:
 * http://www.restapitutorial.com/lessons/httpmethods.html
 */
var BackendService = /** @class */ (function () {
    function BackendService(inMemDbService, config) {
        if (config === void 0) { config = {}; }
        this.inMemDbService = inMemDbService;
        this.config = new InMemoryBackendConfig();
        this.requestInfoUtils = this.getRequestInfoUtils();
        var loc = this.getLocation('/');
        this.config.host = loc.host; // default to app web server host
        this.config.rootPath = loc.path; // default to path when app is served (e.g.'/')
        Object.assign(this.config, config);
    }
    Object.defineProperty(BackendService.prototype, "dbReady", {
        ////  protected /////
        get: function () {
            if (!this.dbReadySubject) {
                // first time the service is called.
                this.dbReadySubject = new rxjs.BehaviorSubject(false);
                this.resetDb();
            }
            return this.dbReadySubject.asObservable().pipe(operators.first(function (r) { return r; }));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Process Request and return an Observable of Http Response object
     * in the manner of a RESTy web api.
     *
     * Expect URI pattern in the form :base/:collectionName/:id?
     * Examples:
     *   // for store with a 'customers' collection
     *   GET api/customers          // all customers
     *   GET api/customers/42       // the character with id=42
     *   GET api/customers?name=^j  // 'j' is a regex; returns customers whose name starts with 'j' or 'J'
     *   GET api/customers.json/42  // ignores the ".json"
     *
     * Also accepts direct commands to the service in which the last segment of the apiBase is the word "commands"
     * Examples:
     *     POST commands/resetDb,
     *     GET/POST commands/config - get or (re)set the config
     *
     *   HTTP overrides:
     *     If the injected inMemDbService defines an HTTP method (lowercase)
     *     The request is forwarded to that method as in
     *     `inMemDbService.get(requestInfo)`
     *     which must return either an Observable of the response type
     *     for this http library or null|undefined (which means "keep processing").
     */
    BackendService.prototype.handleRequest = function (req) {
        var _this = this;
        //  handle the request when there is an in-memory database
        return this.dbReady.pipe(operators.concatMap(function () { return _this.handleRequest_(req); }));
    };
    BackendService.prototype.handleRequest_ = function (req) {
        var _this = this;
        var url = req.urlWithParams ? req.urlWithParams : req.url;
        // Try override parser
        // If no override parser or it returns nothing, use default parser
        var parser = this.bind('parseRequestUrl');
        var parsed = (parser && parser(url, this.requestInfoUtils)) ||
            this.parseRequestUrl(url);
        var collectionName = parsed.collectionName;
        var collection = this.db[collectionName];
        var reqInfo = {
            req: req,
            apiBase: parsed.apiBase,
            collection: collection,
            collectionName: collectionName,
            headers: this.createHeaders({ 'Content-Type': 'application/json' }),
            id: this.parseId(collection, collectionName, parsed.id),
            method: this.getRequestMethod(req),
            query: parsed.query,
            resourceUrl: parsed.resourceUrl,
            url: url,
            utils: this.requestInfoUtils
        };
        var resOptions;
        if (/commands\/?$/i.test(reqInfo.apiBase)) {
            return this.commands(reqInfo);
        }
        var methodInterceptor = this.bind(reqInfo.method);
        if (methodInterceptor) {
            // InMemoryDbService intercepts this HTTP method.
            // if interceptor produced a response, return it.
            // else InMemoryDbService chose not to intercept; continue processing.
            var interceptorResponse = methodInterceptor(reqInfo);
            if (interceptorResponse) {
                return interceptorResponse;
            }
            
        }
        if (this.db[collectionName]) {
            // request is for a known collection of the InMemoryDbService
            return this.createResponse$(function () { return _this.collectionHandler(reqInfo); });
        }
        if (this.config.passThruUnknownUrl) {
            // unknown collection; pass request thru to a "real" backend.
            return this.getPassThruBackend().handle(req);
        }
        // 404 - can't handle this request
        resOptions = this.createErrorResponseOptions(url, STATUS.NOT_FOUND, "Collection '" + collectionName + "' not found");
        return this.createResponse$(function () { return resOptions; });
    };
    /**
     * Add configured delay to response observable unless delay === 0
     */
    BackendService.prototype.addDelay = function (response) {
        var d = this.config.delay;
        return d === 0 ? response : delayResponse(response, d || 500);
    };
    /**
     * Apply query/search parameters as a filter over the collection
     * This impl only supports RegExp queries on string properties of the collection
     * ANDs the conditions together
     */
    BackendService.prototype.applyQuery = function (collection, query) {
        // extract filtering conditions - {propertyName, RegExps) - from query/search parameters
        var conditions = [];
        var caseSensitive = this.config.caseSensitiveSearch ? undefined : 'i';
        query.forEach(function (value, name) {
            value.forEach(function (v) { return conditions.push({ name: name, rx: new RegExp(decodeURI(v), caseSensitive) }); });
        });
        var len = conditions.length;
        if (!len) {
            return collection;
        }
        // AND the RegExp conditions
        return collection.filter(function (row) {
            var ok = true;
            var i = len;
            while (ok && i) {
                i -= 1;
                var cond = conditions[i];
                ok = cond.rx.test(row[cond.name]);
            }
            return ok;
        });
    };
    /**
     * Get a method from the `InMemoryDbService` (if it exists), bound to that service
     */
    BackendService.prototype.bind = function (methodName) {
        var fn = this.inMemDbService[methodName];
        return fn ? fn.bind(this.inMemDbService) : undefined;
    };
    BackendService.prototype.bodify = function (data) {
        return this.config.dataEncapsulation ? { data: data } : data;
    };
    BackendService.prototype.clone = function (data) {
        return JSON.parse(JSON.stringify(data));
    };
    BackendService.prototype.collectionHandler = function (reqInfo) {
        // const req = reqInfo.req;
        var resOptions;
        switch (reqInfo.method) {
            case 'get':
                resOptions = this.get(reqInfo);
                break;
            case 'post':
                resOptions = this.post(reqInfo);
                break;
            case 'put':
                resOptions = this.put(reqInfo);
                break;
            case 'delete':
                resOptions = this.delete(reqInfo);
                break;
            default:
                resOptions = this.createErrorResponseOptions(reqInfo.url, STATUS.METHOD_NOT_ALLOWED, 'Method not allowed');
                break;
        }
        // If `inMemDbService.responseInterceptor` exists, let it morph the response options
        var interceptor = this.bind('responseInterceptor');
        return interceptor ? interceptor(resOptions, reqInfo) : resOptions;
    };
    /**
     * Commands reconfigure the in-memory web api service or extract information from it.
     * Commands ignore the latency delay and respond ASAP.
     *
     * When the last segment of the `apiBase` path is "commands",
     * the `collectionName` is the command.
     *
     * Example URLs:
     *   commands/resetdb (POST) // Reset the "database" to its original state
     *   commands/config (GET)   // Return this service's config object
     *   commands/config (POST)  // Update the config (e.g. the delay)
     *
     * Usage:
     *   http.post('commands/resetdb', undefined);
     *   http.get('commands/config');
     *   http.post('commands/config', '{"delay":1000}');
     */
    BackendService.prototype.commands = function (reqInfo) {
        var _this = this;
        var command = reqInfo.collectionName.toLowerCase();
        var method = reqInfo.method;
        var resOptions = {
            url: reqInfo.url
        };
        switch (command) {
            case 'resetdb':
                resOptions.status = STATUS.NO_CONTENT;
                return this.resetDb(reqInfo).pipe(operators.concatMap(function () { return _this.createResponse$(function () { return resOptions; }, false /* no latency delay */); }));
            case 'config':
                if (method === 'get') {
                    resOptions.status = STATUS.OK;
                    resOptions.body = this.clone(this.config);
                    // any other HTTP method is assumed to be a config update
                }
                else {
                    var body = this.getJsonBody(reqInfo.req);
                    Object.assign(this.config, body);
                    this.passThruBackend = undefined; // re-create when needed
                    resOptions.status = STATUS.NO_CONTENT;
                }
                break;
            default:
                resOptions = this.createErrorResponseOptions(reqInfo.url, STATUS.INTERNAL_SERVER_ERROR, "Unknown command \"" + command + "\"");
        }
        return this.createResponse$(function () { return resOptions; }, false /* no latency delay */);
    };
    BackendService.prototype.createErrorResponseOptions = function (url, status, message) {
        return {
            body: { error: "" + message },
            url: url,
            headers: this.createHeaders({ 'Content-Type': 'application/json' }),
            status: status
        };
    };
    /**
     * Create a cold response Observable from a factory for ResponseOptions
     * @param resOptionsFactory - creates ResponseOptions when observable is subscribed
     * @param withDelay - if true (default), add simulated latency delay from configuration
     */
    BackendService.prototype.createResponse$ = function (resOptionsFactory, withDelay) {
        if (withDelay === void 0) { withDelay = true; }
        var resOptions$ = this.createResponseOptions$(resOptionsFactory);
        var resp$ = this.createResponse$fromResponseOptions$(resOptions$);
        return withDelay ? this.addDelay(resp$) : resp$;
    };
    /**
     * Create a cold Observable of ResponseOptions.
     * @param resOptionsFactory - creates ResponseOptions when observable is subscribed
     */
    BackendService.prototype.createResponseOptions$ = function (resOptionsFactory) {
        var _this = this;
        return new rxjs.Observable(function (responseObserver) {
            var resOptions;
            try {
                resOptions = resOptionsFactory();
            }
            catch (error) {
                var err = error.message || error;
                resOptions = _this.createErrorResponseOptions('', STATUS.INTERNAL_SERVER_ERROR, "" + err);
            }
            var status = resOptions.status;
            try {
                resOptions.statusText = getStatusText(status);
            }
            catch (e) { /* ignore failure */ }
            if (isSuccess(status)) {
                responseObserver.next(resOptions);
                responseObserver.complete();
            }
            else {
                responseObserver.error(resOptions);
            }
            return function () { }; // unsubscribe function
        });
    };
    BackendService.prototype.delete = function (_a) {
        var collection = _a.collection, collectionName = _a.collectionName, headers = _a.headers, id = _a.id, url = _a.url;
        // tslint:disable-next-line:triple-equals
        if (id == undefined) {
            return this.createErrorResponseOptions(url, STATUS.NOT_FOUND, "Missing \"" + collectionName + "\" id");
        }
        var exists = this.removeById(collection, id);
        return {
            headers: headers,
            status: (exists || !this.config.delete404) ? STATUS.NO_CONTENT : STATUS.NOT_FOUND
        };
    };
    /**
     * Find first instance of item in collection by `item.id`
     * @param collection
     * @param id
     */
    BackendService.prototype.findById = function (collection, id) {
        return collection.find(function (item) { return item.id === id; });
    };
    /**
     * Generate the next available id for item in this collection
     * Use method from `inMemDbService` if it exists and returns a value,
     * else delegates to `genIdDefault`.
     * @param collection - collection of items with `id` key property
     */
    BackendService.prototype.genId = function (collection, collectionName) {
        var genId = this.bind('genId');
        if (genId) {
            var id = genId(collection, collectionName);
            // tslint:disable-next-line:triple-equals
            if (id != undefined) {
                return id;
            }
        }
        return this.genIdDefault(collection, collectionName);
    };
    /**
     * Default generator of the next available id for item in this collection
     * This default implementation works only for numeric ids.
     * @param collection - collection of items with `id` key property
     * @param collectionName - name of the collection
     */
    BackendService.prototype.genIdDefault = function (collection, collectionName) {
        if (!this.isCollectionIdNumeric(collection, collectionName)) {
            throw new Error("Collection '" + collectionName + "' id type is non-numeric or unknown. Can only generate numeric ids.");
        }
        var maxId = 0;
        collection.reduce(function (prev, item) {
            maxId = Math.max(maxId, typeof item.id === 'number' ? item.id : maxId);
        }, undefined);
        return maxId + 1;
    };
    BackendService.prototype.get = function (_a) {
        var collection = _a.collection, collectionName = _a.collectionName, headers = _a.headers, id = _a.id, query = _a.query, url = _a.url;
        var data = collection;
        // tslint:disable-next-line:triple-equals
        if (id != undefined && id !== '') {
            data = this.findById(collection, id);
        }
        else if (query) {
            data = this.applyQuery(collection, query);
        }
        if (!data) {
            return this.createErrorResponseOptions(url, STATUS.NOT_FOUND, "'" + collectionName + "' with id='" + id + "' not found");
        }
        return {
            body: this.bodify(this.clone(data)),
            headers: headers,
            status: STATUS.OK
        };
    };
    /**
     * Get location info from a url, even on server where `document` is not defined
     */
    BackendService.prototype.getLocation = function (url) {
        if (!url.startsWith('http')) {
            // get the document iff running in browser
            var doc = (typeof document === 'undefined') ? undefined : document;
            // add host info to url before parsing.  Use a fake host when not in browser.
            var base = doc ? doc.location.protocol + '//' + doc.location.host : 'http://fake';
            url = url.startsWith('/') ? base + url : base + '/' + url;
        }
        return parseUri(url);
    };
    
    /**
     * get or create the function that passes unhandled requests
     * through to the "real" backend.
     */
    BackendService.prototype.getPassThruBackend = function () {
        return this.passThruBackend ?
            this.passThruBackend :
            this.passThruBackend = this.createPassThruBackend();
    };
    /**
     * Get utility methods from this service instance.
     * Useful within an HTTP method override
     */
    BackendService.prototype.getRequestInfoUtils = function () {
        var _this = this;
        return {
            createResponse$: this.createResponse$.bind(this),
            findById: this.findById.bind(this),
            isCollectionIdNumeric: this.isCollectionIdNumeric.bind(this),
            getConfig: function () { return _this.config; },
            getDb: function () { return _this.db; },
            getJsonBody: this.getJsonBody.bind(this),
            getLocation: this.getLocation.bind(this),
            getPassThruBackend: this.getPassThruBackend.bind(this),
            parseRequestUrl: this.parseRequestUrl.bind(this),
        };
    };
    BackendService.prototype.indexOf = function (collection, id) {
        return collection.findIndex(function (item) { return item.id === id; });
    };
    /** Parse the id as a number. Return original value if not a number. */
    BackendService.prototype.parseId = function (collection, collectionName, id) {
        if (!this.isCollectionIdNumeric(collection, collectionName)) {
            // Can't confirm that `id` is a numeric type; don't parse as a number
            // or else `'42'` -> `42` and _get by id_ fails.
            return id;
        }
        var idNum = parseFloat(id);
        return isNaN(idNum) ? id : idNum;
    };
    /**
     * return true if can determine that the collection's `item.id` is a number
     * This implementation can't tell if the collection is empty so it assumes NO
     * */
    BackendService.prototype.isCollectionIdNumeric = function (collection, collectionName) {
        // collectionName not used now but override might maintain collection type information
        // so that it could know the type of the `id` even when the collection is empty.
        return !!(collection && collection[0]) && typeof collection[0].id === 'number';
    };
    /**
     * Parses the request URL into a `ParsedRequestUrl` object.
     * Parsing depends upon certain values of `config`: `apiBase`, `host`, and `urlRoot`.
     *
     * Configuring the `apiBase` yields the most interesting changes to `parseRequestUrl` behavior:
     *   When apiBase=undefined and url='http://localhost/api/collection/42'
     *     {base: 'api/', collectionName: 'collection', id: '42', ...}
     *   When apiBase='some/api/root/' and url='http://localhost/some/api/root/collection'
     *     {base: 'some/api/root/', collectionName: 'collection', id: undefined, ...}
     *   When apiBase='/' and url='http://localhost/collection'
     *     {base: '/', collectionName: 'collection', id: undefined, ...}
     *
     * The actual api base segment values are ignored. Only the number of segments matters.
     * The following api base strings are considered identical: 'a/b' ~ 'some/api/' ~ `two/segments'
     *
     * To replace this default method, assign your alternative to your InMemDbService['parseRequestUrl']
     */
    BackendService.prototype.parseRequestUrl = function (url) {
        try {
            var loc = this.getLocation(url);
            var drop = this.config.rootPath.length;
            var urlRoot = '';
            if (loc.host !== this.config.host) {
                // url for a server on a different host!
                // assume it's collection is actually here too.
                drop = 1; // the leading slash
                urlRoot = loc.protocol + '//' + loc.host + '/';
            }
            var path = loc.path.substring(drop);
            var pathSegments = path.split('/');
            var segmentIx = 0;
            // apiBase: the front part of the path devoted to getting to the api route
            // Assumes first path segment if no config.apiBase
            // else ignores as many path segments as are in config.apiBase
            // Does NOT care what the api base chars actually are.
            var apiBase = void 0;
            // tslint:disable-next-line:triple-equals
            if (this.config.apiBase == undefined) {
                apiBase = pathSegments[segmentIx++];
            }
            else {
                apiBase = removeTrailingSlash(this.config.apiBase.trim());
                if (apiBase) {
                    segmentIx = apiBase.split('/').length;
                }
                else {
                    segmentIx = 0; // no api base at all; unwise but allowed.
                }
            }
            apiBase += '/';
            var collectionName = pathSegments[segmentIx++];
            // ignore anything after a '.' (e.g.,the "json" in "customers.json")
            collectionName = collectionName && collectionName.split('.')[0];
            var id = pathSegments[segmentIx++];
            var query = this.createQueryMap(loc.query);
            var resourceUrl = urlRoot + apiBase + collectionName + '/';
            return { apiBase: apiBase, collectionName: collectionName, id: id, query: query, resourceUrl: resourceUrl };
        }
        catch (err) {
            var msg = "unable to parse url '" + url + "'; original error: " + err.message;
            throw new Error(msg);
        }
    };
    // Create entity
    // Can update an existing entity too if post409 is false.
    BackendService.prototype.post = function (_a) {
        var collection = _a.collection, collectionName = _a.collectionName, headers = _a.headers, id = _a.id, req = _a.req, resourceUrl = _a.resourceUrl, url = _a.url;
        var item = this.clone(this.getJsonBody(req));
        // tslint:disable-next-line:triple-equals
        if (item.id == undefined) {
            try {
                item.id = id || this.genId(collection, collectionName);
            }
            catch (err) {
                var emsg = err.message || '';
                if (/id type is non-numeric/.test(emsg)) {
                    return this.createErrorResponseOptions(url, STATUS.UNPROCESSABLE_ENTRY, emsg);
                }
                else {
                    console.error(err);
                    return this.createErrorResponseOptions(url, STATUS.INTERNAL_SERVER_ERROR, "Failed to generate new id for '" + collectionName + "'");
                }
            }
        }
        if (id && id !== item.id) {
            return this.createErrorResponseOptions(url, STATUS.BAD_REQUEST, "Request id does not match item.id");
        }
        else {
            id = item.id;
        }
        var existingIx = this.indexOf(collection, id);
        var body = this.bodify(item);
        if (existingIx === -1) {
            collection.push(item);
            headers.set('Location', resourceUrl + '/' + id);
            return { headers: headers, body: body, status: STATUS.CREATED };
        }
        else if (this.config.post409) {
            return this.createErrorResponseOptions(url, STATUS.CONFLICT, "'" + collectionName + "' item with id='" + id + " exists and may not be updated with POST; use PUT instead.");
        }
        else {
            collection[existingIx] = item;
            return this.config.post204 ?
                { headers: headers, status: STATUS.NO_CONTENT } : // successful; no content
                { headers: headers, body: body, status: STATUS.OK }; // successful; return entity
        }
    };
    // Update existing entity
    // Can create an entity too if put404 is false.
    BackendService.prototype.put = function (_a) {
        var collection = _a.collection, collectionName = _a.collectionName, headers = _a.headers, id = _a.id, req = _a.req, url = _a.url;
        var item = this.clone(this.getJsonBody(req));
        // tslint:disable-next-line:triple-equals
        if (item.id == undefined) {
            return this.createErrorResponseOptions(url, STATUS.NOT_FOUND, "Missing '" + collectionName + "' id");
        }
        if (id && id !== item.id) {
            return this.createErrorResponseOptions(url, STATUS.BAD_REQUEST, "Request for '" + collectionName + "' id does not match item.id");
        }
        else {
            id = item.id;
        }
        var existingIx = this.indexOf(collection, id);
        var body = this.bodify(item);
        if (existingIx > -1) {
            collection[existingIx] = item;
            return this.config.put204 ?
                { headers: headers, status: STATUS.NO_CONTENT } : // successful; no content
                { headers: headers, body: body, status: STATUS.OK }; // successful; return entity
        }
        else if (this.config.put404) {
            // item to update not found; use POST to create new item for this id.
            return this.createErrorResponseOptions(url, STATUS.NOT_FOUND, "'" + collectionName + "' item with id='" + id + " not found and may not be created with PUT; use POST instead.");
        }
        else {
            // create new item for id not found
            collection.push(item);
            return { headers: headers, body: body, status: STATUS.CREATED };
        }
    };
    BackendService.prototype.removeById = function (collection, id) {
        var ix = this.indexOf(collection, id);
        if (ix > -1) {
            collection.splice(ix, 1);
            return true;
        }
        return false;
    };
    /**
     * Tell your in-mem "database" to reset.
     * returns Observable of the database because resetting it could be async
     */
    BackendService.prototype.resetDb = function (reqInfo) {
        var _this = this;
        this.dbReadySubject.next(false);
        var db = this.inMemDbService.createDb(reqInfo);
        var db$ = db instanceof rxjs.Observable ? db :
            typeof db.then === 'function' ? rxjs.from(db) :
                rxjs.of(db);
        db$.pipe(operators.first()).subscribe(function (d) {
            _this.db = d;
            _this.dbReadySubject.next(true);
        });
        return this.dbReady;
    };
    return BackendService;
}());

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * For Angular `HttpClient` simulate the behavior of a RESTy web api
 * backed by the simple in-memory data store provided by the injected `InMemoryDbService`.
 * Conforms mostly to behavior described here:
 * http://www.restapitutorial.com/lessons/httpmethods.html
 *
 * ### Usage
 *
 * Create an in-memory data store class that implements `InMemoryDbService`.
 * Call `config` static method with this service class and optional configuration object:
 * ```
 * // other imports
 * import { HttpClientModule } from '@angular/common/http';
 * import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
 *
 * import { InMemHeroService, inMemConfig } from '../api/in-memory-hero.service';
 * @NgModule({
 *  imports: [
 *    HttpModule,
 *    HttpClientInMemoryWebApiModule.forRoot(InMemHeroService, inMemConfig),
 *    ...
 *  ],
 *  ...
 * })
 * export class AppModule { ... }
 * ```
 */
var HttpClientBackendService = /** @class */ (function (_super) {
    __extends(HttpClientBackendService, _super);
    function HttpClientBackendService(inMemDbService, config, xhrFactory) {
        var _this = _super.call(this, inMemDbService, config) || this;
        _this.xhrFactory = xhrFactory;
        return _this;
    }
    HttpClientBackendService.prototype.handle = function (req) {
        try {
            return this.handleRequest(req);
        }
        catch (error) {
            var err = error.message || error;
            var resOptions_1 = this.createErrorResponseOptions(req.url, STATUS.INTERNAL_SERVER_ERROR, "" + err);
            return this.createResponse$(function () { return resOptions_1; });
        }
    };
    ////  protected overrides /////
    HttpClientBackendService.prototype.getJsonBody = function (req) {
        return req.body;
    };
    HttpClientBackendService.prototype.getRequestMethod = function (req) {
        return (req.method || 'get').toLowerCase();
    };
    HttpClientBackendService.prototype.createHeaders = function (headers) {
        return new http.HttpHeaders(headers);
    };
    HttpClientBackendService.prototype.createQueryMap = function (search) {
        var map$$1 = new Map();
        if (search) {
            var params_1 = new http.HttpParams({ fromString: search });
            params_1.keys().forEach(function (p) { return map$$1.set(p, params_1.getAll(p)); });
        }
        return map$$1;
    };
    HttpClientBackendService.prototype.createResponse$fromResponseOptions$ = function (resOptions$) {
        return resOptions$.pipe(operators.map(function (opts) { return new http.HttpResponse(opts); }));
    };
    HttpClientBackendService.prototype.createPassThruBackend = function () {
        try {
            return new http.HttpXhrBackend(this.xhrFactory);
        }
        catch (ex) {
            ex.message = 'Cannot create passThru404 backend; ' + (ex.message || '');
            throw ex;
        }
    };
    HttpClientBackendService = __decorate$1([ __param(1, core.Inject(InMemoryBackendConfig)), __param(1, core.Optional()),
        __metadata$1("design:paramtypes", [InMemoryDbService,
            InMemoryBackendConfigArgs,
            http.XhrFactory])
    ], HttpClientBackendService);
HttpClientBackendService.ɵfac = function HttpClientBackendService_Factory(t) { return new (t || HttpClientBackendService)(ɵngcc0.ɵɵinject(InMemoryDbService), ɵngcc0.ɵɵinject(InMemoryBackendConfig, 8), ɵngcc0.ɵɵinject(ɵngcc1.XhrFactory)); };
HttpClientBackendService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: HttpClientBackendService, factory: function (t) { return HttpClientBackendService.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(HttpClientBackendService, [{
        type: core.Injectable
    }], function () { return [{ type: InMemoryDbService }, { type: InMemoryBackendConfigArgs, decorators: [{
                type: core.Inject,
                args: [InMemoryBackendConfig]
            }, {
                type: core.Optional
            }] }, { type: ɵngcc1.XhrFactory }]; }, null); })();
    return HttpClientBackendService;
}(BackendService));

////// HttpClient-Only version ////
var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Internal - Creates the in-mem backend for the HttpClient module
// AoT requires factory to be exported
function httpClientInMemBackendServiceFactory(dbService, options, xhrFactory) {
    var backend = new HttpClientBackendService(dbService, options, xhrFactory);
    return backend;
}
var HttpClientInMemoryWebApiModule = /** @class */ (function () {
    function HttpClientInMemoryWebApiModule() {
    }
    HttpClientInMemoryWebApiModule_1 = HttpClientInMemoryWebApiModule;
    /**
    *  Redirect the Angular `HttpClient` XHR calls
    *  to in-memory data store that implements `InMemoryDbService`.
    *  with class that implements InMemoryDbService and creates an in-memory database.
    *
    *  Usually imported in the root application module.
    *  Can import in a lazy feature module too, which will shadow modules loaded earlier
    *
    * @param {Type} dbCreator - Class that creates seed data for in-memory database. Must implement InMemoryDbService.
    * @param {InMemoryBackendConfigArgs} [options]
    *
    * @example
    * HttpInMemoryWebApiModule.forRoot(dbCreator);
    * HttpInMemoryWebApiModule.forRoot(dbCreator, {useValue: {delay:600}});
    */
    HttpClientInMemoryWebApiModule.forRoot = function (dbCreator, options) {
        return {
            ngModule: HttpClientInMemoryWebApiModule_1,
            providers: [
                { provide: InMemoryDbService, useClass: dbCreator },
                { provide: InMemoryBackendConfig, useValue: options },
                { provide: http.HttpBackend,
                    useFactory: httpClientInMemBackendServiceFactory,
                    deps: [InMemoryDbService, InMemoryBackendConfig, http.XhrFactory] }
            ]
        };
    };
    /**
   *
   * Enable and configure the in-memory web api in a lazy-loaded feature module.
   * Same as `forRoot`.
   * This is a feel-good method so you can follow the Angular style guide for lazy-loaded modules.
   */
    HttpClientInMemoryWebApiModule.forFeature = function (dbCreator, options) {
        return HttpClientInMemoryWebApiModule_1.forRoot(dbCreator, options);
    };
    var HttpClientInMemoryWebApiModule_1;
HttpClientInMemoryWebApiModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: HttpClientInMemoryWebApiModule });
HttpClientInMemoryWebApiModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function HttpClientInMemoryWebApiModule_Factory(t) { return new (t || HttpClientInMemoryWebApiModule)(); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(HttpClientInMemoryWebApiModule, [{
        type: core.NgModule,
        args: [{}]
    }], function () { return []; }, null); })();
    return HttpClientInMemoryWebApiModule;
}());

////// For apps with both Http and HttpClient ////
var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var InMemoryWebApiModule = /** @class */ (function () {
    function InMemoryWebApiModule() {
    }
    InMemoryWebApiModule_1 = InMemoryWebApiModule;
    /**
    *  Redirect BOTH Angular `Http` and `HttpClient` XHR calls
    *  to in-memory data store that implements `InMemoryDbService`.
    *  with class that implements InMemoryDbService and creates an in-memory database.
    *
    *  Usually imported in the root application module.
    *  Can import in a lazy feature module too, which will shadow modules loaded earlier
    *
    * @param {Type} dbCreator - Class that creates seed data for in-memory database. Must implement InMemoryDbService.
    * @param {InMemoryBackendConfigArgs} [options]
    *
    * @example
    * InMemoryWebApiModule.forRoot(dbCreator);
    * InMemoryWebApiModule.forRoot(dbCreator, {useValue: {delay:600}});
    */
    InMemoryWebApiModule.forRoot = function (dbCreator, options) {
        return {
            ngModule: InMemoryWebApiModule_1,
            providers: [
                { provide: InMemoryDbService, useClass: dbCreator },
                { provide: InMemoryBackendConfig, useValue: options },
                { provide: http.HttpBackend,
                    useFactory: httpClientInMemBackendServiceFactory,
                    deps: [InMemoryDbService, InMemoryBackendConfig, http.XhrFactory] }
            ]
        };
    };
    /**
     *
     * Enable and configure the in-memory web api in a lazy-loaded feature module.
     * Same as `forRoot`.
     * This is a feel-good method so you can follow the Angular style guide for lazy-loaded modules.
     */
    InMemoryWebApiModule.forFeature = function (dbCreator, options) {
        return InMemoryWebApiModule_1.forRoot(dbCreator, options);
    };
    var InMemoryWebApiModule_1;
InMemoryWebApiModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: InMemoryWebApiModule });
InMemoryWebApiModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function InMemoryWebApiModule_Factory(t) { return new (t || InMemoryWebApiModule)(); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(InMemoryWebApiModule, [{
        type: core.NgModule,
        args: [{}]
    }], function () { return []; }, null); })();
    return InMemoryWebApiModule;
}());

exports.BackendService = BackendService;
exports.STATUS = STATUS;
exports.STATUS_CODE_INFO = STATUS_CODE_INFO;
exports.getStatusText = getStatusText;
exports.isSuccess = isSuccess;
exports.HttpClientBackendService = HttpClientBackendService;
exports.InMemoryWebApiModule = InMemoryWebApiModule;
exports.httpClientInMemBackendServiceFactory = httpClientInMemBackendServiceFactory;
exports.HttpClientInMemoryWebApiModule = HttpClientInMemoryWebApiModule;
exports.InMemoryDbService = InMemoryDbService;
exports.InMemoryBackendConfigArgs = InMemoryBackendConfigArgs;
exports.InMemoryBackendConfig = InMemoryBackendConfig;
exports.parseUri = parseUri;
exports.removeTrailingSlash = removeTrailingSlash;

Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LXdlYi1hcGkudW1kLmpzIiwic291cmNlcyI6WyIuLi9zcmMvaW4tbWVtL2h0dHAtc3RhdHVzLWNvZGVzLmpzIiwiLi4vc3JjL2luLW1lbS9kZWxheS1yZXNwb25zZS5qcyIsIi4uL3NyYy9pbi1tZW0vaW50ZXJmYWNlcy5qcyIsIi4uL3NyYy9pbi1tZW0vYmFja2VuZC5zZXJ2aWNlLmpzIiwiLi4vc3JjL2luLW1lbS9odHRwLWNsaWVudC1iYWNrZW5kLnNlcnZpY2UuanMiLCIuLi9zcmMvaW4tbWVtL2h0dHAtY2xpZW50LWluLW1lbW9yeS13ZWItYXBpLm1vZHVsZS5qcyIsIi4uL3NyYy9pbi1tZW0vaW4tbWVtb3J5LXdlYi1hcGkubW9kdWxlLmpzIl0sIm5hbWVzIjpbIk9ic2VydmFibGUiLCJ0aGlzIiwiSW5qZWN0YWJsZSIsIkJlaGF2aW9yU3ViamVjdCIsImZpcnN0IiwiY29uY2F0TWFwIiwiZnJvbSIsIm9mIiwiX19kZWNvcmF0ZSIsIl9fbWV0YWRhdGEiLCJIdHRwSGVhZGVycyIsIm1hcCIsIkh0dHBQYXJhbXMiLCJIdHRwUmVzcG9uc2UiLCJIdHRwWGhyQmFja2VuZCIsIkluamVjdCIsIk9wdGlvbmFsIiwiWGhyRmFjdG9yeSIsIkh0dHBCYWNrZW5kIiwiTmdNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLElBQUksTUFBTSxHQUFHO0FBQ3BCLElBQUksUUFBUSxFQUFFLEdBQUc7QUFDakIsSUFBSSxtQkFBbUIsRUFBRSxHQUFHO0FBQzVCLElBQUksRUFBRSxFQUFFLEdBQUc7QUFDWCxJQUFJLE9BQU8sRUFBRSxHQUFHO0FBQ2hCLElBQUksUUFBUSxFQUFFLEdBQUc7QUFDakIsSUFBSSw2QkFBNkIsRUFBRSxHQUFHO0FBQ3RDLElBQUksVUFBVSxFQUFFLEdBQUc7QUFDbkIsSUFBSSxhQUFhLEVBQUUsR0FBRztBQUN0QixJQUFJLGVBQWUsRUFBRSxHQUFHO0FBQ3hCLElBQUksZ0JBQWdCLEVBQUUsR0FBRztBQUN6QixJQUFJLGtC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QU8sT0FBTyxDQUFDLFFBQVEsS0FBSyxVQUFVLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDbkksU0FBUyxLQUFLLElBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDdEosSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDbEUsQ0FBQyxDQUFDO0FBQ0YsSUFBSVEsWUFBVSxHQUFHLENBQUNSLFNBQUksSUFBSUEsU0FBSSxDQUFDLFVBQVUsS0FBSyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDOUQsSUFBSSxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsSUFBSSxPQUFPLE9BQU8sQ0FBQyxRQUFRLEtBQUssVUFBVSxFQUFFLE9BQU8sT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDN0csQ0FBQyxDQUFDO0FBQ0YsSUFBSSxPQUFPLEdBQUcsQ0FBQ0EsU0FBSSxJQUFJQSxTQUFJLENBQUMsT0FBTyxLQUFLLFVBQVUsVUFBVSxFQUFFLFNBQVMsRUFBRTtBQUN6RSxJQUFJLE9BQU8sVUFBVSxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUUsU0FBUyxD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QUFFLG9CQUFvQixDQUFDOzs7O2dEQUFDO0FBQzdCLElBQUksT0FBTyxvQkFBb0IsQ0FBQztBQUNoQyxDQUFDLEVBQUUsQ0FBQztBQUNKO0FBQUM7QUFDUTtBQUF5QjtBQUE2QztBQUF1QztBQUErQjtBQUE2RDtBQUFxRDtBQUFxRjtBQUF5RTtBQUErQztBQUErRDtBQUF1RDtBQUE2QjtBQUFtRDtBQUFDO0FBQStEO0FBQUM7O0FOMURBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBSUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFDN2NBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBbkIsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQ3pCQSxBQUFBLEFBQUEsQUFBQSxBQUFBQyxBQUFBLEFBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBQSxBQUFBLEFBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQ0EsQUFVQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQVNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBQyxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQ2hHQSxBQU9BLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQUMsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBQyxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBeUJBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQUMsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBSUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBTUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBSUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBa0JBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFNQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBS0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUFMLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQU1BLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBT0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBT0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBS0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUtBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFLQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFrQkEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUtBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFLQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQU0sQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBQyxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBSCxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUN2a0JBLEFBQUEsQUFBQSxBQUFBLEFBQUFILEFBQUEsQUFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQU8sQUFBQSxBQUFBLEFBQUFQLEFBQUEsQUFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUFRLEFBQUEsQUFBQSxBQUFBUixBQUFBLEFBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUFBLEFBQUEsQUFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFNQSxBQTJCQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUFTLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUFDLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBQyxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBRCxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBRSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQUMsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUFOLEFBQUEsQUFBQSxBQUNBTixBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBYSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBQyxBQUFBLEFBQUEsQUFBQSxBQUNBUCxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQVEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFDakhBLEFBQ0EsQUFBQVQsQUFBQSxBQUFBLEFBQUFQLEFBQUEsQUFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBSUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFnQkEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUFpQixBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBRCxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFPQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBVCxBQUFBLEFBQUEsQUFDQVcsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQzlEQSxBQUNBLEFBQUFYLEFBQUEsQUFBQSxBQUFBUCxBQUFBLEFBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQWdCQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQWlCLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUFELEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQU9BLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUFULEFBQUEsQUFBQSxBQUNBVyxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHZhciBTVEFUVVMgPSB7XHJcbiAgICBDT05USU5VRTogMTAwLFxyXG4gICAgU1dJVENISU5HX1BST1RPQ09MUzogMTAxLFxyXG4gICAgT0s6IDIwMCxcclxuICAgIENSRUFURUQ6IDIwMSxcclxuICAgIEFDQ0VQVEVEOiAyMDIsXHJcbiAgICBOT05fQVVUSE9SSVRBVElWRV9JTkZPUk1BVElPTjogMjAzLFxyXG4gICAgTk9fQ09OVEVOVDogMjA0LFxyXG4gICAgUkVTRVRfQ09OVEVOVDogMjA1LFxyXG4gICAgUEFSVElBTF9DT05URU5UOiAyMDYsXHJcbiAgICBNVUxUSVBMRV9DSE9JQ0VTOiAzMDAsXHJcbiAgICBNT1ZFRF9QRVJNQU5URU5UTFk6IDMwMSxcclxuICAgIEZPVU5EOiAzMDIsXHJcbiAgICBTRUVfT1RIRVI6IDMwMyxcclxuICAgIE5PVF9NT0RJRklFRDogMzA0LFxyXG4gICAgVVNFX1BST1hZOiAzMDUsXHJcbiAgICBURU1QT1JBUllfUkVESVJFQ1Q6IDMwNyxcclxuICAgIEJBRF9SRVFVRVNUOiA0MDAsXHJcbiAgICBVTkFVVEhPUklaRUQ6IDQwMSxcclxuICAgIFBBWU1FTlRfUkVRVUlSRUQ6IDQwMixcclxuICAgIEZPUkJJRERFTjogNDAzLFxyXG4gICAgTk9UX0ZPVU5EOiA0MDQsXHJcbiAgICBNRVRIT0RfTk9UX0FMTE9XRUQ6IDQwNSxcclxuICAgIE5PVF9BQ0NFUFRBQkxFOiA0MDYsXHJcbiAgICBQUk9YWV9BVVRIRU5USUNBVElPTl9SRVFVSVJFRDogNDA3LFxyXG4gICAgUkVRVUVTVF9USU1FT1VUOiA0MDgsXHJcbiAgICBDT05GTElDVDogNDA5LFxyXG4gICAgR09ORTogNDEwLFxyXG4gICAgTEVOR1RIX1JFUVVJUkVEOiA0MTEsXHJcbiAgICBQUkVDT05ESVRJT05fRkFJTEVEOiA0MTIsXHJcbiAgICBQQVlMT0FEX1RPX0xBUkdFOiA0MTMsXHJcbiAgICBVUklfVE9PX0xPTkc6IDQxNCxcclxuICAgIFVOU1VQUE9SVEVEX01FRElBX1RZUEU6IDQxNSxcclxuICAgIFJBTkdFX05PVF9TQVRJU0ZJQUJMRTogNDE2LFxyXG4gICAgRVhQRUNUQVRJT05fRkFJTEVEOiA0MTcsXHJcbiAgICBJTV9BX1RFQVBPVDogNDE4LFxyXG4gICAgVVBHUkFERV9SRVFVSVJFRDogNDI2LFxyXG4gICAgSU5URVJOQUxfU0VSVkVSX0VSUk9SOiA1MDAsXHJcbiAgICBOT1RfSU1QTEVNRU5URUQ6IDUwMSxcclxuICAgIEJBRF9HQVRFV0FZOiA1MDIsXHJcbiAgICBTRVJWSUNFX1VOQVZBSUxBQkxFOiA1MDMsXHJcbiAgICBHQVRFV0FZX1RJTUVPVVQ6IDUwNCxcclxuICAgIEhUVFBfVkVSU0lPTl9OT1RfU1VQUE9SVEVEOiA1MDUsXHJcbiAgICBQUk9DRVNTSU5HOiAxMDIsXHJcbiAgICBNVUxUSV9TVEFUVVM6IDIwNyxcclxuICAgIElNX1VTRUQ6IDIyNixcclxuICAgIFBFUk1BTkVOVF9SRURJUkVDVDogMzA4LFxyXG4gICAgVU5QUk9DRVNTQUJMRV9FTlRSWTogNDIyLFxyXG4gICAgTE9DS0VEOiA0MjMsXHJcbiAgICBGQUlMRURfREVQRU5ERU5DWTogNDI0LFxyXG4gICAgUFJFQ09ORElUSU9OX1JFUVVJUkVEOiA0MjgsXHJcbiAgICBUT09fTUFOWV9SRVFVRVNUUzogNDI5LFxyXG4gICAgUkVRVUVTVF9IRUFERVJfRklFTERTX1RPT19MQVJHRTogNDMxLFxyXG4gICAgVU5BVkFJTEFCTEVfRk9SX0xFR0FMX1JFQVNPTlM6IDQ1MSxcclxuICAgIFZBUklBTlRfQUxTT19ORUdPVElBVEVTOiA1MDYsXHJcbiAgICBJTlNVRkZJQ0lFTlRfU1RPUkFHRTogNTA3LFxyXG4gICAgTkVUV09SS19BVVRIRU5USUNBVElPTl9SRVFVSVJFRDogNTExXHJcbn07XHJcbi8qdHNsaW50OmRpc2FibGU6cXVvdGVtYXJrIG1heC1saW5lLWxlbmd0aCBvbmUtbGluZSAqL1xyXG5leHBvcnQgdmFyIFNUQVRVU19DT0RFX0lORk8gPSB7XHJcbiAgICAnMTAwJzoge1xyXG4gICAgICAgICdjb2RlJzogMTAwLFxyXG4gICAgICAgICd0ZXh0JzogJ0NvbnRpbnVlJyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBpbml0aWFsIHBhcnQgb2YgYSByZXF1ZXN0IGhhcyBiZWVuIHJlY2VpdmVkIGFuZCBoYXMgbm90IHlldCBiZWVuIHJlamVjdGVkIGJ5IHRoZSBzZXJ2ZXIuXFxcIicsXHJcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjIuMScsXHJcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi4yLjEnXHJcbiAgICB9LFxyXG4gICAgJzEwMSc6IHtcclxuICAgICAgICAnY29kZSc6IDEwMSxcclxuICAgICAgICAndGV4dCc6ICdTd2l0Y2hpbmcgUHJvdG9jb2xzJyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgdW5kZXJzdGFuZHMgYW5kIGlzIHdpbGxpbmcgdG8gY29tcGx5IHdpdGggdGhlIGNsaWVudFxcJ3MgcmVxdWVzdCwgdmlhIHRoZSBVcGdyYWRlIGhlYWRlciBmaWVsZCwgZm9yIGEgY2hhbmdlIGluIHRoZSBhcHBsaWNhdGlvbiBwcm90b2NvbCBiZWluZyB1c2VkIG9uIHRoaXMgY29ubmVjdGlvbi5cXFwiJyxcclxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuMi4yJyxcclxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjIuMidcclxuICAgIH0sXHJcbiAgICAnMjAwJzoge1xyXG4gICAgICAgICdjb2RlJzogMjAwLFxyXG4gICAgICAgICd0ZXh0JzogJ09LJyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSByZXF1ZXN0IGhhcyBzdWNjZWVkZWQuXFxcIicsXHJcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjMuMScsXHJcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi4zLjEnXHJcbiAgICB9LFxyXG4gICAgJzIwMSc6IHtcclxuICAgICAgICAnY29kZSc6IDIwMSxcclxuICAgICAgICAndGV4dCc6ICdDcmVhdGVkJyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSByZXF1ZXN0IGhhcyBiZWVuIGZ1bGZpbGxlZCBhbmQgaGFzIHJlc3VsdGVkIGluIG9uZSBvciBtb3JlIG5ldyByZXNvdXJjZXMgYmVpbmcgY3JlYXRlZC5cXFwiJyxcclxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuMy4yJyxcclxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjMuMidcclxuICAgIH0sXHJcbiAgICAnMjAyJzoge1xyXG4gICAgICAgICdjb2RlJzogMjAyLFxyXG4gICAgICAgICd0ZXh0JzogJ0FjY2VwdGVkJyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSByZXF1ZXN0IGhhcyBiZWVuIGFjY2VwdGVkIGZvciBwcm9jZXNzaW5nLCBidXQgdGhlIHByb2Nlc3NpbmcgaGFzIG5vdCBiZWVuIGNvbXBsZXRlZC5cXFwiJyxcclxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuMy4zJyxcclxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjMuMydcclxuICAgIH0sXHJcbiAgICAnMjAzJzoge1xyXG4gICAgICAgICdjb2RlJzogMjAzLFxyXG4gICAgICAgICd0ZXh0JzogJ05vbi1BdXRob3JpdGF0aXZlIEluZm9ybWF0aW9uJyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSByZXF1ZXN0IHdhcyBzdWNjZXNzZnVsIGJ1dCB0aGUgZW5jbG9zZWQgcGF5bG9hZCBoYXMgYmVlbiBtb2RpZmllZCBmcm9tIHRoYXQgb2YgdGhlIG9yaWdpbiBzZXJ2ZXJcXCdzIDIwMCAoT0spIHJlc3BvbnNlIGJ5IGEgdHJhbnNmb3JtaW5nIHByb3h5LlxcXCInLFxyXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi4zLjQnLFxyXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuMy40J1xyXG4gICAgfSxcclxuICAgICcyMDQnOiB7XHJcbiAgICAgICAgJ2NvZGUnOiAyMDQsXHJcbiAgICAgICAgJ3RleHQnOiAnTm8gQ29udGVudCcsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIGhhcyBzdWNjZXNzZnVsbHkgZnVsZmlsbGVkIHRoZSByZXF1ZXN0IGFuZCB0aGF0IHRoZXJlIGlzIG5vIGFkZGl0aW9uYWwgY29udGVudCB0byBzZW5kIGluIHRoZSByZXNwb25zZSBwYXlsb2FkIGJvZHkuXFxcIicsXHJcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjMuNScsXHJcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi4zLjUnXHJcbiAgICB9LFxyXG4gICAgJzIwNSc6IHtcclxuICAgICAgICAnY29kZSc6IDIwNSxcclxuICAgICAgICAndGV4dCc6ICdSZXNldCBDb250ZW50JyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgaGFzIGZ1bGZpbGxlZCB0aGUgcmVxdWVzdCBhbmQgZGVzaXJlcyB0aGF0IHRoZSB1c2VyIGFnZW50IHJlc2V0IHRoZSBcXFwiZG9jdW1lbnQgdmlld1xcXCIsIHdoaWNoIGNhdXNlZCB0aGUgcmVxdWVzdCB0byBiZSBzZW50LCB0byBpdHMgb3JpZ2luYWwgc3RhdGUgYXMgcmVjZWl2ZWQgZnJvbSB0aGUgb3JpZ2luIHNlcnZlci5cXFwiJyxcclxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuMy42JyxcclxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjMuNidcclxuICAgIH0sXHJcbiAgICAnMjA2Jzoge1xyXG4gICAgICAgICdjb2RlJzogMjA2LFxyXG4gICAgICAgICd0ZXh0JzogJ1BhcnRpYWwgQ29udGVudCcsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIGlzIHN1Y2Nlc3NmdWxseSBmdWxmaWxsaW5nIGEgcmFuZ2UgcmVxdWVzdCBmb3IgdGhlIHRhcmdldCByZXNvdXJjZSBieSB0cmFuc2ZlcnJpbmcgb25lIG9yIG1vcmUgcGFydHMgb2YgdGhlIHNlbGVjdGVkIHJlcHJlc2VudGF0aW9uIHRoYXQgY29ycmVzcG9uZCB0byB0aGUgc2F0aXNmaWFibGUgcmFuZ2VzIGZvdW5kIGluIHRoZSByZXF1ZXN0c1xcJ3MgUmFuZ2UgaGVhZGVyIGZpZWxkLlxcXCInLFxyXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzMjNC4xJyxcclxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzMjc2VjdGlvbi00LjEnXHJcbiAgICB9LFxyXG4gICAgJzMwMCc6IHtcclxuICAgICAgICAnY29kZSc6IDMwMCxcclxuICAgICAgICAndGV4dCc6ICdNdWx0aXBsZSBDaG9pY2VzJyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSB0YXJnZXQgcmVzb3VyY2UgaGFzIG1vcmUgdGhhbiBvbmUgcmVwcmVzZW50YXRpb24sIGVhY2ggd2l0aCBpdHMgb3duIG1vcmUgc3BlY2lmaWMgaWRlbnRpZmllciwgYW5kIGluZm9ybWF0aW9uIGFib3V0IHRoZSBhbHRlcm5hdGl2ZXMgaXMgYmVpbmcgcHJvdmlkZWQgc28gdGhhdCB0aGUgdXNlciAob3IgdXNlciBhZ2VudCkgY2FuIHNlbGVjdCBhIHByZWZlcnJlZCByZXByZXNlbnRhdGlvbiBieSByZWRpcmVjdGluZyBpdHMgcmVxdWVzdCB0byBvbmUgb3IgbW9yZSBvZiB0aG9zZSBpZGVudGlmaWVycy5cXFwiJyxcclxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNC4xJyxcclxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjQuMSdcclxuICAgIH0sXHJcbiAgICAnMzAxJzoge1xyXG4gICAgICAgICdjb2RlJzogMzAxLFxyXG4gICAgICAgICd0ZXh0JzogJ01vdmVkIFBlcm1hbmVudGx5JyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSB0YXJnZXQgcmVzb3VyY2UgaGFzIGJlZW4gYXNzaWduZWQgYSBuZXcgcGVybWFuZW50IFVSSSBhbmQgYW55IGZ1dHVyZSByZWZlcmVuY2VzIHRvIHRoaXMgcmVzb3VyY2Ugb3VnaHQgdG8gdXNlIG9uZSBvZiB0aGUgZW5jbG9zZWQgVVJJcy5cXFwiJyxcclxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNC4yJyxcclxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjQuMidcclxuICAgIH0sXHJcbiAgICAnMzAyJzoge1xyXG4gICAgICAgICdjb2RlJzogMzAyLFxyXG4gICAgICAgICd0ZXh0JzogJ0ZvdW5kJyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSB0YXJnZXQgcmVzb3VyY2UgcmVzaWRlcyB0ZW1wb3JhcmlseSB1bmRlciBhIGRpZmZlcmVudCBVUkkuXFxcIicsXHJcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjQuMycsXHJcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi40LjMnXHJcbiAgICB9LFxyXG4gICAgJzMwMyc6IHtcclxuICAgICAgICAnY29kZSc6IDMwMyxcclxuICAgICAgICAndGV4dCc6ICdTZWUgT3RoZXInLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciBpcyByZWRpcmVjdGluZyB0aGUgdXNlciBhZ2VudCB0byBhIGRpZmZlcmVudCByZXNvdXJjZSwgYXMgaW5kaWNhdGVkIGJ5IGEgVVJJIGluIHRoZSBMb2NhdGlvbiBoZWFkZXIgZmllbGQsIHRoYXQgaXMgaW50ZW5kZWQgdG8gcHJvdmlkZSBhbiBpbmRpcmVjdCByZXNwb25zZSB0byB0aGUgb3JpZ2luYWwgcmVxdWVzdC5cXFwiJyxcclxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNC40JyxcclxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjQuNCdcclxuICAgIH0sXHJcbiAgICAnMzA0Jzoge1xyXG4gICAgICAgICdjb2RlJzogMzA0LFxyXG4gICAgICAgICd0ZXh0JzogJ05vdCBNb2RpZmllZCcsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJBIGNvbmRpdGlvbmFsIEdFVCByZXF1ZXN0IGhhcyBiZWVuIHJlY2VpdmVkIGFuZCB3b3VsZCBoYXZlIHJlc3VsdGVkIGluIGEgMjAwIChPSykgcmVzcG9uc2UgaWYgaXQgd2VyZSBub3QgZm9yIHRoZSBmYWN0IHRoYXQgdGhlIGNvbmRpdGlvbiBoYXMgZXZhbHVhdGVkIHRvIGZhbHNlLlxcXCInLFxyXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzIjNC4xJyxcclxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzIjc2VjdGlvbi00LjEnXHJcbiAgICB9LFxyXG4gICAgJzMwNSc6IHtcclxuICAgICAgICAnY29kZSc6IDMwNSxcclxuICAgICAgICAndGV4dCc6ICdVc2UgUHJveHknLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICcqZGVwcmVjYXRlZConLFxyXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi40LjUnLFxyXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNC41J1xyXG4gICAgfSxcclxuICAgICczMDcnOiB7XHJcbiAgICAgICAgJ2NvZGUnOiAzMDcsXHJcbiAgICAgICAgJ3RleHQnOiAnVGVtcG9yYXJ5IFJlZGlyZWN0JyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSB0YXJnZXQgcmVzb3VyY2UgcmVzaWRlcyB0ZW1wb3JhcmlseSB1bmRlciBhIGRpZmZlcmVudCBVUkkgYW5kIHRoZSB1c2VyIGFnZW50IE1VU1QgTk9UIGNoYW5nZSB0aGUgcmVxdWVzdCBtZXRob2QgaWYgaXQgcGVyZm9ybXMgYW4gYXV0b21hdGljIHJlZGlyZWN0aW9uIHRvIHRoYXQgVVJJLlxcXCInLFxyXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi40LjcnLFxyXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNC43J1xyXG4gICAgfSxcclxuICAgICc0MDAnOiB7XHJcbiAgICAgICAgJ2NvZGUnOiA0MDAsXHJcbiAgICAgICAgJ3RleHQnOiAnQmFkIFJlcXVlc3QnLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciBjYW5ub3Qgb3Igd2lsbCBub3QgcHJvY2VzcyB0aGUgcmVxdWVzdCBiZWNhdXNlIHRoZSByZWNlaXZlZCBzeW50YXggaXMgaW52YWxpZCwgbm9uc2Vuc2ljYWwsIG9yIGV4Y2VlZHMgc29tZSBsaW1pdGF0aW9uIG9uIHdoYXQgdGhlIHNlcnZlciBpcyB3aWxsaW5nIHRvIHByb2Nlc3MuXFxcIicsXHJcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuMScsXHJcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjEnXHJcbiAgICB9LFxyXG4gICAgJzQwMSc6IHtcclxuICAgICAgICAnY29kZSc6IDQwMSxcclxuICAgICAgICAndGV4dCc6ICdVbmF1dGhvcml6ZWQnLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHJlcXVlc3QgaGFzIG5vdCBiZWVuIGFwcGxpZWQgYmVjYXVzZSBpdCBsYWNrcyB2YWxpZCBhdXRoZW50aWNhdGlvbiBjcmVkZW50aWFscyBmb3IgdGhlIHRhcmdldCByZXNvdXJjZS5cXFwiJyxcclxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjM1IzYuMy4xJyxcclxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzUjc2VjdGlvbi0zLjEnXHJcbiAgICB9LFxyXG4gICAgJzQwMic6IHtcclxuICAgICAgICAnY29kZSc6IDQwMixcclxuICAgICAgICAndGV4dCc6ICdQYXltZW50IFJlcXVpcmVkJyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnKnJlc2VydmVkKicsXHJcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuMicsXHJcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjInXHJcbiAgICB9LFxyXG4gICAgJzQwMyc6IHtcclxuICAgICAgICAnY29kZSc6IDQwMyxcclxuICAgICAgICAndGV4dCc6ICdGb3JiaWRkZW4nLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciB1bmRlcnN0b29kIHRoZSByZXF1ZXN0IGJ1dCByZWZ1c2VzIHRvIGF1dGhvcml6ZSBpdC5cXFwiJyxcclxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNS4zJyxcclxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuMydcclxuICAgIH0sXHJcbiAgICAnNDA0Jzoge1xyXG4gICAgICAgICdjb2RlJzogNDA0LFxyXG4gICAgICAgICd0ZXh0JzogJ05vdCBGb3VuZCcsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgb3JpZ2luIHNlcnZlciBkaWQgbm90IGZpbmQgYSBjdXJyZW50IHJlcHJlc2VudGF0aW9uIGZvciB0aGUgdGFyZ2V0IHJlc291cmNlIG9yIGlzIG5vdCB3aWxsaW5nIHRvIGRpc2Nsb3NlIHRoYXQgb25lIGV4aXN0cy5cXFwiJyxcclxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNS40JyxcclxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuNCdcclxuICAgIH0sXHJcbiAgICAnNDA1Jzoge1xyXG4gICAgICAgICdjb2RlJzogNDA1LFxyXG4gICAgICAgICd0ZXh0JzogJ01ldGhvZCBOb3QgQWxsb3dlZCcsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgbWV0aG9kIHNwZWNpZmllZCBpbiB0aGUgcmVxdWVzdC1saW5lIGlzIGtub3duIGJ5IHRoZSBvcmlnaW4gc2VydmVyIGJ1dCBub3Qgc3VwcG9ydGVkIGJ5IHRoZSB0YXJnZXQgcmVzb3VyY2UuXFxcIicsXHJcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuNScsXHJcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjUnXHJcbiAgICB9LFxyXG4gICAgJzQwNic6IHtcclxuICAgICAgICAnY29kZSc6IDQwNixcclxuICAgICAgICAndGV4dCc6ICdOb3QgQWNjZXB0YWJsZScsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgdGFyZ2V0IHJlc291cmNlIGRvZXMgbm90IGhhdmUgYSBjdXJyZW50IHJlcHJlc2VudGF0aW9uIHRoYXQgd291bGQgYmUgYWNjZXB0YWJsZSB0byB0aGUgdXNlciBhZ2VudCwgYWNjb3JkaW5nIHRvIHRoZSBwcm9hY3RpdmUgbmVnb3RpYXRpb24gaGVhZGVyIGZpZWxkcyByZWNlaXZlZCBpbiB0aGUgcmVxdWVzdCwgYW5kIHRoZSBzZXJ2ZXIgaXMgdW53aWxsaW5nIHRvIHN1cHBseSBhIGRlZmF1bHQgcmVwcmVzZW50YXRpb24uXFxcIicsXHJcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuNicsXHJcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjYnXHJcbiAgICB9LFxyXG4gICAgJzQwNyc6IHtcclxuICAgICAgICAnY29kZSc6IDQwNyxcclxuICAgICAgICAndGV4dCc6ICdQcm94eSBBdXRoZW50aWNhdGlvbiBSZXF1aXJlZCcsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgY2xpZW50IG5lZWRzIHRvIGF1dGhlbnRpY2F0ZSBpdHNlbGYgaW4gb3JkZXIgdG8gdXNlIGEgcHJveHkuXFxcIicsXHJcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjMuMicsXHJcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi4zLjInXHJcbiAgICB9LFxyXG4gICAgJzQwOCc6IHtcclxuICAgICAgICAnY29kZSc6IDQwOCxcclxuICAgICAgICAndGV4dCc6ICdSZXF1ZXN0IFRpbWVvdXQnLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciBkaWQgbm90IHJlY2VpdmUgYSBjb21wbGV0ZSByZXF1ZXN0IG1lc3NhZ2Ugd2l0aGluIHRoZSB0aW1lIHRoYXQgaXQgd2FzIHByZXBhcmVkIHRvIHdhaXQuXFxcIicsXHJcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuNycsXHJcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjcnXHJcbiAgICB9LFxyXG4gICAgJzQwOSc6IHtcclxuICAgICAgICAnY29kZSc6IDQwOSxcclxuICAgICAgICAndGV4dCc6ICdDb25mbGljdCcsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgcmVxdWVzdCBjb3VsZCBub3QgYmUgY29tcGxldGVkIGR1ZSB0byBhIGNvbmZsaWN0IHdpdGggdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIHJlc291cmNlLlxcXCInLFxyXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi41LjgnLFxyXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS44J1xyXG4gICAgfSxcclxuICAgICc0MTAnOiB7XHJcbiAgICAgICAgJ2NvZGUnOiA0MTAsXHJcbiAgICAgICAgJ3RleHQnOiAnR29uZScsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJBY2Nlc3MgdG8gdGhlIHRhcmdldCByZXNvdXJjZSBpcyBubyBsb25nZXIgYXZhaWxhYmxlIGF0IHRoZSBvcmlnaW4gc2VydmVyIGFuZCB0aGF0IHRoaXMgY29uZGl0aW9uIGlzIGxpa2VseSB0byBiZSBwZXJtYW5lbnQuXFxcIicsXHJcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuOScsXHJcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjknXHJcbiAgICB9LFxyXG4gICAgJzQxMSc6IHtcclxuICAgICAgICAnY29kZSc6IDQxMSxcclxuICAgICAgICAndGV4dCc6ICdMZW5ndGggUmVxdWlyZWQnLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciByZWZ1c2VzIHRvIGFjY2VwdCB0aGUgcmVxdWVzdCB3aXRob3V0IGEgZGVmaW5lZCBDb250ZW50LUxlbmd0aC5cXFwiJyxcclxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNS4xMCcsXHJcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjEwJ1xyXG4gICAgfSxcclxuICAgICc0MTInOiB7XHJcbiAgICAgICAgJ2NvZGUnOiA0MTIsXHJcbiAgICAgICAgJ3RleHQnOiAnUHJlY29uZGl0aW9uIEZhaWxlZCcsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJPbmUgb3IgbW9yZSBwcmVjb25kaXRpb25zIGdpdmVuIGluIHRoZSByZXF1ZXN0IGhlYWRlciBmaWVsZHMgZXZhbHVhdGVkIHRvIGZhbHNlIHdoZW4gdGVzdGVkIG9uIHRoZSBzZXJ2ZXIuXFxcIicsXHJcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMiM0LjInLFxyXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMiNzZWN0aW9uLTQuMidcclxuICAgIH0sXHJcbiAgICAnNDEzJzoge1xyXG4gICAgICAgICdjb2RlJzogNDEzLFxyXG4gICAgICAgICd0ZXh0JzogJ1BheWxvYWQgVG9vIExhcmdlJyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgaXMgcmVmdXNpbmcgdG8gcHJvY2VzcyBhIHJlcXVlc3QgYmVjYXVzZSB0aGUgcmVxdWVzdCBwYXlsb2FkIGlzIGxhcmdlciB0aGFuIHRoZSBzZXJ2ZXIgaXMgd2lsbGluZyBvciBhYmxlIHRvIHByb2Nlc3MuXFxcIicsXHJcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuMTEnLFxyXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS4xMSdcclxuICAgIH0sXHJcbiAgICAnNDE0Jzoge1xyXG4gICAgICAgICdjb2RlJzogNDE0LFxyXG4gICAgICAgICd0ZXh0JzogJ1VSSSBUb28gTG9uZycsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIGlzIHJlZnVzaW5nIHRvIHNlcnZpY2UgdGhlIHJlcXVlc3QgYmVjYXVzZSB0aGUgcmVxdWVzdC10YXJnZXQgaXMgbG9uZ2VyIHRoYW4gdGhlIHNlcnZlciBpcyB3aWxsaW5nIHRvIGludGVycHJldC5cXFwiJyxcclxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNS4xMicsXHJcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjEyJ1xyXG4gICAgfSxcclxuICAgICc0MTUnOiB7XHJcbiAgICAgICAgJ2NvZGUnOiA0MTUsXHJcbiAgICAgICAgJ3RleHQnOiAnVW5zdXBwb3J0ZWQgTWVkaWEgVHlwZScsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgb3JpZ2luIHNlcnZlciBpcyByZWZ1c2luZyB0byBzZXJ2aWNlIHRoZSByZXF1ZXN0IGJlY2F1c2UgdGhlIHBheWxvYWQgaXMgaW4gYSBmb3JtYXQgbm90IHN1cHBvcnRlZCBieSB0aGUgdGFyZ2V0IHJlc291cmNlIGZvciB0aGlzIG1ldGhvZC5cXFwiJyxcclxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNS4xMycsXHJcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjEzJ1xyXG4gICAgfSxcclxuICAgICc0MTYnOiB7XHJcbiAgICAgICAgJ2NvZGUnOiA0MTYsXHJcbiAgICAgICAgJ3RleHQnOiAnUmFuZ2UgTm90IFNhdGlzZmlhYmxlJyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIk5vbmUgb2YgdGhlIHJhbmdlcyBpbiB0aGUgcmVxdWVzdFxcJ3MgUmFuZ2UgaGVhZGVyIGZpZWxkIG92ZXJsYXAgdGhlIGN1cnJlbnQgZXh0ZW50IG9mIHRoZSBzZWxlY3RlZCByZXNvdXJjZSBvciB0aGF0IHRoZSBzZXQgb2YgcmFuZ2VzIHJlcXVlc3RlZCBoYXMgYmVlbiByZWplY3RlZCBkdWUgdG8gaW52YWxpZCByYW5nZXMgb3IgYW4gZXhjZXNzaXZlIHJlcXVlc3Qgb2Ygc21hbGwgb3Igb3ZlcmxhcHBpbmcgcmFuZ2VzLlxcXCInLFxyXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzMjNC40JyxcclxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzMjc2VjdGlvbi00LjQnXHJcbiAgICB9LFxyXG4gICAgJzQxNyc6IHtcclxuICAgICAgICAnY29kZSc6IDQxNyxcclxuICAgICAgICAndGV4dCc6ICdFeHBlY3RhdGlvbiBGYWlsZWQnLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIGV4cGVjdGF0aW9uIGdpdmVuIGluIHRoZSByZXF1ZXN0XFwncyBFeHBlY3QgaGVhZGVyIGZpZWxkIGNvdWxkIG5vdCBiZSBtZXQgYnkgYXQgbGVhc3Qgb25lIG9mIHRoZSBpbmJvdW5kIHNlcnZlcnMuXFxcIicsXHJcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuMTQnLFxyXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS4xNCdcclxuICAgIH0sXHJcbiAgICAnNDE4Jzoge1xyXG4gICAgICAgICdjb2RlJzogNDE4LFxyXG4gICAgICAgICd0ZXh0JzogJ0lcXCdtIGEgdGVhcG90JyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIjE5ODggQXByaWwgRm9vbHMgSm9rZS4gUmV0dXJuZWQgYnkgdGVhIHBvdHMgcmVxdWVzdGVkIHRvIGJyZXcgY29mZmVlLlxcXCInLFxyXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQyAyMzI0JyxcclxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyMzI0J1xyXG4gICAgfSxcclxuICAgICc0MjYnOiB7XHJcbiAgICAgICAgJ2NvZGUnOiA0MjYsXHJcbiAgICAgICAgJ3RleHQnOiAnVXBncmFkZSBSZXF1aXJlZCcsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIHJlZnVzZXMgdG8gcGVyZm9ybSB0aGUgcmVxdWVzdCB1c2luZyB0aGUgY3VycmVudCBwcm90b2NvbCBidXQgbWlnaHQgYmUgd2lsbGluZyB0byBkbyBzbyBhZnRlciB0aGUgY2xpZW50IHVwZ3JhZGVzIHRvIGEgZGlmZmVyZW50IHByb3RvY29sLlxcXCInLFxyXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi41LjE1JyxcclxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuMTUnXHJcbiAgICB9LFxyXG4gICAgJzUwMCc6IHtcclxuICAgICAgICAnY29kZSc6IDUwMCxcclxuICAgICAgICAndGV4dCc6ICdJbnRlcm5hbCBTZXJ2ZXIgRXJyb3InLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciBlbmNvdW50ZXJlZCBhbiB1bmV4cGVjdGVkIGNvbmRpdGlvbiB0aGF0IHByZXZlbnRlZCBpdCBmcm9tIGZ1bGZpbGxpbmcgdGhlIHJlcXVlc3QuXFxcIicsXHJcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjYuMScsXHJcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi42LjEnXHJcbiAgICB9LFxyXG4gICAgJzUwMSc6IHtcclxuICAgICAgICAnY29kZSc6IDUwMSxcclxuICAgICAgICAndGV4dCc6ICdOb3QgSW1wbGVtZW50ZWQnLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciBkb2VzIG5vdCBzdXBwb3J0IHRoZSBmdW5jdGlvbmFsaXR5IHJlcXVpcmVkIHRvIGZ1bGZpbGwgdGhlIHJlcXVlc3QuXFxcIicsXHJcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjYuMicsXHJcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi42LjInXHJcbiAgICB9LFxyXG4gICAgJzUwMic6IHtcclxuICAgICAgICAnY29kZSc6IDUwMixcclxuICAgICAgICAndGV4dCc6ICdCYWQgR2F0ZXdheScsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyLCB3aGlsZSBhY3RpbmcgYXMgYSBnYXRld2F5IG9yIHByb3h5LCByZWNlaXZlZCBhbiBpbnZhbGlkIHJlc3BvbnNlIGZyb20gYW4gaW5ib3VuZCBzZXJ2ZXIgaXQgYWNjZXNzZWQgd2hpbGUgYXR0ZW1wdGluZyB0byBmdWxmaWxsIHRoZSByZXF1ZXN0LlxcXCInLFxyXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi42LjMnLFxyXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNi4zJ1xyXG4gICAgfSxcclxuICAgICc1MDMnOiB7XHJcbiAgICAgICAgJ2NvZGUnOiA1MDMsXHJcbiAgICAgICAgJ3RleHQnOiAnU2VydmljZSBVbmF2YWlsYWJsZScsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIGlzIGN1cnJlbnRseSB1bmFibGUgdG8gaGFuZGxlIHRoZSByZXF1ZXN0IGR1ZSB0byBhIHRlbXBvcmFyeSBvdmVybG9hZCBvciBzY2hlZHVsZWQgbWFpbnRlbmFuY2UsIHdoaWNoIHdpbGwgbGlrZWx5IGJlIGFsbGV2aWF0ZWQgYWZ0ZXIgc29tZSBkZWxheS5cXFwiJyxcclxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNi40JyxcclxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjYuNCdcclxuICAgIH0sXHJcbiAgICAnNTA0Jzoge1xyXG4gICAgICAgICdjb2RlJzogNTA0LFxyXG4gICAgICAgICd0ZXh0JzogJ0dhdGV3YXkgVGltZS1vdXQnLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciwgd2hpbGUgYWN0aW5nIGFzIGEgZ2F0ZXdheSBvciBwcm94eSwgZGlkIG5vdCByZWNlaXZlIGEgdGltZWx5IHJlc3BvbnNlIGZyb20gYW4gdXBzdHJlYW0gc2VydmVyIGl0IG5lZWRlZCB0byBhY2Nlc3MgaW4gb3JkZXIgdG8gY29tcGxldGUgdGhlIHJlcXVlc3QuXFxcIicsXHJcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjYuNScsXHJcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi42LjUnXHJcbiAgICB9LFxyXG4gICAgJzUwNSc6IHtcclxuICAgICAgICAnY29kZSc6IDUwNSxcclxuICAgICAgICAndGV4dCc6ICdIVFRQIFZlcnNpb24gTm90IFN1cHBvcnRlZCcsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIGRvZXMgbm90IHN1cHBvcnQsIG9yIHJlZnVzZXMgdG8gc3VwcG9ydCwgdGhlIHByb3RvY29sIHZlcnNpb24gdGhhdCB3YXMgdXNlZCBpbiB0aGUgcmVxdWVzdCBtZXNzYWdlLlxcXCInLFxyXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi42LjYnLFxyXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNi42J1xyXG4gICAgfSxcclxuICAgICcxMDInOiB7XHJcbiAgICAgICAgJ2NvZGUnOiAxMDIsXHJcbiAgICAgICAgJ3RleHQnOiAnUHJvY2Vzc2luZycsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJBbiBpbnRlcmltIHJlc3BvbnNlIHRvIGluZm9ybSB0aGUgY2xpZW50IHRoYXQgdGhlIHNlcnZlciBoYXMgYWNjZXB0ZWQgdGhlIGNvbXBsZXRlIHJlcXVlc3QsIGJ1dCBoYXMgbm90IHlldCBjb21wbGV0ZWQgaXQuXFxcIicsXHJcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNTIxOCMxMC4xJyxcclxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzI1MTgjc2VjdGlvbi0xMC4xJ1xyXG4gICAgfSxcclxuICAgICcyMDcnOiB7XHJcbiAgICAgICAgJ2NvZGUnOiAyMDcsXHJcbiAgICAgICAgJ3RleHQnOiAnTXVsdGktU3RhdHVzJyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlN0YXR1cyBmb3IgbXVsdGlwbGUgaW5kZXBlbmRlbnQgb3BlcmF0aW9ucy5cXFwiJyxcclxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM1MjE4IzEwLjInLFxyXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMjUxOCNzZWN0aW9uLTEwLjInXHJcbiAgICB9LFxyXG4gICAgJzIyNic6IHtcclxuICAgICAgICAnY29kZSc6IDIyNixcclxuICAgICAgICAndGV4dCc6ICdJTSBVc2VkJyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgaGFzIGZ1bGZpbGxlZCBhIEdFVCByZXF1ZXN0IGZvciB0aGUgcmVzb3VyY2UsIGFuZCB0aGUgcmVzcG9uc2UgaXMgYSByZXByZXNlbnRhdGlvbiBvZiB0aGUgcmVzdWx0IG9mIG9uZSBvciBtb3JlIGluc3RhbmNlLW1hbmlwdWxhdGlvbnMgYXBwbGllZCB0byB0aGUgY3VycmVudCBpbnN0YW5jZS5cXFwiJyxcclxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkMzMjI5IzEwLjQuMScsXHJcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzMjI5I3NlY3Rpb24tMTAuNC4xJ1xyXG4gICAgfSxcclxuICAgICczMDgnOiB7XHJcbiAgICAgICAgJ2NvZGUnOiAzMDgsXHJcbiAgICAgICAgJ3RleHQnOiAnUGVybWFuZW50IFJlZGlyZWN0JyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSB0YXJnZXQgcmVzb3VyY2UgaGFzIGJlZW4gYXNzaWduZWQgYSBuZXcgcGVybWFuZW50IFVSSSBhbmQgYW55IGZ1dHVyZSByZWZlcmVuY2VzIHRvIHRoaXMgcmVzb3VyY2UgU0hPVUxEIHVzZSBvbmUgb2YgdGhlIHJldHVybmVkIFVSSXMuIFsuLi5dIFRoaXMgc3RhdHVzIGNvZGUgaXMgc2ltaWxhciB0byAzMDEgTW92ZWQgUGVybWFuZW50bHkgKFNlY3Rpb24gNy4zLjIgb2YgcmZjNzIzMSksIGV4Y2VwdCB0aGF0IGl0IGRvZXMgbm90IGFsbG93IHJld3JpdGluZyB0aGUgcmVxdWVzdCBtZXRob2QgZnJvbSBQT1NUIHRvIEdFVC5cXFwiJyxcclxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjM4JyxcclxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzgnXHJcbiAgICB9LFxyXG4gICAgJzQyMic6IHtcclxuICAgICAgICAnY29kZSc6IDQyMixcclxuICAgICAgICAndGV4dCc6ICdVbnByb2Nlc3NhYmxlIEVudGl0eScsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIHVuZGVyc3RhbmRzIHRoZSBjb250ZW50IHR5cGUgb2YgdGhlIHJlcXVlc3QgZW50aXR5IChoZW5jZSBhIDQxNShVbnN1cHBvcnRlZCBNZWRpYSBUeXBlKSBzdGF0dXMgY29kZSBpcyBpbmFwcHJvcHJpYXRlKSwgYW5kIHRoZSBzeW50YXggb2YgdGhlIHJlcXVlc3QgZW50aXR5IGlzIGNvcnJlY3QgKHRodXMgYSA0MDAgKEJhZCBSZXF1ZXN0KSBzdGF0dXMgY29kZSBpcyBpbmFwcHJvcHJpYXRlKSBidXQgd2FzIHVuYWJsZSB0byBwcm9jZXNzIHRoZSBjb250YWluZWQgaW5zdHJ1Y3Rpb25zLlxcXCInLFxyXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzUyMTgjMTAuMycsXHJcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyNTE4I3NlY3Rpb24tMTAuMydcclxuICAgIH0sXHJcbiAgICAnNDIzJzoge1xyXG4gICAgICAgICdjb2RlJzogNDIzLFxyXG4gICAgICAgICd0ZXh0JzogJ0xvY2tlZCcsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc291cmNlIG9yIGRlc3RpbmF0aW9uIHJlc291cmNlIG9mIGEgbWV0aG9kIGlzIGxvY2tlZC5cXFwiJyxcclxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM1MjE4IzEwLjQnLFxyXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMjUxOCNzZWN0aW9uLTEwLjQnXHJcbiAgICB9LFxyXG4gICAgJzQyNCc6IHtcclxuICAgICAgICAnY29kZSc6IDQyNCxcclxuICAgICAgICAndGV4dCc6ICdGYWlsZWQgRGVwZW5kZW5jeScsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgbWV0aG9kIGNvdWxkIG5vdCBiZSBwZXJmb3JtZWQgb24gdGhlIHJlc291cmNlIGJlY2F1c2UgdGhlIHJlcXVlc3RlZCBhY3Rpb24gZGVwZW5kZWQgb24gYW5vdGhlciBhY3Rpb24gYW5kIHRoYXQgYWN0aW9uIGZhaWxlZC5cXFwiJyxcclxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM1MjE4IzEwLjUnLFxyXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMjUxOCNzZWN0aW9uLTEwLjUnXHJcbiAgICB9LFxyXG4gICAgJzQyOCc6IHtcclxuICAgICAgICAnY29kZSc6IDQyOCxcclxuICAgICAgICAndGV4dCc6ICdQcmVjb25kaXRpb24gUmVxdWlyZWQnLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIG9yaWdpbiBzZXJ2ZXIgcmVxdWlyZXMgdGhlIHJlcXVlc3QgdG8gYmUgY29uZGl0aW9uYWwuXFxcIicsXHJcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNjU4NSMzJyxcclxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzY1ODUjc2VjdGlvbi0zJ1xyXG4gICAgfSxcclxuICAgICc0MjknOiB7XHJcbiAgICAgICAgJ2NvZGUnOiA0MjksXHJcbiAgICAgICAgJ3RleHQnOiAnVG9vIE1hbnkgUmVxdWVzdHMnLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHVzZXIgaGFzIHNlbnQgdG9vIG1hbnkgcmVxdWVzdHMgaW4gYSBnaXZlbiBhbW91bnQgb2YgdGltZSAoXFxcInJhdGUgbGltaXRpbmdcXFwiKS5cXFwiJyxcclxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM2NTg1IzQnLFxyXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNjU4NSNzZWN0aW9uLTQnXHJcbiAgICB9LFxyXG4gICAgJzQzMSc6IHtcclxuICAgICAgICAnY29kZSc6IDQzMSxcclxuICAgICAgICAndGV4dCc6ICdSZXF1ZXN0IEhlYWRlciBGaWVsZHMgVG9vIExhcmdlJyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgaXMgdW53aWxsaW5nIHRvIHByb2Nlc3MgdGhlIHJlcXVlc3QgYmVjYXVzZSBpdHMgaGVhZGVyIGZpZWxkcyBhcmUgdG9vIGxhcmdlLlxcXCInLFxyXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzY1ODUjNScsXHJcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM2NTg1I3NlY3Rpb24tNSdcclxuICAgIH0sXHJcbiAgICAnNDUxJzoge1xyXG4gICAgICAgICdjb2RlJzogNDUxLFxyXG4gICAgICAgICd0ZXh0JzogJ1VuYXZhaWxhYmxlIEZvciBMZWdhbCBSZWFzb25zJyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgaXMgZGVueWluZyBhY2Nlc3MgdG8gdGhlIHJlc291cmNlIGluIHJlc3BvbnNlIHRvIGEgbGVnYWwgZGVtYW5kLlxcXCInLFxyXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ2RyYWZ0LWlldGYtaHR0cGJpcy1sZWdhbGx5LXJlc3RyaWN0ZWQtc3RhdHVzJyxcclxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL2RyYWZ0LWlldGYtaHR0cGJpcy1sZWdhbGx5LXJlc3RyaWN0ZWQtc3RhdHVzJ1xyXG4gICAgfSxcclxuICAgICc1MDYnOiB7XHJcbiAgICAgICAgJ2NvZGUnOiA1MDYsXHJcbiAgICAgICAgJ3RleHQnOiAnVmFyaWFudCBBbHNvIE5lZ290aWF0ZXMnLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciBoYXMgYW4gaW50ZXJuYWwgY29uZmlndXJhdGlvbiBlcnJvcjogdGhlIGNob3NlbiB2YXJpYW50IHJlc291cmNlIGlzIGNvbmZpZ3VyZWQgdG8gZW5nYWdlIGluIHRyYW5zcGFyZW50IGNvbnRlbnQgbmVnb3RpYXRpb24gaXRzZWxmLCBhbmQgaXMgdGhlcmVmb3JlIG5vdCBhIHByb3BlciBlbmQgcG9pbnQgaW4gdGhlIG5lZ290aWF0aW9uIHByb2Nlc3MuXFxcIicsXHJcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDMjI5NSM4LjEnLFxyXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMjI5NSNzZWN0aW9uLTguMSdcclxuICAgIH0sXHJcbiAgICAnNTA3Jzoge1xyXG4gICAgICAgICdjb2RlJzogNTA3LFxyXG4gICAgICAgICd0ZXh0JzogJ0luc3VmZmljaWVudCBTdG9yYWdlJyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxUaGUgbWV0aG9kIGNvdWxkIG5vdCBiZSBwZXJmb3JtZWQgb24gdGhlIHJlc291cmNlIGJlY2F1c2UgdGhlIHNlcnZlciBpcyB1bmFibGUgdG8gc3RvcmUgdGhlIHJlcHJlc2VudGF0aW9uIG5lZWRlZCB0byBzdWNjZXNzZnVsbHkgY29tcGxldGUgdGhlIHJlcXVlc3QuXFxcIicsXHJcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNTIxOCMxMC42JyxcclxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzI1MTgjc2VjdGlvbi0xMC42J1xyXG4gICAgfSxcclxuICAgICc1MTEnOiB7XHJcbiAgICAgICAgJ2NvZGUnOiA1MTEsXHJcbiAgICAgICAgJ3RleHQnOiAnTmV0d29yayBBdXRoZW50aWNhdGlvbiBSZXF1aXJlZCcsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgY2xpZW50IG5lZWRzIHRvIGF1dGhlbnRpY2F0ZSB0byBnYWluIG5ldHdvcmsgYWNjZXNzLlxcXCInLFxyXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzY1ODUjNicsXHJcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM2NTg1I3NlY3Rpb24tNidcclxuICAgIH1cclxufTtcclxuLyoqXHJcbiAqIGdldCB0aGUgc3RhdHVzIHRleHQgZnJvbSBTdGF0dXNDb2RlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RhdHVzVGV4dChzdGF0dXMpIHtcclxuICAgIHJldHVybiBTVEFUVVNfQ09ERV9JTkZPW3N0YXR1c10udGV4dCB8fCAnVW5rbm93biBTdGF0dXMnO1xyXG59XHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHRoZSBIdHRwIFN0YXR1cyBDb2RlIGlzIDIwMC0yOTkgKHN1Y2Nlc3MpXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNTdWNjZXNzKHN0YXR1cykgeyByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDA7IH1cclxuO1xyXG4iLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbi8vIFJlcGxhY2VzIHVzZSBvZiBSeEpTIGRlbGF5LiBTZWUgdjAuNS40LlxyXG4vKiogYWRkcyBzcGVjaWZpZWQgZGVsYXkgKGluIG1zKSB0byBib3RoIG5leHQgYW5kIGVycm9yIGNoYW5uZWxzIG9mIHRoZSByZXNwb25zZSBvYnNlcnZhYmxlICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWxheVJlc3BvbnNlKHJlc3BvbnNlJCwgZGVsYXlNcykge1xyXG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKGZ1bmN0aW9uIChvYnNlcnZlcikge1xyXG4gICAgICAgIHZhciBjb21wbGV0ZVBlbmRpbmcgPSBmYWxzZTtcclxuICAgICAgICB2YXIgbmV4dFBlbmRpbmcgPSBmYWxzZTtcclxuICAgICAgICB2YXIgc3Vic2NyaXB0aW9uID0gcmVzcG9uc2UkLnN1YnNjcmliZShmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgbmV4dFBlbmRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbXBsZXRlUGVuZGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIGRlbGF5TXMpO1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnJvcikgeyByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBvYnNlcnZlci5lcnJvcihlcnJvcik7IH0sIGRlbGF5TXMpOyB9LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbXBsZXRlUGVuZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmICghbmV4dFBlbmRpbmcpIHtcclxuICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG59XHJcbiIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbi8qKlxyXG4qIEludGVyZmFjZSBmb3IgYSBjbGFzcyB0aGF0IGNyZWF0ZXMgYW4gaW4tbWVtb3J5IGRhdGFiYXNlXHJcbipcclxuKiBJdHMgYGNyZWF0ZURiYCBtZXRob2QgY3JlYXRlcyBhIGhhc2ggb2YgbmFtZWQgY29sbGVjdGlvbnMgdGhhdCByZXByZXNlbnRzIHRoZSBkYXRhYmFzZVxyXG4qXHJcbiogRm9yIG1heGltdW0gZmxleGliaWxpdHksIHRoZSBzZXJ2aWNlIG1heSBkZWZpbmUgSFRUUCBtZXRob2Qgb3ZlcnJpZGVzLlxyXG4qIFN1Y2ggbWV0aG9kcyBtdXN0IG1hdGNoIHRoZSBzcGVsbGluZyBvZiBhbiBIVFRQIG1ldGhvZCBpbiBsb3dlciBjYXNlIChlLmcsIFwiZ2V0XCIpLlxyXG4qIElmIGEgcmVxdWVzdCBoYXMgYSBtYXRjaGluZyBtZXRob2QsIGl0IHdpbGwgYmUgY2FsbGVkIGFzIGluXHJcbiogYGdldChpbmZvOiByZXF1ZXN0SW5mbywgZGI6IHt9KWAgd2hlcmUgYGRiYCBpcyB0aGUgZGF0YWJhc2Ugb2JqZWN0IGRlc2NyaWJlZCBhYm92ZS5cclxuKi9cclxudmFyIEluTWVtb3J5RGJTZXJ2aWNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gSW5NZW1vcnlEYlNlcnZpY2UoKSB7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gSW5NZW1vcnlEYlNlcnZpY2U7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IEluTWVtb3J5RGJTZXJ2aWNlIH07XHJcbi8qKlxyXG4qIEludGVyZmFjZSBmb3IgSW5NZW1vcnlCYWNrZW5kIGNvbmZpZ3VyYXRpb24gb3B0aW9uc1xyXG4qL1xyXG52YXIgSW5NZW1vcnlCYWNrZW5kQ29uZmlnQXJncyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEluTWVtb3J5QmFja2VuZENvbmZpZ0FyZ3MoKSB7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gSW5NZW1vcnlCYWNrZW5kQ29uZmlnQXJncztcclxufSgpKTtcclxuZXhwb3J0IHsgSW5NZW1vcnlCYWNrZW5kQ29uZmlnQXJncyB9O1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLyoqXHJcbiogIEluTWVtb3J5QmFja2VuZFNlcnZpY2UgY29uZmlndXJhdGlvbiBvcHRpb25zXHJcbiogIFVzYWdlOlxyXG4qICAgIEluTWVtb3J5V2ViQXBpTW9kdWxlLmZvclJvb3QoSW5NZW1IZXJvU2VydmljZSwge2RlbGF5OiA2MDB9KVxyXG4qXHJcbiogIG9yIGlmIHByb3ZpZGluZyBzZXBhcmF0ZWx5OlxyXG4qICAgIHByb3ZpZGUoSW5NZW1vcnlCYWNrZW5kQ29uZmlnLCB7dXNlVmFsdWU6IHtkZWxheTogNjAwfX0pLFxyXG4qL1xyXG52YXIgSW5NZW1vcnlCYWNrZW5kQ29uZmlnID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gSW5NZW1vcnlCYWNrZW5kQ29uZmlnKGNvbmZpZykge1xyXG4gICAgICAgIGlmIChjb25maWcgPT09IHZvaWQgMCkgeyBjb25maWcgPSB7fTsgfVxyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywge1xyXG4gICAgICAgICAgICAvLyBkZWZhdWx0IGNvbmZpZzpcclxuICAgICAgICAgICAgY2FzZVNlbnNpdGl2ZVNlYXJjaDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRhdGFFbmNhcHN1bGF0aW9uOiBmYWxzZSxcclxuICAgICAgICAgICAgZGVsYXk6IDUwMCxcclxuICAgICAgICAgICAgZGVsZXRlNDA0OiBmYWxzZSxcclxuICAgICAgICAgICAgcGFzc1RocnVVbmtub3duVXJsOiBmYWxzZSxcclxuICAgICAgICAgICAgcG9zdDIwNDogdHJ1ZSxcclxuICAgICAgICAgICAgcG9zdDQwOTogZmFsc2UsXHJcbiAgICAgICAgICAgIHB1dDIwNDogdHJ1ZSxcclxuICAgICAgICAgICAgcHV0NDA0OiBmYWxzZSxcclxuICAgICAgICAgICAgYXBpQmFzZTogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICBob3N0OiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIHJvb3RQYXRoOiB1bmRlZmluZWQgLy8gZGVmYXVsdCB2YWx1ZSBpcyBhY3R1YWxseSBzZXQgaW4gSW5NZW1vcnlCYWNrZW5kU2VydmljZSBjdG9yXHJcbiAgICAgICAgfSwgY29uZmlnKTtcclxuICAgIH1cclxuICAgIEluTWVtb3J5QmFja2VuZENvbmZpZyA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIEluamVjdGFibGUoKSxcclxuICAgICAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW0luTWVtb3J5QmFja2VuZENvbmZpZ0FyZ3NdKVxyXG4gICAgXSwgSW5NZW1vcnlCYWNrZW5kQ29uZmlnKTtcclxuICAgIHJldHVybiBJbk1lbW9yeUJhY2tlbmRDb25maWc7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IEluTWVtb3J5QmFja2VuZENvbmZpZyB9O1xyXG4vKiogUmV0dXJuIGluZm9ybWF0aW9uIChVcmlJbmZvKSBhYm91dCBhIFVSSSAgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVXJpKHN0cikge1xyXG4gICAgLy8gQWRhcHRlZCBmcm9tIHBhcnNldXJpIHBhY2thZ2UgLSBodHRwOi8vYmxvZy5zdGV2ZW5sZXZpdGhhbi5jb20vYXJjaGl2ZXMvcGFyc2V1cmlcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcclxuICAgIHZhciBVUkxfUkVHRVggPSAvXig/Oig/IVteOkBdKzpbXjpAXFwvXSpAKShbXjpcXC8/Iy5dKyk6KT8oPzpcXC9cXC8pPygoPzooKFteOkBdKikoPzo6KFteOkBdKikpPyk/QCk/KFteOlxcLz8jXSopKD86OihcXGQqKSk/KSgoKFxcLyg/OltePyNdKD8hW14/I1xcL10qXFwuW14/I1xcLy5dKyg/Ols/I118JCkpKSpcXC8/KT8oW14/I1xcL10qKSkoPzpcXD8oW14jXSopKT8oPzojKC4qKSk/KS87XHJcbiAgICB2YXIgbSA9IFVSTF9SRUdFWC5leGVjKHN0cik7XHJcbiAgICB2YXIgdXJpID0ge1xyXG4gICAgICAgIHNvdXJjZTogJycsXHJcbiAgICAgICAgcHJvdG9jb2w6ICcnLFxyXG4gICAgICAgIGF1dGhvcml0eTogJycsXHJcbiAgICAgICAgdXNlckluZm86ICcnLFxyXG4gICAgICAgIHVzZXI6ICcnLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgICBob3N0OiAnJyxcclxuICAgICAgICBwb3J0OiAnJyxcclxuICAgICAgICByZWxhdGl2ZTogJycsXHJcbiAgICAgICAgcGF0aDogJycsXHJcbiAgICAgICAgZGlyZWN0b3J5OiAnJyxcclxuICAgICAgICBmaWxlOiAnJyxcclxuICAgICAgICBxdWVyeTogJycsXHJcbiAgICAgICAgYW5jaG9yOiAnJ1xyXG4gICAgfTtcclxuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModXJpKTtcclxuICAgIHZhciBpID0ga2V5cy5sZW5ndGg7XHJcbiAgICB3aGlsZSAoaS0tKSB7XHJcbiAgICAgICAgdXJpW2tleXNbaV1dID0gbVtpXSB8fCAnJztcclxuICAgIH1cclxuICAgIHJldHVybiB1cmk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRyYWlsaW5nU2xhc2gocGF0aCkge1xyXG4gICAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwvJC8sICcnKTtcclxufVxyXG4iLCJpbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QsIG9mLCBmcm9tIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGNvbmNhdE1hcCwgZmlyc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IGdldFN0YXR1c1RleHQsIGlzU3VjY2VzcywgU1RBVFVTIH0gZnJvbSAnLi9odHRwLXN0YXR1cy1jb2Rlcyc7XHJcbmltcG9ydCB7IGRlbGF5UmVzcG9uc2UgfSBmcm9tICcuL2RlbGF5LXJlc3BvbnNlJztcclxuaW1wb3J0IHsgSW5NZW1vcnlCYWNrZW5kQ29uZmlnLCBwYXJzZVVyaSwgcmVtb3ZlVHJhaWxpbmdTbGFzaCB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XHJcbi8qKlxyXG4gKiBCYXNlIGNsYXNzIGZvciBpbi1tZW1vcnkgd2ViIGFwaSBiYWNrLWVuZHNcclxuICogU2ltdWxhdGUgdGhlIGJlaGF2aW9yIG9mIGEgUkVTVHkgd2ViIGFwaVxyXG4gKiBiYWNrZWQgYnkgdGhlIHNpbXBsZSBpbi1tZW1vcnkgZGF0YSBzdG9yZSBwcm92aWRlZCBieSB0aGUgaW5qZWN0ZWQgYEluTWVtb3J5RGJTZXJ2aWNlYCBzZXJ2aWNlLlxyXG4gKiBDb25mb3JtcyBtb3N0bHkgdG8gYmVoYXZpb3IgZGVzY3JpYmVkIGhlcmU6XHJcbiAqIGh0dHA6Ly93d3cucmVzdGFwaXR1dG9yaWFsLmNvbS9sZXNzb25zL2h0dHBtZXRob2RzLmh0bWxcclxuICovXHJcbnZhciBCYWNrZW5kU2VydmljZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEJhY2tlbmRTZXJ2aWNlKGluTWVtRGJTZXJ2aWNlLCBjb25maWcpIHtcclxuICAgICAgICBpZiAoY29uZmlnID09PSB2b2lkIDApIHsgY29uZmlnID0ge307IH1cclxuICAgICAgICB0aGlzLmluTWVtRGJTZXJ2aWNlID0gaW5NZW1EYlNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5jb25maWcgPSBuZXcgSW5NZW1vcnlCYWNrZW5kQ29uZmlnKCk7XHJcbiAgICAgICAgdGhpcy5yZXF1ZXN0SW5mb1V0aWxzID0gdGhpcy5nZXRSZXF1ZXN0SW5mb1V0aWxzKCk7XHJcbiAgICAgICAgdmFyIGxvYyA9IHRoaXMuZ2V0TG9jYXRpb24oJy8nKTtcclxuICAgICAgICB0aGlzLmNvbmZpZy5ob3N0ID0gbG9jLmhvc3Q7IC8vIGRlZmF1bHQgdG8gYXBwIHdlYiBzZXJ2ZXIgaG9zdFxyXG4gICAgICAgIHRoaXMuY29uZmlnLnJvb3RQYXRoID0gbG9jLnBhdGg7IC8vIGRlZmF1bHQgdG8gcGF0aCB3aGVuIGFwcCBpcyBzZXJ2ZWQgKGUuZy4nLycpXHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmNvbmZpZywgY29uZmlnKTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCYWNrZW5kU2VydmljZS5wcm90b3R5cGUsIFwiZGJSZWFkeVwiLCB7XHJcbiAgICAgICAgLy8vLyAgcHJvdGVjdGVkIC8vLy8vXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5kYlJlYWR5U3ViamVjdCkge1xyXG4gICAgICAgICAgICAgICAgLy8gZmlyc3QgdGltZSB0aGUgc2VydmljZSBpcyBjYWxsZWQuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRiUmVhZHlTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0RGIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYlJlYWR5U3ViamVjdC5hc09ic2VydmFibGUoKS5waXBlKGZpcnN0KGZ1bmN0aW9uIChyKSB7IHJldHVybiByOyB9KSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICAvKipcclxuICAgICAqIFByb2Nlc3MgUmVxdWVzdCBhbmQgcmV0dXJuIGFuIE9ic2VydmFibGUgb2YgSHR0cCBSZXNwb25zZSBvYmplY3RcclxuICAgICAqIGluIHRoZSBtYW5uZXIgb2YgYSBSRVNUeSB3ZWIgYXBpLlxyXG4gICAgICpcclxuICAgICAqIEV4cGVjdCBVUkkgcGF0dGVybiBpbiB0aGUgZm9ybSA6YmFzZS86Y29sbGVjdGlvbk5hbWUvOmlkP1xyXG4gICAgICogRXhhbXBsZXM6XHJcbiAgICAgKiAgIC8vIGZvciBzdG9yZSB3aXRoIGEgJ2N1c3RvbWVycycgY29sbGVjdGlvblxyXG4gICAgICogICBHRVQgYXBpL2N1c3RvbWVycyAgICAgICAgICAvLyBhbGwgY3VzdG9tZXJzXHJcbiAgICAgKiAgIEdFVCBhcGkvY3VzdG9tZXJzLzQyICAgICAgIC8vIHRoZSBjaGFyYWN0ZXIgd2l0aCBpZD00MlxyXG4gICAgICogICBHRVQgYXBpL2N1c3RvbWVycz9uYW1lPV5qICAvLyAnaicgaXMgYSByZWdleDsgcmV0dXJucyBjdXN0b21lcnMgd2hvc2UgbmFtZSBzdGFydHMgd2l0aCAnaicgb3IgJ0onXHJcbiAgICAgKiAgIEdFVCBhcGkvY3VzdG9tZXJzLmpzb24vNDIgIC8vIGlnbm9yZXMgdGhlIFwiLmpzb25cIlxyXG4gICAgICpcclxuICAgICAqIEFsc28gYWNjZXB0cyBkaXJlY3QgY29tbWFuZHMgdG8gdGhlIHNlcnZpY2UgaW4gd2hpY2ggdGhlIGxhc3Qgc2VnbWVudCBvZiB0aGUgYXBpQmFzZSBpcyB0aGUgd29yZCBcImNvbW1hbmRzXCJcclxuICAgICAqIEV4YW1wbGVzOlxyXG4gICAgICogICAgIFBPU1QgY29tbWFuZHMvcmVzZXREYixcclxuICAgICAqICAgICBHRVQvUE9TVCBjb21tYW5kcy9jb25maWcgLSBnZXQgb3IgKHJlKXNldCB0aGUgY29uZmlnXHJcbiAgICAgKlxyXG4gICAgICogICBIVFRQIG92ZXJyaWRlczpcclxuICAgICAqICAgICBJZiB0aGUgaW5qZWN0ZWQgaW5NZW1EYlNlcnZpY2UgZGVmaW5lcyBhbiBIVFRQIG1ldGhvZCAobG93ZXJjYXNlKVxyXG4gICAgICogICAgIFRoZSByZXF1ZXN0IGlzIGZvcndhcmRlZCB0byB0aGF0IG1ldGhvZCBhcyBpblxyXG4gICAgICogICAgIGBpbk1lbURiU2VydmljZS5nZXQocmVxdWVzdEluZm8pYFxyXG4gICAgICogICAgIHdoaWNoIG11c3QgcmV0dXJuIGVpdGhlciBhbiBPYnNlcnZhYmxlIG9mIHRoZSByZXNwb25zZSB0eXBlXHJcbiAgICAgKiAgICAgZm9yIHRoaXMgaHR0cCBsaWJyYXJ5IG9yIG51bGx8dW5kZWZpbmVkICh3aGljaCBtZWFucyBcImtlZXAgcHJvY2Vzc2luZ1wiKS5cclxuICAgICAqL1xyXG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmhhbmRsZVJlcXVlc3QgPSBmdW5jdGlvbiAocmVxKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAvLyAgaGFuZGxlIHRoZSByZXF1ZXN0IHdoZW4gdGhlcmUgaXMgYW4gaW4tbWVtb3J5IGRhdGFiYXNlXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGJSZWFkeS5waXBlKGNvbmNhdE1hcChmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5oYW5kbGVSZXF1ZXN0XyhyZXEpOyB9KSk7XHJcbiAgICB9O1xyXG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmhhbmRsZVJlcXVlc3RfID0gZnVuY3Rpb24gKHJlcSkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHVybCA9IHJlcS51cmxXaXRoUGFyYW1zID8gcmVxLnVybFdpdGhQYXJhbXMgOiByZXEudXJsO1xyXG4gICAgICAgIC8vIFRyeSBvdmVycmlkZSBwYXJzZXJcclxuICAgICAgICAvLyBJZiBubyBvdmVycmlkZSBwYXJzZXIgb3IgaXQgcmV0dXJucyBub3RoaW5nLCB1c2UgZGVmYXVsdCBwYXJzZXJcclxuICAgICAgICB2YXIgcGFyc2VyID0gdGhpcy5iaW5kKCdwYXJzZVJlcXVlc3RVcmwnKTtcclxuICAgICAgICB2YXIgcGFyc2VkID0gKHBhcnNlciAmJiBwYXJzZXIodXJsLCB0aGlzLnJlcXVlc3RJbmZvVXRpbHMpKSB8fFxyXG4gICAgICAgICAgICB0aGlzLnBhcnNlUmVxdWVzdFVybCh1cmwpO1xyXG4gICAgICAgIHZhciBjb2xsZWN0aW9uTmFtZSA9IHBhcnNlZC5jb2xsZWN0aW9uTmFtZTtcclxuICAgICAgICB2YXIgY29sbGVjdGlvbiA9IHRoaXMuZGJbY29sbGVjdGlvbk5hbWVdO1xyXG4gICAgICAgIHZhciByZXFJbmZvID0ge1xyXG4gICAgICAgICAgICByZXE6IHJlcSxcclxuICAgICAgICAgICAgYXBpQmFzZTogcGFyc2VkLmFwaUJhc2UsXHJcbiAgICAgICAgICAgIGNvbGxlY3Rpb246IGNvbGxlY3Rpb24sXHJcbiAgICAgICAgICAgIGNvbGxlY3Rpb25OYW1lOiBjb2xsZWN0aW9uTmFtZSxcclxuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5jcmVhdGVIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KSxcclxuICAgICAgICAgICAgaWQ6IHRoaXMucGFyc2VJZChjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSwgcGFyc2VkLmlkKSxcclxuICAgICAgICAgICAgbWV0aG9kOiB0aGlzLmdldFJlcXVlc3RNZXRob2QocmVxKSxcclxuICAgICAgICAgICAgcXVlcnk6IHBhcnNlZC5xdWVyeSxcclxuICAgICAgICAgICAgcmVzb3VyY2VVcmw6IHBhcnNlZC5yZXNvdXJjZVVybCxcclxuICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgIHV0aWxzOiB0aGlzLnJlcXVlc3RJbmZvVXRpbHNcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciByZXNPcHRpb25zO1xyXG4gICAgICAgIGlmICgvY29tbWFuZHNcXC8/JC9pLnRlc3QocmVxSW5mby5hcGlCYXNlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb21tYW5kcyhyZXFJbmZvKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG1ldGhvZEludGVyY2VwdG9yID0gdGhpcy5iaW5kKHJlcUluZm8ubWV0aG9kKTtcclxuICAgICAgICBpZiAobWV0aG9kSW50ZXJjZXB0b3IpIHtcclxuICAgICAgICAgICAgLy8gSW5NZW1vcnlEYlNlcnZpY2UgaW50ZXJjZXB0cyB0aGlzIEhUVFAgbWV0aG9kLlxyXG4gICAgICAgICAgICAvLyBpZiBpbnRlcmNlcHRvciBwcm9kdWNlZCBhIHJlc3BvbnNlLCByZXR1cm4gaXQuXHJcbiAgICAgICAgICAgIC8vIGVsc2UgSW5NZW1vcnlEYlNlcnZpY2UgY2hvc2Ugbm90IHRvIGludGVyY2VwdDsgY29udGludWUgcHJvY2Vzc2luZy5cclxuICAgICAgICAgICAgdmFyIGludGVyY2VwdG9yUmVzcG9uc2UgPSBtZXRob2RJbnRlcmNlcHRvcihyZXFJbmZvKTtcclxuICAgICAgICAgICAgaWYgKGludGVyY2VwdG9yUmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbnRlcmNlcHRvclJlc3BvbnNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZGJbY29sbGVjdGlvbk5hbWVdKSB7XHJcbiAgICAgICAgICAgIC8vIHJlcXVlc3QgaXMgZm9yIGEga25vd24gY29sbGVjdGlvbiBvZiB0aGUgSW5NZW1vcnlEYlNlcnZpY2VcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlUmVzcG9uc2UkKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmNvbGxlY3Rpb25IYW5kbGVyKHJlcUluZm8pOyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLnBhc3NUaHJ1VW5rbm93blVybCkge1xyXG4gICAgICAgICAgICAvLyB1bmtub3duIGNvbGxlY3Rpb247IHBhc3MgcmVxdWVzdCB0aHJ1IHRvIGEgXCJyZWFsXCIgYmFja2VuZC5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UGFzc1RocnVCYWNrZW5kKCkuaGFuZGxlKHJlcSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIDQwNCAtIGNhbid0IGhhbmRsZSB0aGlzIHJlcXVlc3RcclxuICAgICAgICByZXNPcHRpb25zID0gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyh1cmwsIFNUQVRVUy5OT1RfRk9VTkQsIFwiQ29sbGVjdGlvbiAnXCIgKyBjb2xsZWN0aW9uTmFtZSArIFwiJyBub3QgZm91bmRcIik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlUmVzcG9uc2UkKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlc09wdGlvbnM7IH0pO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQWRkIGNvbmZpZ3VyZWQgZGVsYXkgdG8gcmVzcG9uc2Ugb2JzZXJ2YWJsZSB1bmxlc3MgZGVsYXkgPT09IDBcclxuICAgICAqL1xyXG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmFkZERlbGF5ID0gZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgdmFyIGQgPSB0aGlzLmNvbmZpZy5kZWxheTtcclxuICAgICAgICByZXR1cm4gZCA9PT0gMCA/IHJlc3BvbnNlIDogZGVsYXlSZXNwb25zZShyZXNwb25zZSwgZCB8fCA1MDApO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQXBwbHkgcXVlcnkvc2VhcmNoIHBhcmFtZXRlcnMgYXMgYSBmaWx0ZXIgb3ZlciB0aGUgY29sbGVjdGlvblxyXG4gICAgICogVGhpcyBpbXBsIG9ubHkgc3VwcG9ydHMgUmVnRXhwIHF1ZXJpZXMgb24gc3RyaW5nIHByb3BlcnRpZXMgb2YgdGhlIGNvbGxlY3Rpb25cclxuICAgICAqIEFORHMgdGhlIGNvbmRpdGlvbnMgdG9nZXRoZXJcclxuICAgICAqL1xyXG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmFwcGx5UXVlcnkgPSBmdW5jdGlvbiAoY29sbGVjdGlvbiwgcXVlcnkpIHtcclxuICAgICAgICAvLyBleHRyYWN0IGZpbHRlcmluZyBjb25kaXRpb25zIC0ge3Byb3BlcnR5TmFtZSwgUmVnRXhwcykgLSBmcm9tIHF1ZXJ5L3NlYXJjaCBwYXJhbWV0ZXJzXHJcbiAgICAgICAgdmFyIGNvbmRpdGlvbnMgPSBbXTtcclxuICAgICAgICB2YXIgY2FzZVNlbnNpdGl2ZSA9IHRoaXMuY29uZmlnLmNhc2VTZW5zaXRpdmVTZWFyY2ggPyB1bmRlZmluZWQgOiAnaSc7XHJcbiAgICAgICAgcXVlcnkuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIG5hbWUpIHtcclxuICAgICAgICAgICAgdmFsdWUuZm9yRWFjaChmdW5jdGlvbiAodikgeyByZXR1cm4gY29uZGl0aW9ucy5wdXNoKHsgbmFtZTogbmFtZSwgcng6IG5ldyBSZWdFeHAoZGVjb2RlVVJJKHYpLCBjYXNlU2Vuc2l0aXZlKSB9KTsgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIGxlbiA9IGNvbmRpdGlvbnMubGVuZ3RoO1xyXG4gICAgICAgIGlmICghbGVuKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb2xsZWN0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBTkQgdGhlIFJlZ0V4cCBjb25kaXRpb25zXHJcbiAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb24uZmlsdGVyKGZ1bmN0aW9uIChyb3cpIHtcclxuICAgICAgICAgICAgdmFyIG9rID0gdHJ1ZTtcclxuICAgICAgICAgICAgdmFyIGkgPSBsZW47XHJcbiAgICAgICAgICAgIHdoaWxlIChvayAmJiBpKSB7XHJcbiAgICAgICAgICAgICAgICBpIC09IDE7XHJcbiAgICAgICAgICAgICAgICB2YXIgY29uZCA9IGNvbmRpdGlvbnNbaV07XHJcbiAgICAgICAgICAgICAgICBvayA9IGNvbmQucngudGVzdChyb3dbY29uZC5uYW1lXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG9rO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogR2V0IGEgbWV0aG9kIGZyb20gdGhlIGBJbk1lbW9yeURiU2VydmljZWAgKGlmIGl0IGV4aXN0cyksIGJvdW5kIHRvIHRoYXQgc2VydmljZVxyXG4gICAgICovXHJcbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIChtZXRob2ROYW1lKSB7XHJcbiAgICAgICAgdmFyIGZuID0gdGhpcy5pbk1lbURiU2VydmljZVttZXRob2ROYW1lXTtcclxuICAgICAgICByZXR1cm4gZm4gPyBmbi5iaW5kKHRoaXMuaW5NZW1EYlNlcnZpY2UpIDogdW5kZWZpbmVkO1xyXG4gICAgfTtcclxuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5ib2RpZnkgPSBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5kYXRhRW5jYXBzdWxhdGlvbiA/IHsgZGF0YTogZGF0YSB9IDogZGF0YTtcclxuICAgIH07XHJcbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgIH07XHJcbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuY29sbGVjdGlvbkhhbmRsZXIgPSBmdW5jdGlvbiAocmVxSW5mbykge1xyXG4gICAgICAgIC8vIGNvbnN0IHJlcSA9IHJlcUluZm8ucmVxO1xyXG4gICAgICAgIHZhciByZXNPcHRpb25zO1xyXG4gICAgICAgIHN3aXRjaCAocmVxSW5mby5tZXRob2QpIHtcclxuICAgICAgICAgICAgY2FzZSAnZ2V0JzpcclxuICAgICAgICAgICAgICAgIHJlc09wdGlvbnMgPSB0aGlzLmdldChyZXFJbmZvKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdwb3N0JzpcclxuICAgICAgICAgICAgICAgIHJlc09wdGlvbnMgPSB0aGlzLnBvc3QocmVxSW5mbyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAncHV0JzpcclxuICAgICAgICAgICAgICAgIHJlc09wdGlvbnMgPSB0aGlzLnB1dChyZXFJbmZvKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdkZWxldGUnOlxyXG4gICAgICAgICAgICAgICAgcmVzT3B0aW9ucyA9IHRoaXMuZGVsZXRlKHJlcUluZm8pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXNPcHRpb25zID0gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyhyZXFJbmZvLnVybCwgU1RBVFVTLk1FVEhPRF9OT1RfQUxMT1dFRCwgJ01ldGhvZCBub3QgYWxsb3dlZCcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIElmIGBpbk1lbURiU2VydmljZS5yZXNwb25zZUludGVyY2VwdG9yYCBleGlzdHMsIGxldCBpdCBtb3JwaCB0aGUgcmVzcG9uc2Ugb3B0aW9uc1xyXG4gICAgICAgIHZhciBpbnRlcmNlcHRvciA9IHRoaXMuYmluZCgncmVzcG9uc2VJbnRlcmNlcHRvcicpO1xyXG4gICAgICAgIHJldHVybiBpbnRlcmNlcHRvciA/IGludGVyY2VwdG9yKHJlc09wdGlvbnMsIHJlcUluZm8pIDogcmVzT3B0aW9ucztcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENvbW1hbmRzIHJlY29uZmlndXJlIHRoZSBpbi1tZW1vcnkgd2ViIGFwaSBzZXJ2aWNlIG9yIGV4dHJhY3QgaW5mb3JtYXRpb24gZnJvbSBpdC5cclxuICAgICAqIENvbW1hbmRzIGlnbm9yZSB0aGUgbGF0ZW5jeSBkZWxheSBhbmQgcmVzcG9uZCBBU0FQLlxyXG4gICAgICpcclxuICAgICAqIFdoZW4gdGhlIGxhc3Qgc2VnbWVudCBvZiB0aGUgYGFwaUJhc2VgIHBhdGggaXMgXCJjb21tYW5kc1wiLFxyXG4gICAgICogdGhlIGBjb2xsZWN0aW9uTmFtZWAgaXMgdGhlIGNvbW1hbmQuXHJcbiAgICAgKlxyXG4gICAgICogRXhhbXBsZSBVUkxzOlxyXG4gICAgICogICBjb21tYW5kcy9yZXNldGRiIChQT1NUKSAvLyBSZXNldCB0aGUgXCJkYXRhYmFzZVwiIHRvIGl0cyBvcmlnaW5hbCBzdGF0ZVxyXG4gICAgICogICBjb21tYW5kcy9jb25maWcgKEdFVCkgICAvLyBSZXR1cm4gdGhpcyBzZXJ2aWNlJ3MgY29uZmlnIG9iamVjdFxyXG4gICAgICogICBjb21tYW5kcy9jb25maWcgKFBPU1QpICAvLyBVcGRhdGUgdGhlIGNvbmZpZyAoZS5nLiB0aGUgZGVsYXkpXHJcbiAgICAgKlxyXG4gICAgICogVXNhZ2U6XHJcbiAgICAgKiAgIGh0dHAucG9zdCgnY29tbWFuZHMvcmVzZXRkYicsIHVuZGVmaW5lZCk7XHJcbiAgICAgKiAgIGh0dHAuZ2V0KCdjb21tYW5kcy9jb25maWcnKTtcclxuICAgICAqICAgaHR0cC5wb3N0KCdjb21tYW5kcy9jb25maWcnLCAne1wiZGVsYXlcIjoxMDAwfScpO1xyXG4gICAgICovXHJcbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuY29tbWFuZHMgPSBmdW5jdGlvbiAocmVxSW5mbykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGNvbW1hbmQgPSByZXFJbmZvLmNvbGxlY3Rpb25OYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgdmFyIG1ldGhvZCA9IHJlcUluZm8ubWV0aG9kO1xyXG4gICAgICAgIHZhciByZXNPcHRpb25zID0ge1xyXG4gICAgICAgICAgICB1cmw6IHJlcUluZm8udXJsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBzd2l0Y2ggKGNvbW1hbmQpIHtcclxuICAgICAgICAgICAgY2FzZSAncmVzZXRkYic6XHJcbiAgICAgICAgICAgICAgICByZXNPcHRpb25zLnN0YXR1cyA9IFNUQVRVUy5OT19DT05URU5UO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVzZXREYihyZXFJbmZvKS5waXBlKGNvbmNhdE1hcChmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5jcmVhdGVSZXNwb25zZSQoZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVzT3B0aW9uczsgfSwgZmFsc2UgLyogbm8gbGF0ZW5jeSBkZWxheSAqLyk7IH0pKTtcclxuICAgICAgICAgICAgY2FzZSAnY29uZmlnJzpcclxuICAgICAgICAgICAgICAgIGlmIChtZXRob2QgPT09ICdnZXQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzT3B0aW9ucy5zdGF0dXMgPSBTVEFUVVMuT0s7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzT3B0aW9ucy5ib2R5ID0gdGhpcy5jbG9uZSh0aGlzLmNvbmZpZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYW55IG90aGVyIEhUVFAgbWV0aG9kIGlzIGFzc3VtZWQgdG8gYmUgYSBjb25maWcgdXBkYXRlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYm9keSA9IHRoaXMuZ2V0SnNvbkJvZHkocmVxSW5mby5yZXEpO1xyXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5jb25maWcsIGJvZHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFzc1RocnVCYWNrZW5kID0gdW5kZWZpbmVkOyAvLyByZS1jcmVhdGUgd2hlbiBuZWVkZWRcclxuICAgICAgICAgICAgICAgICAgICByZXNPcHRpb25zLnN0YXR1cyA9IFNUQVRVUy5OT19DT05URU5UO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXNPcHRpb25zID0gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyhyZXFJbmZvLnVybCwgU1RBVFVTLklOVEVSTkFMX1NFUlZFUl9FUlJPUiwgXCJVbmtub3duIGNvbW1hbmQgXFxcIlwiICsgY29tbWFuZCArIFwiXFxcIlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlUmVzcG9uc2UkKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlc09wdGlvbnM7IH0sIGZhbHNlIC8qIG5vIGxhdGVuY3kgZGVsYXkgKi8pO1xyXG4gICAgfTtcclxuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyA9IGZ1bmN0aW9uICh1cmwsIHN0YXR1cywgbWVzc2FnZSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGJvZHk6IHsgZXJyb3I6IFwiXCIgKyBtZXNzYWdlIH0sXHJcbiAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLmNyZWF0ZUhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pLFxyXG4gICAgICAgICAgICBzdGF0dXM6IHN0YXR1c1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBjb2xkIHJlc3BvbnNlIE9ic2VydmFibGUgZnJvbSBhIGZhY3RvcnkgZm9yIFJlc3BvbnNlT3B0aW9uc1xyXG4gICAgICogQHBhcmFtIHJlc09wdGlvbnNGYWN0b3J5IC0gY3JlYXRlcyBSZXNwb25zZU9wdGlvbnMgd2hlbiBvYnNlcnZhYmxlIGlzIHN1YnNjcmliZWRcclxuICAgICAqIEBwYXJhbSB3aXRoRGVsYXkgLSBpZiB0cnVlIChkZWZhdWx0KSwgYWRkIHNpbXVsYXRlZCBsYXRlbmN5IGRlbGF5IGZyb20gY29uZmlndXJhdGlvblxyXG4gICAgICovXHJcbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuY3JlYXRlUmVzcG9uc2UkID0gZnVuY3Rpb24gKHJlc09wdGlvbnNGYWN0b3J5LCB3aXRoRGVsYXkpIHtcclxuICAgICAgICBpZiAod2l0aERlbGF5ID09PSB2b2lkIDApIHsgd2l0aERlbGF5ID0gdHJ1ZTsgfVxyXG4gICAgICAgIHZhciByZXNPcHRpb25zJCA9IHRoaXMuY3JlYXRlUmVzcG9uc2VPcHRpb25zJChyZXNPcHRpb25zRmFjdG9yeSk7XHJcbiAgICAgICAgdmFyIHJlc3AkID0gdGhpcy5jcmVhdGVSZXNwb25zZSRmcm9tUmVzcG9uc2VPcHRpb25zJChyZXNPcHRpb25zJCk7XHJcbiAgICAgICAgcmV0dXJuIHdpdGhEZWxheSA/IHRoaXMuYWRkRGVsYXkocmVzcCQpIDogcmVzcCQ7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBjb2xkIE9ic2VydmFibGUgb2YgUmVzcG9uc2VPcHRpb25zLlxyXG4gICAgICogQHBhcmFtIHJlc09wdGlvbnNGYWN0b3J5IC0gY3JlYXRlcyBSZXNwb25zZU9wdGlvbnMgd2hlbiBvYnNlcnZhYmxlIGlzIHN1YnNjcmliZWRcclxuICAgICAqL1xyXG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmNyZWF0ZVJlc3BvbnNlT3B0aW9ucyQgPSBmdW5jdGlvbiAocmVzT3B0aW9uc0ZhY3RvcnkpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShmdW5jdGlvbiAocmVzcG9uc2VPYnNlcnZlcikge1xyXG4gICAgICAgICAgICB2YXIgcmVzT3B0aW9ucztcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHJlc09wdGlvbnMgPSByZXNPcHRpb25zRmFjdG9yeSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVyciA9IGVycm9yLm1lc3NhZ2UgfHwgZXJyb3I7XHJcbiAgICAgICAgICAgICAgICByZXNPcHRpb25zID0gX3RoaXMuY3JlYXRlRXJyb3JSZXNwb25zZU9wdGlvbnMoJycsIFNUQVRVUy5JTlRFUk5BTF9TRVJWRVJfRVJST1IsIFwiXCIgKyBlcnIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBzdGF0dXMgPSByZXNPcHRpb25zLnN0YXR1cztcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHJlc09wdGlvbnMuc3RhdHVzVGV4dCA9IGdldFN0YXR1c1RleHQoc3RhdHVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZSkgeyAvKiBpZ25vcmUgZmFpbHVyZSAqLyB9XHJcbiAgICAgICAgICAgIGlmIChpc1N1Y2Nlc3Moc3RhdHVzKSkge1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VPYnNlcnZlci5uZXh0KHJlc09wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VPYnNlcnZlci5jb21wbGV0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VPYnNlcnZlci5lcnJvcihyZXNPcHRpb25zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyB9OyAvLyB1bnN1YnNjcmliZSBmdW5jdGlvblxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICB2YXIgY29sbGVjdGlvbiA9IF9hLmNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lID0gX2EuY29sbGVjdGlvbk5hbWUsIGhlYWRlcnMgPSBfYS5oZWFkZXJzLCBpZCA9IF9hLmlkLCB1cmwgPSBfYS51cmw7XHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHNcclxuICAgICAgICBpZiAoaWQgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2VPcHRpb25zKHVybCwgU1RBVFVTLk5PVF9GT1VORCwgXCJNaXNzaW5nIFxcXCJcIiArIGNvbGxlY3Rpb25OYW1lICsgXCJcXFwiIGlkXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZXhpc3RzID0gdGhpcy5yZW1vdmVCeUlkKGNvbGxlY3Rpb24sIGlkKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxyXG4gICAgICAgICAgICBzdGF0dXM6IChleGlzdHMgfHwgIXRoaXMuY29uZmlnLmRlbGV0ZTQwNCkgPyBTVEFUVVMuTk9fQ09OVEVOVCA6IFNUQVRVUy5OT1RfRk9VTkRcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogRmluZCBmaXJzdCBpbnN0YW5jZSBvZiBpdGVtIGluIGNvbGxlY3Rpb24gYnkgYGl0ZW0uaWRgXHJcbiAgICAgKiBAcGFyYW0gY29sbGVjdGlvblxyXG4gICAgICogQHBhcmFtIGlkXHJcbiAgICAgKi9cclxuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5maW5kQnlJZCA9IGZ1bmN0aW9uIChjb2xsZWN0aW9uLCBpZCkge1xyXG4gICAgICAgIHJldHVybiBjb2xsZWN0aW9uLmZpbmQoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGl0ZW0uaWQgPT09IGlkOyB9KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEdlbmVyYXRlIHRoZSBuZXh0IGF2YWlsYWJsZSBpZCBmb3IgaXRlbSBpbiB0aGlzIGNvbGxlY3Rpb25cclxuICAgICAqIFVzZSBtZXRob2QgZnJvbSBgaW5NZW1EYlNlcnZpY2VgIGlmIGl0IGV4aXN0cyBhbmQgcmV0dXJucyBhIHZhbHVlLFxyXG4gICAgICogZWxzZSBkZWxlZ2F0ZXMgdG8gYGdlbklkRGVmYXVsdGAuXHJcbiAgICAgKiBAcGFyYW0gY29sbGVjdGlvbiAtIGNvbGxlY3Rpb24gb2YgaXRlbXMgd2l0aCBgaWRgIGtleSBwcm9wZXJ0eVxyXG4gICAgICovXHJcbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuZ2VuSWQgPSBmdW5jdGlvbiAoY29sbGVjdGlvbiwgY29sbGVjdGlvbk5hbWUpIHtcclxuICAgICAgICB2YXIgZ2VuSWQgPSB0aGlzLmJpbmQoJ2dlbklkJyk7XHJcbiAgICAgICAgaWYgKGdlbklkKSB7XHJcbiAgICAgICAgICAgIHZhciBpZCA9IGdlbklkKGNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lKTtcclxuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHNcclxuICAgICAgICAgICAgaWYgKGlkICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmdlbklkRGVmYXVsdChjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZhdWx0IGdlbmVyYXRvciBvZiB0aGUgbmV4dCBhdmFpbGFibGUgaWQgZm9yIGl0ZW0gaW4gdGhpcyBjb2xsZWN0aW9uXHJcbiAgICAgKiBUaGlzIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gd29ya3Mgb25seSBmb3IgbnVtZXJpYyBpZHMuXHJcbiAgICAgKiBAcGFyYW0gY29sbGVjdGlvbiAtIGNvbGxlY3Rpb24gb2YgaXRlbXMgd2l0aCBgaWRgIGtleSBwcm9wZXJ0eVxyXG4gICAgICogQHBhcmFtIGNvbGxlY3Rpb25OYW1lIC0gbmFtZSBvZiB0aGUgY29sbGVjdGlvblxyXG4gICAgICovXHJcbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuZ2VuSWREZWZhdWx0ID0gZnVuY3Rpb24gKGNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQ29sbGVjdGlvbklkTnVtZXJpYyhjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ29sbGVjdGlvbiAnXCIgKyBjb2xsZWN0aW9uTmFtZSArIFwiJyBpZCB0eXBlIGlzIG5vbi1udW1lcmljIG9yIHVua25vd24uIENhbiBvbmx5IGdlbmVyYXRlIG51bWVyaWMgaWRzLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG1heElkID0gMDtcclxuICAgICAgICBjb2xsZWN0aW9uLnJlZHVjZShmdW5jdGlvbiAocHJldiwgaXRlbSkge1xyXG4gICAgICAgICAgICBtYXhJZCA9IE1hdGgubWF4KG1heElkLCB0eXBlb2YgaXRlbS5pZCA9PT0gJ251bWJlcicgPyBpdGVtLmlkIDogbWF4SWQpO1xyXG4gICAgICAgIH0sIHVuZGVmaW5lZCk7XHJcbiAgICAgICAgcmV0dXJuIG1heElkICsgMTtcclxuICAgIH07XHJcbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgdmFyIGNvbGxlY3Rpb24gPSBfYS5jb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSA9IF9hLmNvbGxlY3Rpb25OYW1lLCBoZWFkZXJzID0gX2EuaGVhZGVycywgaWQgPSBfYS5pZCwgcXVlcnkgPSBfYS5xdWVyeSwgdXJsID0gX2EudXJsO1xyXG4gICAgICAgIHZhciBkYXRhID0gY29sbGVjdGlvbjtcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHJpcGxlLWVxdWFsc1xyXG4gICAgICAgIGlmIChpZCAhPSB1bmRlZmluZWQgJiYgaWQgIT09ICcnKSB7XHJcbiAgICAgICAgICAgIGRhdGEgPSB0aGlzLmZpbmRCeUlkKGNvbGxlY3Rpb24sIGlkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocXVlcnkpIHtcclxuICAgICAgICAgICAgZGF0YSA9IHRoaXMuYXBwbHlRdWVyeShjb2xsZWN0aW9uLCBxdWVyeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghZGF0YSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyh1cmwsIFNUQVRVUy5OT1RfRk9VTkQsIFwiJ1wiICsgY29sbGVjdGlvbk5hbWUgKyBcIicgd2l0aCBpZD0nXCIgKyBpZCArIFwiJyBub3QgZm91bmRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGJvZHk6IHRoaXMuYm9kaWZ5KHRoaXMuY2xvbmUoZGF0YSkpLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxyXG4gICAgICAgICAgICBzdGF0dXM6IFNUQVRVUy5PS1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgbG9jYXRpb24gaW5mbyBmcm9tIGEgdXJsLCBldmVuIG9uIHNlcnZlciB3aGVyZSBgZG9jdW1lbnRgIGlzIG5vdCBkZWZpbmVkXHJcbiAgICAgKi9cclxuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5nZXRMb2NhdGlvbiA9IGZ1bmN0aW9uICh1cmwpIHtcclxuICAgICAgICBpZiAoIXVybC5zdGFydHNXaXRoKCdodHRwJykpIHtcclxuICAgICAgICAgICAgLy8gZ2V0IHRoZSBkb2N1bWVudCBpZmYgcnVubmluZyBpbiBicm93c2VyXHJcbiAgICAgICAgICAgIHZhciBkb2MgPSAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgPyB1bmRlZmluZWQgOiBkb2N1bWVudDtcclxuICAgICAgICAgICAgLy8gYWRkIGhvc3QgaW5mbyB0byB1cmwgYmVmb3JlIHBhcnNpbmcuICBVc2UgYSBmYWtlIGhvc3Qgd2hlbiBub3QgaW4gYnJvd3Nlci5cclxuICAgICAgICAgICAgdmFyIGJhc2UgPSBkb2MgPyBkb2MubG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nICsgZG9jLmxvY2F0aW9uLmhvc3QgOiAnaHR0cDovL2Zha2UnO1xyXG4gICAgICAgICAgICB1cmwgPSB1cmwuc3RhcnRzV2l0aCgnLycpID8gYmFzZSArIHVybCA6IGJhc2UgKyAnLycgKyB1cmw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwYXJzZVVyaSh1cmwpO1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIC8qKlxyXG4gICAgICogZ2V0IG9yIGNyZWF0ZSB0aGUgZnVuY3Rpb24gdGhhdCBwYXNzZXMgdW5oYW5kbGVkIHJlcXVlc3RzXHJcbiAgICAgKiB0aHJvdWdoIHRvIHRoZSBcInJlYWxcIiBiYWNrZW5kLlxyXG4gICAgICovXHJcbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuZ2V0UGFzc1RocnVCYWNrZW5kID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhc3NUaHJ1QmFja2VuZCA/XHJcbiAgICAgICAgICAgIHRoaXMucGFzc1RocnVCYWNrZW5kIDpcclxuICAgICAgICAgICAgdGhpcy5wYXNzVGhydUJhY2tlbmQgPSB0aGlzLmNyZWF0ZVBhc3NUaHJ1QmFja2VuZCgpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogR2V0IHV0aWxpdHkgbWV0aG9kcyBmcm9tIHRoaXMgc2VydmljZSBpbnN0YW5jZS5cclxuICAgICAqIFVzZWZ1bCB3aXRoaW4gYW4gSFRUUCBtZXRob2Qgb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmdldFJlcXVlc3RJbmZvVXRpbHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjcmVhdGVSZXNwb25zZSQ6IHRoaXMuY3JlYXRlUmVzcG9uc2UkLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIGZpbmRCeUlkOiB0aGlzLmZpbmRCeUlkLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIGlzQ29sbGVjdGlvbklkTnVtZXJpYzogdGhpcy5pc0NvbGxlY3Rpb25JZE51bWVyaWMuYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgZ2V0Q29uZmlnOiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5jb25maWc7IH0sXHJcbiAgICAgICAgICAgIGdldERiOiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5kYjsgfSxcclxuICAgICAgICAgICAgZ2V0SnNvbkJvZHk6IHRoaXMuZ2V0SnNvbkJvZHkuYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgZ2V0TG9jYXRpb246IHRoaXMuZ2V0TG9jYXRpb24uYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgZ2V0UGFzc1RocnVCYWNrZW5kOiB0aGlzLmdldFBhc3NUaHJ1QmFja2VuZC5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICBwYXJzZVJlcXVlc3RVcmw6IHRoaXMucGFyc2VSZXF1ZXN0VXJsLmJpbmQodGhpcyksXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uIChjb2xsZWN0aW9uLCBpZCkge1xyXG4gICAgICAgIHJldHVybiBjb2xsZWN0aW9uLmZpbmRJbmRleChmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbS5pZCA9PT0gaWQ7IH0pO1xyXG4gICAgfTtcclxuICAgIC8qKiBQYXJzZSB0aGUgaWQgYXMgYSBudW1iZXIuIFJldHVybiBvcmlnaW5hbCB2YWx1ZSBpZiBub3QgYSBudW1iZXIuICovXHJcbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUucGFyc2VJZCA9IGZ1bmN0aW9uIChjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSwgaWQpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNDb2xsZWN0aW9uSWROdW1lcmljKGNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lKSkge1xyXG4gICAgICAgICAgICAvLyBDYW4ndCBjb25maXJtIHRoYXQgYGlkYCBpcyBhIG51bWVyaWMgdHlwZTsgZG9uJ3QgcGFyc2UgYXMgYSBudW1iZXJcclxuICAgICAgICAgICAgLy8gb3IgZWxzZSBgJzQyJ2AgLT4gYDQyYCBhbmQgX2dldCBieSBpZF8gZmFpbHMuXHJcbiAgICAgICAgICAgIHJldHVybiBpZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGlkTnVtID0gcGFyc2VGbG9hdChpZCk7XHJcbiAgICAgICAgcmV0dXJuIGlzTmFOKGlkTnVtKSA/IGlkIDogaWROdW07XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiByZXR1cm4gdHJ1ZSBpZiBjYW4gZGV0ZXJtaW5lIHRoYXQgdGhlIGNvbGxlY3Rpb24ncyBgaXRlbS5pZGAgaXMgYSBudW1iZXJcclxuICAgICAqIFRoaXMgaW1wbGVtZW50YXRpb24gY2FuJ3QgdGVsbCBpZiB0aGUgY29sbGVjdGlvbiBpcyBlbXB0eSBzbyBpdCBhc3N1bWVzIE5PXHJcbiAgICAgKiAqL1xyXG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmlzQ29sbGVjdGlvbklkTnVtZXJpYyA9IGZ1bmN0aW9uIChjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSkge1xyXG4gICAgICAgIC8vIGNvbGxlY3Rpb25OYW1lIG5vdCB1c2VkIG5vdyBidXQgb3ZlcnJpZGUgbWlnaHQgbWFpbnRhaW4gY29sbGVjdGlvbiB0eXBlIGluZm9ybWF0aW9uXHJcbiAgICAgICAgLy8gc28gdGhhdCBpdCBjb3VsZCBrbm93IHRoZSB0eXBlIG9mIHRoZSBgaWRgIGV2ZW4gd2hlbiB0aGUgY29sbGVjdGlvbiBpcyBlbXB0eS5cclxuICAgICAgICByZXR1cm4gISEoY29sbGVjdGlvbiAmJiBjb2xsZWN0aW9uWzBdKSAmJiB0eXBlb2YgY29sbGVjdGlvblswXS5pZCA9PT0gJ251bWJlcic7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBQYXJzZXMgdGhlIHJlcXVlc3QgVVJMIGludG8gYSBgUGFyc2VkUmVxdWVzdFVybGAgb2JqZWN0LlxyXG4gICAgICogUGFyc2luZyBkZXBlbmRzIHVwb24gY2VydGFpbiB2YWx1ZXMgb2YgYGNvbmZpZ2A6IGBhcGlCYXNlYCwgYGhvc3RgLCBhbmQgYHVybFJvb3RgLlxyXG4gICAgICpcclxuICAgICAqIENvbmZpZ3VyaW5nIHRoZSBgYXBpQmFzZWAgeWllbGRzIHRoZSBtb3N0IGludGVyZXN0aW5nIGNoYW5nZXMgdG8gYHBhcnNlUmVxdWVzdFVybGAgYmVoYXZpb3I6XHJcbiAgICAgKiAgIFdoZW4gYXBpQmFzZT11bmRlZmluZWQgYW5kIHVybD0naHR0cDovL2xvY2FsaG9zdC9hcGkvY29sbGVjdGlvbi80MidcclxuICAgICAqICAgICB7YmFzZTogJ2FwaS8nLCBjb2xsZWN0aW9uTmFtZTogJ2NvbGxlY3Rpb24nLCBpZDogJzQyJywgLi4ufVxyXG4gICAgICogICBXaGVuIGFwaUJhc2U9J3NvbWUvYXBpL3Jvb3QvJyBhbmQgdXJsPSdodHRwOi8vbG9jYWxob3N0L3NvbWUvYXBpL3Jvb3QvY29sbGVjdGlvbidcclxuICAgICAqICAgICB7YmFzZTogJ3NvbWUvYXBpL3Jvb3QvJywgY29sbGVjdGlvbk5hbWU6ICdjb2xsZWN0aW9uJywgaWQ6IHVuZGVmaW5lZCwgLi4ufVxyXG4gICAgICogICBXaGVuIGFwaUJhc2U9Jy8nIGFuZCB1cmw9J2h0dHA6Ly9sb2NhbGhvc3QvY29sbGVjdGlvbidcclxuICAgICAqICAgICB7YmFzZTogJy8nLCBjb2xsZWN0aW9uTmFtZTogJ2NvbGxlY3Rpb24nLCBpZDogdW5kZWZpbmVkLCAuLi59XHJcbiAgICAgKlxyXG4gICAgICogVGhlIGFjdHVhbCBhcGkgYmFzZSBzZWdtZW50IHZhbHVlcyBhcmUgaWdub3JlZC4gT25seSB0aGUgbnVtYmVyIG9mIHNlZ21lbnRzIG1hdHRlcnMuXHJcbiAgICAgKiBUaGUgZm9sbG93aW5nIGFwaSBiYXNlIHN0cmluZ3MgYXJlIGNvbnNpZGVyZWQgaWRlbnRpY2FsOiAnYS9iJyB+ICdzb21lL2FwaS8nIH4gYHR3by9zZWdtZW50cydcclxuICAgICAqXHJcbiAgICAgKiBUbyByZXBsYWNlIHRoaXMgZGVmYXVsdCBtZXRob2QsIGFzc2lnbiB5b3VyIGFsdGVybmF0aXZlIHRvIHlvdXIgSW5NZW1EYlNlcnZpY2VbJ3BhcnNlUmVxdWVzdFVybCddXHJcbiAgICAgKi9cclxuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5wYXJzZVJlcXVlc3RVcmwgPSBmdW5jdGlvbiAodXJsKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdmFyIGxvYyA9IHRoaXMuZ2V0TG9jYXRpb24odXJsKTtcclxuICAgICAgICAgICAgdmFyIGRyb3AgPSB0aGlzLmNvbmZpZy5yb290UGF0aC5sZW5ndGg7XHJcbiAgICAgICAgICAgIHZhciB1cmxSb290ID0gJyc7XHJcbiAgICAgICAgICAgIGlmIChsb2MuaG9zdCAhPT0gdGhpcy5jb25maWcuaG9zdCkge1xyXG4gICAgICAgICAgICAgICAgLy8gdXJsIGZvciBhIHNlcnZlciBvbiBhIGRpZmZlcmVudCBob3N0IVxyXG4gICAgICAgICAgICAgICAgLy8gYXNzdW1lIGl0J3MgY29sbGVjdGlvbiBpcyBhY3R1YWxseSBoZXJlIHRvby5cclxuICAgICAgICAgICAgICAgIGRyb3AgPSAxOyAvLyB0aGUgbGVhZGluZyBzbGFzaFxyXG4gICAgICAgICAgICAgICAgdXJsUm9vdCA9IGxvYy5wcm90b2NvbCArICcvLycgKyBsb2MuaG9zdCArICcvJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgcGF0aCA9IGxvYy5wYXRoLnN1YnN0cmluZyhkcm9wKTtcclxuICAgICAgICAgICAgdmFyIHBhdGhTZWdtZW50cyA9IHBhdGguc3BsaXQoJy8nKTtcclxuICAgICAgICAgICAgdmFyIHNlZ21lbnRJeCA9IDA7XHJcbiAgICAgICAgICAgIC8vIGFwaUJhc2U6IHRoZSBmcm9udCBwYXJ0IG9mIHRoZSBwYXRoIGRldm90ZWQgdG8gZ2V0dGluZyB0byB0aGUgYXBpIHJvdXRlXHJcbiAgICAgICAgICAgIC8vIEFzc3VtZXMgZmlyc3QgcGF0aCBzZWdtZW50IGlmIG5vIGNvbmZpZy5hcGlCYXNlXHJcbiAgICAgICAgICAgIC8vIGVsc2UgaWdub3JlcyBhcyBtYW55IHBhdGggc2VnbWVudHMgYXMgYXJlIGluIGNvbmZpZy5hcGlCYXNlXHJcbiAgICAgICAgICAgIC8vIERvZXMgTk9UIGNhcmUgd2hhdCB0aGUgYXBpIGJhc2UgY2hhcnMgYWN0dWFsbHkgYXJlLlxyXG4gICAgICAgICAgICB2YXIgYXBpQmFzZSA9IHZvaWQgMDtcclxuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHNcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLmFwaUJhc2UgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBhcGlCYXNlID0gcGF0aFNlZ21lbnRzW3NlZ21lbnRJeCsrXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFwaUJhc2UgPSByZW1vdmVUcmFpbGluZ1NsYXNoKHRoaXMuY29uZmlnLmFwaUJhc2UudHJpbSgpKTtcclxuICAgICAgICAgICAgICAgIGlmIChhcGlCYXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VnbWVudEl4ID0gYXBpQmFzZS5zcGxpdCgnLycpLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlZ21lbnRJeCA9IDA7IC8vIG5vIGFwaSBiYXNlIGF0IGFsbDsgdW53aXNlIGJ1dCBhbGxvd2VkLlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFwaUJhc2UgKz0gJy8nO1xyXG4gICAgICAgICAgICB2YXIgY29sbGVjdGlvbk5hbWUgPSBwYXRoU2VnbWVudHNbc2VnbWVudEl4KytdO1xyXG4gICAgICAgICAgICAvLyBpZ25vcmUgYW55dGhpbmcgYWZ0ZXIgYSAnLicgKGUuZy4sdGhlIFwianNvblwiIGluIFwiY3VzdG9tZXJzLmpzb25cIilcclxuICAgICAgICAgICAgY29sbGVjdGlvbk5hbWUgPSBjb2xsZWN0aW9uTmFtZSAmJiBjb2xsZWN0aW9uTmFtZS5zcGxpdCgnLicpWzBdO1xyXG4gICAgICAgICAgICB2YXIgaWQgPSBwYXRoU2VnbWVudHNbc2VnbWVudEl4KytdO1xyXG4gICAgICAgICAgICB2YXIgcXVlcnkgPSB0aGlzLmNyZWF0ZVF1ZXJ5TWFwKGxvYy5xdWVyeSk7XHJcbiAgICAgICAgICAgIHZhciByZXNvdXJjZVVybCA9IHVybFJvb3QgKyBhcGlCYXNlICsgY29sbGVjdGlvbk5hbWUgKyAnLyc7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGFwaUJhc2U6IGFwaUJhc2UsIGNvbGxlY3Rpb25OYW1lOiBjb2xsZWN0aW9uTmFtZSwgaWQ6IGlkLCBxdWVyeTogcXVlcnksIHJlc291cmNlVXJsOiByZXNvdXJjZVVybCB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHZhciBtc2cgPSBcInVuYWJsZSB0byBwYXJzZSB1cmwgJ1wiICsgdXJsICsgXCInOyBvcmlnaW5hbCBlcnJvcjogXCIgKyBlcnIubWVzc2FnZTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8vIENyZWF0ZSBlbnRpdHlcclxuICAgIC8vIENhbiB1cGRhdGUgYW4gZXhpc3RpbmcgZW50aXR5IHRvbyBpZiBwb3N0NDA5IGlzIGZhbHNlLlxyXG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLnBvc3QgPSBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICB2YXIgY29sbGVjdGlvbiA9IF9hLmNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lID0gX2EuY29sbGVjdGlvbk5hbWUsIGhlYWRlcnMgPSBfYS5oZWFkZXJzLCBpZCA9IF9hLmlkLCByZXEgPSBfYS5yZXEsIHJlc291cmNlVXJsID0gX2EucmVzb3VyY2VVcmwsIHVybCA9IF9hLnVybDtcclxuICAgICAgICB2YXIgaXRlbSA9IHRoaXMuY2xvbmUodGhpcy5nZXRKc29uQm9keShyZXEpKTtcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHJpcGxlLWVxdWFsc1xyXG4gICAgICAgIGlmIChpdGVtLmlkID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5pZCA9IGlkIHx8IHRoaXMuZ2VuSWQoY29sbGVjdGlvbiwgY29sbGVjdGlvbk5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIHZhciBlbXNnID0gZXJyLm1lc3NhZ2UgfHwgJyc7XHJcbiAgICAgICAgICAgICAgICBpZiAoL2lkIHR5cGUgaXMgbm9uLW51bWVyaWMvLnRlc3QoZW1zZykpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyh1cmwsIFNUQVRVUy5VTlBST0NFU1NBQkxFX0VOVFJZLCBlbXNnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyh1cmwsIFNUQVRVUy5JTlRFUk5BTF9TRVJWRVJfRVJST1IsIFwiRmFpbGVkIHRvIGdlbmVyYXRlIG5ldyBpZCBmb3IgJ1wiICsgY29sbGVjdGlvbk5hbWUgKyBcIidcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlkICYmIGlkICE9PSBpdGVtLmlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2VPcHRpb25zKHVybCwgU1RBVFVTLkJBRF9SRVFVRVNULCBcIlJlcXVlc3QgaWQgZG9lcyBub3QgbWF0Y2ggaXRlbS5pZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlkID0gaXRlbS5pZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGV4aXN0aW5nSXggPSB0aGlzLmluZGV4T2YoY29sbGVjdGlvbiwgaWQpO1xyXG4gICAgICAgIHZhciBib2R5ID0gdGhpcy5ib2RpZnkoaXRlbSk7XHJcbiAgICAgICAgaWYgKGV4aXN0aW5nSXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgIGNvbGxlY3Rpb24ucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgaGVhZGVycy5zZXQoJ0xvY2F0aW9uJywgcmVzb3VyY2VVcmwgKyAnLycgKyBpZCk7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGhlYWRlcnM6IGhlYWRlcnMsIGJvZHk6IGJvZHksIHN0YXR1czogU1RBVFVTLkNSRUFURUQgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5jb25maWcucG9zdDQwOSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyh1cmwsIFNUQVRVUy5DT05GTElDVCwgXCInXCIgKyBjb2xsZWN0aW9uTmFtZSArIFwiJyBpdGVtIHdpdGggaWQ9J1wiICsgaWQgKyBcIiBleGlzdHMgYW5kIG1heSBub3QgYmUgdXBkYXRlZCB3aXRoIFBPU1Q7IHVzZSBQVVQgaW5zdGVhZC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb2xsZWN0aW9uW2V4aXN0aW5nSXhdID0gaXRlbTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLnBvc3QyMDQgP1xyXG4gICAgICAgICAgICAgICAgeyBoZWFkZXJzOiBoZWFkZXJzLCBzdGF0dXM6IFNUQVRVUy5OT19DT05URU5UIH0gOiAvLyBzdWNjZXNzZnVsOyBubyBjb250ZW50XHJcbiAgICAgICAgICAgICAgICB7IGhlYWRlcnM6IGhlYWRlcnMsIGJvZHk6IGJvZHksIHN0YXR1czogU1RBVFVTLk9LIH07IC8vIHN1Y2Nlc3NmdWw7IHJldHVybiBlbnRpdHlcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLy8gVXBkYXRlIGV4aXN0aW5nIGVudGl0eVxyXG4gICAgLy8gQ2FuIGNyZWF0ZSBhbiBlbnRpdHkgdG9vIGlmIHB1dDQwNCBpcyBmYWxzZS5cclxuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5wdXQgPSBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICB2YXIgY29sbGVjdGlvbiA9IF9hLmNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lID0gX2EuY29sbGVjdGlvbk5hbWUsIGhlYWRlcnMgPSBfYS5oZWFkZXJzLCBpZCA9IF9hLmlkLCByZXEgPSBfYS5yZXEsIHVybCA9IF9hLnVybDtcclxuICAgICAgICB2YXIgaXRlbSA9IHRoaXMuY2xvbmUodGhpcy5nZXRKc29uQm9keShyZXEpKTtcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHJpcGxlLWVxdWFsc1xyXG4gICAgICAgIGlmIChpdGVtLmlkID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyh1cmwsIFNUQVRVUy5OT1RfRk9VTkQsIFwiTWlzc2luZyAnXCIgKyBjb2xsZWN0aW9uTmFtZSArIFwiJyBpZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlkICYmIGlkICE9PSBpdGVtLmlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2VPcHRpb25zKHVybCwgU1RBVFVTLkJBRF9SRVFVRVNULCBcIlJlcXVlc3QgZm9yICdcIiArIGNvbGxlY3Rpb25OYW1lICsgXCInIGlkIGRvZXMgbm90IG1hdGNoIGl0ZW0uaWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZCA9IGl0ZW0uaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBleGlzdGluZ0l4ID0gdGhpcy5pbmRleE9mKGNvbGxlY3Rpb24sIGlkKTtcclxuICAgICAgICB2YXIgYm9keSA9IHRoaXMuYm9kaWZ5KGl0ZW0pO1xyXG4gICAgICAgIGlmIChleGlzdGluZ0l4ID4gLTEpIHtcclxuICAgICAgICAgICAgY29sbGVjdGlvbltleGlzdGluZ0l4XSA9IGl0ZW07XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5wdXQyMDQgP1xyXG4gICAgICAgICAgICAgICAgeyBoZWFkZXJzOiBoZWFkZXJzLCBzdGF0dXM6IFNUQVRVUy5OT19DT05URU5UIH0gOiAvLyBzdWNjZXNzZnVsOyBubyBjb250ZW50XHJcbiAgICAgICAgICAgICAgICB7IGhlYWRlcnM6IGhlYWRlcnMsIGJvZHk6IGJvZHksIHN0YXR1czogU1RBVFVTLk9LIH07IC8vIHN1Y2Nlc3NmdWw7IHJldHVybiBlbnRpdHlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5jb25maWcucHV0NDA0KSB7XHJcbiAgICAgICAgICAgIC8vIGl0ZW0gdG8gdXBkYXRlIG5vdCBmb3VuZDsgdXNlIFBPU1QgdG8gY3JlYXRlIG5ldyBpdGVtIGZvciB0aGlzIGlkLlxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyh1cmwsIFNUQVRVUy5OT1RfRk9VTkQsIFwiJ1wiICsgY29sbGVjdGlvbk5hbWUgKyBcIicgaXRlbSB3aXRoIGlkPSdcIiArIGlkICsgXCIgbm90IGZvdW5kIGFuZCBtYXkgbm90IGJlIGNyZWF0ZWQgd2l0aCBQVVQ7IHVzZSBQT1NUIGluc3RlYWQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gY3JlYXRlIG5ldyBpdGVtIGZvciBpZCBub3QgZm91bmRcclxuICAgICAgICAgICAgY29sbGVjdGlvbi5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICByZXR1cm4geyBoZWFkZXJzOiBoZWFkZXJzLCBib2R5OiBib2R5LCBzdGF0dXM6IFNUQVRVUy5DUkVBVEVEIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5yZW1vdmVCeUlkID0gZnVuY3Rpb24gKGNvbGxlY3Rpb24sIGlkKSB7XHJcbiAgICAgICAgdmFyIGl4ID0gdGhpcy5pbmRleE9mKGNvbGxlY3Rpb24sIGlkKTtcclxuICAgICAgICBpZiAoaXggPiAtMSkge1xyXG4gICAgICAgICAgICBjb2xsZWN0aW9uLnNwbGljZShpeCwgMSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBUZWxsIHlvdXIgaW4tbWVtIFwiZGF0YWJhc2VcIiB0byByZXNldC5cclxuICAgICAqIHJldHVybnMgT2JzZXJ2YWJsZSBvZiB0aGUgZGF0YWJhc2UgYmVjYXVzZSByZXNldHRpbmcgaXQgY291bGQgYmUgYXN5bmNcclxuICAgICAqL1xyXG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLnJlc2V0RGIgPSBmdW5jdGlvbiAocmVxSW5mbykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5kYlJlYWR5U3ViamVjdC5uZXh0KGZhbHNlKTtcclxuICAgICAgICB2YXIgZGIgPSB0aGlzLmluTWVtRGJTZXJ2aWNlLmNyZWF0ZURiKHJlcUluZm8pO1xyXG4gICAgICAgIHZhciBkYiQgPSBkYiBpbnN0YW5jZW9mIE9ic2VydmFibGUgPyBkYiA6XHJcbiAgICAgICAgICAgIHR5cGVvZiBkYi50aGVuID09PSAnZnVuY3Rpb24nID8gZnJvbShkYikgOlxyXG4gICAgICAgICAgICAgICAgb2YoZGIpO1xyXG4gICAgICAgIGRiJC5waXBlKGZpcnN0KCkpLnN1YnNjcmliZShmdW5jdGlvbiAoZCkge1xyXG4gICAgICAgICAgICBfdGhpcy5kYiA9IGQ7XHJcbiAgICAgICAgICAgIF90aGlzLmRiUmVhZHlTdWJqZWN0Lm5leHQodHJ1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGJSZWFkeTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQmFja2VuZFNlcnZpY2U7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH07XHJcbiIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIF9fcGFyYW0gPSAodGhpcyAmJiB0aGlzLl9fcGFyYW0pIHx8IGZ1bmN0aW9uIChwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59O1xyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBIZWFkZXJzLCBIdHRwUGFyYW1zLCBIdHRwUmVzcG9uc2UsIEh0dHBYaHJCYWNrZW5kLCBYaHJGYWN0b3J5IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFNUQVRVUyB9IGZyb20gJy4vaHR0cC1zdGF0dXMtY29kZXMnO1xyXG5pbXBvcnQgeyBJbk1lbW9yeUJhY2tlbmRDb25maWcsIEluTWVtb3J5QmFja2VuZENvbmZpZ0FyZ3MsIEluTWVtb3J5RGJTZXJ2aWNlIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcclxuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tICcuL2JhY2tlbmQuc2VydmljZSc7XHJcbi8qKlxyXG4gKiBGb3IgQW5ndWxhciBgSHR0cENsaWVudGAgc2ltdWxhdGUgdGhlIGJlaGF2aW9yIG9mIGEgUkVTVHkgd2ViIGFwaVxyXG4gKiBiYWNrZWQgYnkgdGhlIHNpbXBsZSBpbi1tZW1vcnkgZGF0YSBzdG9yZSBwcm92aWRlZCBieSB0aGUgaW5qZWN0ZWQgYEluTWVtb3J5RGJTZXJ2aWNlYC5cclxuICogQ29uZm9ybXMgbW9zdGx5IHRvIGJlaGF2aW9yIGRlc2NyaWJlZCBoZXJlOlxyXG4gKiBodHRwOi8vd3d3LnJlc3RhcGl0dXRvcmlhbC5jb20vbGVzc29ucy9odHRwbWV0aG9kcy5odG1sXHJcbiAqXHJcbiAqICMjIyBVc2FnZVxyXG4gKlxyXG4gKiBDcmVhdGUgYW4gaW4tbWVtb3J5IGRhdGEgc3RvcmUgY2xhc3MgdGhhdCBpbXBsZW1lbnRzIGBJbk1lbW9yeURiU2VydmljZWAuXHJcbiAqIENhbGwgYGNvbmZpZ2Agc3RhdGljIG1ldGhvZCB3aXRoIHRoaXMgc2VydmljZSBjbGFzcyBhbmQgb3B0aW9uYWwgY29uZmlndXJhdGlvbiBvYmplY3Q6XHJcbiAqIGBgYFxyXG4gKiAvLyBvdGhlciBpbXBvcnRzXHJcbiAqIGltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbiAqIGltcG9ydCB7IEh0dHBDbGllbnRJbk1lbW9yeVdlYkFwaU1vZHVsZSB9IGZyb20gJ2FuZ3VsYXItaW4tbWVtb3J5LXdlYi1hcGknO1xyXG4gKlxyXG4gKiBpbXBvcnQgeyBJbk1lbUhlcm9TZXJ2aWNlLCBpbk1lbUNvbmZpZyB9IGZyb20gJy4uL2FwaS9pbi1tZW1vcnktaGVyby5zZXJ2aWNlJztcclxuICogQE5nTW9kdWxlKHtcclxuICogIGltcG9ydHM6IFtcclxuICogICAgSHR0cE1vZHVsZSxcclxuICogICAgSHR0cENsaWVudEluTWVtb3J5V2ViQXBpTW9kdWxlLmZvclJvb3QoSW5NZW1IZXJvU2VydmljZSwgaW5NZW1Db25maWcpLFxyXG4gKiAgICAuLi5cclxuICogIF0sXHJcbiAqICAuLi5cclxuICogfSlcclxuICogZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IC4uLiB9XHJcbiAqIGBgYFxyXG4gKi9cclxudmFyIEh0dHBDbGllbnRCYWNrZW5kU2VydmljZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhIdHRwQ2xpZW50QmFja2VuZFNlcnZpY2UsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBIdHRwQ2xpZW50QmFja2VuZFNlcnZpY2UoaW5NZW1EYlNlcnZpY2UsIGNvbmZpZywgeGhyRmFjdG9yeSkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGluTWVtRGJTZXJ2aWNlLCBjb25maWcpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMueGhyRmFjdG9yeSA9IHhockZhY3Rvcnk7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgSHR0cENsaWVudEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5oYW5kbGUgPSBmdW5jdGlvbiAocmVxKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUmVxdWVzdChyZXEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgdmFyIGVyciA9IGVycm9yLm1lc3NhZ2UgfHwgZXJyb3I7XHJcbiAgICAgICAgICAgIHZhciByZXNPcHRpb25zXzEgPSB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2VPcHRpb25zKHJlcS51cmwsIFNUQVRVUy5JTlRFUk5BTF9TRVJWRVJfRVJST1IsIFwiXCIgKyBlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVSZXNwb25zZSQoZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVzT3B0aW9uc18xOyB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLy8vLyAgcHJvdGVjdGVkIG92ZXJyaWRlcyAvLy8vL1xyXG4gICAgSHR0cENsaWVudEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5nZXRKc29uQm9keSA9IGZ1bmN0aW9uIChyZXEpIHtcclxuICAgICAgICByZXR1cm4gcmVxLmJvZHk7XHJcbiAgICB9O1xyXG4gICAgSHR0cENsaWVudEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5nZXRSZXF1ZXN0TWV0aG9kID0gZnVuY3Rpb24gKHJlcSkge1xyXG4gICAgICAgIHJldHVybiAocmVxLm1ldGhvZCB8fCAnZ2V0JykudG9Mb3dlckNhc2UoKTtcclxuICAgIH07XHJcbiAgICBIdHRwQ2xpZW50QmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmNyZWF0ZUhlYWRlcnMgPSBmdW5jdGlvbiAoaGVhZGVycykge1xyXG4gICAgICAgIHJldHVybiBuZXcgSHR0cEhlYWRlcnMoaGVhZGVycyk7XHJcbiAgICB9O1xyXG4gICAgSHR0cENsaWVudEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5jcmVhdGVRdWVyeU1hcCA9IGZ1bmN0aW9uIChzZWFyY2gpIHtcclxuICAgICAgICB2YXIgbWFwID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIGlmIChzZWFyY2gpIHtcclxuICAgICAgICAgICAgdmFyIHBhcmFtc18xID0gbmV3IEh0dHBQYXJhbXMoeyBmcm9tU3RyaW5nOiBzZWFyY2ggfSk7XHJcbiAgICAgICAgICAgIHBhcmFtc18xLmtleXMoKS5mb3JFYWNoKGZ1bmN0aW9uIChwKSB7IHJldHVybiBtYXAuc2V0KHAsIHBhcmFtc18xLmdldEFsbChwKSk7IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWFwO1xyXG4gICAgfTtcclxuICAgIEh0dHBDbGllbnRCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuY3JlYXRlUmVzcG9uc2UkZnJvbVJlc3BvbnNlT3B0aW9ucyQgPSBmdW5jdGlvbiAocmVzT3B0aW9ucyQpIHtcclxuICAgICAgICByZXR1cm4gcmVzT3B0aW9ucyQucGlwZShtYXAoZnVuY3Rpb24gKG9wdHMpIHsgcmV0dXJuIG5ldyBIdHRwUmVzcG9uc2Uob3B0cyk7IH0pKTtcclxuICAgIH07XHJcbiAgICBIdHRwQ2xpZW50QmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmNyZWF0ZVBhc3NUaHJ1QmFja2VuZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEh0dHBYaHJCYWNrZW5kKHRoaXMueGhyRmFjdG9yeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChleCkge1xyXG4gICAgICAgICAgICBleC5tZXNzYWdlID0gJ0Nhbm5vdCBjcmVhdGUgcGFzc1RocnU0MDQgYmFja2VuZDsgJyArIChleC5tZXNzYWdlIHx8ICcnKTtcclxuICAgICAgICAgICAgdGhyb3cgZXg7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEh0dHBDbGllbnRCYWNrZW5kU2VydmljZSA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIEluamVjdGFibGUoKSxcclxuICAgICAgICBfX3BhcmFtKDEsIEluamVjdChJbk1lbW9yeUJhY2tlbmRDb25maWcpKSwgX19wYXJhbSgxLCBPcHRpb25hbCgpKSxcclxuICAgICAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW0luTWVtb3J5RGJTZXJ2aWNlLFxyXG4gICAgICAgICAgICBJbk1lbW9yeUJhY2tlbmRDb25maWdBcmdzLFxyXG4gICAgICAgICAgICBYaHJGYWN0b3J5XSlcclxuICAgIF0sIEh0dHBDbGllbnRCYWNrZW5kU2VydmljZSk7XHJcbiAgICByZXR1cm4gSHR0cENsaWVudEJhY2tlbmRTZXJ2aWNlO1xyXG59KEJhY2tlbmRTZXJ2aWNlKSk7XHJcbmV4cG9ydCB7IEh0dHBDbGllbnRCYWNrZW5kU2VydmljZSB9O1xyXG4iLCIvLy8vLy8gSHR0cENsaWVudC1Pbmx5IHZlcnNpb24gLy8vL1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQmFja2VuZCwgWGhyRmFjdG9yeSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5NZW1vcnlCYWNrZW5kQ29uZmlnLCBJbk1lbW9yeURiU2VydmljZSB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRCYWNrZW5kU2VydmljZSB9IGZyb20gJy4vaHR0cC1jbGllbnQtYmFja2VuZC5zZXJ2aWNlJztcclxuLy8gSW50ZXJuYWwgLSBDcmVhdGVzIHRoZSBpbi1tZW0gYmFja2VuZCBmb3IgdGhlIEh0dHBDbGllbnQgbW9kdWxlXHJcbi8vIEFvVCByZXF1aXJlcyBmYWN0b3J5IHRvIGJlIGV4cG9ydGVkXHJcbmV4cG9ydCBmdW5jdGlvbiBodHRwQ2xpZW50SW5NZW1CYWNrZW5kU2VydmljZUZhY3RvcnkoZGJTZXJ2aWNlLCBvcHRpb25zLCB4aHJGYWN0b3J5KSB7XHJcbiAgICB2YXIgYmFja2VuZCA9IG5ldyBIdHRwQ2xpZW50QmFja2VuZFNlcnZpY2UoZGJTZXJ2aWNlLCBvcHRpb25zLCB4aHJGYWN0b3J5KTtcclxuICAgIHJldHVybiBiYWNrZW5kO1xyXG59XHJcbnZhciBIdHRwQ2xpZW50SW5NZW1vcnlXZWJBcGlNb2R1bGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBIdHRwQ2xpZW50SW5NZW1vcnlXZWJBcGlNb2R1bGUoKSB7XHJcbiAgICB9XHJcbiAgICBIdHRwQ2xpZW50SW5NZW1vcnlXZWJBcGlNb2R1bGVfMSA9IEh0dHBDbGllbnRJbk1lbW9yeVdlYkFwaU1vZHVsZTtcclxuICAgIC8qKlxyXG4gICAgKiAgUmVkaXJlY3QgdGhlIEFuZ3VsYXIgYEh0dHBDbGllbnRgIFhIUiBjYWxsc1xyXG4gICAgKiAgdG8gaW4tbWVtb3J5IGRhdGEgc3RvcmUgdGhhdCBpbXBsZW1lbnRzIGBJbk1lbW9yeURiU2VydmljZWAuXHJcbiAgICAqICB3aXRoIGNsYXNzIHRoYXQgaW1wbGVtZW50cyBJbk1lbW9yeURiU2VydmljZSBhbmQgY3JlYXRlcyBhbiBpbi1tZW1vcnkgZGF0YWJhc2UuXHJcbiAgICAqXHJcbiAgICAqICBVc3VhbGx5IGltcG9ydGVkIGluIHRoZSByb290IGFwcGxpY2F0aW9uIG1vZHVsZS5cclxuICAgICogIENhbiBpbXBvcnQgaW4gYSBsYXp5IGZlYXR1cmUgbW9kdWxlIHRvbywgd2hpY2ggd2lsbCBzaGFkb3cgbW9kdWxlcyBsb2FkZWQgZWFybGllclxyXG4gICAgKlxyXG4gICAgKiBAcGFyYW0ge1R5cGV9IGRiQ3JlYXRvciAtIENsYXNzIHRoYXQgY3JlYXRlcyBzZWVkIGRhdGEgZm9yIGluLW1lbW9yeSBkYXRhYmFzZS4gTXVzdCBpbXBsZW1lbnQgSW5NZW1vcnlEYlNlcnZpY2UuXHJcbiAgICAqIEBwYXJhbSB7SW5NZW1vcnlCYWNrZW5kQ29uZmlnQXJnc30gW29wdGlvbnNdXHJcbiAgICAqXHJcbiAgICAqIEBleGFtcGxlXHJcbiAgICAqIEh0dHBJbk1lbW9yeVdlYkFwaU1vZHVsZS5mb3JSb290KGRiQ3JlYXRvcik7XHJcbiAgICAqIEh0dHBJbk1lbW9yeVdlYkFwaU1vZHVsZS5mb3JSb290KGRiQ3JlYXRvciwge3VzZVZhbHVlOiB7ZGVsYXk6NjAwfX0pO1xyXG4gICAgKi9cclxuICAgIEh0dHBDbGllbnRJbk1lbW9yeVdlYkFwaU1vZHVsZS5mb3JSb290ID0gZnVuY3Rpb24gKGRiQ3JlYXRvciwgb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG5nTW9kdWxlOiBIdHRwQ2xpZW50SW5NZW1vcnlXZWJBcGlNb2R1bGVfMSxcclxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IEluTWVtb3J5RGJTZXJ2aWNlLCB1c2VDbGFzczogZGJDcmVhdG9yIH0sXHJcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IEluTWVtb3J5QmFja2VuZENvbmZpZywgdXNlVmFsdWU6IG9wdGlvbnMgfSxcclxuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogSHR0cEJhY2tlbmQsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlRmFjdG9yeTogaHR0cENsaWVudEluTWVtQmFja2VuZFNlcnZpY2VGYWN0b3J5LFxyXG4gICAgICAgICAgICAgICAgICAgIGRlcHM6IFtJbk1lbW9yeURiU2VydmljZSwgSW5NZW1vcnlCYWNrZW5kQ29uZmlnLCBYaHJGYWN0b3J5XSB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAqXHJcbiAgICogRW5hYmxlIGFuZCBjb25maWd1cmUgdGhlIGluLW1lbW9yeSB3ZWIgYXBpIGluIGEgbGF6eS1sb2FkZWQgZmVhdHVyZSBtb2R1bGUuXHJcbiAgICogU2FtZSBhcyBgZm9yUm9vdGAuXHJcbiAgICogVGhpcyBpcyBhIGZlZWwtZ29vZCBtZXRob2Qgc28geW91IGNhbiBmb2xsb3cgdGhlIEFuZ3VsYXIgc3R5bGUgZ3VpZGUgZm9yIGxhenktbG9hZGVkIG1vZHVsZXMuXHJcbiAgICovXHJcbiAgICBIdHRwQ2xpZW50SW5NZW1vcnlXZWJBcGlNb2R1bGUuZm9yRmVhdHVyZSA9IGZ1bmN0aW9uIChkYkNyZWF0b3IsIG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gSHR0cENsaWVudEluTWVtb3J5V2ViQXBpTW9kdWxlXzEuZm9yUm9vdChkYkNyZWF0b3IsIG9wdGlvbnMpO1xyXG4gICAgfTtcclxuICAgIHZhciBIdHRwQ2xpZW50SW5NZW1vcnlXZWJBcGlNb2R1bGVfMTtcclxuICAgIEh0dHBDbGllbnRJbk1lbW9yeVdlYkFwaU1vZHVsZSA9IEh0dHBDbGllbnRJbk1lbW9yeVdlYkFwaU1vZHVsZV8xID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgTmdNb2R1bGUoe30pXHJcbiAgICBdLCBIdHRwQ2xpZW50SW5NZW1vcnlXZWJBcGlNb2R1bGUpO1xyXG4gICAgcmV0dXJuIEh0dHBDbGllbnRJbk1lbW9yeVdlYkFwaU1vZHVsZTtcclxufSgpKTtcclxuZXhwb3J0IHsgSHR0cENsaWVudEluTWVtb3J5V2ViQXBpTW9kdWxlIH07XHJcbiIsIi8vLy8vLyBGb3IgYXBwcyB3aXRoIGJvdGggSHR0cCBhbmQgSHR0cENsaWVudCAvLy8vXHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBCYWNrZW5kLCBYaHJGYWN0b3J5IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBJbk1lbW9yeUJhY2tlbmRDb25maWcsIEluTWVtb3J5RGJTZXJ2aWNlIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcclxuaW1wb3J0IHsgaHR0cENsaWVudEluTWVtQmFja2VuZFNlcnZpY2VGYWN0b3J5IH0gZnJvbSAnLi9odHRwLWNsaWVudC1pbi1tZW1vcnktd2ViLWFwaS5tb2R1bGUnO1xyXG52YXIgSW5NZW1vcnlXZWJBcGlNb2R1bGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBJbk1lbW9yeVdlYkFwaU1vZHVsZSgpIHtcclxuICAgIH1cclxuICAgIEluTWVtb3J5V2ViQXBpTW9kdWxlXzEgPSBJbk1lbW9yeVdlYkFwaU1vZHVsZTtcclxuICAgIC8qKlxyXG4gICAgKiAgUmVkaXJlY3QgQk9USCBBbmd1bGFyIGBIdHRwYCBhbmQgYEh0dHBDbGllbnRgIFhIUiBjYWxsc1xyXG4gICAgKiAgdG8gaW4tbWVtb3J5IGRhdGEgc3RvcmUgdGhhdCBpbXBsZW1lbnRzIGBJbk1lbW9yeURiU2VydmljZWAuXHJcbiAgICAqICB3aXRoIGNsYXNzIHRoYXQgaW1wbGVtZW50cyBJbk1lbW9yeURiU2VydmljZSBhbmQgY3JlYXRlcyBhbiBpbi1tZW1vcnkgZGF0YWJhc2UuXHJcbiAgICAqXHJcbiAgICAqICBVc3VhbGx5IGltcG9ydGVkIGluIHRoZSByb290IGFwcGxpY2F0aW9uIG1vZHVsZS5cclxuICAgICogIENhbiBpbXBvcnQgaW4gYSBsYXp5IGZlYXR1cmUgbW9kdWxlIHRvbywgd2hpY2ggd2lsbCBzaGFkb3cgbW9kdWxlcyBsb2FkZWQgZWFybGllclxyXG4gICAgKlxyXG4gICAgKiBAcGFyYW0ge1R5cGV9IGRiQ3JlYXRvciAtIENsYXNzIHRoYXQgY3JlYXRlcyBzZWVkIGRhdGEgZm9yIGluLW1lbW9yeSBkYXRhYmFzZS4gTXVzdCBpbXBsZW1lbnQgSW5NZW1vcnlEYlNlcnZpY2UuXHJcbiAgICAqIEBwYXJhbSB7SW5NZW1vcnlCYWNrZW5kQ29uZmlnQXJnc30gW29wdGlvbnNdXHJcbiAgICAqXHJcbiAgICAqIEBleGFtcGxlXHJcbiAgICAqIEluTWVtb3J5V2ViQXBpTW9kdWxlLmZvclJvb3QoZGJDcmVhdG9yKTtcclxuICAgICogSW5NZW1vcnlXZWJBcGlNb2R1bGUuZm9yUm9vdChkYkNyZWF0b3IsIHt1c2VWYWx1ZToge2RlbGF5OjYwMH19KTtcclxuICAgICovXHJcbiAgICBJbk1lbW9yeVdlYkFwaU1vZHVsZS5mb3JSb290ID0gZnVuY3Rpb24gKGRiQ3JlYXRvciwgb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG5nTW9kdWxlOiBJbk1lbW9yeVdlYkFwaU1vZHVsZV8xLFxyXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogSW5NZW1vcnlEYlNlcnZpY2UsIHVzZUNsYXNzOiBkYkNyZWF0b3IgfSxcclxuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogSW5NZW1vcnlCYWNrZW5kQ29uZmlnLCB1c2VWYWx1ZTogb3B0aW9ucyB9LFxyXG4gICAgICAgICAgICAgICAgeyBwcm92aWRlOiBIdHRwQmFja2VuZCxcclxuICAgICAgICAgICAgICAgICAgICB1c2VGYWN0b3J5OiBodHRwQ2xpZW50SW5NZW1CYWNrZW5kU2VydmljZUZhY3RvcnksXHJcbiAgICAgICAgICAgICAgICAgICAgZGVwczogW0luTWVtb3J5RGJTZXJ2aWNlLCBJbk1lbW9yeUJhY2tlbmRDb25maWcsIFhockZhY3RvcnldIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogRW5hYmxlIGFuZCBjb25maWd1cmUgdGhlIGluLW1lbW9yeSB3ZWIgYXBpIGluIGEgbGF6eS1sb2FkZWQgZmVhdHVyZSBtb2R1bGUuXHJcbiAgICAgKiBTYW1lIGFzIGBmb3JSb290YC5cclxuICAgICAqIFRoaXMgaXMgYSBmZWVsLWdvb2QgbWV0aG9kIHNvIHlvdSBjYW4gZm9sbG93IHRoZSBBbmd1bGFyIHN0eWxlIGd1aWRlIGZvciBsYXp5LWxvYWRlZCBtb2R1bGVzLlxyXG4gICAgICovXHJcbiAgICBJbk1lbW9yeVdlYkFwaU1vZHVsZS5mb3JGZWF0dXJlID0gZnVuY3Rpb24gKGRiQ3JlYXRvciwgb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiBJbk1lbW9yeVdlYkFwaU1vZHVsZV8xLmZvclJvb3QoZGJDcmVhdG9yLCBvcHRpb25zKTtcclxuICAgIH07XHJcbiAgICB2YXIgSW5NZW1vcnlXZWJBcGlNb2R1bGVfMTtcclxuICAgIEluTWVtb3J5V2ViQXBpTW9kdWxlID0gSW5NZW1vcnlXZWJBcGlNb2R1bGVfMSA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIE5nTW9kdWxlKHt9KVxyXG4gICAgXSwgSW5NZW1vcnlXZWJBcGlNb2R1bGUpO1xyXG4gICAgcmV0dXJuIEluTWVtb3J5V2ViQXBpTW9kdWxlO1xyXG59KCkpO1xyXG5leHBvcnQgeyBJbk1lbW9yeVdlYkFwaU1vZHVsZSB9O1xyXG4iXX0=