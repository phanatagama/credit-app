import React, { useState } from "react";

const FormUnggahDokumen: React.FC = () => {
  const [selectedApp, setSelectedApp] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleAppChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedApp(event.target.value);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Selected App:", selectedApp);
    console.log("Selected File:", file);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-4 shadow-md rounded"
    >
      <div className="mb-4">
        <label htmlFor="app" className="text-left block text-sm font-bold mb-2">
          Pilih Aplikasi Pengajuan Kredit
        </label>
        <select
          id="app"
          value={selectedApp}
          onChange={handleAppChange}
          className="block appearance-none w-full  border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          <option className="text-blue-400" value="app1">
            Aplikasi 1 - Kredit John
          </option>
          <option className="text-blue-400" value="app2">
            Aplikasi 2 - Kredit Alisa
          </option>
          <option className="text-blue-400" value="app3">
            Aplikasi 3 - Kredit Andi
          </option>
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="file"
          className="block text-left text-sm font-bold mb-2"
        >
          Unggah Dokumen
        </label>
        <input
          type="file"
          id="file"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-sm cursor-pointer bg-gray-50 focus:outline-none"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormUnggahDokumen;
