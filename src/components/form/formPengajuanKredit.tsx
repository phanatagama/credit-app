
import React, { useState } from 'react';

const FormPengajuanKredit = () => {
    const [formData, setFormData] = useState({
      name: "",
      nik: "",
      contact: "",
      idCardImage: null,
      spkImage: null,
      buktiBayarImage: null,
      tanggal: "",
      merkKendaraan: "",
      modelKendaraan: "",
      tipeKendaraan: "",
      hargaKendaraan: "",
      pilihanAsuransi: "",
      pilihanDownPayment: "",
      lamaKredit: "",
      angsuran: "",
    });

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value,
    //     });
    // };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, files } = e.target;
        if (files && files.length > 0) {
            setFormData({
                ...formData,
                [name]: files[0],
            });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
    };

    

    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };

    return (
      <form
        onSubmit={handleSubmit}
        className="space-y-4 p-4 shadow-md rounded-md"
      >
        <h1 className='font-semibold text-2xl'>Data Konsumen</h1>
        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-left">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="p-2 border rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-left">NIK:</label>
          <input
            type="text"
            name="nik"
            value={formData.nik}
            onChange={handleChange}
            className="p-2 border rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-left">Tanggal:</label>
          <input
            type="date"
            name="tanggal"
            value={formData.tanggal}
            onChange={handleChange}
            className="p-2 border rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-left">Contact:</label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="p-2 border rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-left">ID Card Image:</label>
          <input
            type="file"
            name="idCardImage"
            onChange={handleFileChange}
            className="p-2 border rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-left">SPK Image:</label>
          <input
            type="file"
            name="spkImage"
            onChange={handleFileChange}
            className="p-2 border rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-left">
            Bukti Bayar Image:
          </label>
          <input
            type="file"
            name="buktiBayarImage"
            onChange={handleFileChange}
            className="p-2 border rounded-md"
          />
        </div>
        <h1 className='font-semibold text-2xl'>Data Kendaraan</h1>
        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-left">
            Merk Kendaraan:
          </label>
          <input
            type="text"
            name="merkKendaraan"
            value={formData.merkKendaraan}
            onChange={handleChange}
            className="p-2 border rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-left">
            Model Kendaraan:
          </label>
          <input
            type="text"
            name="modelKendaraan"
            value={formData.modelKendaraan}
            onChange={handleChange}
            className="p-2 border rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-left">
            Tipe Kendaraan:
          </label>
          <input
            type="text"
            name="tipeKendaraan"
            value={formData.tipeKendaraan}
            onChange={handleChange}
            className="p-2 border rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-left">
            Harga Kendaraan:
          </label>
          <input
            type="text"
            name="hargaKendaraan"
            value={formData.hargaKendaraan}
            onChange={handleChange}
            className="p-2 border rounded-md"
          />
        </div>
        <h1 className='font-semibold text-2xl'>Data Pinjaman</h1>
        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-left">
            Pilihan Asuransi:
          </label>
          <select
            name="pilihanAsuransi"
            value={formData.pilihanAsuransi}
            onChange={handleChange}
            className="p-2 border rounded-md"
          >
            <option className='text-black' value="asuransi1">Asuransi 1</option>
            <option className='text-black' value="asuransi2">Asuransi 2</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-left">
            Pilihan Down Payment:
          </label>
          <input
            type="text"
            name="pilihanDownPayment"
            value={formData.pilihanDownPayment}
            onChange={handleChange}
            className="p-2 border rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-left">Lama Kredit(bulan):</label>
          <input
            type="text"
            name="lamaKredit"
            value={formData.lamaKredit}
            onChange={handleChange}
            className="p-2 border rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-left">Angsuran(bulan):</label>
          <input
            type="text"
            name="angsuran"
            value={formData.angsuran}
            onChange={handleChange}
            className="p-2 border rounded-md"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    );
        
};

export default FormPengajuanKredit;
