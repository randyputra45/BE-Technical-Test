class Cart():
    # Class variabel
    def __init__(self):
        self.cart = {}

    # Fungsi tambahkan produk ke dalam cart
    def tambahProduk(self, kodeProduk, kuantitas):
        if kodeProduk in self.cart:
            self.cart.update({kodeProduk: kuantitas + self.cart[kodeProduk]})
        else:
            self.cart.update({kodeProduk: kuantitas})

    # Fungsi hapus produk di dalam cart
    def hapusProduk(self, kodeProduk):
        if kodeProduk in self.cart:
            del self.cart[kodeProduk]
        else:
            return
    
    # Fungsi tampilkan cart
    def tampilkanCart(self):
        for key, value in self.cart.items():
            print(key, "\t", f"({value})")

# Membuat objek keranjang dari kelas Cart
keranjang = Cart()
keranjang.tambahProduk("Pisang Hijau", 2)
keranjang.tambahProduk("Semangka Kuning", 3)
keranjang.tambahProduk("Apel Merah", 1)
keranjang.tambahProduk("Apel Merah", 4)
keranjang.tambahProduk("Apel Merah", 2)
keranjang.hapusProduk("Semangka Kuning")
keranjang.hapusProduk("Semangka Merah")
keranjang.tampilkanCart()