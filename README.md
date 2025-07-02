# Help Desk (Yardım Masası) Uygulaması

## 📌 Proje Konusu
Bir Yardım Masası (Help Desk) uygulaması geliştirildi. Bu sistem, kurum içindeki destek taleplerinin dijital olarak kaydedilmesi, takibi ve yönetimi amacıyla kullanılmaktadır.

## 🔧 Fonksiyonel Beklentiler
Uygulamanın temel fonksiyonellikleri:
- 🎫 **Ticket (Destek Talebi) İşlemleri**
  - Destek taleplerinin oluşturulması
  - Tüm taleplerin listelenmesi
  - Taleplerin detaylarının görüntülenmesi
  - Durum, öncelik gibi bilgilerle güncellenmesi
- 🔍 **Filtreleme & Sıralama**
  - Taleplerin farklı kriterlere göre filtrelenebilmesi ve sıralanabilmesi

## 📝 Proje Özeti
- Kullanıcılar yeni destek talebi oluşturabilir.
- Oluşturulan talepler backend'e başarıyla kaydedilir.
- Tüm talepler listelenebilir ve detayları görüntülenebilir.
- Talepler durum ve öncelik bilgileriyle güncellenebilir.
- Listeleme ekranında talepler filtrelenip sıralanabilir.

## 🛠️ Kurulum ve Çalıştırma

### 1. Backend (ASP.NET Core + SQL Server)
- `appsettings.json` dosyasında bağlantı ayarlarını yapın.
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
- Uygulama varsayılan olarak `http://localhost:3002` portunda çalışır.

## 📋 Kullanım
- Ana sayfada yeni destek talebi oluşturabilirsiniz.
- Oluşturulan talepler backend'e kaydedilir ve "View Tickets" ekranında listelenir.
- Talepler filtrelenebilir ve sıralanabilir.
- Her talebin detayına tıklayarak durum ve öncelik güncellenebilir.

## 📦 Kapsam ve Ekstra Açıklamalar
- Kullanıcı yönetimi (login/rol bazlı) eklenebilir.
- API ile tam entegre çalışır, veriler SQL Server'da saklanır.
- Modern ve responsive arayüz.
- Kodlar ve bileşenler kolayca geliştirilebilir ve özelleştirilebilir.

## 👨‍💻 Geliştirici Notları
- Backend ve frontend ayrı dizinlerde çalışır.
- CORS ve bağlantı ayarlarına dikkat edilmelidir.
- Kodlar ve veritabanı şeması, kurumsal ihtiyaçlara göre genişletilebilir.
- https://sudeal.github.io/helpdesk/ bu URL Microsoft Edge de açılmaktadır.



