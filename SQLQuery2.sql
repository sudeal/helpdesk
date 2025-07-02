-- Önce Tickets tablosunu sil (foreign key referansı olabilir)
IF OBJECT_ID('dbo.Tickets', 'U') IS NOT NULL
    DROP TABLE dbo.Tickets;

-- Sonra Users tablosunu sil
IF OBJECT_ID('dbo.Users', 'U') IS NOT NULL
    DROP TABLE dbo.Users;

-- Users tablosu
CREATE TABLE dbo.Users (
    UserID INT IDENTITY(1,1) PRIMARY KEY,
    FullName NVARCHAR(100) NOT NULL,
    Email NVARCHAR(100) NOT NULL UNIQUE,
    PasswordHash NVARCHAR(255) NOT NULL,
    Role NVARCHAR(50) CHECK (Role IN ('customer', 'support')) NOT NULL,
    CreatedAt DATETIME DEFAULT GETDATE()
);

-- Tickets tablosu
CREATE TABLE dbo.Tickets (
    TicketID INT IDENTITY(1,1) PRIMARY KEY,
    Title NVARCHAR(255) NOT NULL,
    Description NVARCHAR(MAX),
    Status NVARCHAR(50) CHECK (Status IN ('open', 'in_progress', 'resolved', 'closed')) DEFAULT 'open',
    Priority NVARCHAR(50) CHECK (Priority IN ('low', 'medium', 'high')) DEFAULT 'medium',
    CreatedAt DATETIME DEFAULT GETDATE(),
    UpdatedAt DATETIME NULL,
    CreatedBy INT NOT NULL,
    FOREIGN KEY (CreatedBy) REFERENCES dbo.Users(UserID)
);

INSERT INTO dbo.Users (FullName, Email, PasswordHash, Role)
VALUES 
('Ahmet Yılmaz', 'ahmet.yilmaz@example.com', 'hashedpass1', 'customer'),
('Elif Demir', 'elif.demir@example.com', 'hashedpass2', 'customer'),
('Mehmet Kaya', 'mehmet.kaya@example.com', 'hashedpass3', 'support'),
('Zeynep Öztürk', 'zeynep.ozturk@example.com', 'hashedpass4', 'support'),
('Ali Can', 'ali.can@example.com', 'hashedpass5', 'customer');

INSERT INTO dbo.Tickets (Title, Description, Status, Priority, CreatedBy, UpdatedAt)
VALUES 
('Yazıcı çalışmıyor', '3. kattaki yazıcıdan çıktı alınamıyor.', 'open', 'high', 1, NULL),
('E-posta senkronize olmuyor', 'Outlook uygulamasında mailler gelmiyor.', 'in_progress', 'medium', 2, GETDATE()),
('VPN bağlantısı kesiliyor', 'Evden çalışırken bağlantı sürekli kopuyor.', 'resolved', 'high', 1, GETDATE()),
('Bilgisayar açılmıyor', 'Ofisteki masaüstü bilgisayar sabah açılmadı.', 'closed', 'high', 5, GETDATE()), -- critical → high yapıldı
('Zoom toplantısı donuyor', 'Toplantı sırasında görüntü sürekli donuyor.', 'open', 'low', 2, NULL);

SELECT 
    T.TicketID,
    T.Title,
    T.Status,
    T.Priority,
    U.FullName AS CreatedByUser
FROM dbo.Tickets T
JOIN dbo.Users U ON T.CreatedBy = U.UserID;





