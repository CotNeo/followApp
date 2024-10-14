# Backend API for Location and Device Health Tracking

Bu backend API, kullanıcıların konum ve cihaz sağlığı bilgilerini saklamak, güncellemek ve görüntülemek için CRUD işlemlerini destekler. WebSocket ile anlık veri güncellemesi sağlar.

## İçindekiler
- [Özellikler](#özellikler)
- [Kurulum](#kurulum)
- [API Rotaları](#api-rotaları)
- [WebSocket](#websocket)
- [Yapı](#yapı)

### Özellikler
- **Konum Bilgileri**: Kullanıcı konum verileri CRUD işlemleriyle saklanır.
- **Cihaz Sağlık Bilgileri**: Cihazın pil durumu, depolama kapasitesi ve çevrimiçi durumu takip edilir.
- **Gerçek Zamanlı Güncellemeler**: WebSocket ile anlık veri iletimi sağlanır.

### Kurulum
1. Projeyi klonlayın:
   ```bash
   git clone <repository-url>
   cd server
