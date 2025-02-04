import React from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

interface Konsumen {
    nama: string;
    nik: string;
    dokumenPengajuan: string;
    statusPencairan: boolean;
    keterangan: string;
}

const dataKonsumen: Konsumen[] = [
    { nama: 'John Doe', nik: '1234567890', dokumenPengajuan: 'dokumen1.pdf', statusPencairan: true , keterangan: "-"},
    { nama: 'Jane Smith', nik: '0987654321', dokumenPengajuan: 'dokumen2.pdf', statusPencairan: false , keterangan: "tidak valid"},
    // Tambahkan data konsumen lainnya di sini
];

const TablePencairanDana: React.FC = () => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200">
                <thead>
                    <tr>
                        <th className="px-4 py-2 border-b">No</th>
                        <th className="px-4 py-2 border-b">Nama</th>
                        <th className="px-4 py-2 border-b">NIK</th>
                        <th className="px-4 py-2 border-b">Dokumen Pengajuan</th>
                        <th className="px-4 py-2 border-b">Status Pencairan</th>
                        <th className="px-4 py-2 border-b">Keterangan</th>
                    </tr>
                </thead>
                <tbody>
                    {dataKonsumen.map((konsumen, index) => (
                        <tr key={index} className="hover:bg-gray-700">
                            <td className="px-4 py-2 border-b">{index+1}</td>
                            <td className="px-4 py-2 border-b">{konsumen.nama}</td>
                            <td className="px-4 py-2 border-b">{konsumen.nik}</td>
                            <td className="px-4 py-2 border-b">
                                <a
                                    href={`/path/to/documents/${konsumen.dokumenPengajuan}`}
                                    download
                                    className="text-blue-500 hover:underline"
                                >
                                    Download
                                </a>
                            </td>
                            <td className="px-4 py-2 border-b text-center">
                                {konsumen.statusPencairan ? (
                                    <FaCheckCircle className="text-green-500 inline-block" />
                                ) : (
                                    <FaTimesCircle className="text-red-500 inline-block" />
                                )}
                            </td>
                                <td className="px-4 py-2 border-b">{konsumen.keterangan}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TablePencairanDana;