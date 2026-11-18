# Hamza — kişisel bio / geliştirici portföyü

Kişisel, ticari olmayan bio ve portföy sitesi. Yalnızca HTML, CSS ve JavaScript. Derleme veya sunucu kurulumu gerektirmez; GitHub Pages ile çalışır.

## Dosyalar
- `index.html`: içerik ve bağlantılar
- `styles.css`: responsive tasarım, koyu/açık tema
- `script.js`: tema değişimi, site bağlantısını kopyalama
- `favicon.svg`: sekme ikonu
- `.nojekyll`: Pages için statik dosyaları doğrudan sunar

## Kişiselleştirme
- `index.html` içindeki “Hamza” adını, açıklamaları ve proje bağlantılarını düzenle.
- GitHub profili bağlantısı, kullanıcı adın bilinmediği için özellikle eklenmedi. Gerçek kullanıcı adını öğrendikten sonra ekle.
- Projeler kişisel portföy referanslarıdır. `is-a.dev` ticari/ücretli hizmet ilanı için kullanılamaz.

## GitHub Pages ile yayınlama
1. GitHub'da yeni bir **public** repo aç: ör. `hamza-bio`.
2. Bu klasördeki **dosyaları repoya kök dizine** yükle (`index.html`, `styles.css` vb.).
3. Repo → **Settings → Pages** → **Build and deployment → Deploy from a branch**; Branch `main`, folder `/(root)` → **Save**.
4. Sayfa `https://GITHUB-KULLANICI-ADIN.github.io/hamza-bio/` adresinde açılır. Özel alan adı için Pages ayarlarına geç.

## is-a.dev alt alan adı (opsiyonel)
Bu adımlar ancak GitHub kullanıcı adın ve hangi alt alan adını istediğin netleşince tamamlanabilir. Alan adının müsaitliği ve onayı garanti değildir.

1. Önce GitHub Pages sitesini yayınla ve çalıştığını doğrula.
2. Resmî yönergeleri oku: https://docs.is-a.dev/quickstart/ ve https://docs.is-a.dev/guides/github-pages/
3. `is-a-dev/register` deposunu kendi GitHub hesabına **fork** et; `domains/ISTEDIGIN-AD.json` dosyasını kendin oluştur. Örnek şablon:

```json
{
  "owner": {
    "username": "GITHUB-KULLANICI-ADIN"
  },
  "records": {
    "CNAME": "GITHUB-KULLANICI-ADIN.github.io"
  }
}
```

4. Resmî başvuru şablonuyla GitHub **pull request** gönder; sitenin ekran görüntüsünü ve mevcut önizleme bağlantısını ekle. Servis, AI ile oluşturulan PR'ları kabul etmeyebilir: başvuruyu **kendin, resmî talimatları izleyerek** düzenle ve gönder.
5. PR onaylanıp birleştirildikten sonra repo → Settings → Pages → Custom domain alanına `ISTEDIGIN-AD.is-a.dev` yaz. HTTPS'i etkinleştir. GitHub Pages özel alan adı için gerekirse `CNAME` dosyasını GitHub otomatik oluşturur.

**Not**: Ticari satış, kurs veya ücretli hizmet siteleri `is-a.dev` şartlarına aykırıdır. Bu portföyün kapsamı kişisel yazılım çalışmaları olmalı.

## Teknik
Güncel Chrome, Firefox, Safari ve mobil tarayıcılarda çalışır. Harici Google Fonts bağlantısı mevcut; internet yoksa sistem fontuna geçer. Form, sunucu veya izleme çerezi bulunmaz.
