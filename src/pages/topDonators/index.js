import { Table } from "../../components";
import { useGetTopDonations } from "../../context/service/topdonations.service";

function TopDonators() {
  // const { data = null } = useGetTopDonations();

  return (
    <div>
      <p className="title">Top donaterlar</p>
      <Table
        title={["Ismi", "To'lagan summa"]}
        data={[{ ism: "Guli", tolov: "5000" }]}
      />
    </div>
  );
}

export default TopDonators;
