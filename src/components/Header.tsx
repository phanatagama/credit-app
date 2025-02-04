export const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-between p-4 text-white">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/BCA_Finance.svg/2560px-BCA_Finance.svg.png"
          alt="Logo"
          style={{ height: "40px", marginRight: "10px" }}
        />
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <a href="/" className="hover:underline">
              🟢 Online
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
