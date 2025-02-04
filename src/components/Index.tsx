import { Header } from "@components/header";
import Progres from "@components/progres";
import Banner from "@components/banner";
// import DataUserForm from "@components/form/dataUser";
export const MyApp = () => {
  return (
    <div>
      <Header />
      <Banner/>
      {/* <DataUserForm /> */}
      <Progres />
    </div>
  );
};
