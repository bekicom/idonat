import {Table} from "../../components";

function TopDonators() {
  return (
    <div>
      <p className="title">Top donaterlar</p>
      <Table
        title={["Ismi", "To'lagan summa"]}
        data={[{ ism: "Guli", tolov: "" }]}
      />
    </div>
  );
}

export default TopDonators;
