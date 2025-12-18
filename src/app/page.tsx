'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail, MapPin, Clock, Heart, Shield, Users, Stethoscope, ChevronRight } from 'lucide-react';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">PT SHALIMA SEHAT SEJAHTERA</h1>
                <p className="text-sm text-emerald-600 font-medium">Klinik Swasta Terpercaya</p>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">Beranda</Link>
              <Link href="/privacy" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">Terms & Conditions</Link>
            </nav>

            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-3">
                <Link href="/" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">Beranda</Link>
                <Link href="/privacy" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">Terms & Conditions</Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-6">
                <Shield className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Layanan Kesehatan Terpercaya</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="text-emerald-600">PT SHALIMA SEHAT SEJAHTERA</span>
                <br />
                Mitra Kesehatan Keluarga Anda
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Klinik swasta yang berkomitmen memberikan pelayanan kesehatan berkualitas dengan sentuhan kepedulian dan profesionalisme. Kami hadir untuk menjadi mitra kesehatan terpercaya bagi Anda dan keluarga.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Hubungi Kami
                </button>
                <button className="border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg font-medium hover:bg-emerald-50 transition-colors">
                  Lihat Layanan
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/logo.png" 
                  alt="PT SHALIMA SEHAT SEJAHTERA Logo" 
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center">
                <Stethoscope className="w-12 h-12 text-emerald-600" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                <Heart className="w-10 h-10 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Mengapa Memilih Kami</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              <strong>PT SHALIMA SEHAT SEJAHTERA</strong> menyediakan layanan kesehatan terbaik dengan tenaga medis profesional dan fasilitas modern.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Tenaga Medis Profesional</h4>
              <p className="text-gray-600 leading-relaxed">
                Dokter dan perawat berpengalaman yang siap memberikan pelayanan kesehatan terbaik untuk Anda dan keluarga.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Layanan Berkualitas</h4>
              <p className="text-gray-600 leading-relaxed">
                Standar pelayanan kesehatan tinggi dengan peralatan medis modern dan teknologi terkini.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Jam Operasional Fleksibel</h4>
              <p className="text-gray-600 leading-relaxed">
                Jam operasional yang disesuaikan untuk memudahkan Anda mendapatkan pelayanan kesehatan kapan saja.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Hubungi <span className="text-yellow-300">PT SHALIMA SEHAT SEJAHTERA</span></h3>
              <p className="text-lg mb-8 text-emerald-50">
                Kami siap membantu kebutuhan kesehatan Anda. Jangan ragu untuk menghubungi kami untuk informasi lebih lanjut.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Alamat</p>
                    <p className="text-emerald-100">JALAN KAPTEN PIERE TENDEAN, Desa/Kelurahan Tanah Grogot, Kec.Tanah Grogot, Kab. Paser, Provinsi Kalimantan Timur</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Telepon</p>
                    <p className="text-emerald-100">085285703515</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-emerald-100">info@shalimasehatsejahtera.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <h4 className="text-2xl font-bold mb-6">Kirim Pesan</h4>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nama Lengkap</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-emerald-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-emerald-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Pesan</label>
                  <textarea 
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-emerald-200 focus:outline-none focus:ring-2 focus:ring-white/50 h-32 resize-none"
                    placeholder="Tulis pesan Anda..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-white text-emerald-600 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors flex items-center justify-center"
                >
                  Kirim Pesan
                  <ChevronRight className="w-5 h-5 ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">PT SHALIMA SEHAT SEJAHTERA</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Klinik swasta terpercaya yang berkomitmen memberikan pelayanan kesehatan berkualitas dengan sentuhan kepedulian dan profesionalisme.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                  <Mail className="w-5 h-5" />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-emerald-400 transition-colors">Konsultasi Dokter</Link></li>
                <li><Link href="#" className="hover:text-emerald-400 transition-colors">Pemeriksaan Lab</Link></li>
                <li><Link href="#" className="hover:text-emerald-400 transition-colors">Vaksinasi</Link></li>
                <li><Link href="#" className="hover:text-emerald-400 transition-colors">Kesehatan Anak</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Informasi</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/privacy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-emerald-400 transition-colors">Terms & Conditions</Link></li>
                <li><Link href="#" className="hover:text-emerald-400 transition-colors">Karir</Link></li>
                <li><Link href="#" className="hover:text-emerald-400 transition-colors">Blog</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PT SHALIMA SEHAT SEJAHTERA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}