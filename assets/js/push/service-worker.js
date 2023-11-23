self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('push', function(event) {
    console.log('Push message received.');
    let notificationTitle = 'Hello';
    const notificationOptions = {
        body: 'Thanks for sending this push msg.',
    };

    if (event.data) {
        const dataText = event.data.text();
        notificationTitle = 'Received Payload';
        notificationOptions.body = `Push data: '${dataText}'`;
    }

    event.waitUntil(
        self.registration.showNotification(
            notificationTitle,
            notificationOptions,
        ),
    );
});


