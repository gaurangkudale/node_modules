/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ErrorHandler, Inject, Injectable, Optional, SecurityContext, SkipSelf, } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { forkJoin, of as observableOf, throwError as observableThrow } from 'rxjs';
import { catchError, finalize, map, share, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@angular/platform-browser";
import * as i3 from "@angular/common";
/**
 * Returns an exception to be thrown in the case when attempting to
 * load an icon with a name that cannot be found.
 * @docs-private
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common/http';
import * as ɵngcc2 from '@angular/platform-browser';
export function getMatIconNameNotFoundError(iconName) {
    return Error("Unable to find icon with the name \"" + iconName + "\"");
}
/**
 * Returns an exception to be thrown when the consumer attempts to use
 * `<mat-icon>` without including @angular/common/http.
 * @docs-private
 */
export function getMatIconNoHttpProviderError() {
    return Error('Could not find HttpClient provider for use with Angular Material icons. ' +
        'Please include the HttpClientModule from @angular/common/http in your ' +
        'app imports.');
}
/**
 * Returns an exception to be thrown when a URL couldn't be sanitized.
 * @param url URL that was attempted to be sanitized.
 * @docs-private
 */
export function getMatIconFailedToSanitizeUrlError(url) {
    return Error("The URL provided to MatIconRegistry was not trusted as a resource URL " +
        ("via Angular's DomSanitizer. Attempted URL was \"" + url + "\"."));
}
/**
 * Returns an exception to be thrown when a HTML string couldn't be sanitized.
 * @param literal HTML that was attempted to be sanitized.
 * @docs-private
 */
export function getMatIconFailedToSanitizeLiteralError(literal) {
    return Error("The literal provided to MatIconRegistry was not trusted as safe HTML by " +
        ("Angular's DomSanitizer. Attempted literal was \"" + literal + "\"."));
}
/**
 * Configuration for an icon, including the URL and possibly the cached SVG element.
 * @docs-private
 */
var SvgIconConfig = /** @class */ (function () {
    function SvgIconConfig(data, options) {
        this.options = options;
        // Note that we can't use `instanceof SVGElement` here,
        // because it'll break during server-side rendering.
        if (!!data.nodeName) {
            this.svgElement = data;
        }
        else {
            this.url = data;
        }
    }
    return SvgIconConfig;
}());
/**
 * Service to register and display icons used by the `<mat-icon>` component.
 * - Registers icon URLs by namespace and name.
 * - Registers icon set URLs by namespace.
 * - Registers aliases for CSS classes, for use with icon fonts.
 * - Loads icons from URLs and extracts individual icons from icon sets.
 */
var MatIconRegistry = /** @class */ (function () {
    function MatIconRegistry(_httpClient, _sanitizer, document, 
    // @breaking-change 9.0.0 _errorHandler parameter to be made required
    _errorHandler) {
        this._httpClient = _httpClient;
        this._sanitizer = _sanitizer;
        this._errorHandler = _errorHandler;
        /**
         * URLs and cached SVG elements for individual icons. Keys are of the format "[namespace]:[icon]".
         */
        this._svgIconConfigs = new Map();
        /**
         * SvgIconConfig objects and cached SVG elements for icon sets, keyed by namespace.
         * Multiple icon sets can be registered under the same namespace.
         */
        this._iconSetConfigs = new Map();
        /** Cache for icons loaded by direct URLs. */
        this._cachedIconsByUrl = new Map();
        /** In-progress icon fetches. Used to coalesce multiple requests to the same URL. */
        this._inProgressUrlFetches = new Map();
        /** Map from font identifiers to their CSS class names. Used for icon fonts. */
        this._fontCssClassesByAlias = new Map();
        /**
         * The CSS class to apply when an `<mat-icon>` component has no icon name, url, or font specified.
         * The default 'material-icons' value assumes that the material icon font has been loaded as
         * described at http://google.github.io/material-design-icons/#icon-font-for-the-web
         */
        this._defaultFontSetClass = 'material-icons';
        this._document = document;
    }
    /**
     * Registers an icon by URL in the default namespace.
     * @param iconName Name under which the icon should be registered.
     * @param url
     */
    MatIconRegistry.prototype.addSvgIcon = function (iconName, url, options) {
        return this.addSvgIconInNamespace('', iconName, url, options);
    };
    /**
     * Registers an icon using an HTML string in the default namespace.
     * @param iconName Name under which the icon should be registered.
     * @param literal SVG source of the icon.
     */
    MatIconRegistry.prototype.addSvgIconLiteral = function (iconName, literal, options) {
        return this.addSvgIconLiteralInNamespace('', iconName, literal, options);
    };
    /**
     * Registers an icon by URL in the specified namespace.
     * @param namespace Namespace in which the icon should be registered.
     * @param iconName Name under which the icon should be registered.
     * @param url
     */
    MatIconRegistry.prototype.addSvgIconInNamespace = function (namespace, iconName, url, options) {
        return this._addSvgIconConfig(namespace, iconName, new SvgIconConfig(url, options));
    };
    /**
     * Registers an icon using an HTML string in the specified namespace.
     * @param namespace Namespace in which the icon should be registered.
     * @param iconName Name under which the icon should be registered.
     * @param literal SVG source of the icon.
     */
    MatIconRegistry.prototype.addSvgIconLiteralInNamespace = function (namespace, iconName, literal, options) {
        var sanitizedLiteral = this._sanitizer.sanitize(SecurityContext.HTML, literal);
        if (!sanitizedLiteral) {
            throw getMatIconFailedToSanitizeLiteralError(literal);
        }
        var svgElement = this._createSvgElementForSingleIcon(sanitizedLiteral, options);
        return this._addSvgIconConfig(namespace, iconName, new SvgIconConfig(svgElement, options));
    };
    /**
     * Registers an icon set by URL in the default namespace.
     * @param url
     */
    MatIconRegistry.prototype.addSvgIconSet = function (url, options) {
        return this.addSvgIconSetInNamespace('', url, options);
    };
    /**
     * Registers an icon set using an HTML string in the default namespace.
     * @param literal SVG source of the icon set.
     */
    MatIconRegistry.prototype.addSvgIconSetLiteral = function (literal, options) {
        return this.addSvgIconSetLiteralInNamespace('', literal, options);
    };
    /**
     * Registers an icon set by URL in the specified namespace.
     * @param namespace Namespace in which to register the icon set.
     * @param url
     */
    MatIconRegistry.prototype.addSvgIconSetInNamespace = function (namespace, url, options) {
        return this._addSvgIconSetConfig(namespace, new SvgIconConfig(url, options));
    };
    /**
     * Registers an icon set using an HTML string in the specified namespace.
     * @param namespace Namespace in which to register the icon set.
     * @param literal SVG source of the icon set.
     */
    MatIconRegistry.prototype.addSvgIconSetLiteralInNamespace = function (namespace, literal, options) {
        var sanitizedLiteral = this._sanitizer.sanitize(SecurityContext.HTML, literal);
        if (!sanitizedLiteral) {
            throw getMatIconFailedToSanitizeLiteralError(literal);
        }
        var svgElement = this._svgElementFromString(sanitizedLiteral);
        return this._addSvgIconSetConfig(namespace, new SvgIconConfig(svgElement, options));
    };
    /**
     * Defines an alias for a CSS class name to be used for icon fonts. Creating an matIcon
     * component with the alias as the fontSet input will cause the class name to be applied
     * to the `<mat-icon>` element.
     *
     * @param alias Alias for the font.
     * @param className Class name override to be used instead of the alias.
     */
    MatIconRegistry.prototype.registerFontClassAlias = function (alias, className) {
        if (className === void 0) { className = alias; }
        this._fontCssClassesByAlias.set(alias, className);
        return this;
    };
    /**
     * Returns the CSS class name associated with the alias by a previous call to
     * registerFontClassAlias. If no CSS class has been associated, returns the alias unmodified.
     */
    MatIconRegistry.prototype.classNameForFontAlias = function (alias) {
        return this._fontCssClassesByAlias.get(alias) || alias;
    };
    /**
     * Sets the CSS class name to be used for icon fonts when an `<mat-icon>` component does not
     * have a fontSet input value, and is not loading an icon by name or URL.
     *
     * @param className
     */
    MatIconRegistry.prototype.setDefaultFontSetClass = function (className) {
        this._defaultFontSetClass = className;
        return this;
    };
    /**
     * Returns the CSS class name to be used for icon fonts when an `<mat-icon>` component does not
     * have a fontSet input value, and is not loading an icon by name or URL.
     */
    MatIconRegistry.prototype.getDefaultFontSetClass = function () {
        return this._defaultFontSetClass;
    };
    /**
     * Returns an Observable that produces the icon (as an `<svg>` DOM element) from the given URL.
     * The response from the URL may be cached so this will not always cause an HTTP request, but
     * the produced element will always be a new copy of the originally fetched icon. (That is,
     * it will not contain any modifications made to elements previously returned).
     *
     * @param safeUrl URL from which to fetch the SVG icon.
     */
    MatIconRegistry.prototype.getSvgIconFromUrl = function (safeUrl) {
        var _this = this;
        var url = this._sanitizer.sanitize(SecurityContext.RESOURCE_URL, safeUrl);
        if (!url) {
            throw getMatIconFailedToSanitizeUrlError(safeUrl);
        }
        var cachedIcon = this._cachedIconsByUrl.get(url);
        if (cachedIcon) {
            return observableOf(cloneSvg(cachedIcon));
        }
        return this._loadSvgIconFromConfig(new SvgIconConfig(safeUrl)).pipe(tap(function (svg) { return _this._cachedIconsByUrl.set(url, svg); }), map(function (svg) { return cloneSvg(svg); }));
    };
    /**
     * Returns an Observable that produces the icon (as an `<svg>` DOM element) with the given name
     * and namespace. The icon must have been previously registered with addIcon or addIconSet;
     * if not, the Observable will throw an error.
     *
     * @param name Name of the icon to be retrieved.
     * @param namespace Namespace in which to look for the icon.
     */
    MatIconRegistry.prototype.getNamedSvgIcon = function (name, namespace) {
        if (namespace === void 0) { namespace = ''; }
        // Return (copy of) cached icon if possible.
        var key = iconKey(namespace, name);
        var config = this._svgIconConfigs.get(key);
        if (config) {
            return this._getSvgFromConfig(config);
        }
        // See if we have any icon sets registered for the namespace.
        var iconSetConfigs = this._iconSetConfigs.get(namespace);
        if (iconSetConfigs) {
            return this._getSvgFromIconSetConfigs(name, iconSetConfigs);
        }
        return observableThrow(getMatIconNameNotFoundError(key));
    };
    MatIconRegistry.prototype.ngOnDestroy = function () {
        this._svgIconConfigs.clear();
        this._iconSetConfigs.clear();
        this._cachedIconsByUrl.clear();
    };
    /**
     * Returns the cached icon for a SvgIconConfig if available, or fetches it from its URL if not.
     */
    MatIconRegistry.prototype._getSvgFromConfig = function (config) {
        if (config.svgElement) {
            // We already have the SVG element for this icon, return a copy.
            return observableOf(cloneSvg(config.svgElement));
        }
        else {
            // Fetch the icon from the config's URL, cache it, and return a copy.
            return this._loadSvgIconFromConfig(config).pipe(tap(function (svg) { return config.svgElement = svg; }), map(function (svg) { return cloneSvg(svg); }));
        }
    };
    /**
     * Attempts to find an icon with the specified name in any of the SVG icon sets.
     * First searches the available cached icons for a nested element with a matching name, and
     * if found copies the element to a new `<svg>` element. If not found, fetches all icon sets
     * that have not been cached, and searches again after all fetches are completed.
     * The returned Observable produces the SVG element if possible, and throws
     * an error if no icon with the specified name can be found.
     */
    MatIconRegistry.prototype._getSvgFromIconSetConfigs = function (name, iconSetConfigs) {
        var _this = this;
        // For all the icon set SVG elements we've fetched, see if any contain an icon with the
        // requested name.
        var namedIcon = this._extractIconWithNameFromAnySet(name, iconSetConfigs);
        if (namedIcon) {
            // We could cache namedIcon in _svgIconConfigs, but since we have to make a copy every
            // time anyway, there's probably not much advantage compared to just always extracting
            // it from the icon set.
            return observableOf(namedIcon);
        }
        // Not found in any cached icon sets. If there are icon sets with URLs that we haven't
        // fetched, fetch them now and look for iconName in the results.
        var iconSetFetchRequests = iconSetConfigs
            .filter(function (iconSetConfig) { return !iconSetConfig.svgElement; })
            .map(function (iconSetConfig) {
            return _this._loadSvgIconSetFromConfig(iconSetConfig).pipe(catchError(function (err) {
                var url = _this._sanitizer.sanitize(SecurityContext.RESOURCE_URL, iconSetConfig.url);
                // Swallow errors fetching individual URLs so the
                // combined Observable won't necessarily fail.
                var errorMessage = "Loading icon set URL: " + url + " failed: " + err.message;
                // @breaking-change 9.0.0 _errorHandler parameter to be made required
                if (_this._errorHandler) {
                    _this._errorHandler.handleError(new Error(errorMessage));
                }
                else {
                    console.error(errorMessage);
                }
                return observableOf(null);
            }));
        });
        // Fetch all the icon set URLs. When the requests complete, every IconSet should have a
        // cached SVG element (unless the request failed), and we can check again for the icon.
        return forkJoin(iconSetFetchRequests).pipe(map(function () {
            var foundIcon = _this._extractIconWithNameFromAnySet(name, iconSetConfigs);
            if (!foundIcon) {
                throw getMatIconNameNotFoundError(name);
            }
            return foundIcon;
        }));
    };
    /**
     * Searches the cached SVG elements for the given icon sets for a nested icon element whose "id"
     * tag matches the specified name. If found, copies the nested element to a new SVG element and
     * returns it. Returns null if no matching element is found.
     */
    MatIconRegistry.prototype._extractIconWithNameFromAnySet = function (iconName, iconSetConfigs) {
        // Iterate backwards, so icon sets added later have precedence.
        for (var i = iconSetConfigs.length - 1; i >= 0; i--) {
            var config = iconSetConfigs[i];
            if (config.svgElement) {
                var foundIcon = this._extractSvgIconFromSet(config.svgElement, iconName, config.options);
                if (foundIcon) {
                    return foundIcon;
                }
            }
        }
        return null;
    };
    /**
     * Loads the content of the icon URL specified in the SvgIconConfig and creates an SVG element
     * from it.
     */
    MatIconRegistry.prototype._loadSvgIconFromConfig = function (config) {
        var _this = this;
        return this._fetchUrl(config.url)
            .pipe(map(function (svgText) { return _this._createSvgElementForSingleIcon(svgText, config.options); }));
    };
    /**
     * Loads the content of the icon set URL specified in the SvgIconConfig and creates an SVG element
     * from it.
     */
    MatIconRegistry.prototype._loadSvgIconSetFromConfig = function (config) {
        var _this = this;
        // If the SVG for this icon set has already been parsed, do nothing.
        if (config.svgElement) {
            return observableOf(config.svgElement);
        }
        return this._fetchUrl(config.url).pipe(map(function (svgText) {
            // It is possible that the icon set was parsed and cached by an earlier request, so parsing
            // only needs to occur if the cache is yet unset.
            if (!config.svgElement) {
                config.svgElement = _this._svgElementFromString(svgText);
            }
            return config.svgElement;
        }));
    };
    /**
     * Creates a DOM element from the given SVG string, and adds default attributes.
     */
    MatIconRegistry.prototype._createSvgElementForSingleIcon = function (responseText, options) {
        var svg = this._svgElementFromString(responseText);
        this._setSvgAttributes(svg, options);
        return svg;
    };
    /**
     * Searches the cached element of the given SvgIconConfig for a nested icon element whose "id"
     * tag matches the specified name. If found, copies the nested element to a new SVG element and
     * returns it. Returns null if no matching element is found.
     */
    MatIconRegistry.prototype._extractSvgIconFromSet = function (iconSet, iconName, options) {
        // Use the `id="iconName"` syntax in order to escape special
        // characters in the ID (versus using the #iconName syntax).
        var iconSource = iconSet.querySelector("[id=\"" + iconName + "\"]");
        if (!iconSource) {
            return null;
        }
        // Clone the element and remove the ID to prevent multiple elements from being added
        // to the page with the same ID.
        var iconElement = iconSource.cloneNode(true);
        iconElement.removeAttribute('id');
        // If the icon node is itself an <svg> node, clone and return it directly. If not, set it as
        // the content of a new <svg> node.
        if (iconElement.nodeName.toLowerCase() === 'svg') {
            return this._setSvgAttributes(iconElement, options);
        }
        // If the node is a <symbol>, it won't be rendered so we have to convert it into <svg>. Note
        // that the same could be achieved by referring to it via <use href="#id">, however the <use>
        // tag is problematic on Firefox, because it needs to include the current page path.
        if (iconElement.nodeName.toLowerCase() === 'symbol') {
            return this._setSvgAttributes(this._toSvgElement(iconElement), options);
        }
        // createElement('SVG') doesn't work as expected; the DOM ends up with
        // the correct nodes, but the SVG content doesn't render. Instead we
        // have to create an empty SVG node using innerHTML and append its content.
        // Elements created using DOMParser.parseFromString have the same problem.
        // http://stackoverflow.com/questions/23003278/svg-innerhtml-in-firefox-can-not-display
        var svg = this._svgElementFromString('<svg></svg>');
        // Clone the node so we don't remove it from the parent icon set element.
        svg.appendChild(iconElement);
        return this._setSvgAttributes(svg, options);
    };
    /**
     * Creates a DOM element from the given SVG string.
     */
    MatIconRegistry.prototype._svgElementFromString = function (str) {
        var div = this._document.createElement('DIV');
        div.innerHTML = str;
        var svg = div.querySelector('svg');
        if (!svg) {
            throw Error('<svg> tag not found');
        }
        return svg;
    };
    /**
     * Converts an element into an SVG node by cloning all of its children.
     */
    MatIconRegistry.prototype._toSvgElement = function (element) {
        var svg = this._svgElementFromString('<svg></svg>');
        var attributes = element.attributes;
        // Copy over all the attributes from the `symbol` to the new SVG, except the id.
        for (var i = 0; i < attributes.length; i++) {
            var _a = attributes[i], name_1 = _a.name, value = _a.value;
            if (name_1 !== 'id') {
                svg.setAttribute(name_1, value);
            }
        }
        for (var i = 0; i < element.childNodes.length; i++) {
            if (element.childNodes[i].nodeType === this._document.ELEMENT_NODE) {
                svg.appendChild(element.childNodes[i].cloneNode(true));
            }
        }
        return svg;
    };
    /**
     * Sets the default attributes for an SVG element to be used as an icon.
     */
    MatIconRegistry.prototype._setSvgAttributes = function (svg, options) {
        svg.setAttribute('fit', '');
        svg.setAttribute('height', '100%');
        svg.setAttribute('width', '100%');
        svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
        svg.setAttribute('focusable', 'false'); // Disable IE11 default behavior to make SVGs focusable.
        if (options && options.viewBox) {
            svg.setAttribute('viewBox', options.viewBox);
        }
        return svg;
    };
    /**
     * Returns an Observable which produces the string contents of the given URL. Results may be
     * cached, so future calls with the same URL may not cause another HTTP request.
     */
    MatIconRegistry.prototype._fetchUrl = function (safeUrl) {
        var _this = this;
        if (!this._httpClient) {
            throw getMatIconNoHttpProviderError();
        }
        if (safeUrl == null) {
            throw Error("Cannot fetch icon from URL \"" + safeUrl + "\".");
        }
        var url = this._sanitizer.sanitize(SecurityContext.RESOURCE_URL, safeUrl);
        if (!url) {
            throw getMatIconFailedToSanitizeUrlError(safeUrl);
        }
        // Store in-progress fetches to avoid sending a duplicate request for a URL when there is
        // already a request in progress for that URL. It's necessary to call share() on the
        // Observable returned by http.get() so that multiple subscribers don't cause multiple XHRs.
        var inProgressFetch = this._inProgressUrlFetches.get(url);
        if (inProgressFetch) {
            return inProgressFetch;
        }
        // TODO(jelbourn): for some reason, the `finalize` operator "loses" the generic type on the
        // Observable. Figure out why and fix it.
        var req = this._httpClient.get(url, { responseType: 'text' }).pipe(finalize(function () { return _this._inProgressUrlFetches.delete(url); }), share());
        this._inProgressUrlFetches.set(url, req);
        return req;
    };
    /**
     * Registers an icon config by name in the specified namespace.
     * @param namespace Namespace in which to register the icon config.
     * @param iconName Name under which to register the config.
     * @param config Config to be registered.
     */
    MatIconRegistry.prototype._addSvgIconConfig = function (namespace, iconName, config) {
        this._svgIconConfigs.set(iconKey(namespace, iconName), config);
        return this;
    };
    /**
     * Registers an icon set config in the specified namespace.
     * @param namespace Namespace in which to register the icon config.
     * @param config Config to be registered.
     */
    MatIconRegistry.prototype._addSvgIconSetConfig = function (namespace, config) {
        var configNamespace = this._iconSetConfigs.get(namespace);
        if (configNamespace) {
            configNamespace.push(config);
        }
        else {
            this._iconSetConfigs.set(namespace, [config]);
        }
        return this;
    };
    /** @nocollapse */
    MatIconRegistry.ctorParameters = function () { return [
        { type: HttpClient, decorators: [{ type: Optional }] },
        { type: DomSanitizer },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
        { type: ErrorHandler, decorators: [{ type: Optional }] }
    ]; };
    MatIconRegistry.ɵprov = i0.ɵɵdefineInjectable({ factory: function MatIconRegistry_Factory() { return new MatIconRegistry(i0.ɵɵinject(i1.HttpClient, 8), i0.ɵɵinject(i2.DomSanitizer), i0.ɵɵinject(i3.DOCUMENT, 8), i0.ɵɵinject(i0.ErrorHandler, 8)); }, token: MatIconRegistry, providedIn: "root" });
MatIconRegistry.ɵfac = function MatIconRegistry_Factory(t) { return new (t || MatIconRegistry)(ɵngcc0.ɵɵinject(ɵngcc1.HttpClient, 8), ɵngcc0.ɵɵinject(ɵngcc2.DomSanitizer), ɵngcc0.ɵɵinject(DOCUMENT, 8), ɵngcc0.ɵɵinject(ɵngcc0.ErrorHandler, 8)); };
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatIconRegistry, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: ɵngcc1.HttpClient, decorators: [{
                type: Optional
            }] }, { type: ɵngcc2.DomSanitizer }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: ɵngcc0.ErrorHandler, decorators: [{
                type: Optional
            }] }]; }, null); })();
    return MatIconRegistry;
}());
export { MatIconRegistry };
/** @docs-private */
export function ICON_REGISTRY_PROVIDER_FACTORY(parentRegistry, httpClient, sanitizer, document, errorHandler) {
    return parentRegistry || new MatIconRegistry(httpClient, sanitizer, document, errorHandler);
}
/** @docs-private */
export var ICON_REGISTRY_PROVIDER = {
    // If there is already an MatIconRegistry available, use that. Otherwise, provide a new one.
    provide: MatIconRegistry,
    deps: [
        [new Optional(), new SkipSelf(), MatIconRegistry],
        [new Optional(), HttpClient],
        DomSanitizer,
        [new Optional(), ErrorHandler],
        [new Optional(), DOCUMENT],
    ],
    useFactory: ICON_REGISTRY_PROVIDER_FACTORY,
};
/** Clones an SVGElement while preserving type information. */
function cloneSvg(svg) {
    return svg.cloneNode(true);
}
/** Returns the cache key to use for an icon namespace and name. */
function iconKey(namespace, name) {
    return namespace + ':' + name;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1yZWdpc3RyeS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL2ljb24vaWNvbi1yZWdpc3RyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBQyxVQUFVLEVBQW9CLE1BQU0sc0JBQXNCLENBQUM7QUFDbkUsT0FBTyxFQUNMLFlBQVksRUFDWixNQUFNLEVBQ04sVUFBVSxFQUVWLFFBQVEsRUFDUixlQUFlLEVBQ2YsUUFBUSxHQUVULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxZQUFZLEVBQTRCLE1BQU0sMkJBQTJCLENBQUM7QUFDbEYsT0FBTyxFQUFDLFFBQVEsRUFBYyxFQUFFLElBQUksWUFBWSxFQUFFLFVBQVUsSUFBSSxlQUFlLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDN0YsT0FBTyxFQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRTtBQUcrQjtBQUN4QjtBQUNEO0FBSE47QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7O0FBQ0gsTUFBTSxVQUFVLDJCQUEyQixDQUFDLFFBQWdCO0FBQUksSUFDOUQsT0FBTyxLQUFLLENBQUMseUNBQXNDLFFBQVEsT0FBRyxDQUFDLENBQUM7QUFDbEUsQ0FBQztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILE1BQU0sVUFBVSw2QkFBNkI7QUFBSyxJQUNoRCxPQUFPLEtBQUssQ0FBQywwRUFBMEU7QUFDekYsUUFBZSx3RUFBd0U7QUFDdkYsUUFBZSxjQUFjLENBQUMsQ0FBQztBQUMvQixDQUFDO0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsTUFBTSxVQUFVLGtD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OlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7RE9DVU1FTlR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0h0dHBDbGllbnQsIEh0dHBFcnJvclJlc3BvbnNlfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge1xuICBFcnJvckhhbmRsZXIsXG4gIEluamVjdCxcbiAgSW5qZWN0YWJsZSxcbiAgSW5qZWN0aW9uVG9rZW4sXG4gIE9wdGlvbmFsLFxuICBTZWN1cml0eUNvbnRleHQsXG4gIFNraXBTZWxmLFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEb21TYW5pdGl6ZXIsIFNhZmVSZXNvdXJjZVVybCwgU2FmZUh0bWx9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHtmb3JrSm9pbiwgT2JzZXJ2YWJsZSwgb2YgYXMgb2JzZXJ2YWJsZU9mLCB0aHJvd0Vycm9yIGFzIG9ic2VydmFibGVUaHJvd30gZnJvbSAncnhqcyc7XG5pbXBvcnQge2NhdGNoRXJyb3IsIGZpbmFsaXplLCBtYXAsIHNoYXJlLCB0YXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuXG4vKipcbiAqIFJldHVybnMgYW4gZXhjZXB0aW9uIHRvIGJlIHRocm93biBpbiB0aGUgY2FzZSB3aGVuIGF0dGVtcHRpbmcgdG9cbiAqIGxvYWQgYW4gaWNvbiB3aXRoIGEgbmFtZSB0aGF0IGNhbm5vdCBiZSBmb3VuZC5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE1hdEljb25OYW1lTm90Rm91bmRFcnJvcihpY29uTmFtZTogc3RyaW5nKTogRXJyb3Ige1xuICByZXR1cm4gRXJyb3IoYFVuYWJsZSB0byBmaW5kIGljb24gd2l0aCB0aGUgbmFtZSBcIiR7aWNvbk5hbWV9XCJgKTtcbn1cblxuXG4vKipcbiAqIFJldHVybnMgYW4gZXhjZXB0aW9uIHRvIGJlIHRocm93biB3aGVuIHRoZSBjb25zdW1lciBhdHRlbXB0cyB0byB1c2VcbiAqIGA8bWF0LWljb24+YCB3aXRob3V0IGluY2x1ZGluZyBAYW5ndWxhci9jb21tb24vaHR0cC5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE1hdEljb25Ob0h0dHBQcm92aWRlckVycm9yKCk6IEVycm9yIHtcbiAgcmV0dXJuIEVycm9yKCdDb3VsZCBub3QgZmluZCBIdHRwQ2xpZW50IHByb3ZpZGVyIGZvciB1c2Ugd2l0aCBBbmd1bGFyIE1hdGVyaWFsIGljb25zLiAnICtcbiAgICAgICAgICAgICAgICdQbGVhc2UgaW5jbHVkZSB0aGUgSHR0cENsaWVudE1vZHVsZSBmcm9tIEBhbmd1bGFyL2NvbW1vbi9odHRwIGluIHlvdXIgJyArXG4gICAgICAgICAgICAgICAnYXBwIGltcG9ydHMuJyk7XG59XG5cblxuLyoqXG4gKiBSZXR1cm5zIGFuIGV4Y2VwdGlvbiB0byBiZSB0aHJvd24gd2hlbiBhIFVSTCBjb3VsZG4ndCBiZSBzYW5pdGl6ZWQuXG4gKiBAcGFyYW0gdXJsIFVSTCB0aGF0IHdhcyBhdHRlbXB0ZWQgdG8gYmUgc2FuaXRpemVkLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWF0SWNvbkZhaWxlZFRvU2FuaXRpemVVcmxFcnJvcih1cmw6IFNhZmVSZXNvdXJjZVVybCk6IEVycm9yIHtcbiAgcmV0dXJuIEVycm9yKGBUaGUgVVJMIHByb3ZpZGVkIHRvIE1hdEljb25SZWdpc3RyeSB3YXMgbm90IHRydXN0ZWQgYXMgYSByZXNvdXJjZSBVUkwgYCArXG4gICAgICAgICAgICAgICBgdmlhIEFuZ3VsYXIncyBEb21TYW5pdGl6ZXIuIEF0dGVtcHRlZCBVUkwgd2FzIFwiJHt1cmx9XCIuYCk7XG59XG5cbi8qKlxuICogUmV0dXJucyBhbiBleGNlcHRpb24gdG8gYmUgdGhyb3duIHdoZW4gYSBIVE1MIHN0cmluZyBjb3VsZG4ndCBiZSBzYW5pdGl6ZWQuXG4gKiBAcGFyYW0gbGl0ZXJhbCBIVE1MIHRoYXQgd2FzIGF0dGVtcHRlZCB0byBiZSBzYW5pdGl6ZWQuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRNYXRJY29uRmFpbGVkVG9TYW5pdGl6ZUxpdGVyYWxFcnJvcihsaXRlcmFsOiBTYWZlSHRtbCk6IEVycm9yIHtcbiAgcmV0dXJuIEVycm9yKGBUaGUgbGl0ZXJhbCBwcm92aWRlZCB0byBNYXRJY29uUmVnaXN0cnkgd2FzIG5vdCB0cnVzdGVkIGFzIHNhZmUgSFRNTCBieSBgICtcbiAgICAgICAgICAgICAgIGBBbmd1bGFyJ3MgRG9tU2FuaXRpemVyLiBBdHRlbXB0ZWQgbGl0ZXJhbCB3YXMgXCIke2xpdGVyYWx9XCIuYCk7XG59XG5cbi8qKiBPcHRpb25zIHRoYXQgY2FuIGJlIHVzZWQgdG8gY29uZmlndXJlIGhvdyBhbiBpY29uIG9yIHRoZSBpY29ucyBpbiBhbiBpY29uIHNldCBhcmUgcHJlc2VudGVkLiAqL1xuZXhwb3J0IGludGVyZmFjZSBJY29uT3B0aW9ucyB7XG4gIC8qKiBWaWV3IGJveCB0byBzZXQgb24gdGhlIGljb24uICovXG4gIHZpZXdCb3g/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQ29uZmlndXJhdGlvbiBmb3IgYW4gaWNvbiwgaW5jbHVkaW5nIHRoZSBVUkwgYW5kIHBvc3NpYmx5IHRoZSBjYWNoZWQgU1ZHIGVsZW1lbnQuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmNsYXNzIFN2Z0ljb25Db25maWcge1xuICB1cmw6IFNhZmVSZXNvdXJjZVVybCB8IG51bGw7XG4gIHN2Z0VsZW1lbnQ6IFNWR0VsZW1lbnQgfCBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHVybDogU2FmZVJlc291cmNlVXJsLCBvcHRpb25zPzogSWNvbk9wdGlvbnMpO1xuICBjb25zdHJ1Y3RvcihzdmdFbGVtZW50OiBTVkdFbGVtZW50LCBvcHRpb25zPzogSWNvbk9wdGlvbnMpO1xuICBjb25zdHJ1Y3RvcihkYXRhOiBTYWZlUmVzb3VyY2VVcmwgfCBTVkdFbGVtZW50LCBwdWJsaWMgb3B0aW9ucz86IEljb25PcHRpb25zKSB7XG4gICAgLy8gTm90ZSB0aGF0IHdlIGNhbid0IHVzZSBgaW5zdGFuY2VvZiBTVkdFbGVtZW50YCBoZXJlLFxuICAgIC8vIGJlY2F1c2UgaXQnbGwgYnJlYWsgZHVyaW5nIHNlcnZlci1zaWRlIHJlbmRlcmluZy5cbiAgICBpZiAoISEoZGF0YSBhcyBhbnkpLm5vZGVOYW1lKSB7XG4gICAgICB0aGlzLnN2Z0VsZW1lbnQgPSBkYXRhIGFzIFNWR0VsZW1lbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudXJsID0gZGF0YSBhcyBTYWZlUmVzb3VyY2VVcmw7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogU2VydmljZSB0byByZWdpc3RlciBhbmQgZGlzcGxheSBpY29ucyB1c2VkIGJ5IHRoZSBgPG1hdC1pY29uPmAgY29tcG9uZW50LlxuICogLSBSZWdpc3RlcnMgaWNvbiBVUkxzIGJ5IG5hbWVzcGFjZSBhbmQgbmFtZS5cbiAqIC0gUmVnaXN0ZXJzIGljb24gc2V0IFVSTHMgYnkgbmFtZXNwYWNlLlxuICogLSBSZWdpc3RlcnMgYWxpYXNlcyBmb3IgQ1NTIGNsYXNzZXMsIGZvciB1c2Ugd2l0aCBpY29uIGZvbnRzLlxuICogLSBMb2FkcyBpY29ucyBmcm9tIFVSTHMgYW5kIGV4dHJhY3RzIGluZGl2aWR1YWwgaWNvbnMgZnJvbSBpY29uIHNldHMuXG4gKi9cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIE1hdEljb25SZWdpc3RyeSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX2RvY3VtZW50OiBEb2N1bWVudDtcblxuICAvKipcbiAgICogVVJMcyBhbmQgY2FjaGVkIFNWRyBlbGVtZW50cyBmb3IgaW5kaXZpZHVhbCBpY29ucy4gS2V5cyBhcmUgb2YgdGhlIGZvcm1hdCBcIltuYW1lc3BhY2VdOltpY29uXVwiLlxuICAgKi9cbiAgcHJpdmF0ZSBfc3ZnSWNvbkNvbmZpZ3MgPSBuZXcgTWFwPHN0cmluZywgU3ZnSWNvbkNvbmZpZz4oKTtcblxuICAvKipcbiAgICogU3ZnSWNvbkNvbmZpZyBvYmplY3RzIGFuZCBjYWNoZWQgU1ZHIGVsZW1lbnRzIGZvciBpY29uIHNldHMsIGtleWVkIGJ5IG5hbWVzcGFjZS5cbiAgICogTXVsdGlwbGUgaWNvbiBzZXRzIGNhbiBiZSByZWdpc3RlcmVkIHVuZGVyIHRoZSBzYW1lIG5hbWVzcGFjZS5cbiAgICovXG4gIHByaXZhdGUgX2ljb25TZXRDb25maWdzID0gbmV3IE1hcDxzdHJpbmcsIFN2Z0ljb25Db25maWdbXT4oKTtcblxuICAvKiogQ2FjaGUgZm9yIGljb25zIGxvYWRlZCBieSBkaXJlY3QgVVJMcy4gKi9cbiAgcHJpdmF0ZSBfY2FjaGVkSWNvbnNCeVVybCA9IG5ldyBNYXA8c3RyaW5nLCBTVkdFbGVtZW50PigpO1xuXG4gIC8qKiBJbi1wcm9ncmVzcyBpY29uIGZldGNoZXMuIFVzZWQgdG8gY29hbGVzY2UgbXVsdGlwbGUgcmVxdWVzdHMgdG8gdGhlIHNhbWUgVVJMLiAqL1xuICBwcml2YXRlIF9pblByb2dyZXNzVXJsRmV0Y2hlcyA9IG5ldyBNYXA8c3RyaW5nLCBPYnNlcnZhYmxlPHN0cmluZz4+KCk7XG5cbiAgLyoqIE1hcCBmcm9tIGZvbnQgaWRlbnRpZmllcnMgdG8gdGhlaXIgQ1NTIGNsYXNzIG5hbWVzLiBVc2VkIGZvciBpY29uIGZvbnRzLiAqL1xuICBwcml2YXRlIF9mb250Q3NzQ2xhc3Nlc0J5QWxpYXMgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuXG4gIC8qKlxuICAgKiBUaGUgQ1NTIGNsYXNzIHRvIGFwcGx5IHdoZW4gYW4gYDxtYXQtaWNvbj5gIGNvbXBvbmVudCBoYXMgbm8gaWNvbiBuYW1lLCB1cmwsIG9yIGZvbnQgc3BlY2lmaWVkLlxuICAgKiBUaGUgZGVmYXVsdCAnbWF0ZXJpYWwtaWNvbnMnIHZhbHVlIGFzc3VtZXMgdGhhdCB0aGUgbWF0ZXJpYWwgaWNvbiBmb250IGhhcyBiZWVuIGxvYWRlZCBhc1xuICAgKiBkZXNjcmliZWQgYXQgaHR0cDovL2dvb2dsZS5naXRodWIuaW8vbWF0ZXJpYWwtZGVzaWduLWljb25zLyNpY29uLWZvbnQtZm9yLXRoZS13ZWJcbiAgICovXG4gIHByaXZhdGUgX2RlZmF1bHRGb250U2V0Q2xhc3MgPSAnbWF0ZXJpYWwtaWNvbnMnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX2h0dHBDbGllbnQ6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBfc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgZG9jdW1lbnQ6IGFueSxcbiAgICAvLyBAYnJlYWtpbmctY2hhbmdlIDkuMC4wIF9lcnJvckhhbmRsZXIgcGFyYW1ldGVyIHRvIGJlIG1hZGUgcmVxdWlyZWRcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIHJlYWRvbmx5IF9lcnJvckhhbmRsZXI/OiBFcnJvckhhbmRsZXIpIHtcbiAgICAgIHRoaXMuX2RvY3VtZW50ID0gZG9jdW1lbnQ7XG4gICAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYW4gaWNvbiBieSBVUkwgaW4gdGhlIGRlZmF1bHQgbmFtZXNwYWNlLlxuICAgKiBAcGFyYW0gaWNvbk5hbWUgTmFtZSB1bmRlciB3aGljaCB0aGUgaWNvbiBzaG91bGQgYmUgcmVnaXN0ZXJlZC5cbiAgICogQHBhcmFtIHVybFxuICAgKi9cbiAgYWRkU3ZnSWNvbihpY29uTmFtZTogc3RyaW5nLCB1cmw6IFNhZmVSZXNvdXJjZVVybCwgb3B0aW9ucz86IEljb25PcHRpb25zKTogdGhpcyB7XG4gICAgcmV0dXJuIHRoaXMuYWRkU3ZnSWNvbkluTmFtZXNwYWNlKCcnLCBpY29uTmFtZSwgdXJsLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYW4gaWNvbiB1c2luZyBhbiBIVE1MIHN0cmluZyBpbiB0aGUgZGVmYXVsdCBuYW1lc3BhY2UuXG4gICAqIEBwYXJhbSBpY29uTmFtZSBOYW1lIHVuZGVyIHdoaWNoIHRoZSBpY29uIHNob3VsZCBiZSByZWdpc3RlcmVkLlxuICAgKiBAcGFyYW0gbGl0ZXJhbCBTVkcgc291cmNlIG9mIHRoZSBpY29uLlxuICAgKi9cbiAgYWRkU3ZnSWNvbkxpdGVyYWwoaWNvbk5hbWU6IHN0cmluZywgbGl0ZXJhbDogU2FmZUh0bWwsIG9wdGlvbnM/OiBJY29uT3B0aW9ucyk6IHRoaXMge1xuICAgIHJldHVybiB0aGlzLmFkZFN2Z0ljb25MaXRlcmFsSW5OYW1lc3BhY2UoJycsIGljb25OYW1lLCBsaXRlcmFsLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYW4gaWNvbiBieSBVUkwgaW4gdGhlIHNwZWNpZmllZCBuYW1lc3BhY2UuXG4gICAqIEBwYXJhbSBuYW1lc3BhY2UgTmFtZXNwYWNlIGluIHdoaWNoIHRoZSBpY29uIHNob3VsZCBiZSByZWdpc3RlcmVkLlxuICAgKiBAcGFyYW0gaWNvbk5hbWUgTmFtZSB1bmRlciB3aGljaCB0aGUgaWNvbiBzaG91bGQgYmUgcmVnaXN0ZXJlZC5cbiAgICogQHBhcmFtIHVybFxuICAgKi9cbiAgYWRkU3ZnSWNvbkluTmFtZXNwYWNlKG5hbWVzcGFjZTogc3RyaW5nLCBpY29uTmFtZTogc3RyaW5nLCB1cmw6IFNhZmVSZXNvdXJjZVVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM/OiBJY29uT3B0aW9ucyk6IHRoaXMge1xuICAgIHJldHVybiB0aGlzLl9hZGRTdmdJY29uQ29uZmlnKG5hbWVzcGFjZSwgaWNvbk5hbWUsIG5ldyBTdmdJY29uQ29uZmlnKHVybCwgb3B0aW9ucykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhbiBpY29uIHVzaW5nIGFuIEhUTUwgc3RyaW5nIGluIHRoZSBzcGVjaWZpZWQgbmFtZXNwYWNlLlxuICAgKiBAcGFyYW0gbmFtZXNwYWNlIE5hbWVzcGFjZSBpbiB3aGljaCB0aGUgaWNvbiBzaG91bGQgYmUgcmVnaXN0ZXJlZC5cbiAgICogQHBhcmFtIGljb25OYW1lIE5hbWUgdW5kZXIgd2hpY2ggdGhlIGljb24gc2hvdWxkIGJlIHJlZ2lzdGVyZWQuXG4gICAqIEBwYXJhbSBsaXRlcmFsIFNWRyBzb3VyY2Ugb2YgdGhlIGljb24uXG4gICAqL1xuICBhZGRTdmdJY29uTGl0ZXJhbEluTmFtZXNwYWNlKG5hbWVzcGFjZTogc3RyaW5nLCBpY29uTmFtZTogc3RyaW5nLCBsaXRlcmFsOiBTYWZlSHRtbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPzogSWNvbk9wdGlvbnMpOiB0aGlzIHtcbiAgICBjb25zdCBzYW5pdGl6ZWRMaXRlcmFsID0gdGhpcy5fc2FuaXRpemVyLnNhbml0aXplKFNlY3VyaXR5Q29udGV4dC5IVE1MLCBsaXRlcmFsKTtcblxuICAgIGlmICghc2FuaXRpemVkTGl0ZXJhbCkge1xuICAgICAgdGhyb3cgZ2V0TWF0SWNvbkZhaWxlZFRvU2FuaXRpemVMaXRlcmFsRXJyb3IobGl0ZXJhbCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3ZnRWxlbWVudCA9IHRoaXMuX2NyZWF0ZVN2Z0VsZW1lbnRGb3JTaW5nbGVJY29uKHNhbml0aXplZExpdGVyYWwsIG9wdGlvbnMpO1xuICAgIHJldHVybiB0aGlzLl9hZGRTdmdJY29uQ29uZmlnKG5hbWVzcGFjZSwgaWNvbk5hbWUsIG5ldyBTdmdJY29uQ29uZmlnKHN2Z0VsZW1lbnQsIG9wdGlvbnMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYW4gaWNvbiBzZXQgYnkgVVJMIGluIHRoZSBkZWZhdWx0IG5hbWVzcGFjZS5cbiAgICogQHBhcmFtIHVybFxuICAgKi9cbiAgYWRkU3ZnSWNvblNldCh1cmw6IFNhZmVSZXNvdXJjZVVybCwgb3B0aW9ucz86IEljb25PcHRpb25zKTogdGhpcyB7XG4gICAgcmV0dXJuIHRoaXMuYWRkU3ZnSWNvblNldEluTmFtZXNwYWNlKCcnLCB1cmwsIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhbiBpY29uIHNldCB1c2luZyBhbiBIVE1MIHN0cmluZyBpbiB0aGUgZGVmYXVsdCBuYW1lc3BhY2UuXG4gICAqIEBwYXJhbSBsaXRlcmFsIFNWRyBzb3VyY2Ugb2YgdGhlIGljb24gc2V0LlxuICAgKi9cbiAgYWRkU3ZnSWNvblNldExpdGVyYWwobGl0ZXJhbDogU2FmZUh0bWwsIG9wdGlvbnM/OiBJY29uT3B0aW9ucyk6IHRoaXMge1xuICAgIHJldHVybiB0aGlzLmFkZFN2Z0ljb25TZXRMaXRlcmFsSW5OYW1lc3BhY2UoJycsIGxpdGVyYWwsIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhbiBpY29uIHNldCBieSBVUkwgaW4gdGhlIHNwZWNpZmllZCBuYW1lc3BhY2UuXG4gICAqIEBwYXJhbSBuYW1lc3BhY2UgTmFtZXNwYWNlIGluIHdoaWNoIHRvIHJlZ2lzdGVyIHRoZSBpY29uIHNldC5cbiAgICogQHBhcmFtIHVybFxuICAgKi9cbiAgYWRkU3ZnSWNvblNldEluTmFtZXNwYWNlKG5hbWVzcGFjZTogc3RyaW5nLCB1cmw6IFNhZmVSZXNvdXJjZVVybCwgb3B0aW9ucz86IEljb25PcHRpb25zKTogdGhpcyB7XG4gICAgcmV0dXJuIHRoaXMuX2FkZFN2Z0ljb25TZXRDb25maWcobmFtZXNwYWNlLCBuZXcgU3ZnSWNvbkNvbmZpZyh1cmwsIG9wdGlvbnMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYW4gaWNvbiBzZXQgdXNpbmcgYW4gSFRNTCBzdHJpbmcgaW4gdGhlIHNwZWNpZmllZCBuYW1lc3BhY2UuXG4gICAqIEBwYXJhbSBuYW1lc3BhY2UgTmFtZXNwYWNlIGluIHdoaWNoIHRvIHJlZ2lzdGVyIHRoZSBpY29uIHNldC5cbiAgICogQHBhcmFtIGxpdGVyYWwgU1ZHIHNvdXJjZSBvZiB0aGUgaWNvbiBzZXQuXG4gICAqL1xuICBhZGRTdmdJY29uU2V0TGl0ZXJhbEluTmFtZXNwYWNlKG5hbWVzcGFjZTogc3RyaW5nLCBsaXRlcmFsOiBTYWZlSHRtbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPzogSWNvbk9wdGlvbnMpOiB0aGlzIHtcbiAgICBjb25zdCBzYW5pdGl6ZWRMaXRlcmFsID0gdGhpcy5fc2FuaXRpemVyLnNhbml0aXplKFNlY3VyaXR5Q29udGV4dC5IVE1MLCBsaXRlcmFsKTtcblxuICAgIGlmICghc2FuaXRpemVkTGl0ZXJhbCkge1xuICAgICAgdGhyb3cgZ2V0TWF0SWNvbkZhaWxlZFRvU2FuaXRpemVMaXRlcmFsRXJyb3IobGl0ZXJhbCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3ZnRWxlbWVudCA9IHRoaXMuX3N2Z0VsZW1lbnRGcm9tU3RyaW5nKHNhbml0aXplZExpdGVyYWwpO1xuICAgIHJldHVybiB0aGlzLl9hZGRTdmdJY29uU2V0Q29uZmlnKG5hbWVzcGFjZSwgbmV3IFN2Z0ljb25Db25maWcoc3ZnRWxlbWVudCwgb3B0aW9ucykpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgYW4gYWxpYXMgZm9yIGEgQ1NTIGNsYXNzIG5hbWUgdG8gYmUgdXNlZCBmb3IgaWNvbiBmb250cy4gQ3JlYXRpbmcgYW4gbWF0SWNvblxuICAgKiBjb21wb25lbnQgd2l0aCB0aGUgYWxpYXMgYXMgdGhlIGZvbnRTZXQgaW5wdXQgd2lsbCBjYXVzZSB0aGUgY2xhc3MgbmFtZSB0byBiZSBhcHBsaWVkXG4gICAqIHRvIHRoZSBgPG1hdC1pY29uPmAgZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIGFsaWFzIEFsaWFzIGZvciB0aGUgZm9udC5cbiAgICogQHBhcmFtIGNsYXNzTmFtZSBDbGFzcyBuYW1lIG92ZXJyaWRlIHRvIGJlIHVzZWQgaW5zdGVhZCBvZiB0aGUgYWxpYXMuXG4gICAqL1xuICByZWdpc3RlckZvbnRDbGFzc0FsaWFzKGFsaWFzOiBzdHJpbmcsIGNsYXNzTmFtZTogc3RyaW5nID0gYWxpYXMpOiB0aGlzIHtcbiAgICB0aGlzLl9mb250Q3NzQ2xhc3Nlc0J5QWxpYXMuc2V0KGFsaWFzLCBjbGFzc05hbWUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIENTUyBjbGFzcyBuYW1lIGFzc29jaWF0ZWQgd2l0aCB0aGUgYWxpYXMgYnkgYSBwcmV2aW91cyBjYWxsIHRvXG4gICAqIHJlZ2lzdGVyRm9udENsYXNzQWxpYXMuIElmIG5vIENTUyBjbGFzcyBoYXMgYmVlbiBhc3NvY2lhdGVkLCByZXR1cm5zIHRoZSBhbGlhcyB1bm1vZGlmaWVkLlxuICAgKi9cbiAgY2xhc3NOYW1lRm9yRm9udEFsaWFzKGFsaWFzOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9mb250Q3NzQ2xhc3Nlc0J5QWxpYXMuZ2V0KGFsaWFzKSB8fCBhbGlhcztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBDU1MgY2xhc3MgbmFtZSB0byBiZSB1c2VkIGZvciBpY29uIGZvbnRzIHdoZW4gYW4gYDxtYXQtaWNvbj5gIGNvbXBvbmVudCBkb2VzIG5vdFxuICAgKiBoYXZlIGEgZm9udFNldCBpbnB1dCB2YWx1ZSwgYW5kIGlzIG5vdCBsb2FkaW5nIGFuIGljb24gYnkgbmFtZSBvciBVUkwuXG4gICAqXG4gICAqIEBwYXJhbSBjbGFzc05hbWVcbiAgICovXG4gIHNldERlZmF1bHRGb250U2V0Q2xhc3MoY2xhc3NOYW1lOiBzdHJpbmcpOiB0aGlzIHtcbiAgICB0aGlzLl9kZWZhdWx0Rm9udFNldENsYXNzID0gY2xhc3NOYW1lO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIENTUyBjbGFzcyBuYW1lIHRvIGJlIHVzZWQgZm9yIGljb24gZm9udHMgd2hlbiBhbiBgPG1hdC1pY29uPmAgY29tcG9uZW50IGRvZXMgbm90XG4gICAqIGhhdmUgYSBmb250U2V0IGlucHV0IHZhbHVlLCBhbmQgaXMgbm90IGxvYWRpbmcgYW4gaWNvbiBieSBuYW1lIG9yIFVSTC5cbiAgICovXG4gIGdldERlZmF1bHRGb250U2V0Q2xhc3MoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZGVmYXVsdEZvbnRTZXRDbGFzcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBwcm9kdWNlcyB0aGUgaWNvbiAoYXMgYW4gYDxzdmc+YCBET00gZWxlbWVudCkgZnJvbSB0aGUgZ2l2ZW4gVVJMLlxuICAgKiBUaGUgcmVzcG9uc2UgZnJvbSB0aGUgVVJMIG1heSBiZSBjYWNoZWQgc28gdGhpcyB3aWxsIG5vdCBhbHdheXMgY2F1c2UgYW4gSFRUUCByZXF1ZXN0LCBidXRcbiAgICogdGhlIHByb2R1Y2VkIGVsZW1lbnQgd2lsbCBhbHdheXMgYmUgYSBuZXcgY29weSBvZiB0aGUgb3JpZ2luYWxseSBmZXRjaGVkIGljb24uIChUaGF0IGlzLFxuICAgKiBpdCB3aWxsIG5vdCBjb250YWluIGFueSBtb2RpZmljYXRpb25zIG1hZGUgdG8gZWxlbWVudHMgcHJldmlvdXNseSByZXR1cm5lZCkuXG4gICAqXG4gICAqIEBwYXJhbSBzYWZlVXJsIFVSTCBmcm9tIHdoaWNoIHRvIGZldGNoIHRoZSBTVkcgaWNvbi5cbiAgICovXG4gIGdldFN2Z0ljb25Gcm9tVXJsKHNhZmVVcmw6IFNhZmVSZXNvdXJjZVVybCk6IE9ic2VydmFibGU8U1ZHRWxlbWVudD4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuX3Nhbml0aXplci5zYW5pdGl6ZShTZWN1cml0eUNvbnRleHQuUkVTT1VSQ0VfVVJMLCBzYWZlVXJsKTtcblxuICAgIGlmICghdXJsKSB7XG4gICAgICB0aHJvdyBnZXRNYXRJY29uRmFpbGVkVG9TYW5pdGl6ZVVybEVycm9yKHNhZmVVcmwpO1xuICAgIH1cblxuICAgIGNvbnN0IGNhY2hlZEljb24gPSB0aGlzLl9jYWNoZWRJY29uc0J5VXJsLmdldCh1cmwpO1xuXG4gICAgaWYgKGNhY2hlZEljb24pIHtcbiAgICAgIHJldHVybiBvYnNlcnZhYmxlT2YoY2xvbmVTdmcoY2FjaGVkSWNvbikpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9sb2FkU3ZnSWNvbkZyb21Db25maWcobmV3IFN2Z0ljb25Db25maWcoc2FmZVVybCkpLnBpcGUoXG4gICAgICB0YXAoc3ZnID0+IHRoaXMuX2NhY2hlZEljb25zQnlVcmwuc2V0KHVybCEsIHN2ZykpLFxuICAgICAgbWFwKHN2ZyA9PiBjbG9uZVN2ZyhzdmcpKSxcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IHByb2R1Y2VzIHRoZSBpY29uIChhcyBhbiBgPHN2Zz5gIERPTSBlbGVtZW50KSB3aXRoIHRoZSBnaXZlbiBuYW1lXG4gICAqIGFuZCBuYW1lc3BhY2UuIFRoZSBpY29uIG11c3QgaGF2ZSBiZWVuIHByZXZpb3VzbHkgcmVnaXN0ZXJlZCB3aXRoIGFkZEljb24gb3IgYWRkSWNvblNldDtcbiAgICogaWYgbm90LCB0aGUgT2JzZXJ2YWJsZSB3aWxsIHRocm93IGFuIGVycm9yLlxuICAgKlxuICAgKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBpY29uIHRvIGJlIHJldHJpZXZlZC5cbiAgICogQHBhcmFtIG5hbWVzcGFjZSBOYW1lc3BhY2UgaW4gd2hpY2ggdG8gbG9vayBmb3IgdGhlIGljb24uXG4gICAqL1xuICBnZXROYW1lZFN2Z0ljb24obmFtZTogc3RyaW5nLCBuYW1lc3BhY2U6IHN0cmluZyA9ICcnKTogT2JzZXJ2YWJsZTxTVkdFbGVtZW50PiB7XG4gICAgLy8gUmV0dXJuIChjb3B5IG9mKSBjYWNoZWQgaWNvbiBpZiBwb3NzaWJsZS5cbiAgICBjb25zdCBrZXkgPSBpY29uS2V5KG5hbWVzcGFjZSwgbmFtZSk7XG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5fc3ZnSWNvbkNvbmZpZ3MuZ2V0KGtleSk7XG5cbiAgICBpZiAoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZ2V0U3ZnRnJvbUNvbmZpZyhjb25maWcpO1xuICAgIH1cblxuICAgIC8vIFNlZSBpZiB3ZSBoYXZlIGFueSBpY29uIHNldHMgcmVnaXN0ZXJlZCBmb3IgdGhlIG5hbWVzcGFjZS5cbiAgICBjb25zdCBpY29uU2V0Q29uZmlncyA9IHRoaXMuX2ljb25TZXRDb25maWdzLmdldChuYW1lc3BhY2UpO1xuXG4gICAgaWYgKGljb25TZXRDb25maWdzKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZ2V0U3ZnRnJvbUljb25TZXRDb25maWdzKG5hbWUsIGljb25TZXRDb25maWdzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JzZXJ2YWJsZVRocm93KGdldE1hdEljb25OYW1lTm90Rm91bmRFcnJvcihrZXkpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgdGhpcy5fc3ZnSWNvbkNvbmZpZ3MuY2xlYXIoKTtcbiAgIHRoaXMuX2ljb25TZXRDb25maWdzLmNsZWFyKCk7XG4gICB0aGlzLl9jYWNoZWRJY29uc0J5VXJsLmNsZWFyKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY2FjaGVkIGljb24gZm9yIGEgU3ZnSWNvbkNvbmZpZyBpZiBhdmFpbGFibGUsIG9yIGZldGNoZXMgaXQgZnJvbSBpdHMgVVJMIGlmIG5vdC5cbiAgICovXG4gIHByaXZhdGUgX2dldFN2Z0Zyb21Db25maWcoY29uZmlnOiBTdmdJY29uQ29uZmlnKTogT2JzZXJ2YWJsZTxTVkdFbGVtZW50PiB7XG4gICAgaWYgKGNvbmZpZy5zdmdFbGVtZW50KSB7XG4gICAgICAvLyBXZSBhbHJlYWR5IGhhdmUgdGhlIFNWRyBlbGVtZW50IGZvciB0aGlzIGljb24sIHJldHVybiBhIGNvcHkuXG4gICAgICByZXR1cm4gb2JzZXJ2YWJsZU9mKGNsb25lU3ZnKGNvbmZpZy5zdmdFbGVtZW50KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEZldGNoIHRoZSBpY29uIGZyb20gdGhlIGNvbmZpZydzIFVSTCwgY2FjaGUgaXQsIGFuZCByZXR1cm4gYSBjb3B5LlxuICAgICAgcmV0dXJuIHRoaXMuX2xvYWRTdmdJY29uRnJvbUNvbmZpZyhjb25maWcpLnBpcGUoXG4gICAgICAgIHRhcChzdmcgPT4gY29uZmlnLnN2Z0VsZW1lbnQgPSBzdmcpLFxuICAgICAgICBtYXAoc3ZnID0+IGNsb25lU3ZnKHN2ZykpLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXR0ZW1wdHMgdG8gZmluZCBhbiBpY29uIHdpdGggdGhlIHNwZWNpZmllZCBuYW1lIGluIGFueSBvZiB0aGUgU1ZHIGljb24gc2V0cy5cbiAgICogRmlyc3Qgc2VhcmNoZXMgdGhlIGF2YWlsYWJsZSBjYWNoZWQgaWNvbnMgZm9yIGEgbmVzdGVkIGVsZW1lbnQgd2l0aCBhIG1hdGNoaW5nIG5hbWUsIGFuZFxuICAgKiBpZiBmb3VuZCBjb3BpZXMgdGhlIGVsZW1lbnQgdG8gYSBuZXcgYDxzdmc+YCBlbGVtZW50LiBJZiBub3QgZm91bmQsIGZldGNoZXMgYWxsIGljb24gc2V0c1xuICAgKiB0aGF0IGhhdmUgbm90IGJlZW4gY2FjaGVkLCBhbmQgc2VhcmNoZXMgYWdhaW4gYWZ0ZXIgYWxsIGZldGNoZXMgYXJlIGNvbXBsZXRlZC5cbiAgICogVGhlIHJldHVybmVkIE9ic2VydmFibGUgcHJvZHVjZXMgdGhlIFNWRyBlbGVtZW50IGlmIHBvc3NpYmxlLCBhbmQgdGhyb3dzXG4gICAqIGFuIGVycm9yIGlmIG5vIGljb24gd2l0aCB0aGUgc3BlY2lmaWVkIG5hbWUgY2FuIGJlIGZvdW5kLlxuICAgKi9cbiAgcHJpdmF0ZSBfZ2V0U3ZnRnJvbUljb25TZXRDb25maWdzKG5hbWU6IHN0cmluZywgaWNvblNldENvbmZpZ3M6IFN2Z0ljb25Db25maWdbXSk6XG4gICAgICBPYnNlcnZhYmxlPFNWR0VsZW1lbnQ+IHtcbiAgICAvLyBGb3IgYWxsIHRoZSBpY29uIHNldCBTVkcgZWxlbWVudHMgd2UndmUgZmV0Y2hlZCwgc2VlIGlmIGFueSBjb250YWluIGFuIGljb24gd2l0aCB0aGVcbiAgICAvLyByZXF1ZXN0ZWQgbmFtZS5cbiAgICBjb25zdCBuYW1lZEljb24gPSB0aGlzLl9leHRyYWN0SWNvbldpdGhOYW1lRnJvbUFueVNldChuYW1lLCBpY29uU2V0Q29uZmlncyk7XG5cbiAgICBpZiAobmFtZWRJY29uKSB7XG4gICAgICAvLyBXZSBjb3VsZCBjYWNoZSBuYW1lZEljb24gaW4gX3N2Z0ljb25Db25maWdzLCBidXQgc2luY2Ugd2UgaGF2ZSB0byBtYWtlIGEgY29weSBldmVyeVxuICAgICAgLy8gdGltZSBhbnl3YXksIHRoZXJlJ3MgcHJvYmFibHkgbm90IG11Y2ggYWR2YW50YWdlIGNvbXBhcmVkIHRvIGp1c3QgYWx3YXlzIGV4dHJhY3RpbmdcbiAgICAgIC8vIGl0IGZyb20gdGhlIGljb24gc2V0LlxuICAgICAgcmV0dXJuIG9ic2VydmFibGVPZihuYW1lZEljb24pO1xuICAgIH1cblxuICAgIC8vIE5vdCBmb3VuZCBpbiBhbnkgY2FjaGVkIGljb24gc2V0cy4gSWYgdGhlcmUgYXJlIGljb24gc2V0cyB3aXRoIFVSTHMgdGhhdCB3ZSBoYXZlbid0XG4gICAgLy8gZmV0Y2hlZCwgZmV0Y2ggdGhlbSBub3cgYW5kIGxvb2sgZm9yIGljb25OYW1lIGluIHRoZSByZXN1bHRzLlxuICAgIGNvbnN0IGljb25TZXRGZXRjaFJlcXVlc3RzOiBPYnNlcnZhYmxlPFNWR0VsZW1lbnQgfCBudWxsPltdID0gaWNvblNldENvbmZpZ3NcbiAgICAgIC5maWx0ZXIoaWNvblNldENvbmZpZyA9PiAhaWNvblNldENvbmZpZy5zdmdFbGVtZW50KVxuICAgICAgLm1hcChpY29uU2V0Q29uZmlnID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRTdmdJY29uU2V0RnJvbUNvbmZpZyhpY29uU2V0Q29uZmlnKS5waXBlKFxuICAgICAgICAgIGNhdGNoRXJyb3IoKGVycjogSHR0cEVycm9yUmVzcG9uc2UpOiBPYnNlcnZhYmxlPFNWR0VsZW1lbnQgfCBudWxsPiA9PiB7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSB0aGlzLl9zYW5pdGl6ZXIuc2FuaXRpemUoU2VjdXJpdHlDb250ZXh0LlJFU09VUkNFX1VSTCwgaWNvblNldENvbmZpZy51cmwpO1xuXG4gICAgICAgICAgICAvLyBTd2FsbG93IGVycm9ycyBmZXRjaGluZyBpbmRpdmlkdWFsIFVSTHMgc28gdGhlXG4gICAgICAgICAgICAvLyBjb21iaW5lZCBPYnNlcnZhYmxlIHdvbid0IG5lY2Vzc2FyaWx5IGZhaWwuXG4gICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBgTG9hZGluZyBpY29uIHNldCBVUkw6ICR7dXJsfSBmYWlsZWQ6ICR7ZXJyLm1lc3NhZ2V9YDtcbiAgICAgICAgICAgIC8vIEBicmVha2luZy1jaGFuZ2UgOS4wLjAgX2Vycm9ySGFuZGxlciBwYXJhbWV0ZXIgdG8gYmUgbWFkZSByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKHRoaXMuX2Vycm9ySGFuZGxlcikge1xuICAgICAgICAgICAgICB0aGlzLl9lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IobmV3IEVycm9yKGVycm9yTWVzc2FnZSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvck1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9ic2VydmFibGVPZihudWxsKTtcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSk7XG5cbiAgICAvLyBGZXRjaCBhbGwgdGhlIGljb24gc2V0IFVSTHMuIFdoZW4gdGhlIHJlcXVlc3RzIGNvbXBsZXRlLCBldmVyeSBJY29uU2V0IHNob3VsZCBoYXZlIGFcbiAgICAvLyBjYWNoZWQgU1ZHIGVsZW1lbnQgKHVubGVzcyB0aGUgcmVxdWVzdCBmYWlsZWQpLCBhbmQgd2UgY2FuIGNoZWNrIGFnYWluIGZvciB0aGUgaWNvbi5cbiAgICByZXR1cm4gZm9ya0pvaW4oaWNvblNldEZldGNoUmVxdWVzdHMpLnBpcGUobWFwKCgpID0+IHtcbiAgICAgIGNvbnN0IGZvdW5kSWNvbiA9IHRoaXMuX2V4dHJhY3RJY29uV2l0aE5hbWVGcm9tQW55U2V0KG5hbWUsIGljb25TZXRDb25maWdzKTtcblxuICAgICAgaWYgKCFmb3VuZEljb24pIHtcbiAgICAgICAgdGhyb3cgZ2V0TWF0SWNvbk5hbWVOb3RGb3VuZEVycm9yKG5hbWUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZm91bmRJY29uO1xuICAgIH0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWFyY2hlcyB0aGUgY2FjaGVkIFNWRyBlbGVtZW50cyBmb3IgdGhlIGdpdmVuIGljb24gc2V0cyBmb3IgYSBuZXN0ZWQgaWNvbiBlbGVtZW50IHdob3NlIFwiaWRcIlxuICAgKiB0YWcgbWF0Y2hlcyB0aGUgc3BlY2lmaWVkIG5hbWUuIElmIGZvdW5kLCBjb3BpZXMgdGhlIG5lc3RlZCBlbGVtZW50IHRvIGEgbmV3IFNWRyBlbGVtZW50IGFuZFxuICAgKiByZXR1cm5zIGl0LiBSZXR1cm5zIG51bGwgaWYgbm8gbWF0Y2hpbmcgZWxlbWVudCBpcyBmb3VuZC5cbiAgICovXG4gIHByaXZhdGUgX2V4dHJhY3RJY29uV2l0aE5hbWVGcm9tQW55U2V0KGljb25OYW1lOiBzdHJpbmcsIGljb25TZXRDb25maWdzOiBTdmdJY29uQ29uZmlnW10pOlxuICAgICAgU1ZHRWxlbWVudCB8IG51bGwge1xuICAgIC8vIEl0ZXJhdGUgYmFja3dhcmRzLCBzbyBpY29uIHNldHMgYWRkZWQgbGF0ZXIgaGF2ZSBwcmVjZWRlbmNlLlxuICAgIGZvciAobGV0IGkgPSBpY29uU2V0Q29uZmlncy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgY29uZmlnID0gaWNvblNldENvbmZpZ3NbaV07XG4gICAgICBpZiAoY29uZmlnLnN2Z0VsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgZm91bmRJY29uID0gdGhpcy5fZXh0cmFjdFN2Z0ljb25Gcm9tU2V0KGNvbmZpZy5zdmdFbGVtZW50LCBpY29uTmFtZSwgY29uZmlnLm9wdGlvbnMpO1xuICAgICAgICBpZiAoZm91bmRJY29uKSB7XG4gICAgICAgICAgcmV0dXJuIGZvdW5kSWNvbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkcyB0aGUgY29udGVudCBvZiB0aGUgaWNvbiBVUkwgc3BlY2lmaWVkIGluIHRoZSBTdmdJY29uQ29uZmlnIGFuZCBjcmVhdGVzIGFuIFNWRyBlbGVtZW50XG4gICAqIGZyb20gaXQuXG4gICAqL1xuICBwcml2YXRlIF9sb2FkU3ZnSWNvbkZyb21Db25maWcoY29uZmlnOiBTdmdJY29uQ29uZmlnKTogT2JzZXJ2YWJsZTxTVkdFbGVtZW50PiB7XG4gICAgcmV0dXJuIHRoaXMuX2ZldGNoVXJsKGNvbmZpZy51cmwpXG4gICAgICAgIC5waXBlKG1hcChzdmdUZXh0ID0+IHRoaXMuX2NyZWF0ZVN2Z0VsZW1lbnRGb3JTaW5nbGVJY29uKHN2Z1RleHQsIGNvbmZpZy5vcHRpb25zKSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWRzIHRoZSBjb250ZW50IG9mIHRoZSBpY29uIHNldCBVUkwgc3BlY2lmaWVkIGluIHRoZSBTdmdJY29uQ29uZmlnIGFuZCBjcmVhdGVzIGFuIFNWRyBlbGVtZW50XG4gICAqIGZyb20gaXQuXG4gICAqL1xuICBwcml2YXRlIF9sb2FkU3ZnSWNvblNldEZyb21Db25maWcoY29uZmlnOiBTdmdJY29uQ29uZmlnKTogT2JzZXJ2YWJsZTxTVkdFbGVtZW50PiB7XG4gICAgLy8gSWYgdGhlIFNWRyBmb3IgdGhpcyBpY29uIHNldCBoYXMgYWxyZWFkeSBiZWVuIHBhcnNlZCwgZG8gbm90aGluZy5cbiAgICBpZiAoY29uZmlnLnN2Z0VsZW1lbnQpIHtcbiAgICAgIHJldHVybiBvYnNlcnZhYmxlT2YoY29uZmlnLnN2Z0VsZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9mZXRjaFVybChjb25maWcudXJsKS5waXBlKG1hcChzdmdUZXh0ID0+IHtcbiAgICAgIC8vIEl0IGlzIHBvc3NpYmxlIHRoYXQgdGhlIGljb24gc2V0IHdhcyBwYXJzZWQgYW5kIGNhY2hlZCBieSBhbiBlYXJsaWVyIHJlcXVlc3QsIHNvIHBhcnNpbmdcbiAgICAgIC8vIG9ubHkgbmVlZHMgdG8gb2NjdXIgaWYgdGhlIGNhY2hlIGlzIHlldCB1bnNldC5cbiAgICAgIGlmICghY29uZmlnLnN2Z0VsZW1lbnQpIHtcbiAgICAgICAgY29uZmlnLnN2Z0VsZW1lbnQgPSB0aGlzLl9zdmdFbGVtZW50RnJvbVN0cmluZyhzdmdUZXh0KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbmZpZy5zdmdFbGVtZW50O1xuICAgIH0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgRE9NIGVsZW1lbnQgZnJvbSB0aGUgZ2l2ZW4gU1ZHIHN0cmluZywgYW5kIGFkZHMgZGVmYXVsdCBhdHRyaWJ1dGVzLlxuICAgKi9cbiAgcHJpdmF0ZSBfY3JlYXRlU3ZnRWxlbWVudEZvclNpbmdsZUljb24ocmVzcG9uc2VUZXh0OiBzdHJpbmcsIG9wdGlvbnM/OiBJY29uT3B0aW9ucyk6IFNWR0VsZW1lbnQge1xuICAgIGNvbnN0IHN2ZyA9IHRoaXMuX3N2Z0VsZW1lbnRGcm9tU3RyaW5nKHJlc3BvbnNlVGV4dCk7XG4gICAgdGhpcy5fc2V0U3ZnQXR0cmlidXRlcyhzdmcsIG9wdGlvbnMpO1xuICAgIHJldHVybiBzdmc7XG4gIH1cblxuICAvKipcbiAgICogU2VhcmNoZXMgdGhlIGNhY2hlZCBlbGVtZW50IG9mIHRoZSBnaXZlbiBTdmdJY29uQ29uZmlnIGZvciBhIG5lc3RlZCBpY29uIGVsZW1lbnQgd2hvc2UgXCJpZFwiXG4gICAqIHRhZyBtYXRjaGVzIHRoZSBzcGVjaWZpZWQgbmFtZS4gSWYgZm91bmQsIGNvcGllcyB0aGUgbmVzdGVkIGVsZW1lbnQgdG8gYSBuZXcgU1ZHIGVsZW1lbnQgYW5kXG4gICAqIHJldHVybnMgaXQuIFJldHVybnMgbnVsbCBpZiBubyBtYXRjaGluZyBlbGVtZW50IGlzIGZvdW5kLlxuICAgKi9cbiAgcHJpdmF0ZSBfZXh0cmFjdFN2Z0ljb25Gcm9tU2V0KGljb25TZXQ6IFNWR0VsZW1lbnQsIGljb25OYW1lOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPzogSWNvbk9wdGlvbnMpOiBTVkdFbGVtZW50IHwgbnVsbCB7XG4gICAgLy8gVXNlIHRoZSBgaWQ9XCJpY29uTmFtZVwiYCBzeW50YXggaW4gb3JkZXIgdG8gZXNjYXBlIHNwZWNpYWxcbiAgICAvLyBjaGFyYWN0ZXJzIGluIHRoZSBJRCAodmVyc3VzIHVzaW5nIHRoZSAjaWNvbk5hbWUgc3ludGF4KS5cbiAgICBjb25zdCBpY29uU291cmNlID0gaWNvblNldC5xdWVyeVNlbGVjdG9yKGBbaWQ9XCIke2ljb25OYW1lfVwiXWApO1xuXG4gICAgaWYgKCFpY29uU291cmNlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBDbG9uZSB0aGUgZWxlbWVudCBhbmQgcmVtb3ZlIHRoZSBJRCB0byBwcmV2ZW50IG11bHRpcGxlIGVsZW1lbnRzIGZyb20gYmVpbmcgYWRkZWRcbiAgICAvLyB0byB0aGUgcGFnZSB3aXRoIHRoZSBzYW1lIElELlxuICAgIGNvbnN0IGljb25FbGVtZW50ID0gaWNvblNvdXJjZS5jbG9uZU5vZGUodHJ1ZSkgYXMgRWxlbWVudDtcbiAgICBpY29uRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2lkJyk7XG5cbiAgICAvLyBJZiB0aGUgaWNvbiBub2RlIGlzIGl0c2VsZiBhbiA8c3ZnPiBub2RlLCBjbG9uZSBhbmQgcmV0dXJuIGl0IGRpcmVjdGx5LiBJZiBub3QsIHNldCBpdCBhc1xuICAgIC8vIHRoZSBjb250ZW50IG9mIGEgbmV3IDxzdmc+IG5vZGUuXG4gICAgaWYgKGljb25FbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdzdmcnKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2V0U3ZnQXR0cmlidXRlcyhpY29uRWxlbWVudCBhcyBTVkdFbGVtZW50LCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgbm9kZSBpcyBhIDxzeW1ib2w+LCBpdCB3b24ndCBiZSByZW5kZXJlZCBzbyB3ZSBoYXZlIHRvIGNvbnZlcnQgaXQgaW50byA8c3ZnPi4gTm90ZVxuICAgIC8vIHRoYXQgdGhlIHNhbWUgY291bGQgYmUgYWNoaWV2ZWQgYnkgcmVmZXJyaW5nIHRvIGl0IHZpYSA8dXNlIGhyZWY9XCIjaWRcIj4sIGhvd2V2ZXIgdGhlIDx1c2U+XG4gICAgLy8gdGFnIGlzIHByb2JsZW1hdGljIG9uIEZpcmVmb3gsIGJlY2F1c2UgaXQgbmVlZHMgdG8gaW5jbHVkZSB0aGUgY3VycmVudCBwYWdlIHBhdGguXG4gICAgaWYgKGljb25FbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdzeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2V0U3ZnQXR0cmlidXRlcyh0aGlzLl90b1N2Z0VsZW1lbnQoaWNvbkVsZW1lbnQpLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICAvLyBjcmVhdGVFbGVtZW50KCdTVkcnKSBkb2Vzbid0IHdvcmsgYXMgZXhwZWN0ZWQ7IHRoZSBET00gZW5kcyB1cCB3aXRoXG4gICAgLy8gdGhlIGNvcnJlY3Qgbm9kZXMsIGJ1dCB0aGUgU1ZHIGNvbnRlbnQgZG9lc24ndCByZW5kZXIuIEluc3RlYWQgd2VcbiAgICAvLyBoYXZlIHRvIGNyZWF0ZSBhbiBlbXB0eSBTVkcgbm9kZSB1c2luZyBpbm5lckhUTUwgYW5kIGFwcGVuZCBpdHMgY29udGVudC5cbiAgICAvLyBFbGVtZW50cyBjcmVhdGVkIHVzaW5nIERPTVBhcnNlci5wYXJzZUZyb21TdHJpbmcgaGF2ZSB0aGUgc2FtZSBwcm9ibGVtLlxuICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjMwMDMyNzgvc3ZnLWlubmVyaHRtbC1pbi1maXJlZm94LWNhbi1ub3QtZGlzcGxheVxuICAgIGNvbnN0IHN2ZyA9IHRoaXMuX3N2Z0VsZW1lbnRGcm9tU3RyaW5nKCc8c3ZnPjwvc3ZnPicpO1xuICAgIC8vIENsb25lIHRoZSBub2RlIHNvIHdlIGRvbid0IHJlbW92ZSBpdCBmcm9tIHRoZSBwYXJlbnQgaWNvbiBzZXQgZWxlbWVudC5cbiAgICBzdmcuYXBwZW5kQ2hpbGQoaWNvbkVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIHRoaXMuX3NldFN2Z0F0dHJpYnV0ZXMoc3ZnLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgRE9NIGVsZW1lbnQgZnJvbSB0aGUgZ2l2ZW4gU1ZHIHN0cmluZy5cbiAgICovXG4gIHByaXZhdGUgX3N2Z0VsZW1lbnRGcm9tU3RyaW5nKHN0cjogc3RyaW5nKTogU1ZHRWxlbWVudCB7XG4gICAgY29uc3QgZGl2ID0gdGhpcy5fZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgZGl2LmlubmVySFRNTCA9IHN0cjtcbiAgICBjb25zdCBzdmcgPSBkaXYucXVlcnlTZWxlY3Rvcignc3ZnJykgYXMgU1ZHRWxlbWVudDtcblxuICAgIGlmICghc3ZnKSB7XG4gICAgICB0aHJvdyBFcnJvcignPHN2Zz4gdGFnIG5vdCBmb3VuZCcpO1xuICAgIH1cblxuICAgIHJldHVybiBzdmc7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgYW4gZWxlbWVudCBpbnRvIGFuIFNWRyBub2RlIGJ5IGNsb25pbmcgYWxsIG9mIGl0cyBjaGlsZHJlbi5cbiAgICovXG4gIHByaXZhdGUgX3RvU3ZnRWxlbWVudChlbGVtZW50OiBFbGVtZW50KTogU1ZHRWxlbWVudCB7XG4gICAgY29uc3Qgc3ZnID0gdGhpcy5fc3ZnRWxlbWVudEZyb21TdHJpbmcoJzxzdmc+PC9zdmc+Jyk7XG4gICAgY29uc3QgYXR0cmlidXRlcyA9IGVsZW1lbnQuYXR0cmlidXRlcztcblxuICAgIC8vIENvcHkgb3ZlciBhbGwgdGhlIGF0dHJpYnV0ZXMgZnJvbSB0aGUgYHN5bWJvbGAgdG8gdGhlIG5ldyBTVkcsIGV4Y2VwdCB0aGUgaWQuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB7bmFtZSwgdmFsdWV9ID0gYXR0cmlidXRlc1tpXTtcblxuICAgICAgaWYgKG5hbWUgIT09ICdpZCcpIHtcbiAgICAgICAgc3ZnLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChlbGVtZW50LmNoaWxkTm9kZXNbaV0ubm9kZVR5cGUgPT09IHRoaXMuX2RvY3VtZW50LkVMRU1FTlRfTk9ERSkge1xuICAgICAgICBzdmcuYXBwZW5kQ2hpbGQoZWxlbWVudC5jaGlsZE5vZGVzW2ldLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN2ZztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBkZWZhdWx0IGF0dHJpYnV0ZXMgZm9yIGFuIFNWRyBlbGVtZW50IHRvIGJlIHVzZWQgYXMgYW4gaWNvbi5cbiAgICovXG4gIHByaXZhdGUgX3NldFN2Z0F0dHJpYnV0ZXMoc3ZnOiBTVkdFbGVtZW50LCBvcHRpb25zPzogSWNvbk9wdGlvbnMpOiBTVkdFbGVtZW50IHtcbiAgICBzdmcuc2V0QXR0cmlidXRlKCdmaXQnLCAnJyk7XG4gICAgc3ZnLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgJzEwMCUnKTtcbiAgICBzdmcuc2V0QXR0cmlidXRlKCd3aWR0aCcsICcxMDAlJyk7XG4gICAgc3ZnLnNldEF0dHJpYnV0ZSgncHJlc2VydmVBc3BlY3RSYXRpbycsICd4TWlkWU1pZCBtZWV0Jyk7XG4gICAgc3ZnLnNldEF0dHJpYnV0ZSgnZm9jdXNhYmxlJywgJ2ZhbHNlJyk7IC8vIERpc2FibGUgSUUxMSBkZWZhdWx0IGJlaGF2aW9yIHRvIG1ha2UgU1ZHcyBmb2N1c2FibGUuXG5cbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnZpZXdCb3gpIHtcbiAgICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCBvcHRpb25zLnZpZXdCb3gpO1xuICAgIH1cblxuICAgIHJldHVybiBzdmc7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBPYnNlcnZhYmxlIHdoaWNoIHByb2R1Y2VzIHRoZSBzdHJpbmcgY29udGVudHMgb2YgdGhlIGdpdmVuIFVSTC4gUmVzdWx0cyBtYXkgYmVcbiAgICogY2FjaGVkLCBzbyBmdXR1cmUgY2FsbHMgd2l0aCB0aGUgc2FtZSBVUkwgbWF5IG5vdCBjYXVzZSBhbm90aGVyIEhUVFAgcmVxdWVzdC5cbiAgICovXG4gIHByaXZhdGUgX2ZldGNoVXJsKHNhZmVVcmw6IFNhZmVSZXNvdXJjZVVybCB8IG51bGwpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIGlmICghdGhpcy5faHR0cENsaWVudCkge1xuICAgICAgdGhyb3cgZ2V0TWF0SWNvbk5vSHR0cFByb3ZpZGVyRXJyb3IoKTtcbiAgICB9XG5cbiAgICBpZiAoc2FmZVVybCA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBFcnJvcihgQ2Fubm90IGZldGNoIGljb24gZnJvbSBVUkwgXCIke3NhZmVVcmx9XCIuYCk7XG4gICAgfVxuXG4gICAgY29uc3QgdXJsID0gdGhpcy5fc2FuaXRpemVyLnNhbml0aXplKFNlY3VyaXR5Q29udGV4dC5SRVNPVVJDRV9VUkwsIHNhZmVVcmwpO1xuXG4gICAgaWYgKCF1cmwpIHtcbiAgICAgIHRocm93IGdldE1hdEljb25GYWlsZWRUb1Nhbml0aXplVXJsRXJyb3Ioc2FmZVVybCk7XG4gICAgfVxuXG4gICAgLy8gU3RvcmUgaW4tcHJvZ3Jlc3MgZmV0Y2hlcyB0byBhdm9pZCBzZW5kaW5nIGEgZHVwbGljYXRlIHJlcXVlc3QgZm9yIGEgVVJMIHdoZW4gdGhlcmUgaXNcbiAgICAvLyBhbHJlYWR5IGEgcmVxdWVzdCBpbiBwcm9ncmVzcyBmb3IgdGhhdCBVUkwuIEl0J3MgbmVjZXNzYXJ5IHRvIGNhbGwgc2hhcmUoKSBvbiB0aGVcbiAgICAvLyBPYnNlcnZhYmxlIHJldHVybmVkIGJ5IGh0dHAuZ2V0KCkgc28gdGhhdCBtdWx0aXBsZSBzdWJzY3JpYmVycyBkb24ndCBjYXVzZSBtdWx0aXBsZSBYSFJzLlxuICAgIGNvbnN0IGluUHJvZ3Jlc3NGZXRjaCA9IHRoaXMuX2luUHJvZ3Jlc3NVcmxGZXRjaGVzLmdldCh1cmwpO1xuXG4gICAgaWYgKGluUHJvZ3Jlc3NGZXRjaCkge1xuICAgICAgcmV0dXJuIGluUHJvZ3Jlc3NGZXRjaDtcbiAgICB9XG5cbiAgICAvLyBUT0RPKGplbGJvdXJuKTogZm9yIHNvbWUgcmVhc29uLCB0aGUgYGZpbmFsaXplYCBvcGVyYXRvciBcImxvc2VzXCIgdGhlIGdlbmVyaWMgdHlwZSBvbiB0aGVcbiAgICAvLyBPYnNlcnZhYmxlLiBGaWd1cmUgb3V0IHdoeSBhbmQgZml4IGl0LlxuICAgIGNvbnN0IHJlcSA9IHRoaXMuX2h0dHBDbGllbnQuZ2V0KHVybCwge3Jlc3BvbnNlVHlwZTogJ3RleHQnfSkucGlwZShcbiAgICAgIGZpbmFsaXplKCgpID0+IHRoaXMuX2luUHJvZ3Jlc3NVcmxGZXRjaGVzLmRlbGV0ZSh1cmwpKSxcbiAgICAgIHNoYXJlKCksXG4gICAgKTtcblxuICAgIHRoaXMuX2luUHJvZ3Jlc3NVcmxGZXRjaGVzLnNldCh1cmwsIHJlcSk7XG4gICAgcmV0dXJuIHJlcTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYW4gaWNvbiBjb25maWcgYnkgbmFtZSBpbiB0aGUgc3BlY2lmaWVkIG5hbWVzcGFjZS5cbiAgICogQHBhcmFtIG5hbWVzcGFjZSBOYW1lc3BhY2UgaW4gd2hpY2ggdG8gcmVnaXN0ZXIgdGhlIGljb24gY29uZmlnLlxuICAgKiBAcGFyYW0gaWNvbk5hbWUgTmFtZSB1bmRlciB3aGljaCB0byByZWdpc3RlciB0aGUgY29uZmlnLlxuICAgKiBAcGFyYW0gY29uZmlnIENvbmZpZyB0byBiZSByZWdpc3RlcmVkLlxuICAgKi9cbiAgcHJpdmF0ZSBfYWRkU3ZnSWNvbkNvbmZpZyhuYW1lc3BhY2U6IHN0cmluZywgaWNvbk5hbWU6IHN0cmluZywgY29uZmlnOiBTdmdJY29uQ29uZmlnKTogdGhpcyB7XG4gICAgdGhpcy5fc3ZnSWNvbkNvbmZpZ3Muc2V0KGljb25LZXkobmFtZXNwYWNlLCBpY29uTmFtZSksIGNvbmZpZyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGFuIGljb24gc2V0IGNvbmZpZyBpbiB0aGUgc3BlY2lmaWVkIG5hbWVzcGFjZS5cbiAgICogQHBhcmFtIG5hbWVzcGFjZSBOYW1lc3BhY2UgaW4gd2hpY2ggdG8gcmVnaXN0ZXIgdGhlIGljb24gY29uZmlnLlxuICAgKiBAcGFyYW0gY29uZmlnIENvbmZpZyB0byBiZSByZWdpc3RlcmVkLlxuICAgKi9cbiAgcHJpdmF0ZSBfYWRkU3ZnSWNvblNldENvbmZpZyhuYW1lc3BhY2U6IHN0cmluZywgY29uZmlnOiBTdmdJY29uQ29uZmlnKTogdGhpcyB7XG4gICAgY29uc3QgY29uZmlnTmFtZXNwYWNlID0gdGhpcy5faWNvblNldENvbmZpZ3MuZ2V0KG5hbWVzcGFjZSk7XG5cbiAgICBpZiAoY29uZmlnTmFtZXNwYWNlKSB7XG4gICAgICBjb25maWdOYW1lc3BhY2UucHVzaChjb25maWcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9pY29uU2V0Q29uZmlncy5zZXQobmFtZXNwYWNlLCBbY29uZmlnXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBmdW5jdGlvbiBJQ09OX1JFR0lTVFJZX1BST1ZJREVSX0ZBQ1RPUlkoXG4gIHBhcmVudFJlZ2lzdHJ5OiBNYXRJY29uUmVnaXN0cnksXG4gIGh0dHBDbGllbnQ6IEh0dHBDbGllbnQsXG4gIHNhbml0aXplcjogRG9tU2FuaXRpemVyLFxuICBkb2N1bWVudD86IGFueSxcbiAgZXJyb3JIYW5kbGVyPzogRXJyb3JIYW5kbGVyKSB7XG4gIHJldHVybiBwYXJlbnRSZWdpc3RyeSB8fCBuZXcgTWF0SWNvblJlZ2lzdHJ5KGh0dHBDbGllbnQsIHNhbml0aXplciwgZG9jdW1lbnQsIGVycm9ySGFuZGxlcik7XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY29uc3QgSUNPTl9SRUdJU1RSWV9QUk9WSURFUiA9IHtcbiAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhbiBNYXRJY29uUmVnaXN0cnkgYXZhaWxhYmxlLCB1c2UgdGhhdC4gT3RoZXJ3aXNlLCBwcm92aWRlIGEgbmV3IG9uZS5cbiAgcHJvdmlkZTogTWF0SWNvblJlZ2lzdHJ5LFxuICBkZXBzOiBbXG4gICAgW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgTWF0SWNvblJlZ2lzdHJ5XSxcbiAgICBbbmV3IE9wdGlvbmFsKCksIEh0dHBDbGllbnRdLFxuICAgIERvbVNhbml0aXplcixcbiAgICBbbmV3IE9wdGlvbmFsKCksIEVycm9ySGFuZGxlcl0sXG4gICAgW25ldyBPcHRpb25hbCgpLCBET0NVTUVOVCBhcyBJbmplY3Rpb25Ub2tlbjxhbnk+XSxcbiAgXSxcbiAgdXNlRmFjdG9yeTogSUNPTl9SRUdJU1RSWV9QUk9WSURFUl9GQUNUT1JZLFxufTtcblxuLyoqIENsb25lcyBhbiBTVkdFbGVtZW50IHdoaWxlIHByZXNlcnZpbmcgdHlwZSBpbmZvcm1hdGlvbi4gKi9cbmZ1bmN0aW9uIGNsb25lU3ZnKHN2ZzogU1ZHRWxlbWVudCk6IFNWR0VsZW1lbnQge1xuICByZXR1cm4gc3ZnLmNsb25lTm9kZSh0cnVlKSBhcyBTVkdFbGVtZW50O1xufVxuXG4vKiogUmV0dXJucyB0aGUgY2FjaGUga2V5IHRvIHVzZSBmb3IgYW4gaWNvbiBuYW1lc3BhY2UgYW5kIG5hbWUuICovXG5mdW5jdGlvbiBpY29uS2V5KG5hbWVzcGFjZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcpIHtcbiAgcmV0dXJuIG5hbWVzcGFjZSArICc6JyArIG5hbWU7XG59XG4iXX0=