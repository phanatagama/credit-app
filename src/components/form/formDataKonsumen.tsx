
import React, { useState } from 'react';
const FormDataKonsumen = () => {
    const [formData, setFormData] = useState({
        name: "",
        nik: "",
        contact: "",
        idCardImage: null,
        spkImage: null,
        buktiBayarImage: null,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

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

    return (
        <form onSubmit={handleSubmit} className="space-y-4 p-4  shadow-md rounded-md">
            <div className="flex flex-col">
                <label className="mb-2 font-semibold text-left">Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="p-2 border rounded-md" />
            </div>
            <div className="flex flex-col">
                <label className="mb-2 font-semibold text-left">NIK:</label>
                <input type="nik" name="nik" value={formData.nik} onChange={handleChange} className="p-2 border rounded-md" />
            </div>
            <div className="flex flex-col">
                <label className="mb-2 font-semibold text-left">Contact:</label>
                <input type="contact" name="contact" value={formData.contact} onChange={handleChange} className="p-2 border rounded-md" />
            </div>
            <div className="flex flex-col">
                <label className="mb-2 font-semibold text-left">ID Card Image:</label>
                <input type="file" name="idCardImage" onChange={handleFileChange} className="p-2 border rounded-md" />
            </div>
            <div className="flex flex-col">
                <label className="mb-2 font-semibold text-left">SPK Image:</label>
                <input type="file" name="spkImage" onChange={handleFileChange} className="p-2 border rounded-md" />
            </div>
            <div className="flex flex-col">
                <label className="mb-2 font-semibold text-left">Bukti Bayar Image:</label>
                <input type="file" name="buktiBayarImage" onChange={handleFileChange} className="p-2 border rounded-md" />
            </div>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Submit</button>
        </form>
    );
        
};

export default FormDataKonsumen;
