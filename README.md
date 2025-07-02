# Help Desk (Yardım Masası) Uygulaması

Bu proje, kurum içindeki destek taleplerinin dijital olarak kaydedilmesi, takibi ve yönetimi amacıyla geliştirilmiş bir Yardım Masası (Help Desk) uygulamasıdır.

## 🚩 ÖNEMLİ DURUM BİLGİSİ
- **Şu anda uygulama sadece veritabanındaki mevcut destek taleplerini listeleyebilmektedir.**
- **Yeni destek talebi oluşturma (ekleme) fonksiyonu backend bağlantı veya model uyumsuzluğu nedeniyle çalışmamaktadır.**
- Backend bağlantısı ve POST işlemlerinde hata alınmaktadır. Sadece okuma (GET) işlemleri başarılıdır.

## 🚀 Proje Özellikleri
- **Destek Talebi (Ticket) İşlemleri:**
  - Destek taleplerinin oluşturulması *(şu an devre dışı)*
  - Tüm taleplerin listelenmesi *(çalışıyor)*
  - Taleplerin detaylarının görüntülenmesi
  - Durum ve öncelik gibi bilgilerle güncellenmesi *(geliştirilebilir)*
- **Filtreleme & Sıralama:**
  - Taleplerin farklı kriterlere göre filtrelenebilmesi ve sıralanabilmesi

## 🛠️ Kurulum ve Çalıştırma

### 1. Backend (ASP.NET Core + SQL Server)
- Gerekli bağlantı ayarlarını `appsettings.json` dosyasında yapın.
- Migration ve veritabanı işlemlerini tamamlayın.
- Azure App Service veya lokal olarak çalıştırabilirsiniz:
  ```sh
  dotnet build
  dotnet run
  ```
- API endpoint'leri: `/api/tickets`, `/api/users` vb.

### 2. Frontend (React)
- Proje dizininde terminal açın:
  ```sh
  npm install
  npm start
  ```
- `.env` dosyasında backend API adresini belirtin:
  ```env
  REACT_APP_API_URL=https://<senin-backend-adresin>/api
  ```
- Uygulama varsayılan olarak `http://localhost:3002`  portta çalışır.

## 📋 Kullanım
- Ana sayfada yeni destek talebi oluşturabilir veya mevcut talepleri görüntüleyebilirsiniz.
- **Not:** Şu anda sadece mevcut talepler görüntülenebilmektedir, yeni talep ekleme fonksiyonu çalışmamaktadır.
- Talepler filtrelenebilir ve sıralanabilir.
- Her talebin detayına tıklayarak durum ve öncelik güncellenebilir.

## 📦 Kapsam ve Ekstra Açıklamalar
- API ile tam entegre çalışır, veriler SQL Server'da saklanır.
- Modern ve responsive arayüz.
- Kodlar ve bileşenler kolayca geliştirilebilir ve özelleştirilebilir.

## 👨‍💻 Geliştirici Notları
- Backend ve frontend ayrı dizinlerde çalışır.
- CORS ve bağlantı ayarlarına dikkat edilmelidir.
- Kodlar ve veritabanı şeması, kurumsal ihtiyaçlara göre genişletilebilir.

---

> **Not:** Talep ekleme fonksiyonu ve backend bağlantısı ile ilgili sorunlar çözülmeden tam işlevsellik sağlanamaz. Sadece listeleme (okuma) fonksiyonu aktiftir.


