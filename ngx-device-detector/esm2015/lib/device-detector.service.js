// tslint:disable: variable-name
/**
 * Created by ahsanayaz on 08/11/2016.
 */
import { PLATFORM_ID, Inject, Injectable } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as Constants from './device-detector.constants';
import { ReTree } from './retree';
import * as i0 from "@angular/core";
export var DeviceType;
(function (DeviceType) {
    DeviceType["Mobile"] = "mobile";
    DeviceType["Tablet"] = "tablet";
    DeviceType["Desktop"] = "desktop";
    DeviceType["Unknown"] = "unknown";
})(DeviceType || (DeviceType = {}));
export var OrientationType;
(function (OrientationType) {
    OrientationType["Portrait"] = "portrait";
    OrientationType["Landscape"] = "landscape";
})(OrientationType || (OrientationType = {}));
const iPad = 'iPad';
export class DeviceDetectorService {
    constructor(platformId) {
        this.platformId = platformId;
        this.ua = '';
        this.userAgent = '';
        this.os = '';
        this.browser = '';
        this.device = '';
        this.os_version = '';
        this.browser_version = '';
        this.reTree = new ReTree();
        this.deviceType = '';
        this.orientation = '';
        if (isPlatformBrowser(this.platformId) && typeof window !== 'undefined') {
            this.userAgent = window.navigator.userAgent;
        }
        this.setDeviceInfo(this.userAgent);
    }
    /**
     * @author Ahsan Ayaz
     * @desc Sets the initial value of the device when the service is initiated.
     * This value is later accessible for usage
     */
    setDeviceInfo(ua = this.userAgent) {
        if (ua !== this.userAgent) {
            this.userAgent = ua;
        }
        const mappings = [
            { const: 'OS', prop: 'os' },
            { const: 'BROWSERS', prop: 'browser' },
            { const: 'DEVICES', prop: 'device' },
            { const: 'OS_VERSIONS', prop: 'os_version' },
        ];
        mappings.forEach(mapping => {
            this[mapping.prop] = Object.keys(Constants[mapping.const]).reduce((obj, item) => {
                if (Constants[mapping.const][item] === 'device') {
                    // hack for iOS 13 Tablet
                    if (isPlatformBrowser(this.platformId) &&
                        (!!this.reTree.test(this.userAgent, Constants.TABLETS_RE[iPad]) ||
                            (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1))) {
                        obj[Constants[mapping.const][item]] = iPad;
                        return Object;
                    }
                }
                obj[Constants[mapping.const][item]] = this.reTree.test(ua, Constants[`${mapping.const}_RE`][item]);
                return obj;
            }, {});
        });
        mappings.forEach(mapping => {
            this[mapping.prop] = Object.keys(Constants[mapping.const])
                .map(key => {
                return Constants[mapping.const][key];
            })
                .reduce((previousValue, currentValue) => {
                if (mapping.prop === 'device' && previousValue === Constants[mapping.const].ANDROID) {
                    // if we have the actual device found, instead of 'Android', return the actual device
                    return this[mapping.prop][currentValue] ? currentValue : previousValue;
                }
                else {
                    return previousValue === Constants[mapping.const].UNKNOWN && this[mapping.prop][currentValue]
                        ? currentValue
                        : previousValue;
                }
            }, Constants[mapping.const].UNKNOWN);
        });
        this.browser_version = '0';
        if (this.browser !== Constants.BROWSERS.UNKNOWN) {
            const re = Constants.BROWSER_VERSIONS_RE[this.browser];
            const res = this.reTree.exec(ua, re);
            if (!!res) {
                this.browser_version = res[1];
            }
        }
        if (typeof window !== 'undefined' && window.matchMedia) {
            this.orientation = window.matchMedia('(orientation: landscape)').matches
                ? OrientationType.Landscape
                : OrientationType.Portrait;
        }
        else {
            this.orientation = Constants.GENERAL.UKNOWN;
        }
        this.deviceType = this.isTablet()
            ? DeviceType.Tablet
            : this.isMobile(this.userAgent)
                ? DeviceType.Mobile
                : this.isDesktop(this.userAgent)
                    ? DeviceType.Desktop
                    : DeviceType.Unknown;
    }
    /**
     * @author Ahsan Ayaz
     * @desc Returns the device information
     * @returns the device information object.
     */
    getDeviceInfo() {
        const deviceInfo = {
            userAgent: this.userAgent,
            os: this.os,
            browser: this.browser,
            device: this.device,
            os_version: this.os_version,
            browser_version: this.browser_version,
            deviceType: this.deviceType,
            orientation: this.orientation,
        };
        return deviceInfo;
    }
    /**
     * @author Ahsan Ayaz
     * @desc Compares the current device info with the mobile devices to check
     * if the current device is a mobile and also check current device is tablet so it will return false.
     * @returns whether the current device is a mobile
     */
    isMobile(userAgent = this.userAgent) {
        if (this.isTablet(userAgent)) {
            return false;
        }
        const match = Object.keys(Constants.MOBILES_RE).find(mobile => {
            return this.reTree.test(userAgent, Constants.MOBILES_RE[mobile]);
        });
        return !!match;
    }
    /**
     * @author Ahsan Ayaz
     * @desc Compares the current device info with the tablet devices to check
     * if the current device is a tablet.
     * @returns whether the current device is a tablet
     */
    isTablet(userAgent = this.userAgent) {
        if (isPlatformBrowser(this.platformId) &&
            (!!this.reTree.test(this.userAgent, Constants.TABLETS_RE[iPad]) ||
                (typeof navigator !== 'undefined' && navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1))) {
            return true;
        }
        const match = Object.keys(Constants.TABLETS_RE).find(mobile => {
            return !!this.reTree.test(userAgent, Constants.TABLETS_RE[mobile]);
        });
        return !!match;
    }
    /**
     * @author Ahsan Ayaz
     * @desc Compares the current device info with the desktop devices to check
     * if the current device is a desktop device.
     * @returns whether the current device is a desktop device
     */
    isDesktop(userAgent = this.userAgent) {
        const desktopDevices = [Constants.DEVICES.PS4, Constants.DEVICES.CHROME_BOOK, Constants.DEVICES.UNKNOWN];
        if (this.device === Constants.DEVICES.UNKNOWN) {
            if (this.isMobile(userAgent) || this.isTablet(userAgent)) {
                return false;
            }
        }
        return desktopDevices.indexOf(this.device) > -1;
    }
}
DeviceDetectorService.??prov = i0.????defineInjectable({ factory: function DeviceDetectorService_Factory() { return new DeviceDetectorService(i0.????inject(i0.PLATFORM_ID)); }, token: DeviceDetectorService, providedIn: "root" });
DeviceDetectorService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
DeviceDetectorService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2aWNlLWRldGVjdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWRldmljZS1kZXRlY3Rvci9zcmMvIiwic291cmNlcyI6WyJsaWIvZGV2aWNlLWRldGVjdG9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0NBQWdDO0FBQ2hDOztHQUVHO0FBQ0gsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sS0FBSyxTQUFTLE1BQU0sNkJBQTZCLENBQUM7QUFDekQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQzs7QUFZbEMsTUFBTSxDQUFOLElBQVksVUFLWDtBQUxELFdBQVksVUFBVTtJQUNwQiwrQkFBaUIsQ0FBQTtJQUNqQiwrQkFBaUIsQ0FBQTtJQUNqQixpQ0FBbUIsQ0FBQTtJQUNuQixpQ0FBbUIsQ0FBQTtBQUNyQixDQUFDLEVBTFcsVUFBVSxLQUFWLFVBQVUsUUFLckI7QUFDRCxNQUFNLENBQU4sSUFBWSxlQUdYO0FBSEQsV0FBWSxlQUFlO0lBQ3pCLHdDQUFxQixDQUFBO0lBQ3JCLDBDQUF1QixDQUFBO0FBQ3pCLENBQUMsRUFIVyxlQUFlLEtBQWYsZUFBZSxRQUcxQjtBQUVELE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQztBQUtwQixNQUFNLE9BQU8scUJBQXFCO0lBV2hDLFlBQXlDLFVBQWU7UUFBZixlQUFVLEdBQVYsVUFBVSxDQUFLO1FBVnhELE9BQUUsR0FBRyxFQUFFLENBQUM7UUFDUixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsT0FBRSxHQUFHLEVBQUUsQ0FBQztRQUNSLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNo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QUVEOzs7OztPQUtHO0lBQ0ksU0FBUyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUztRQUN6QyxNQUFNLGNBQWMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekcsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFO1lBQzdDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFO2dCQUN4RCxPQUFPLEtBQUssQ0FBQzthQUNkO1NBQ0Y7UUFDRCxPQUFPLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7WUF0S0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7NENBWWMsTUFBTSxTQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTogdmFyaWFibGUtbmFtZVxuLyoqXG4gKiBDcmVhdGVkIGJ5IGFoc2FuYXlheiBvbiAwOC8xMS8yMDE2LlxuICovXG5pbXBvcnQgeyBQTEFURk9STV9JRCwgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgKiBhcyBDb25zdGFudHMgZnJvbSAnLi9kZXZpY2UtZGV0ZWN0b3IuY29uc3RhbnRzJztcbmltcG9ydCB7IFJlVHJlZSB9IGZyb20gJy4vcmV0cmVlJztcblxuZXhwb3J0IGludGVyZmFjZSBEZXZpY2VJbmZvIHtcbiAgdXNlckFnZW50OiBzdHJpbmc7XG4gIG9zOiBzdHJpbmc7XG4gIGJyb3dzZXI6IHN0cmluZztcbiAgZGV2aWNlOiBzdHJpbmc7XG4gIG9zX3ZlcnNpb246IHN0cmluZztcbiAgYnJvd3Nlcl92ZXJzaW9uOiBzdHJpbmc7XG4gIGRldmljZVR5cGU6IHN0cmluZztcbiAgb3JpZW50YXRpb246IHN0cmluZztcbn1cbmV4cG9ydCBlbnVtIERldmljZVR5cGUge1xuICBNb2JpbGUgPSAnbW9iaWxlJyxcbiAgVGFibGV0ID0gJ3RhYmxldCcsXG4gIERlc2t0b3AgPSAnZGVza3RvcCcsXG4gIFVua25vd24gPSAndW5rbm93bicsXG59XG5leHBvcnQgZW51bSBPcmllbnRhdGlvblR5cGUge1xuICBQb3J0cmFpdCA9ICdwb3J0cmFpdCcsXG4gIExhbmRzY2FwZSA9ICdsYW5kc2NhcGUnLFxufVxuXG5jb25zdCBpUGFkID0gJ2lQYWQnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgRGV2aWNlRGV0ZWN0b3JTZXJ2aWNlIHtcbiAgdWEgPSAnJztcbiAgdXNlckFnZW50ID0gJyc7XG4gIG9zID0gJyc7XG4gIGJyb3dzZXIgPSAnJztcbiAgZGV2aWNlID0gJyc7XG4gIG9zX3ZlcnNpb24gPSAnJztcbiAgYnJvd3Nlcl92ZXJzaW9uID0gJyc7XG4gIHJlVHJlZSA9IG5ldyBSZVRyZWUoKTtcbiAgZGV2aWNlVHlwZSA9ICcnO1xuICBvcmllbnRhdGlvbiA9ICcnO1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IGFueSkge1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnVzZXJBZ2VudCA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xuICAgIH1cbiAgICB0aGlzLnNldERldmljZUluZm8odGhpcy51c2VyQWdlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBhdXRob3IgQWhzYW4gQXlhelxuICAgKiBAZGVzYyBTZXRzIHRoZSBpbml0aWFsIHZhbHVlIG9mIHRoZSBkZXZpY2Ugd2hlbiB0aGUgc2VydmljZSBpcyBpbml0aWF0ZWQuXG4gICAqIFRoaXMgdmFsdWUgaXMgbGF0ZXIgYWNjZXNzaWJsZSBmb3IgdXNhZ2VcbiAgICovXG4gIHNldERldmljZUluZm8odWEgPSB0aGlzLnVzZXJBZ2VudCk6IHZvaWQge1xuICAgIGlmICh1YSAhPT0gdGhpcy51c2VyQWdlbnQpIHtcbiAgICAgIHRoaXMudXNlckFnZW50ID0gdWE7XG4gICAgfVxuICAgIGNvbnN0IG1hcHBpbmdzID0gW1xuICAgICAgeyBjb25zdDogJ09TJywgcHJvcDogJ29zJyB9LFxuICAgICAgeyBjb25zdDogJ0JST1dTRVJTJywgcHJvcDogJ2Jyb3dzZXInIH0sXG4gICAgICB7IGNvbnN0OiAnREVWSUNFUycsIHByb3A6ICdkZXZpY2UnIH0sXG4gICAgICB7IGNvbnN0OiAnT1NfVkVSU0lPTlMnLCBwcm9wOiAnb3NfdmVyc2lvbicgfSxcbiAgICBdO1xuXG4gICAgbWFwcGluZ3MuZm9yRWFjaChtYXBwaW5nID0+IHtcbiAgICAgIHRoaXNbbWFwcGluZy5wcm9wXSA9IE9iamVjdC5rZXlzKENvbnN0YW50c1ttYXBwaW5nLmNvbnN0XSkucmVkdWNlKChvYmo6IGFueSwgaXRlbTogYW55KSA9PiB7XG4gICAgICAgIGlmIChDb25zdGFudHNbbWFwcGluZy5jb25zdF1baXRlbV0gPT09ICdkZXZpY2UnKSB7XG4gICAgICAgICAgLy8gaGFjayBmb3IgaU9TIDEzIFRhYmxldFxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkgJiZcbiAgICAgICAgICAgICghIXRoaXMucmVUcmVlLnRlc3QodGhpcy51c2VyQWdlbnQsIENvbnN0YW50cy5UQUJMRVRTX1JFW2lQYWRdKSB8fFxuICAgICAgICAgICAgICAobmF2aWdhdG9yLnBsYXRmb3JtID09PSAnTWFjSW50ZWwnICYmIG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDEpKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgb2JqW0NvbnN0YW50c1ttYXBwaW5nLmNvbnN0XVtpdGVtXV0gPSBpUGFkO1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgb2JqW0NvbnN0YW50c1ttYXBwaW5nLmNvbnN0XVtpdGVtXV0gPSB0aGlzLnJlVHJlZS50ZXN0KHVhLCBDb25zdGFudHNbYCR7bWFwcGluZy5jb25zdH1fUkVgXVtpdGVtXSk7XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgICB9LCB7fSk7XG4gICAgfSk7XG5cbiAgICBtYXBwaW5ncy5mb3JFYWNoKG1hcHBpbmcgPT4ge1xuICAgICAgdGhpc1ttYXBwaW5nLnByb3BdID0gT2JqZWN0LmtleXMoQ29uc3RhbnRzW21hcHBpbmcuY29uc3RdKVxuICAgICAgICAubWFwKGtleSA9PiB7XG4gICAgICAgICAgcmV0dXJuIENvbnN0YW50c1ttYXBwaW5nLmNvbnN0XVtrZXldO1xuICAgICAgICB9KVxuICAgICAgICAucmVkdWNlKChwcmV2aW91c1ZhbHVlLCBjdXJyZW50VmFsdWUpID0+IHtcbiAgICAgICAgICBpZiAobWFwcGluZy5wcm9wID09PSAnZGV2aWNlJyAmJiBwcmV2aW91c1ZhbHVlID09PSBDb25zdGFudHNbbWFwcGluZy5jb25zdF0uQU5EUk9JRCkge1xuICAgICAgICAgICAgLy8gaWYgd2UgaGF2ZSB0aGUgYWN0dWFsIGRldmljZSBmb3VuZCwgaW5zdGVhZCBvZiAnQW5kcm9pZCcsIHJldHVybiB0aGUgYWN0dWFsIGRldmljZVxuICAgICAgICAgICAgcmV0dXJuIHRoaXNbbWFwcGluZy5wcm9wXVtjdXJyZW50VmFsdWVdID8gY3VycmVudFZhbHVlIDogcHJldmlvdXNWYWx1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzVmFsdWUgPT09IENvbnN0YW50c1ttYXBwaW5nLmNvbnN0XS5VTktOT1dOICYmIHRoaXNbbWFwcGluZy5wcm9wXVtjdXJyZW50VmFsdWVdXG4gICAgICAgICAgICAgID8gY3VycmVudFZhbHVlXG4gICAgICAgICAgICAgIDogcHJldmlvdXNWYWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIENvbnN0YW50c1ttYXBwaW5nLmNvbnN0XS5VTktOT1dOKTtcbiAgICB9KTtcblxuICAgIHRoaXMuYnJvd3Nlcl92ZXJzaW9uID0gJzAnO1xuICAgIGlmICh0aGlzLmJyb3dzZXIgIT09IENvbnN0YW50cy5CUk9XU0VSUy5VTktOT1dOKSB7XG4gICAgICBjb25zdCByZSA9IENvbnN0YW50cy5CUk9XU0VSX1ZFUlNJT05TX1JFW3RoaXMuYnJvd3Nlcl07XG4gICAgICBjb25zdCByZXMgPSB0aGlzLnJlVHJlZS5leGVjKHVhLCByZSk7XG4gICAgICBpZiAoISFyZXMpIHtcbiAgICAgICAgdGhpcy5icm93c2VyX3ZlcnNpb24gPSByZXNbMV07XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cubWF0Y2hNZWRpYSkge1xuICAgICAgdGhpcy5vcmllbnRhdGlvbiA9IHdpbmRvdy5tYXRjaE1lZGlhKCcob3JpZW50YXRpb246IGxhbmRzY2FwZSknKS5tYXRjaGVzXG4gICAgICAgID8gT3JpZW50YXRpb25UeXBlLkxhbmRzY2FwZVxuICAgICAgICA6IE9yaWVudGF0aW9uVHlwZS5Qb3J0cmFpdDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcmllbnRhdGlvbiA9IENvbnN0YW50cy5HRU5FUkFMLlVLTk9XTjtcbiAgICB9XG5cbiAgICB0aGlzLmRldmljZVR5cGUgPSB0aGlzLmlzVGFibGV0KClcbiAgICAgID8gRGV2aWNlVHlwZS5UYWJsZXRcbiAgICAgIDogdGhpcy5pc01vYmlsZSh0aGlzLnVzZXJBZ2VudClcbiAgICAgID8gRGV2aWNlVHlwZS5Nb2JpbGVcbiAgICAgIDogdGhpcy5pc0Rlc2t0b3AodGhpcy51c2VyQWdlbnQpXG4gICAgICA/IERldmljZVR5cGUuRGVza3RvcFxuICAgICAgOiBEZXZpY2VUeXBlLlVua25vd247XG4gIH1cblxuICAvKipcbiAgICogQGF1dGhvciBBaHNhbiBBeWF6XG4gICAqIEBkZXNjIFJldHVybnMgdGhlIGRldmljZSBpbmZvcm1hdGlvblxuICAgKiBAcmV0dXJucyB0aGUgZGV2aWNlIGluZm9ybWF0aW9uIG9iamVjdC5cbiAgICovXG4gIHB1YmxpYyBnZXREZXZpY2VJbmZvKCk6IERldmljZUluZm8ge1xuICAgIGNvbnN0IGRldmljZUluZm86IERldmljZUluZm8gPSB7XG4gICAgICB1c2VyQWdlbnQ6IHRoaXMudXNlckFnZW50LFxuICAgICAgb3M6IHRoaXMub3MsXG4gICAgICBicm93c2VyOiB0aGlzLmJyb3dzZXIsXG4gICAgICBkZXZpY2U6IHRoaXMuZGV2aWNlLFxuICAgICAgb3NfdmVyc2lvbjogdGhpcy5vc192ZXJzaW9uLFxuICAgICAgYnJvd3Nlcl92ZXJzaW9uOiB0aGlzLmJyb3dzZXJfdmVyc2lvbixcbiAgICAgIGRldmljZVR5cGU6IHRoaXMuZGV2aWNlVHlwZSxcbiAgICAgIG9yaWVudGF0aW9uOiB0aGlzLm9yaWVudGF0aW9uLFxuICAgIH07XG4gICAgcmV0dXJuIGRldmljZUluZm87XG4gIH1cblxuICAvKipcbiAgICogQGF1dGhvciBBaHNhbiBBeWF6XG4gICAqIEBkZXNjIENvbXBhcmVzIHRoZSBjdXJyZW50IGRldmljZSBpbmZvIHdpdGggdGhlIG1vYmlsZSBkZXZpY2VzIHRvIGNoZWNrXG4gICAqIGlmIHRoZSBjdXJyZW50IGRldmljZSBpcyBhIG1vYmlsZSBhbmQgYWxzbyBjaGVjayBjdXJyZW50IGRldmljZSBpcyB0YWJsZXQgc28gaXQgd2lsbCByZXR1cm4gZmFsc2UuXG4gICAqIEByZXR1cm5zIHdoZXRoZXIgdGhlIGN1cnJlbnQgZGV2aWNlIGlzIGEgbW9iaWxlXG4gICAqL1xuICBwdWJsaWMgaXNNb2JpbGUodXNlckFnZW50ID0gdGhpcy51c2VyQWdlbnQpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5pc1RhYmxldCh1c2VyQWdlbnQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IG1hdGNoID0gT2JqZWN0LmtleXMoQ29uc3RhbnRzLk1PQklMRVNfUkUpLmZpbmQobW9iaWxlID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnJlVHJlZS50ZXN0KHVzZXJBZ2VudCwgQ29uc3RhbnRzLk1PQklMRVNfUkVbbW9iaWxlXSk7XG4gICAgfSk7XG4gICAgcmV0dXJuICEhbWF0Y2g7XG4gIH1cblxuICAvKipcbiAgICogQGF1dGhvciBBaHNhbiBBeWF6XG4gICAqIEBkZXNjIENvbXBhcmVzIHRoZSBjdXJyZW50IGRldmljZSBpbmZvIHdpdGggdGhlIHRhYmxldCBkZXZpY2VzIHRvIGNoZWNrXG4gICAqIGlmIHRoZSBjdXJyZW50IGRldmljZSBpcyBhIHRhYmxldC5cbiAgICogQHJldHVybnMgd2hldGhlciB0aGUgY3VycmVudCBkZXZpY2UgaXMgYSB0YWJsZXRcbiAgICovXG4gIHB1YmxpYyBpc1RhYmxldCh1c2VyQWdlbnQgPSB0aGlzLnVzZXJBZ2VudCk6IGJvb2xlYW4ge1xuICAgIGlmIChcbiAgICAgIGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkgJiZcbiAgICAgICghIXRoaXMucmVUcmVlLnRlc3QodGhpcy51c2VyQWdlbnQsIENvbnN0YW50cy5UQUJMRVRTX1JFW2lQYWRdKSB8fFxuICAgICAgICAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnBsYXRmb3JtID09PSAnTWFjSW50ZWwnICYmIG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDEpKVxuICAgICkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNvbnN0IG1hdGNoID0gT2JqZWN0LmtleXMoQ29uc3RhbnRzLlRBQkxFVFNfUkUpLmZpbmQobW9iaWxlID0+IHtcbiAgICAgIHJldHVybiAhIXRoaXMucmVUcmVlLnRlc3QodXNlckFnZW50LCBDb25zdGFudHMuVEFCTEVUU19SRVttb2JpbGVdKTtcbiAgICB9KTtcbiAgICByZXR1cm4gISFtYXRjaDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAYXV0aG9yIEFoc2FuIEF5YXpcbiAgICogQGRlc2MgQ29tcGFyZXMgdGhlIGN1cnJlbnQgZGV2aWNlIGluZm8gd2l0aCB0aGUgZGVza3RvcCBkZXZpY2VzIHRvIGNoZWNrXG4gICAqIGlmIHRoZSBjdXJyZW50IGRldmljZSBpcyBhIGRlc2t0b3AgZGV2aWNlLlxuICAgKiBAcmV0dXJucyB3aGV0aGVyIHRoZSBjdXJyZW50IGRldmljZSBpcyBhIGRlc2t0b3AgZGV2aWNlXG4gICAqL1xuICBwdWJsaWMgaXNEZXNrdG9wKHVzZXJBZ2VudCA9IHRoaXMudXNlckFnZW50KTogYm9vbGVhbiB7XG4gICAgY29uc3QgZGVza3RvcERldmljZXMgPSBbQ29uc3RhbnRzLkRFVklDRVMuUFM0LCBDb25zdGFudHMuREVWSUNFUy5DSFJPTUVfQk9PSywgQ29uc3RhbnRzLkRFVklDRVMuVU5LTk9XTl07XG4gICAgaWYgKHRoaXMuZGV2aWNlID09PSBDb25zdGFudHMuREVWSUNFUy5VTktOT1dOKSB7XG4gICAgICBpZiAodGhpcy5pc01vYmlsZSh1c2VyQWdlbnQpIHx8IHRoaXMuaXNUYWJsZXQodXNlckFnZW50KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkZXNrdG9wRGV2aWNlcy5pbmRleE9mKHRoaXMuZGV2aWNlKSA+IC0xO1xuICB9XG59XG4iXX0=