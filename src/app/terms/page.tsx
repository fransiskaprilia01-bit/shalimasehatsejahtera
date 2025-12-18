import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Shield, FileText, AlertTriangle, CheckCircle, Users, Gavel, Clock, Mail, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms and Conditions - PT SHALIMA SEHAT SEJAHTERA',
  description: 'Syarat dan ketentuan PT SHALIMA SEHAT SEJAHTERA - Klinik Swasta Terpercaya',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Gavel className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">PT SHALIMA SEHAT SEJAHTERA</h1>
                <p className="text-xs text-blue-600 font-medium">Klinik Swasta Terpercaya</p>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center">
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
              <FileText className="w-10 h-10 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Syarat & Ketentuan <span className="text-blue-600">PT SHALIMA SEHAT SEJAHTERA</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Syarat dan ketentuan penggunaan layanan klinik kami untuk memastikan pelayanan yang transparan dan profesional.
            </p>
            <p className="text-sm text-gray-500 mt-2">Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Acceptance */}
            <section className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 mr-3 text-blue-600" />
                Penerimaan Syarat dan Ketentuan
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Dengan menggunakan layanan <strong>PT SHALIMA SEHAT SEJAHTERA</strong>, Anda menyetujui dan terikat oleh syarat dan ketentuan yang berlaku. Jika Anda tidak setuju dengan bagian mana pun dari syarat ini, harap jangan menggunakan layanan kami.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-800">
                    <strong>Penting:</strong> Syarat dan ketentuan ini berlaku untuk semua pasien, pengunjung, dan pengguna layanan klinik kami.
                  </p>
                </div>
              </div>
            </section>

            {/* Services */}
            <section className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-blue-600" />
                Layanan Klinik
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong>PT SHALIMA SEHAT SEJAHTERA</strong> menyediakan berbagai layanan kesehatan meliputi:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Layanan Medis Umum</h3>
                    <ul className="text-sm space-y-1">
                      <li>• Konsultasi dokter umum</li>
                      <li>• Pemeriksaan kesehatan rutin</li>
                      <li>• Pengobatan penyakit umum</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Layanan Penunjang</h3>
                    <ul className="text-sm space-y-1">
                      <li>• Laboratorium klinik</li>
                      <li>• Pemeriksaan diagnostik</li>
                      <li>• Vaksinasi</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Batasan Layanan
                  </h4>
                  <p className="text-sm text-yellow-700">
                    Layanan darurat medis yang membutuhkan peralatan khusus atau rawat inap tidak tersedia di klinik kami. Pasien dengan kondisi darurat akan dirujuk ke rumah sakit terdekat.
                  </p>
                </div>
              </div>
            </section>

            {/* Patient Rights */}
            <section className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Users className="w-6 h-6 mr-3 text-blue-600" />
                Hak dan Kewajiban Pasien
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Hak Pasien:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-sm">Mendapatkan informasi lengkap tentang kondisi kesehatan</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-sm">Memberikan persetujuan atau menolak tindakan medis</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-sm">Kerahasiaan informasi medis</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-sm">Mendapatkan layanan yang berkualitas dan profesional</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Kewajiban Pasien:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-sm">Memberikan informasi kesehatan yang akurat</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-sm">Mematuhi jadwal janji temu yang telah dibuat</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-sm">Melunasi biaya layanan yang telah ditetapkan</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-sm">Menghormati staf medis dan pasien lainnya</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Appointments */}
            <section className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Clock className="w-6 h-6 mr-3 text-blue-600" />
                Kebijakan Janji Temu
              </h2>
              <div className="space-y-4 text-gray-600">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">Pembuatan Janji Temu</h3>
                    <ul className="text-sm space-y-1">
                      <li>• Dapat dilakukan via telepon atau langsung di lokasi</li>
                      <li>• Minimal 1 jam sebelum waktu yang diinginkan</li>
                      <li>• Konfirmasi akan dikirim melalui SMS/telepon</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-orange-800 mb-2">Pembatalan & Penundaan</h3>
                    <ul className="text-sm space-y-1">
                      <li>• Pembatalan minimal 2 jam sebelum jadwal</li>
                      <li>• Penundaan tergantung ketersediaan dokter</li>
                      <li>• Pembatalan mendadak dapat dikenakan biaya administrasi</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Jam Operasional:</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Senin - Jumat:</strong> 08:00 - 20:00</p>
                      <p><strong>Sabtu:</strong> 08:00 - 18:00</p>
                    </div>
                    <div>
                      <p><strong>Minggu:</strong> 09:00 - 15:00</p>
                      <p><strong>Libur Nasional:</strong> 09:00 - 12:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Payment */}
            <section className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FileText className="w-6 h-6 mr-3 text-blue-600" />
                Kebijakan Pembayaran
              </h2>
              <div className="space-y-4 text-gray-600">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Metode Pembayaran</h3>
                      <p className="text-sm">Kami menerima pembayaran tunai, transfer bank, dan kartu debit/kredit (jika tersedia).</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Asuransi</h3>
                      <p className="text-sm">Kami bekerja sama dengan beberapa provider asuransi. Harap konfirmasi coverage sebelum konsultasi.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Pembayaran di Tempat</h3>
                      <p className="text-sm">Pembayaran harus dilunasi setelah menerima layanan medis.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">Informasi Biaya</h4>
                  <p className="text-sm text-yellow-700">
                    Daftar biaya layanan tersedia di lokasi klinik. Harga dapat berubah tanpa pemberitahuan terlebih dahulu.
                  </p>
                </div>
              </div>
            </section>

            {/* Medical Records */}
            <section className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-blue-600" />
                Rekam Medis dan Privasi
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Rekam medis pasien dilindungi oleh hukum dan kebijakan privasi kami:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Rekam medis disimpan dengan aman dan rahasia</li>
                  <li>Informasi hanya dapat diakses oleh staf medis yang berwenang</li>
                  <li>Pasien berhak mendapatkan salinan rekam medisnya</li>
                  <li>Informasi medis tidak akan dibagikan tanpa persetujuan tertulis pasien</li>
                  <li>Pengecualian berlaku untuk keadaan darurat atau kewajiban hukum</li>
                </ul>
              </div>
            </section>

            {/* Liability */}
            <section className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <AlertTriangle className="w-6 h-6 mr-3 text-blue-600" />
                Batasan Tanggung Jawab
              </h2>
              <div className="space-y-4 text-gray-600">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2">Penting Diperhatikan:</h4>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Klinik tidak bertanggung jawab atas komplikasi yang tidak terduga</li>
                    <li>• Pasien bertanggung jawab atas keputusan medis yang dibuat</li>
                    <li>• Klinik tidak bertanggung jawab atas kehilangan barang pribadi</li>
                    <li>• Layanan kami bersifat konsultatif dan bukan pengganti diagnosis rumah sakit</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Mail className="w-6 h-6 mr-3" />
                Hubungi Kami
              </h2>
              <div className="space-y-4">
                <p>
                  Untuk pertanyaan tentang syarat dan ketentuan kami, silakan hubungi:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Informasi Kontak:</h3>
                    <p><strong>PT SHALIMA SEHAT SEJAHTERA</strong></p>
                    <p>Jalan Kapten Pierre Tendean</p>
                    <p>Tanah Grogot, Kabupaten Paser</p>
                    <p>Kalimantan Timur</p>
                    <div className="flex items-center space-x-4 mt-3">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4" />
                        <span>085285703515</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4" />
                        <span>info@shalimasehatsejahtera.com</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Jam Operasional:</h3>
                    <p>Senin - Jumat: 08:00 - 20:00</p>
                    <p>Sabtu: 08:00 - 18:00</p>
                    <p>Minggu: 09:00 - 15:00</p>
                    <p className="mt-4 text-sm bg-white/20 p-3 rounded">
                      Pertanyaan hukum dapat ditujukan ke legal@shalimasehatsejahtera.com
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Changes */}
            <section className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Perubahan Syarat dan Ketentuan</h3>
              <p className="text-yellow-700 text-sm">
                <strong>PT SHALIMA SEHAT SEJAHTERA</strong> berhak mengubah syarat dan ketentuan ini kapan saja. Perubahan akan berlaku efektif segera setelah dipublikasikan di website kami. Penggunaan layanan kami setelah perubahan constitutes acceptance dari syarat yang telah diperbarui.
              </p>
            </section>
          </div>

          {/* Back Button */}
          <div className="text-center mt-12">
            <Link 
              href="/" 
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
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
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Gavel className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-bold">PT SHALIMA SEHAT SEJAHTERA</h3>
          </div>
          <p className="text-gray-400 text-sm">
            &copy; 2024 PT SHALIMA SEHAT SEJAHTERA. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <Link href="/" className="text-gray-400 hover:text-blue-400 transition-colors">Beranda</Link>
            <Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}