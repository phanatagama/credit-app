import React from 'react';

const FormApprovalKredit: React.FC = () => {
    const dummyData = {
      name: "John Doe",
      nik: "1234567890123456",
      birthDate: "1990-01-01",
      ktpPhoto:
        "https://www.beritariau.com/foto_berita/2022/05/2022-05-23-aturan-baru-buat-ktp-nama-maksimal-60-huruf-termasuk-spasi.b686f703",
      attachment: "https://example.com/attachment.pdf",
      vehicle: {
        brand: "Toyota",
        model: "Avanza",
        type: "MPV",
        color: "Black",
        price: "200,000,000",
      },
      loan: {
        insuranceType: "Comprehensive",
        downPayment: "50,000,000",
        creditDuration: "5 bulan",
        installmentPeriod: "10 bulan",
      },
    };

    return (
        <div className="max-w-sm mx-auto bg-gray-700 shadow-lg rounded-lg overflow-hidden mt-10">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Data Pengajuan Kredit</div>
                <p className="text-white text-left text-base">
                    <strong>Nama:</strong> {dummyData.name}
                </p>
                <p className="text-white text-left text-base">
                    <strong>NIK:</strong> {dummyData.nik}
                </p>
                <p className="text-white text-left text-base">
                    <strong>Tanggal Lahir:</strong> {dummyData.birthDate}
                </p>
                <div className="text-left">
                    <strong>Foto KTP:</strong>
                    <img src={dummyData.ktpPhoto} alt="Foto KTP" className="w-full h-48 object-cover mt-2" />
                </div>
                <div className="my-4 text-left">
                    <strong>SPK Document:</strong>
                    <a href={dummyData.attachment} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                        Download Attachment
                    </a>
                </div>
                <div className="my-4 text-left">
                    <strong>Bukti Pembayaran:</strong>
                    <a href={dummyData.attachment} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                        Download Attachment
                    </a>
                </div>
                <div className="text-white text-left text-base">
                    <strong>Merk Kendaraan:</strong> {dummyData.vehicle.brand}
                </div>
                <div className="text-white text-left text-base">
                    <strong>Model Kendaraan:</strong> {dummyData.vehicle.model}
                </div>
                <div className="text-white text-left text-base">
                    <strong>Tipe Kendaraan:</strong> {dummyData.vehicle.type}
                </div>
                <div className="text-white text-left text-base">
                    <strong>Warna Kendaraan:</strong> {dummyData.vehicle.color}
                </div>
                <div className="text-white text-left text-base">
                    <strong>Harga Kendaraan:</strong> {dummyData.vehicle.price}
                </div>
                <div className="text-white text-left text-base">
                    <strong>Tipe Asuransi:</strong> {dummyData.loan.insuranceType}
                </div>
                <div className="text-white text-left text-base">
                    <strong>Down Payment:</strong> {dummyData.loan.downPayment}
                </div>
                <div className="text-white text-left text-base">
                    <strong>Lama Kredit:</strong> {dummyData.loan.creditDuration}
                </div>
                <div className="text-white text-left text-base">
                    <strong>Lama Angsuran:</strong> {dummyData.loan.installmentPeriod}
                </div>
                <button className="hover:cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                    Approve
                </button>
            </div>
        </div>
    );
};

export default FormApprovalKredit;
