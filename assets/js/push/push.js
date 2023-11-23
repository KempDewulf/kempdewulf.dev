"use strict";

const publicKey = new Uint8Array([0x04,0xe1,0xfc,0x9d,0x34,0x00,0xe6,0x26,0x61,0x97,0x6d,0xfe,0x34,0x2c,0xc6,
    0x1b,0xda,0x6b,0xbc,0xe6,0x79,0x04,0x4d,0x0c,0x25,0x70,0x56,0xf8,0x65,0x24,
    0x40,0x8b,0xd1,0x55,0x35,0x41,0xdf,0x62,0x71,0x99,0x7d,0x15,0xd6,0x3e,0xb3,
    0xd2,0xbe,0xeb,0x9d,0x3e,0xfe,0x6e,0x08,0xba,0x7f,0x68,0x39,0x7c,0xc3,0xe9,
    0x02,0x1e,0x5b,0xae,0xa3]);
//const VAPID_PUBLIC_KEY = 'BIoG1wFUJjA9b16uyL3rL5eDccnmbK1eNeQ89sRmNi8FVPYMzm1W-SSGfXCv414LgV_g-TQ9ZydFHPMakOvwNvM';

if ('serviceWorker' in navigator && 'PushManager' in window) {
    requestPermission()
}

function requestPermission() {
    Notification.requestPermission().then(function(permission) {
        if (permission === 'granted') {
            registerWorker();
        } else {
            console.log('Unable to get permission to notify.');
        }
    });
}

function registerWorker() {
    navigator.serviceWorker.register('assets/js/push/service-worker.js')
        .then(function(registration) {
            return registration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: publicKey
            });
        })
        .then(function(subscription) {
            console.log(subscription.toJSON());
            let key = subscription.getKey("p256dh")
            let auth = subscription.getKey("auth")
            console.log(btoa(String.fromCharCode.apply(null, new Uint8Array(key))))
            console.log(btoa(String.fromCharCode.apply(null, new Uint8Array(auth))))
        })
        .catch(function(error) {
            console.error('Error during service worker registration:', error);
        });
}


/* Push notification logic.
function init() {
    registerServiceWorker().then()
}

async function registerServiceWorker() {
    await navigator.serviceWorker.register('./assets/js/push/service-worker.js');
    const registration = await navigator.serviceWorker.getRegistration();
    const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlB64ToUint8Array(VAPID_PUBLIC_KEY)
    });
    console.log(subscription);
}



async function subscribeToPush() {
    const registration = await navigator.serviceWorker.getRegistration();
    const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlB64ToUint8Array(VAPID_PUBLIC_KEY)
    });
    console.log(subscription);
    //postToServer('/add-subscription', subscription);
}

async function unsubscribeFromPush() {
    const registration = await navigator.serviceWorker.getRegistration();
    const subscription = await registration.pushManager.getSubscription();
    //postToServer('/remove-subscription', {
    //    endpoint: subscription.endpoint
    //});
    await subscription.unsubscribe();
}
 */
const urlB64ToUint8Array = (base64String) => {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
};























