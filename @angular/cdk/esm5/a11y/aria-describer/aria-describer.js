/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { addAriaReferencedId, getAriaReferenceIds, removeAriaReferencedId } from './aria-reference';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
/** ID used for the body container where all messages are appended. */
import * as ɵngcc0 from '@angular/core';
export var MESSAGES_CONTAINER_ID = 'cdk-describedby-message-container';
/** ID prefix used for each created message element. */
export var CDK_DESCRIBEDBY_ID_PREFIX = 'cdk-describedby-message';
/** Attribute given to each host element that is described by a message element. */
export var CDK_DESCRIBEDBY_HOST_ATTRIBUTE = 'cdk-describedby-host';
/** Global incremental identifier for each registered message element. */
var nextId = 0;
/** Global map of all registered message elements that have been placed into the document. */
var messageRegistry = new Map();
/** Container for all registered messages. */
var messagesContainer = null;
/**
 * Utility that creates visually hidden elements with a message content. Useful for elements that
 * want to use aria-describedby to further describe themselves without adding additional visual
 * content.
 */
var AriaDescriber = /** @class */ (function () {
    function AriaDescriber(_document) {
        this._document = _document;
    }
    /**
     * Adds to the host element an aria-describedby reference to a hidden element that contains
     * the message. If the same message has already been registered, then it will reuse the created
     * message element.
     */
    AriaDescriber.prototype.describe = function (hostElement, message) {
        if (!this._canBeDescribed(hostElement, message)) {
            return;
        }
        if (typeof message !== 'string') {
            // We need to ensure that the element has an ID.
            this._setMessageId(message);
            messageRegistry.set(message, { messageElement: message, referenceCount: 0 });
        }
        else if (!messageRegistry.has(message)) {
            this._createMessageElement(message);
        }
        if (!this._isElementDescribedByMessage(hostElement, message)) {
            this._addMessageReference(hostElement, message);
        }
    };
    /** Removes the host element's aria-describedby reference to the message element. */
    AriaDescriber.prototype.removeDescription = function (hostElement, message) {
        if (!this._isElementNode(hostElement)) {
            return;
        }
        if (this._isElementDescribedByMessage(hostElement, message)) {
            this._removeMessageReference(hostElement, message);
        }
        // If the message is a string, it means that it's one that we created for the
        // consumer so we can remove it safely, otherwise we should leave it in place.
        if (typeof message === 'string') {
            var registeredMessage = messageRegistry.get(message);
            if (registeredMessage && registeredMessage.referenceCount === 0) {
                this._deleteMessageElement(message);
            }
        }
        if (messagesContainer && messagesContainer.childNodes.length === 0) {
            this._deleteMessagesContainer();
        }
    };
    /** Unregisters all created message elements and removes the message container. */
    AriaDescriber.prototype.ngOnDestroy = function () {
        var describedElements = this._document.querySelectorAll("[" + CDK_DESCRIBEDBY_HOST_ATTRIBUTE + "]");
        for (var i = 0; i < describedElements.length; i++) {
            this._removeCdkDescribedByReferenceIds(describedElements[i]);
            describedElements[i].removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
        }
        if (messagesContainer) {
            this._deleteMessagesContainer();
        }
        messageRegistry.clear();
    };
    /**
     * Creates a new element in the visually hidden message container element with the message
     * as its content and adds it to the message registry.
     */
    AriaDescriber.prototype._createMessageElement = function (message) {
        var messageElement = this._document.createElement('div');
        this._setMessageId(messageElement);
        messageElement.textContent = message;
        this._createMessagesContainer();
        messagesContainer.appendChild(messageElement);
        messageRegistry.set(message, { messageElement: messageElement, referenceCount: 0 });
    };
    /** Assigns a unique ID to an element, if it doesn't have one already. */
    AriaDescriber.prototype._setMessageId = function (element) {
        if (!element.id) {
            element.id = CDK_DESCRIBEDBY_ID_PREFIX + "-" + nextId++;
        }
    };
    /** Deletes the message element from the global messages container. */
    AriaDescriber.prototype._deleteMessageElement = function (message) {
        var registeredMessage = messageRegistry.get(message);
        var messageElement = registeredMessage && registeredMessage.messageElement;
        if (messagesContainer && messageElement) {
            messagesContainer.removeChild(messageElement);
        }
        messageRegistry.delete(message);
    };
    /** Creates the global container for all aria-describedby messages. */
    AriaDescriber.prototype._createMessagesContainer = function () {
        if (!messagesContainer) {
            var preExistingContainer = this._document.getElementById(MESSAGES_CONTAINER_ID);
            // When going from the server to the client, we may end up in a situation where there's
            // already a container on the page, but we don't have a reference to it. Clear the
            // old container so we don't get duplicates. Doing this, instead of emptying the previous
            // container, should be slightly faster.
            if (preExistingContainer) {
                preExistingContainer.parentNode.removeChild(preExistingContainer);
            }
            messagesContainer = this._document.createElement('div');
            messagesContainer.id = MESSAGES_CONTAINER_ID;
            messagesContainer.setAttribute('aria-hidden', 'true');
            messagesContainer.style.display = 'none';
            this._document.body.appendChild(messagesContainer);
        }
    };
    /** Deletes the global messages container. */
    AriaDescriber.prototype._deleteMessagesContainer = function () {
        if (messagesContainer && messagesContainer.parentNode) {
            messagesContainer.parentNode.removeChild(messagesContainer);
            messagesContainer = null;
        }
    };
    /** Removes all cdk-describedby messages that are hosted through the element. */
    AriaDescriber.prototype._removeCdkDescribedByReferenceIds = function (element) {
        // Remove all aria-describedby reference IDs that are prefixed by CDK_DESCRIBEDBY_ID_PREFIX
        var originalReferenceIds = getAriaReferenceIds(element, 'aria-describedby')
            .filter(function (id) { return id.indexOf(CDK_DESCRIBEDBY_ID_PREFIX) != 0; });
        element.setAttribute('aria-describedby', originalReferenceIds.join(' '));
    };
    /**
     * Adds a message reference to the element using aria-describedby and increments the registered
     * message's reference count.
     */
    AriaDescriber.prototype._addMessageReference = function (element, message) {
        var registeredMessage = messageRegistry.get(message);
        // Add the aria-describedby reference and set the
        // describedby_host attribute to mark the element.
        addAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
        element.setAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE, '');
        registeredMessage.referenceCount++;
    };
    /**
     * Removes a message reference from the element using aria-describedby
     * and decrements the registered message's reference count.
     */
    AriaDescriber.prototype._removeMessageReference = function (element, message) {
        var registeredMessage = messageRegistry.get(message);
        registeredMessage.referenceCount--;
        removeAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
        element.removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
    };
    /** Returns true if the element has been described by the provided message ID. */
    AriaDescriber.prototype._isElementDescribedByMessage = function (element, message) {
        var referenceIds = getAriaReferenceIds(element, 'aria-describedby');
        var registeredMessage = messageRegistry.get(message);
        var messageId = registeredMessage && registeredMessage.messageElement.id;
        return !!messageId && referenceIds.indexOf(messageId) != -1;
    };
    /** Determines whether a message can be described on a particular element. */
    AriaDescriber.prototype._canBeDescribed = function (element, message) {
        if (!this._isElementNode(element)) {
            return false;
        }
        if (message && typeof message === 'object') {
            // We'd have to make some assumptions about the description element's text, if the consumer
            // passed in an element. Assume that if an element is passed in, the consumer has verified
            // that it can be used as a description.
            return true;
        }
        var trimmedMessage = message == null ? '' : ("" + message).trim();
        var ariaLabel = element.getAttribute('aria-label');
        // We shouldn't set descriptions if they're exactly the same as the `aria-label` of the
        // element, because screen readers will end up reading out the same text twice in a row.
        return trimmedMessage ? (!ariaLabel || ariaLabel.trim() !== trimmedMessage) : false;
    };
    /** Checks whether a node is an Element node. */
    AriaDescriber.prototype._isElementNode = function (element) {
        return element.nodeType === this._document.ELEMENT_NODE;
    };
    /** @nocollapse */
    AriaDescriber.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    AriaDescriber.ɵprov = i0.ɵɵdefineInjectable({ factory: function AriaDescriber_Factory() { return new AriaDescriber(i0.ɵɵinject(i1.DOCUMENT)); }, token: AriaDescriber, providedIn: "root" });
AriaDescriber.ɵfac = function AriaDescriber_Factory(t) { return new (t || AriaDescriber)(ɵngcc0.ɵɵinject(DOCUMENT)); };
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AriaDescriber, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();
    return AriaDescriber;
}());
export { AriaDescriber };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJpYS1kZXNjcmliZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvYTExeS9hcmlhLWRlc2NyaWJlci9hcmlhLWRlc2NyaWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBQyxNQUFNLEVBQUUsVUFBVSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBQyxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRSxzQkFBc0IsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQ2xHO0FBRytCO0FBVy9CLHNFQUFzRTs7QUFDdEUsTUFBTSxDQUFDLElBQU0scUJBQXFCLEdBQUcsbUNBQW1DLENBQUM7QUFFekUsdURBQXVEO0FBQ3ZELE1BQU0sQ0FBQyxJQUFNLHlCQUF5QixHQUFHLHlCQUF5QixDQUFDO0FBRW5FLG1GQUFtRjtBQUNuRixNQUFNLENBQUMsSUFBTSw4QkFBOEIsR0FBRyxzQkFBc0IsQ0FBQztBQUVyRSx5RUFBeUU7QUFDekUsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBRWYsNkZBQTZGO0FBQzdGLElBQU0sZUFBZSxHQUFHLElBQUksR0FBRyxFQUF5QyxDQUFDO0FBRXpFLDZDQUE2QztBQUM3QyxJQUFJLGlCQUFpQixHQUF1QixJQUFJLENBQUM7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDZSxJQUdiLHVCQUE4QixTQUFjO0FBQzlDLFFBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7QUFDL0IsSUFBRSxDQUFDO0FBQ0gsSUFDRTtBQUNGO0FBQ0U7QUFDRTtBQUVKLE9BREs7QUFDTCxJQUFFLGdDQUFRLEdBQVIsVUFBUyxXQUFvQixFQUFFLE9BQTJCO0FBQzVELFFBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxFQUFFO0FBQ3JELFlBQU0sT0FBTztBQUNiLFNBQUs7QUFDTCxRQUNJLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO0FBQ3JDLFlBQU0sZ0RBQWdEO0FBQ3RELFlBQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNsQyxZQUFNLGVBQWUsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUMsY0FBYyxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQztBQUNqRixTQUFLO0FBQUMsYUFBSyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRTtBQUM5QyxZQUFNLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMxQyxTQUFLO0FBQ0wsUUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsRUFBRTtBQUNsRSxZQUFNLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDdEQsU0FBSztBQUNMLElBQUUsQ0FBQztBQUVILElBQUUsb0ZBQW9GO0FBQ3RGLElBQUUseUNBQWlCLEdBQWpCLFVBQWtCLFdBQW9CLEVBQUUsT0FBMkI7QUFDckUsUUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsRUFBRTtBQUMzQyxZQUFNLE9BQU87QUFDYixTQUFLO0FBQ0wsUUFDSSxJQUFJLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLEVBQUU7QUFDakUsWUFBTSxJQUFJLENBQUMsdUJBQXVCLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3pELFNBQUs7QUFDTCxRQUNJLDZFQUE2RTtBQUNqRixRQUFJLDhFQUE4RTtBQUNsRixRQUFJLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO0FBQ3JDLFlBQU0sSUFBTSxpQkFBaUIsR0FBRyxlQUFlLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdELFlBQU0sSUFBSSxpQkFBaUIsSUFBSSxpQkFBaUIsQ0FBQyxjQUFjLEtBQUssQ0FBQyxFQUFFO0FBQ3ZFLGdCQUFRLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM1QyxhQUFPO0FBQ1AsU0FBSztBQUNMLFFBQ0ksSUFBSSxpQkFBaUIsSUFBSSxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtBQUN4RSxZQUFNLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO0FBQ3RDLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFFSCxJQUFFLGtGQUFrRjtBQUNwRixJQUFFLG1DQUFXLEdBQVg7QUFBYyxRQUNaLElBQU0saUJBQWlCLEdBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsTUFBSSw4QkFBOEIsTUFBRyxDQUFDLENBQUM7QUFDL0UsUUFDSSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsaUJBQWlCLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3ZELFlBQU0sSUFBSSxDQUFDLGlDQUFpQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbkUsWUFBTSxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUMzRSxTQUFLO0FBQ0wsUUFDSSxJQUFJLGlCQUFpQixFQUFFO0FBQzNCLFlBQU0sSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7QUFDdEMsU0FBSztBQUNMLFFBQ0ksZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQzVCLElBQUUsQ0FBQztBQUVILElBQUU7QUFDRjtBQUNFO0FBQ0UsT0FBQztBQUNMLElBQVUsNkNBQXFCLEdBQTdCLFVBQThCLE9BQWU7QUFDL0MsUUFBSSxJQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMvRCxRQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDdkMsUUFBSSxjQUFjLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztBQUN6QyxRQUNJLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO0FBQ3BDLFFBQUksaUJBQWtCLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ25ELFFBQ0ksZUFBZSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBQyxjQUFjLGdCQUFBLEVBQUUsY0FBYyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUM7QUFDdEUsSUFBRSxDQUFDO0FBRUgsSUFBRSx5RUFBeUU7QUFDM0UsSUFBVSxxQ0FBYSxHQUFyQixVQUFzQixPQUFvQjtBQUM1QyxRQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFO0FBQ3JCLFlBQU0sT0FBTyxDQUFDLEVBQUUsR0FBTSx5QkFBeUIsU0FBSSxNQUFNLEVBQUksQ0FBQztBQUM5RCxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBRUgsSUFBRSxzRUFBc0U7QUFDeEUsSUFBVSw2Q0FBcUIsR0FBN0IsVUFBOEIsT0FBZTtBQUMvQyxRQUFJLElBQU0saUJBQWlCLEdBQUcsZUFBZSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMzRCxRQUFJLElBQU0sY0FBYyxHQUFHLGlCQUFpQixJQUFJLGlCQUFpQixDQUFDLGNBQWMsQ0FBQztBQUNqRixRQUFJLElBQUksaUJBQWlCLElBQUksY0FBYyxFQUFFO0FBQzdDLFlBQU0saUJBQWlCLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3BELFNBQUs7QUFDTCxRQUFJLGVBQWUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDcEMsSUFBRSxDQUFDO0FBRUgsSUFBRSxzRUFBc0U7QUFDeEUsSUFBVSxnREFBd0IsR0FBaEM7QUFBYyxRQUNaLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtBQUM1QixZQUFNLElBQU0sb0JBQW9CLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUN4RixZQUNNLHVGQUF1RjtBQUM3RixZQUFNLGtGQUFrRjtBQUN4RixZQUFNLHlGQUF5RjtBQUMvRixZQUFNLHdDQUF3QztBQUM5QyxZQUFNLElBQUksb0JBQW9CLEVBQUU7QUFDaEMsZ0JBQVEsb0JBQW9CLENBQUMsVUFBVyxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQzNFLGFBQU87QUFDUCxZQUNNLGlCQUFpQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzlELFlBQU0saUJBQWlCLENBQUMsRUFBRSxHQUFHLHFCQUFxQixDQUFDO0FBQ25ELFlBQU0saUJBQWlCLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUM1RCxZQUFNLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0FBQy9DLFlBQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDekQsU0FBSztBQUNMLElBQUUsQ0FBQztBQUVILElBQUUsNkNBQTZDO0FBQy9DLElBQVUsZ0RBQXdCLEdBQWhDO0FBQWMsUUFDWixJQUFJLGlCQUFpQixJQUFJLGlCQUFpQixDQUFDLFVBQVUsRUFBRTtBQUMzRCxZQUFNLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUNsRSxZQUFNLGlCQUFpQixHQUFHLElBQUksQ0FBQztBQUMvQixTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBRUgsSUFBRSxnRkFBZ0Y7QUFDbEYsSUFBVSx5REFBaUMsR0FBekMsVUFBMEMsT0FBZ0I7QUFDNUQsUUFBSSwyRkFBMkY7QUFDL0YsUUFBSSxJQUFNLG9CQUFvQixHQUFHLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQztBQUNqRixhQUFTLE1BQU0sQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsQ0FBQyxPQUFPLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLEVBQTFDLENBQTBDLENBQUMsQ0FBQztBQUNsRSxRQUFJLE9BQU8sQ0FBQyxZQUFZLENBQUMsa0JBQWtCLEVBQUUsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDN0UsSUFBRSxDQUFDO0FBRUgsSUFBRTtBQUNGO0FBQ0U7QUFDRSxPQUFDO0FBQ0wsSUFBVSw0Q0FBb0IsR0FBNUIsVUFBNkIsT0FBZ0IsRUFBRSxPQUEyQjtBQUM1RSxRQUFJLElBQU0saUJBQWlCLEdBQUcsZUFBZSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUUsQ0FBQztBQUM1RCxRQUNJLGlEQUFpRDtBQUNyRCxRQUFJLGtEQUFrRDtBQUN0RCxRQUFJLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDMUYsUUFBSSxPQUFPLENBQUMsWUFBWSxDQUFDLDhCQUE4QixFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQzdELFFBQ0ksaUJBQWlCLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDdkMsSUFBRSxDQUFDO0FBRUgsSUFBRTtBQUNGO0FBQ0U7QUFDRSxPQUFDO0FBQ0wsSUFBVSwrQ0FBdUIsR0FBL0IsVUFBZ0MsT0FBZ0IsRUFBRSxPQUEyQjtBQUMvRSxRQUFJLElBQU0saUJBQWlCLEdBQUcsZUFBZSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUUsQ0FBQztBQUM1RCxRQUFJLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQ3ZDLFFBQ0ksc0JBQXNCLENBQUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUM3RixRQUFJLE9BQU8sQ0FBQyxlQUFlLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUM1RCxJQUFFLENBQUM7QUFFSCxJQUFFLGlGQUFpRjtBQUNuRixJQUFVLG9EQUE0QixHQUFwQyxVQUFxQyxPQUFnQixFQUFFLE9BQTJCO0FBQUksUUFDcEYsSUFBTSxZQUFZLEdBQUcsbUJBQW1CLENBQUMsT0FBTyxFQUFFLGtCQUFrQixDQUFDLENBQUM7QUFDMUUsUUFBSSxJQUFNLGlCQUFpQixHQUFHLGVBQWUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDM0QsUUFBSSxJQUFNLFNBQVMsR0FBRyxpQkFBaUIsSUFBSSxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDO0FBQy9FLFFBQ0ksT0FBTyxDQUFDLENBQUMsU0FBUyxJQUFJLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDaEUsSUFBRSxDQUFDO0FBRUgsSUFBRSw2RUFBNkU7QUFDL0UsSUFBVSx1Q0FBZSxHQUF2QixVQUF3QixPQUFnQixFQUFFLE9BQWdDO0FBQUksUUFDNUUsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUU7QUFDdkMsWUFBTSxPQUFPLEtBQUssQ0FBQztBQUNuQixTQUFLO0FBQ0wsUUFDSSxJQUFJLE9BQU8sSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUU7QUFDaEQsWUFBTSwyRkFBMkY7QUFDakcsWUFBTSwwRkFBMEY7QUFDaEcsWUFBTSx3Q0FBd0M7QUFDOUMsWUFBTSxPQUFPLElBQUksQ0FBQztBQUNsQixTQUFLO0FBQ0wsUUFDSSxJQUFNLGNBQWMsR0FBRyxPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUEsS0FBRyxPQUFTLENBQUEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN0RSxRQUFJLElBQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDekQsUUFDSSx1RkFBdUY7QUFDM0YsUUFBSSx3RkFBd0Y7QUFDNUYsUUFBSSxPQUFPLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUMsSUFBSSxFQUFFLEtBQUssY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUN4RixJQUFFLENBQUM7QUFFSCxJQUFFLGdEQUFnRDtBQUNsRCxJQUFVLHNDQUFjLEdBQXRCLFVBQXVCLE9BQWE7QUFBSSxRQUN0QyxPQUFPLE9BQU8sQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUM7QUFDNUQsSUFBRSxDQUFDLENBeE1NO0FBQUM7MEJBRFQsVUFBVSxTQUFDLEVBQUMsVUFBVSx6REFDVTtDQURSLE1BQU0sRUFBQyxUQUl2QixnREFBTSxNQUFNLFNBQUMsUUFBUTtBQUFRO0FBQVU7Ozs7Ozs7O2tDQU1NO0FBQUMsd0JBMUR2RDtBQUFFLENBMFBELEFBMU1ELElBME1DO0FBQ0QsU0ExTWEsYUFBYTtBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7RE9DVU1FTlR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0luamVjdCwgSW5qZWN0YWJsZSwgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7YWRkQXJpYVJlZmVyZW5jZWRJZCwgZ2V0QXJpYVJlZmVyZW5jZUlkcywgcmVtb3ZlQXJpYVJlZmVyZW5jZWRJZH0gZnJvbSAnLi9hcmlhLXJlZmVyZW5jZSc7XG5cblxuLyoqXG4gKiBJbnRlcmZhY2UgdXNlZCB0byByZWdpc3RlciBtZXNzYWdlIGVsZW1lbnRzIGFuZCBrZWVwIGEgY291bnQgb2YgaG93IG1hbnkgcmVnaXN0cmF0aW9ucyBoYXZlXG4gKiB0aGUgc2FtZSBtZXNzYWdlIGFuZCB0aGUgcmVmZXJlbmNlIHRvIHRoZSBtZXNzYWdlIGVsZW1lbnQgdXNlZCBmb3IgdGhlIGBhcmlhLWRlc2NyaWJlZGJ5YC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSZWdpc3RlcmVkTWVzc2FnZSB7XG4gIC8qKiBUaGUgZWxlbWVudCBjb250YWluaW5nIHRoZSBtZXNzYWdlLiAqL1xuICBtZXNzYWdlRWxlbWVudDogRWxlbWVudDtcblxuICAvKiogVGhlIG51bWJlciBvZiBlbGVtZW50cyB0aGF0IHJlZmVyZW5jZSB0aGlzIG1lc3NhZ2UgZWxlbWVudCB2aWEgYGFyaWEtZGVzY3JpYmVkYnlgLiAqL1xuICByZWZlcmVuY2VDb3VudDogbnVtYmVyO1xufVxuXG4vKiogSUQgdXNlZCBmb3IgdGhlIGJvZHkgY29udGFpbmVyIHdoZXJlIGFsbCBtZXNzYWdlcyBhcmUgYXBwZW5kZWQuICovXG5leHBvcnQgY29uc3QgTUVTU0FHRVNfQ09OVEFJTkVSX0lEID0gJ2Nkay1kZXNjcmliZWRieS1tZXNzYWdlLWNvbnRhaW5lcic7XG5cbi8qKiBJRCBwcmVmaXggdXNlZCBmb3IgZWFjaCBjcmVhdGVkIG1lc3NhZ2UgZWxlbWVudC4gKi9cbmV4cG9ydCBjb25zdCBDREtfREVTQ1JJQkVEQllfSURfUFJFRklYID0gJ2Nkay1kZXNjcmliZWRieS1tZXNzYWdlJztcblxuLyoqIEF0dHJpYnV0ZSBnaXZlbiB0byBlYWNoIGhvc3QgZWxlbWVudCB0aGF0IGlzIGRlc2NyaWJlZCBieSBhIG1lc3NhZ2UgZWxlbWVudC4gKi9cbmV4cG9ydCBjb25zdCBDREtfREVTQ1JJQkVEQllfSE9TVF9BVFRSSUJVVEUgPSAnY2RrLWRlc2NyaWJlZGJ5LWhvc3QnO1xuXG4vKiogR2xvYmFsIGluY3JlbWVudGFsIGlkZW50aWZpZXIgZm9yIGVhY2ggcmVnaXN0ZXJlZCBtZXNzYWdlIGVsZW1lbnQuICovXG5sZXQgbmV4dElkID0gMDtcblxuLyoqIEdsb2JhbCBtYXAgb2YgYWxsIHJlZ2lzdGVyZWQgbWVzc2FnZSBlbGVtZW50cyB0aGF0IGhhdmUgYmVlbiBwbGFjZWQgaW50byB0aGUgZG9jdW1lbnQuICovXG5jb25zdCBtZXNzYWdlUmVnaXN0cnkgPSBuZXcgTWFwPHN0cmluZ3xIVE1MRWxlbWVudCwgUmVnaXN0ZXJlZE1lc3NhZ2U+KCk7XG5cbi8qKiBDb250YWluZXIgZm9yIGFsbCByZWdpc3RlcmVkIG1lc3NhZ2VzLiAqL1xubGV0IG1lc3NhZ2VzQ29udGFpbmVyOiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xuXG4vKipcbiAqIFV0aWxpdHkgdGhhdCBjcmVhdGVzIHZpc3VhbGx5IGhpZGRlbiBlbGVtZW50cyB3aXRoIGEgbWVzc2FnZSBjb250ZW50LiBVc2VmdWwgZm9yIGVsZW1lbnRzIHRoYXRcbiAqIHdhbnQgdG8gdXNlIGFyaWEtZGVzY3JpYmVkYnkgdG8gZnVydGhlciBkZXNjcmliZSB0aGVtc2VsdmVzIHdpdGhvdXQgYWRkaW5nIGFkZGl0aW9uYWwgdmlzdWFsXG4gKiBjb250ZW50LlxuICovXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBBcmlhRGVzY3JpYmVyIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfZG9jdW1lbnQ6IERvY3VtZW50O1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIF9kb2N1bWVudDogYW55KSB7XG4gICAgdGhpcy5fZG9jdW1lbnQgPSBfZG9jdW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyB0byB0aGUgaG9zdCBlbGVtZW50IGFuIGFyaWEtZGVzY3JpYmVkYnkgcmVmZXJlbmNlIHRvIGEgaGlkZGVuIGVsZW1lbnQgdGhhdCBjb250YWluc1xuICAgKiB0aGUgbWVzc2FnZS4gSWYgdGhlIHNhbWUgbWVzc2FnZSBoYXMgYWxyZWFkeSBiZWVuIHJlZ2lzdGVyZWQsIHRoZW4gaXQgd2lsbCByZXVzZSB0aGUgY3JlYXRlZFxuICAgKiBtZXNzYWdlIGVsZW1lbnQuXG4gICAqL1xuICBkZXNjcmliZShob3N0RWxlbWVudDogRWxlbWVudCwgbWVzc2FnZTogc3RyaW5nfEhUTUxFbGVtZW50KSB7XG4gICAgaWYgKCF0aGlzLl9jYW5CZURlc2NyaWJlZChob3N0RWxlbWVudCwgbWVzc2FnZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG1lc3NhZ2UgIT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBXZSBuZWVkIHRvIGVuc3VyZSB0aGF0IHRoZSBlbGVtZW50IGhhcyBhbiBJRC5cbiAgICAgIHRoaXMuX3NldE1lc3NhZ2VJZChtZXNzYWdlKTtcbiAgICAgIG1lc3NhZ2VSZWdpc3RyeS5zZXQobWVzc2FnZSwge21lc3NhZ2VFbGVtZW50OiBtZXNzYWdlLCByZWZlcmVuY2VDb3VudDogMH0pO1xuICAgIH0gZWxzZSBpZiAoIW1lc3NhZ2VSZWdpc3RyeS5oYXMobWVzc2FnZSkpIHtcbiAgICAgIHRoaXMuX2NyZWF0ZU1lc3NhZ2VFbGVtZW50KG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5faXNFbGVtZW50RGVzY3JpYmVkQnlNZXNzYWdlKGhvc3RFbGVtZW50LCBtZXNzYWdlKSkge1xuICAgICAgdGhpcy5fYWRkTWVzc2FnZVJlZmVyZW5jZShob3N0RWxlbWVudCwgbWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFJlbW92ZXMgdGhlIGhvc3QgZWxlbWVudCdzIGFyaWEtZGVzY3JpYmVkYnkgcmVmZXJlbmNlIHRvIHRoZSBtZXNzYWdlIGVsZW1lbnQuICovXG4gIHJlbW92ZURlc2NyaXB0aW9uKGhvc3RFbGVtZW50OiBFbGVtZW50LCBtZXNzYWdlOiBzdHJpbmd8SFRNTEVsZW1lbnQpIHtcbiAgICBpZiAoIXRoaXMuX2lzRWxlbWVudE5vZGUoaG9zdEVsZW1lbnQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2lzRWxlbWVudERlc2NyaWJlZEJ5TWVzc2FnZShob3N0RWxlbWVudCwgbWVzc2FnZSkpIHtcbiAgICAgIHRoaXMuX3JlbW92ZU1lc3NhZ2VSZWZlcmVuY2UoaG9zdEVsZW1lbnQsIG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIC8vIElmIHRoZSBtZXNzYWdlIGlzIGEgc3RyaW5nLCBpdCBtZWFucyB0aGF0IGl0J3Mgb25lIHRoYXQgd2UgY3JlYXRlZCBmb3IgdGhlXG4gICAgLy8gY29uc3VtZXIgc28gd2UgY2FuIHJlbW92ZSBpdCBzYWZlbHksIG90aGVyd2lzZSB3ZSBzaG91bGQgbGVhdmUgaXQgaW4gcGxhY2UuXG4gICAgaWYgKHR5cGVvZiBtZXNzYWdlID09PSAnc3RyaW5nJykge1xuICAgICAgY29uc3QgcmVnaXN0ZXJlZE1lc3NhZ2UgPSBtZXNzYWdlUmVnaXN0cnkuZ2V0KG1lc3NhZ2UpO1xuICAgICAgaWYgKHJlZ2lzdGVyZWRNZXNzYWdlICYmIHJlZ2lzdGVyZWRNZXNzYWdlLnJlZmVyZW5jZUNvdW50ID09PSAwKSB7XG4gICAgICAgIHRoaXMuX2RlbGV0ZU1lc3NhZ2VFbGVtZW50KG1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXNzYWdlc0NvbnRhaW5lciAmJiBtZXNzYWdlc0NvbnRhaW5lci5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5fZGVsZXRlTWVzc2FnZXNDb250YWluZXIoKTtcbiAgICB9XG4gIH1cblxuICAvKiogVW5yZWdpc3RlcnMgYWxsIGNyZWF0ZWQgbWVzc2FnZSBlbGVtZW50cyBhbmQgcmVtb3ZlcyB0aGUgbWVzc2FnZSBjb250YWluZXIuICovXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGNvbnN0IGRlc2NyaWJlZEVsZW1lbnRzID1cbiAgICAgICAgdGhpcy5fZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgWyR7Q0RLX0RFU0NSSUJFREJZX0hPU1RfQVRUUklCVVRFfV1gKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVzY3JpYmVkRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuX3JlbW92ZUNka0Rlc2NyaWJlZEJ5UmVmZXJlbmNlSWRzKGRlc2NyaWJlZEVsZW1lbnRzW2ldKTtcbiAgICAgIGRlc2NyaWJlZEVsZW1lbnRzW2ldLnJlbW92ZUF0dHJpYnV0ZShDREtfREVTQ1JJQkVEQllfSE9TVF9BVFRSSUJVVEUpO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlc0NvbnRhaW5lcikge1xuICAgICAgdGhpcy5fZGVsZXRlTWVzc2FnZXNDb250YWluZXIoKTtcbiAgICB9XG5cbiAgICBtZXNzYWdlUmVnaXN0cnkuY2xlYXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGVsZW1lbnQgaW4gdGhlIHZpc3VhbGx5IGhpZGRlbiBtZXNzYWdlIGNvbnRhaW5lciBlbGVtZW50IHdpdGggdGhlIG1lc3NhZ2VcbiAgICogYXMgaXRzIGNvbnRlbnQgYW5kIGFkZHMgaXQgdG8gdGhlIG1lc3NhZ2UgcmVnaXN0cnkuXG4gICAqL1xuICBwcml2YXRlIF9jcmVhdGVNZXNzYWdlRWxlbWVudChtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBtZXNzYWdlRWxlbWVudCA9IHRoaXMuX2RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuX3NldE1lc3NhZ2VJZChtZXNzYWdlRWxlbWVudCk7XG4gICAgbWVzc2FnZUVsZW1lbnQudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xuXG4gICAgdGhpcy5fY3JlYXRlTWVzc2FnZXNDb250YWluZXIoKTtcbiAgICBtZXNzYWdlc0NvbnRhaW5lciEuYXBwZW5kQ2hpbGQobWVzc2FnZUVsZW1lbnQpO1xuXG4gICAgbWVzc2FnZVJlZ2lzdHJ5LnNldChtZXNzYWdlLCB7bWVzc2FnZUVsZW1lbnQsIHJlZmVyZW5jZUNvdW50OiAwfSk7XG4gIH1cblxuICAvKiogQXNzaWducyBhIHVuaXF1ZSBJRCB0byBhbiBlbGVtZW50LCBpZiBpdCBkb2Vzbid0IGhhdmUgb25lIGFscmVhZHkuICovXG4gIHByaXZhdGUgX3NldE1lc3NhZ2VJZChlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgIGlmICghZWxlbWVudC5pZCkge1xuICAgICAgZWxlbWVudC5pZCA9IGAke0NES19ERVNDUklCRURCWV9JRF9QUkVGSVh9LSR7bmV4dElkKyt9YDtcbiAgICB9XG4gIH1cblxuICAvKiogRGVsZXRlcyB0aGUgbWVzc2FnZSBlbGVtZW50IGZyb20gdGhlIGdsb2JhbCBtZXNzYWdlcyBjb250YWluZXIuICovXG4gIHByaXZhdGUgX2RlbGV0ZU1lc3NhZ2VFbGVtZW50KG1lc3NhZ2U6IHN0cmluZykge1xuICAgIGNvbnN0IHJlZ2lzdGVyZWRNZXNzYWdlID0gbWVzc2FnZVJlZ2lzdHJ5LmdldChtZXNzYWdlKTtcbiAgICBjb25zdCBtZXNzYWdlRWxlbWVudCA9IHJlZ2lzdGVyZWRNZXNzYWdlICYmIHJlZ2lzdGVyZWRNZXNzYWdlLm1lc3NhZ2VFbGVtZW50O1xuICAgIGlmIChtZXNzYWdlc0NvbnRhaW5lciAmJiBtZXNzYWdlRWxlbWVudCkge1xuICAgICAgbWVzc2FnZXNDb250YWluZXIucmVtb3ZlQ2hpbGQobWVzc2FnZUVsZW1lbnQpO1xuICAgIH1cbiAgICBtZXNzYWdlUmVnaXN0cnkuZGVsZXRlKG1lc3NhZ2UpO1xuICB9XG5cbiAgLyoqIENyZWF0ZXMgdGhlIGdsb2JhbCBjb250YWluZXIgZm9yIGFsbCBhcmlhLWRlc2NyaWJlZGJ5IG1lc3NhZ2VzLiAqL1xuICBwcml2YXRlIF9jcmVhdGVNZXNzYWdlc0NvbnRhaW5lcigpIHtcbiAgICBpZiAoIW1lc3NhZ2VzQ29udGFpbmVyKSB7XG4gICAgICBjb25zdCBwcmVFeGlzdGluZ0NvbnRhaW5lciA9IHRoaXMuX2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKE1FU1NBR0VTX0NPTlRBSU5FUl9JRCk7XG5cbiAgICAgIC8vIFdoZW4gZ29pbmcgZnJvbSB0aGUgc2VydmVyIHRvIHRoZSBjbGllbnQsIHdlIG1heSBlbmQgdXAgaW4gYSBzaXR1YXRpb24gd2hlcmUgdGhlcmUnc1xuICAgICAgLy8gYWxyZWFkeSBhIGNvbnRhaW5lciBvbiB0aGUgcGFnZSwgYnV0IHdlIGRvbid0IGhhdmUgYSByZWZlcmVuY2UgdG8gaXQuIENsZWFyIHRoZVxuICAgICAgLy8gb2xkIGNvbnRhaW5lciBzbyB3ZSBkb24ndCBnZXQgZHVwbGljYXRlcy4gRG9pbmcgdGhpcywgaW5zdGVhZCBvZiBlbXB0eWluZyB0aGUgcHJldmlvdXNcbiAgICAgIC8vIGNvbnRhaW5lciwgc2hvdWxkIGJlIHNsaWdodGx5IGZhc3Rlci5cbiAgICAgIGlmIChwcmVFeGlzdGluZ0NvbnRhaW5lcikge1xuICAgICAgICBwcmVFeGlzdGluZ0NvbnRhaW5lci5wYXJlbnROb2RlIS5yZW1vdmVDaGlsZChwcmVFeGlzdGluZ0NvbnRhaW5lcik7XG4gICAgICB9XG5cbiAgICAgIG1lc3NhZ2VzQ29udGFpbmVyID0gdGhpcy5fZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBtZXNzYWdlc0NvbnRhaW5lci5pZCA9IE1FU1NBR0VTX0NPTlRBSU5FUl9JRDtcbiAgICAgIG1lc3NhZ2VzQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgICAgbWVzc2FnZXNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHRoaXMuX2RvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWVzc2FnZXNDb250YWluZXIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBEZWxldGVzIHRoZSBnbG9iYWwgbWVzc2FnZXMgY29udGFpbmVyLiAqL1xuICBwcml2YXRlIF9kZWxldGVNZXNzYWdlc0NvbnRhaW5lcigpIHtcbiAgICBpZiAobWVzc2FnZXNDb250YWluZXIgJiYgbWVzc2FnZXNDb250YWluZXIucGFyZW50Tm9kZSkge1xuICAgICAgbWVzc2FnZXNDb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChtZXNzYWdlc0NvbnRhaW5lcik7XG4gICAgICBtZXNzYWdlc0NvbnRhaW5lciA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqIFJlbW92ZXMgYWxsIGNkay1kZXNjcmliZWRieSBtZXNzYWdlcyB0aGF0IGFyZSBob3N0ZWQgdGhyb3VnaCB0aGUgZWxlbWVudC4gKi9cbiAgcHJpdmF0ZSBfcmVtb3ZlQ2RrRGVzY3JpYmVkQnlSZWZlcmVuY2VJZHMoZWxlbWVudDogRWxlbWVudCkge1xuICAgIC8vIFJlbW92ZSBhbGwgYXJpYS1kZXNjcmliZWRieSByZWZlcmVuY2UgSURzIHRoYXQgYXJlIHByZWZpeGVkIGJ5IENES19ERVNDUklCRURCWV9JRF9QUkVGSVhcbiAgICBjb25zdCBvcmlnaW5hbFJlZmVyZW5jZUlkcyA9IGdldEFyaWFSZWZlcmVuY2VJZHMoZWxlbWVudCwgJ2FyaWEtZGVzY3JpYmVkYnknKVxuICAgICAgICAuZmlsdGVyKGlkID0+IGlkLmluZGV4T2YoQ0RLX0RFU0NSSUJFREJZX0lEX1BSRUZJWCkgIT0gMCk7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCBvcmlnaW5hbFJlZmVyZW5jZUlkcy5qb2luKCcgJykpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBtZXNzYWdlIHJlZmVyZW5jZSB0byB0aGUgZWxlbWVudCB1c2luZyBhcmlhLWRlc2NyaWJlZGJ5IGFuZCBpbmNyZW1lbnRzIHRoZSByZWdpc3RlcmVkXG4gICAqIG1lc3NhZ2UncyByZWZlcmVuY2UgY291bnQuXG4gICAqL1xuICBwcml2YXRlIF9hZGRNZXNzYWdlUmVmZXJlbmNlKGVsZW1lbnQ6IEVsZW1lbnQsIG1lc3NhZ2U6IHN0cmluZ3xIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IHJlZ2lzdGVyZWRNZXNzYWdlID0gbWVzc2FnZVJlZ2lzdHJ5LmdldChtZXNzYWdlKSE7XG5cbiAgICAvLyBBZGQgdGhlIGFyaWEtZGVzY3JpYmVkYnkgcmVmZXJlbmNlIGFuZCBzZXQgdGhlXG4gICAgLy8gZGVzY3JpYmVkYnlfaG9zdCBhdHRyaWJ1dGUgdG8gbWFyayB0aGUgZWxlbWVudC5cbiAgICBhZGRBcmlhUmVmZXJlbmNlZElkKGVsZW1lbnQsICdhcmlhLWRlc2NyaWJlZGJ5JywgcmVnaXN0ZXJlZE1lc3NhZ2UubWVzc2FnZUVsZW1lbnQuaWQpO1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKENES19ERVNDUklCRURCWV9IT1NUX0FUVFJJQlVURSwgJycpO1xuXG4gICAgcmVnaXN0ZXJlZE1lc3NhZ2UucmVmZXJlbmNlQ291bnQrKztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgbWVzc2FnZSByZWZlcmVuY2UgZnJvbSB0aGUgZWxlbWVudCB1c2luZyBhcmlhLWRlc2NyaWJlZGJ5XG4gICAqIGFuZCBkZWNyZW1lbnRzIHRoZSByZWdpc3RlcmVkIG1lc3NhZ2UncyByZWZlcmVuY2UgY291bnQuXG4gICAqL1xuICBwcml2YXRlIF9yZW1vdmVNZXNzYWdlUmVmZXJlbmNlKGVsZW1lbnQ6IEVsZW1lbnQsIG1lc3NhZ2U6IHN0cmluZ3xIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IHJlZ2lzdGVyZWRNZXNzYWdlID0gbWVzc2FnZVJlZ2lzdHJ5LmdldChtZXNzYWdlKSE7XG4gICAgcmVnaXN0ZXJlZE1lc3NhZ2UucmVmZXJlbmNlQ291bnQtLTtcblxuICAgIHJlbW92ZUFyaWFSZWZlcmVuY2VkSWQoZWxlbWVudCwgJ2FyaWEtZGVzY3JpYmVkYnknLCByZWdpc3RlcmVkTWVzc2FnZS5tZXNzYWdlRWxlbWVudC5pZCk7XG4gICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoQ0RLX0RFU0NSSUJFREJZX0hPU1RfQVRUUklCVVRFKTtcbiAgfVxuXG4gIC8qKiBSZXR1cm5zIHRydWUgaWYgdGhlIGVsZW1lbnQgaGFzIGJlZW4gZGVzY3JpYmVkIGJ5IHRoZSBwcm92aWRlZCBtZXNzYWdlIElELiAqL1xuICBwcml2YXRlIF9pc0VsZW1lbnREZXNjcmliZWRCeU1lc3NhZ2UoZWxlbWVudDogRWxlbWVudCwgbWVzc2FnZTogc3RyaW5nfEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XG4gICAgY29uc3QgcmVmZXJlbmNlSWRzID0gZ2V0QXJpYVJlZmVyZW5jZUlkcyhlbGVtZW50LCAnYXJpYS1kZXNjcmliZWRieScpO1xuICAgIGNvbnN0IHJlZ2lzdGVyZWRNZXNzYWdlID0gbWVzc2FnZVJlZ2lzdHJ5LmdldChtZXNzYWdlKTtcbiAgICBjb25zdCBtZXNzYWdlSWQgPSByZWdpc3RlcmVkTWVzc2FnZSAmJiByZWdpc3RlcmVkTWVzc2FnZS5tZXNzYWdlRWxlbWVudC5pZDtcblxuICAgIHJldHVybiAhIW1lc3NhZ2VJZCAmJiByZWZlcmVuY2VJZHMuaW5kZXhPZihtZXNzYWdlSWQpICE9IC0xO1xuICB9XG5cbiAgLyoqIERldGVybWluZXMgd2hldGhlciBhIG1lc3NhZ2UgY2FuIGJlIGRlc2NyaWJlZCBvbiBhIHBhcnRpY3VsYXIgZWxlbWVudC4gKi9cbiAgcHJpdmF0ZSBfY2FuQmVEZXNjcmliZWQoZWxlbWVudDogRWxlbWVudCwgbWVzc2FnZTogc3RyaW5nfEhUTUxFbGVtZW50fHZvaWQpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuX2lzRWxlbWVudE5vZGUoZWxlbWVudCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZSAmJiB0eXBlb2YgbWVzc2FnZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIC8vIFdlJ2QgaGF2ZSB0byBtYWtlIHNvbWUgYXNzdW1wdGlvbnMgYWJvdXQgdGhlIGRlc2NyaXB0aW9uIGVsZW1lbnQncyB0ZXh0LCBpZiB0aGUgY29uc3VtZXJcbiAgICAgIC8vIHBhc3NlZCBpbiBhbiBlbGVtZW50LiBBc3N1bWUgdGhhdCBpZiBhbiBlbGVtZW50IGlzIHBhc3NlZCBpbiwgdGhlIGNvbnN1bWVyIGhhcyB2ZXJpZmllZFxuICAgICAgLy8gdGhhdCBpdCBjYW4gYmUgdXNlZCBhcyBhIGRlc2NyaXB0aW9uLlxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgdHJpbW1lZE1lc3NhZ2UgPSBtZXNzYWdlID09IG51bGwgPyAnJyA6IGAke21lc3NhZ2V9YC50cmltKCk7XG4gICAgY29uc3QgYXJpYUxhYmVsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKTtcblxuICAgIC8vIFdlIHNob3VsZG4ndCBzZXQgZGVzY3JpcHRpb25zIGlmIHRoZXkncmUgZXhhY3RseSB0aGUgc2FtZSBhcyB0aGUgYGFyaWEtbGFiZWxgIG9mIHRoZVxuICAgIC8vIGVsZW1lbnQsIGJlY2F1c2Ugc2NyZWVuIHJlYWRlcnMgd2lsbCBlbmQgdXAgcmVhZGluZyBvdXQgdGhlIHNhbWUgdGV4dCB0d2ljZSBpbiBhIHJvdy5cbiAgICByZXR1cm4gdHJpbW1lZE1lc3NhZ2UgPyAoIWFyaWFMYWJlbCB8fCBhcmlhTGFiZWwudHJpbSgpICE9PSB0cmltbWVkTWVzc2FnZSkgOiBmYWxzZTtcbiAgfVxuXG4gIC8qKiBDaGVja3Mgd2hldGhlciBhIG5vZGUgaXMgYW4gRWxlbWVudCBub2RlLiAqL1xuICBwcml2YXRlIF9pc0VsZW1lbnROb2RlKGVsZW1lbnQ6IE5vZGUpOiBlbGVtZW50IGlzIEVsZW1lbnQge1xuICAgIHJldHVybiBlbGVtZW50Lm5vZGVUeXBlID09PSB0aGlzLl9kb2N1bWVudC5FTEVNRU5UX05PREU7XG4gIH1cbn1cbiJdfQ==