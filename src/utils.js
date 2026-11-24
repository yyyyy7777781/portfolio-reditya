// Membuat path aset aman untuk base "./" maupun subpath (GitHub Pages).
export const assetUrl = (path = "") =>
  `${import.meta.env.BASE_URL}${String(path).replace(/^\//, "")}`;

// Tautan dianggap "belum diisi" bila kosong, "#", atau hanya domain utama
// (placeholder). Tombol dengan tautan seperti itu disembunyikan.
export const hasLink = (url) => {
  if (!url || url === "#") return false;
  try {
    const { pathname } = new URL(url);
    return pathname.replace(/\//g, "") !== "";
  } catch {
    return false;
  }
};
