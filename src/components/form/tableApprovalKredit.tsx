import React from "react";

const TableApprovalKredit: React.FC = () => {
  const data = [
    {
      namaDokumen: "Dokumen A",
      tanggalPengajuan: "2023-01-01",
      tanggalApproval: "2023-01-05",
      statusPersetujuan: "Disetujui",
    },
    {
      namaDokumen: "Dokumen B",
      tanggalPengajuan: "2023-02-01",
      tanggalApproval: "2023-02-05",
      statusPersetujuan: "Ditolak",
    },
    // Add more data as needed
  ];

  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full  border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Nama Dokumen</th>
            <th className="py-2 px-4 border-b">Tanggal Pengajuan</th>
            <th className="py-2 px-4 border-b">Tanggal Approval</th>
            <th className="py-2 px-4 border-b">Status Persetujuan</th>
            <th className="py-2 px-4 border-b">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{item.namaDokumen}</td>
              <td className="py-2 px-4 border-b">{item.tanggalPengajuan}</td>
              <td className="py-2 px-4 border-b">{item.tanggalApproval}</td>
              <td className="py-2 px-4 border-b">{item.statusPersetujuan}</td>
              <td className="py-2 px-4 border-b">
                <button className="bg-blue-500 text-white py-1 px-2 rounded mr-2">
                  Cetak
                </button>
                <button className="bg-green-500 text-white py-1 px-2 rounded">
                  Unduh
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableApprovalKredit;
