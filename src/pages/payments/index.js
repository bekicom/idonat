import Table from "../../components/table";

function Payment() {
  return (
    <div className="payment">
      <p className="title">To'lovlar</p>
      <Table
        title={["Ism", "To'lov summasi", "Agentlik to'lovi", "To'lov vaqti"]}
      />
    </div>
  );
}

export default Payment;
