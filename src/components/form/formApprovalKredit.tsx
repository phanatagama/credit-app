import React from 'react';

const FormApprovalKredit: React.FC = () => {
    const dummyData = {
        name: 'John Doe',
        nik: '1234567890123456',
        birthDate: '1990-01-01',
        ktpPhoto: 'https://randomuser.me/api/portraits/men/1.jpg',
        attachment: 'https://example.com/attachment.pdf'
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
                <button className="hover:cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                    Approve
                </button>
            </div>
        </div>
    );
};

export default FormApprovalKredit;