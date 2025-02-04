export default function Banner() {
  return (
    <div className="flex align-middle space-x-20 my-8">
      <img
        className="hidden md:block md:w-100 xl:w-150"
        src="https://bcafinance.co.id/Media/Default/Images/image-syarat-kredit-1.png"
        alt="Gambar pengajuan kredit"
      />
      <div className="text-4xl font-bold  my-auto">
        <h3>Ajukan kredit sekarang</h3>
        <h3 className="font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500">
          Tanpa Ribet
        </h3>
      </div>
    </div>
  );
}
