// ============================================================
// Factory Ops Board — Service Worker
// รับ Push message จากเซิร์ฟเวอร์แล้วแสดงเป็น popup แจ้งเตือน
// เหมือนแอปแชท (LINE-style) แม้ปิดแท็บ/เบราว์เซอร์ไปแล้วก็แจ้งได้
// (ยกเว้น iPhone/iPad ต้อง "เพิ่มลงหน้าจอโฮม" ก่อนถึงจะแจ้งเตือนได้)
// ============================================================

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('push', (event) => {
  let data = {};
  try { data = event.data ? event.data.json() : {}; } catch (e) { data = { title: 'Factory Ops Board', body: event.data ? event.data.text() : '' }; }

  const title = data.title || 'Factory Ops Board';
  const options = {
    body: data.body || 'มีการแจ้งเตือนใหม่',
    icon: data.icon || './icon-192.png',
    badge: data.icon || './icon-192.png',
    tag: data.tag || 'factory-ops-notify',
    renotify: true,
    data: { url: data.url || './' }
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const targetUrl = (event.notification.data && event.notification.data.url) || './';

  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if ('focus' in client) return client.focus();
      }
      if (self.clients.openWindow) return self.clients.openWindow(targetUrl);
    })
  );
});
