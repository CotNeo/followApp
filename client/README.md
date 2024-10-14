Konum Takip Uygulaması - Client
Bu proje, kullanıcıların konum bilgilerini gerçek zamanlı olarak izlemek, cihaz sağlık verilerini görmek ve acil iletişim sağlamak için geliştirilmiş bir mobil uygulamanın client kısmıdır. Proje, React Native kullanılarak oluşturulmuştur ve mavi, kırmızı ve beyaz renk paletine dayalı modern bir tasarım sunar.

İçindekiler
Özellikler
Dosya Yapısı
Kullanılan Teknolojiler
Kurulum
Ekran Görüntüleri
Geliştirici Notları
Özellikler
Gerçek Zamanlı Konum Takibi: Kullanıcıların konumları harita üzerinde gerçek zamanlı olarak gösterilir.
Cihaz Bilgisi ve Sağlığı: Cihazın sağlık bilgileri ve durumu görüntülenir.
Profil Yönetimi: Kullanıcı profil bilgileri görüntülenebilir ve düzenlenebilir.
Acil İletişim: 911 gibi acil durum hatlarına erişim sağlar.
Dosya Yapısı
plaintext
Kodu kopyala
client/
├── components/
│   ├── Header.js              # Uygulama başlığı ve logo
│   ├── Navbar.js              # Alt navigasyon çubuğu
│   ├── Footer.js              # Alt bilgi bölümü
│   ├── Dashboard.js           # Ana gösterge paneli
│   ├── DeviceInfo.js          # Cihaz bilgileri sayfası
│   ├── Profile.js             # Kullanıcı profili sayfası
│   ├── EmergencyContact.js    # 911 gibi acil iletişim kısayolu
│   └── MapView.js             # Harita bileşeni
├── screens/
│   └── HomeScreen.js          # Ana ekran
├── App.js                     # Ana uygulama dosyası
├── assets/
│   └── styles.js              # Ortak stil dosyaları ve renk paleti
├── package.json               # Bağımlılıklar ve betikler
└── README.md                  # Client README dosyası
Kullanılan Teknolojiler
React Native: Uygulamanın geliştirilmesi için kullanılan mobil framework.
Socket.io Client: Sunucu ile gerçek zamanlı iletişim sağlar.
Axios: HTTP isteklerini yönetmek için kullanılır.
React Native Maps: Harita bileşenini görüntülemek için kullanılır.
Kurulum
Projeyi klonlayın:

bash
Kodu kopyala
git clone <repository-url>
cd client
Bağımlılıkları yükleyin:

bash
Kodu kopyala
npm install
Uygulamayı başlatın:

Android veya iOS için:
bash
Kodu kopyala
npm run android
npm run ios
Genel Başlatma:
bash
Kodu kopyala
npm start
Uygulama, bağlı mobil cihaz veya simülatörde çalışacaktır.

Ekran Görüntüleri
Dashboard: Harita üzerinde gerçek zamanlı konum bilgilerini gösterir.
Cihaz Bilgileri: Kullanıcının cihazının sağlık durumunu ve pil seviyesini gösterir.
Profil: Kullanıcı bilgileri görüntülenebilir ve düzenlenebilir.
Acil İletişim: 911 gibi acil iletişim numaralarına hızlı erişim sağlar.
Geliştirici Notları
Gerçek Zamanlı Güncellemeler: Konum verileri, backend sunucusundan WebSocket üzerinden gerçek zamanlı olarak alınır ve haritada güncellenir.
Harita Entegrasyonu: Harita bileşeni için react-native-maps kullanılır. Harita üzerinde kullanıcıların konumları işaretlenir.
UI/UX: Modern tasarım, kullanıcı dostu bir deneyim sağlamak için mavi, kırmızı ve beyaz renk paletine dayanmaktadır.