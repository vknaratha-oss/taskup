// ============================================================
// Factory Ops Board — การตั้งค่าการเชื่อมต่อ Supabase
// ============================================================
// กรอกค่าเรียบร้อยแล้ว — ไม่ต้องแก้ไขอะไรเพิ่ม เว้นแต่ต้องการเปลี่ยน
// allowRegistration ด้านล่าง
// ============================================================

window.APP_CONFIG = {
  supabaseUrl: "https://rjxjvbxynkrrlduhxgha.supabase.co",
  supabaseAnonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqeGp2Ynh5bmtycmxkdWh4Z2hhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY1MjQxNDEsImV4cCI6MjEwMjEwMDE0MX0.HlCc_zKoWC9rwdj4m0RweLWGS0PHOeYmzcfkD7RNLJo",

  // true  = พนักงานสมัครสมาชิกเองได้จากหน้าเข้าสู่ระบบ
  // false = ต้องให้แอดมินสร้างบัญชีให้ผ่าน Supabase Dashboard > Authentication > Users
  //         (แนะนำ false สำหรับระบบภายในองค์กร เพื่อกันคนนอกสมัครเข้าใช้งาน)
  allowRegistration: true
};
