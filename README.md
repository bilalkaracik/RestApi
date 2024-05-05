Bu proje, Express.js ve PostgreSQL kullanarak oluşturulmuş bir RESTful API'dir. API, öğrenci verilerini yönetmek için CRUD (Create, Read, Update, Delete) operasyonlarını sağlar.

Kurulum için:

Projeyi bilgisayarınıza kopyalayın veya indirin.
Terminal veya komut istemcisini açın ve proje dizinine gidin.
npm install komutunu kullanarak bağımlılıkları yükleyin.
Veritabanı bağlantısını yapılandırın (database/db.js dosyasında).
npm start komutunu kullanarak sunucuyu başlatın.
Kullanım için:

Tüm kullanıcıları almak için: GET http://localhost:5000/users
Yeni bir kullanıcı oluşturmak için: POST http://localhost:5000/users
Belirli bir kullanıcıyı almak için: GET http://localhost:5000/users/:id
Belirli bir kullanıcıyı silmek için: DELETE http://localhost:5000/users/:id
Belirli bir kullanıcıyı güncellemek için: PATCH http://localhost:5000/users/:id