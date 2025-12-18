import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Shield, Eye, Lock, UserCheck, Cookie, Database, AlertCircle, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy - PT SHALIMA SEHAT SEJAHTERA',
  description: 'Kebijakan privasi PT SHALIMA SEHAT SEJAHTERA - Klinik Swasta Terpercaya',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">PT SHALIMA SEHAT SEJAHTERA</h1>
                <p className="text-xs text-emerald-600 font-medium">Klinik Swasta Terpercaya</p>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors flex items-center">
                <ArrowLeft className="w-4 h-4 mr-1" />
                Kembali
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 rounded-full mb-6">
              <Eye className="w-10 h-10 text-emerald-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Kebijakan Privasi <span className="text-emerald-600">PT SHALIMA SEHAT SEJAHTERA</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kami berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda sebagai pasien klinik swasta terpercaya.
            </p>
            <p className="text-sm text-gray-500 mt-2">Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Introduction */}
            <section className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Database className="w-6 h-6 mr-3 text-emerald-600" />
                Pendahuluan
              </h2>
              <div className="prose prose-emerald max-w-none text-gray-600">
                <p>
                  Selamat datang di <strong>PT SHALIMA SEHAT SEJAHTERA</strong>. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, melindungi, dan membagikan informasi pribadi Anda ketika Anda menggunakan layanan klinik kami.
                </p>
                <p>
                  Sebagai klinik swasta yang beroperasi di Jalan Kapten Pierre Tendean, Tanah Grogot, Kabupaten Paser, Kalimantan Timur, kami memahami pentingnya privasi data medis dan pribadi Anda.
                </p>
              </div>
            </section>

            {/* Data Collection */}
            <section className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <UserCheck className="w-6 h-6 mr-3 text-emerald-600" />
                Informasi yang Kami Kumpulkan
              </h2>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Data Pribadi</h3>
                    <p>Nama lengkap, tanggal lahir, alamat, nomor telepon, email, dan informasi identifikasi lainnya.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Data Medis</h3>
                    <p>Riwayat kesehatan, diagnosa, pengobatan, hasil pemeriksaan laboratorium, dan informasi medis lainnya.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Data Administratif</h3>
                    <p>Informasi asuransi, pembayaran, janji temu, dan komunikasi terkait layanan klinik.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Data Usage */}
            <section className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Lock className="w-6 h-6 mr-3 text-emerald-600" />
                Penggunaan Informasi
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>Kami menggunakan informasi pribadi Anda untuk:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Memberikan layanan medis yang berkualitas dan tepat waktu</li>
                  <li>Mengelola janji temu dan administrasi klinik</li>
                  <li>Mengkomunikasikan hasil pemeriksaan dan informasi medis</li>
                  <li>Memproses pembayaran dan klaim asuransi</li>
                  <li>Memenuhi kewajiban hukum dan regulasi kesehatan</li>
                  <li>Meningkatkan kualitas layanan klinik kami</li>
                </ul>
              </div>
            </section>

            {/* Data Protection */}
            <section className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-emerald-600" />
                Perlindungan Data
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong>PT SHALIMA SEHAT SEJAHTERA</strong> menerapkan langkah-langkah keamanan yang komprehensif untuk melindungi informasi pribadi Anda:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-emerald-800 mb-2">Keamanan Fisik</h3>
                    <p className="text-sm">Ruang penyimpanan rekam medis yang aman dan terbatas aksesnya.</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">Keamanan Digital</h3>
                    <p className="text-sm">Enkripsi data dan sistem keamanan cyber yang mutakhir.</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-purple-800 mb-2">Akses Terbatas</h3>
                    <p className="text-sm">Hanya staf medis yang berwenang yang dapat mengakses data Anda.</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-orange-800 mb-2">Pelatihan Staf</h3>
                    <p className="text-sm">Staf kami dilatih tentang perlindungan data pasien.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Cookies */}
            <section className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Cookie className="w-6 h-6 mr-3 text-emerald-600" />
                Kebijakan Cookie
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Website kami menggunakan cookie untuk meningkatkan pengalaman pengguna. Cookie adalah file kecil yang disimpan di browser Anda.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Jenis Cookie yang Kami Gunakan:</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Cookie esensial untuk fungsi website</li>
                    <li>Cookie analitik untuk memahami penggunaan website</li>
                    <li>Cookie fungsional untuk mengingat preferensi Anda</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Rights */}
            <section className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <UserCheck className="w-6 h-6 mr-3 text-emerald-600" />
                Hak Anda Sebagai Pasien
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>Sebagai pasien, Anda memiliki hak untuk:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Mengakses dan melihat rekam medis pribadi Anda</li>
                  <li>Memperbaiki data pribadi yang tidak akurat</li>
                  <li>Meminta penghapusan data pribadi (dengan pengecualian medis)</li>
                  <li>Menolak pemrosesan data untuk tujuan tertentu</li>
                  <li>Memindahkan data Anda ke penyedia layanan kesehatan lain</li>
                </ul>
              </div>
            </section>

            {/* Contact */}
            <section className="bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <AlertCircle className="w-6 h-6 mr-3" />
                Pertanyaan atau Keluhan
              </h2>
              <div className="space-y-4">
                <p>
                  Jika Anda memiliki pertanyaan tentang kebijakan privasi kami atau ingin melaksanakan hak Anda, silakan hubungi kami:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-2">Kontak Langsung:</h3>
                    <p><strong>PT SHALIMA SEHAT SEJAHTERA</strong></p>
                    <p>Jalan Kapten Pierre Tendean</p>
                    <p>Tanah Grogot, Kabupaten Paser</p>
                    <p>Kalimantan Timur</p>
                    <p>Telepon: 085285703515</p>
                    <p>Email: privacy@shalimasehatsejahtera.com</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Jam Operasional:</h3>
                    <p>Senin - Jumat: 08:00 - 20:00</p>
                    <p>Sabtu: 08:00 - 18:00</p>
                    <p>Minggu: 09:00 - 15:00</p>
                    <p className="mt-4 text-sm bg-white/20 p-3 rounded">
                      Kami akan merespons pertanyaan Anda dalam waktu 7 hari kerja.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Update Notice */}
            <section className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Pembaruan Kebijakan</h3>
              <p className="text-yellow-700 text-sm">
                Kebijakan Privasi ini dapat diperbarui dari waktu ke waktu untuk mencerminkan perubahan dalam praktik kami atau perubahan peraturan hukum. Kami akan memberitahukan perubahan signifikan melalui website atau komunikasi langsung.
              </p>
            </section>
          </div>

          {/* Back Button */}
          <div className="text-center mt-12">
            <Link 
              href="/" 
              className="inline-flex items-center bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-bold">PT SHALIMA SEHAT SEJAHTERA</h3>
          </div>
          <p className="text-gray-400 text-sm">
            &copy; 2024 PT SHALIMA SEHAT SEJAHTERA. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <Link href="/" className="text-gray-400 hover:text-emerald-400 transition-colors">Beranda</Link>
            <Link href="/privacy" className="text-gray-400 hover:text-emerald-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-emerald-400 transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}