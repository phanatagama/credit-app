import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

interface DataProcess {
    id: number;
    name: string;
    details: string;
}

const processes: DataProcess[] = [
    { id: 1, name: 'Info Pengajuan Kredit', details: 'Masukkan data KTP, KK dan Bukti Bayar' },
    { id: 2, name: 'Pengajuan Data Kredit', details: 'Masukkan data konsumen yang dibutuhkan untuk pengajuan' },
    { id: 3, name: 'Approval Pengajuan', details: 'Menunggu Persetujuan Head of Marketing' },
    { id: 4, name: 'Cetak Dokumen', details: 'Cetak Dokumen oleh Admin Back Office' },
    { id: 5, name: 'Unggah Dokumen', details: 'Silahkan masukkan dokumen yang telah ditandan tangani konsumen' },
    { id: 6, name: 'Pencariran Dana', details: 'Pencairan dana akan diproses dalam 5 Hari Kerja setelah dokumen diunggah' },

];

const Progres: React.FC = () => {
    const [selectedProcess, setSelectedProcess] = useState<DataProcess | null>(null);

    const handleClick = (process: DataProcess) => {
        setSelectedProcess(process);
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Aplikasi Pengajuan Kredit</h1>
            <ul className="flex space-x-4 justify-center">
                {processes.map((process) => (
                    <li key={process.id} onClick={() => handleClick(process)} className="cursor-pointer text-center flex items-center flex-col">
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white mb-2">
                            <FaCheckCircle />
                        </div>
                        <span>{process.name}</span>
                    </li>
                ))}
            </ul>
            {selectedProcess && (
                <div className="mt-4 p-4 border rounded shadow">
                    <h2 className="text-xl font-semibold">{selectedProcess.name}</h2>
                    <p>{selectedProcess.details}</p>
                </div>
            )}
        </div>
    );
};

export default Progres;