# Membuat class dengan nama Cart
class Cart():
    # Class variabel
    def __init__(self):
        self.cart = {}

    # Fungsi tambahkan produk ke dalam cart
    def tambahProduk(self, kodeProduk, kuantitas):
        # Jika kode produk sudah ada dalam cart maka update kuantitas produk tersebut
        if kodeProduk in self.cart:
            self.cart.update({kodeProduk: kuantitas + self.cart[kodeProduk]})
        # Jika kode produk belum ada dalam cart maka masukkan produk dan kuantitas
        else:
            self.cart.update({kodeProduk: kuantitas})

    # Fungsi hapus produk di dalam cart
    def hapusProduk(self, kodeProduk):
        # Cek apakah produk sudah ada dalam cart, lalu hapus produk tersebut
        if kodeProduk in self.cart:
            del self.cart[kodeProduk]
        else:
            return
    
    # Fungsi tampilkan cart
    def tampilkanCart(self):
        # For loop untuk menampilkan semua isi cart
        for key, value in self.cart.items():
            print(key, "\t", f"({value})")

# Membuat objek keranjang dari kelas Cart
keranjang = Cart()

# Memanggil method tambah produk
keranjang.tambahProduk("Pisang Hijau", 2)
keranjang.tambahProduk("Semangka Kuning", 3)
keranjang.tambahProduk("Apel Merah", 1)
keranjang.tambahProduk("Apel Merah", 4)
keranjang.tambahProduk("Apel Merah", 2)

# Memanggil method hapus produk
keranjang.hapusProduk("Semangka Kuning")
keranjang.hapusProduk("Semangka Merah")

# Memanggil method tampilkan cart
keranjang.tampilkanCart()

'''
Output:
Pisang Hijau (2)
Apel Merah 	 (7)
'''