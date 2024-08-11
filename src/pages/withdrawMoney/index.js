import "./style.css";
import {Table} from "../../components";
function WithdrawMoney() {
  return (
    <div className="withdrawMoney">
      <p className="title">Pul yechish</p>
      <form className="form">
        <label className="label">Karta raqami</label>
        <input type="number" min={1} placeholder="Karta raqami" />
        <label className="label">Summa</label>
        <input type="number" min={1} placeholder="Summa" />
        <button className="btn btn_success" type="submit">
          Yechib olish
        </button>
      </form>
      <p className="title">oxirgi to'lovlar</p>
      <Table
        title={[
          "Summa",
          "xizmat haqqi",
          "jami",
          "foiz",
          "pul yechgandan keyingi balans",
          "pul yechishdan avvalgi balans",
          "karta raqami",
          "status",
          "amal",
        ]}
        data={[
          {
            summa: 100,
            haq: 4677,
            jami: 20,
            foiz: "50%",
            balans: 20,
            after: 40,
            raqam: "",
            status: 200,
            amal: "",
          },
          {
            summa: 100,
            haq: 4677,
            jami: 20,
            foiz: "50%",
            balans: 20,
            after: 40,
            raqam: "",
            status: 200,
            amal: "",
          },
          {
            summa: 100,
            haq: 4677,
            jami: 20,
            foiz: "50%",
            balans: 20,
            after: 40,
            raqam: "",
            status: 200,
            amal: "",
          },
          {
            summa: 100,
            haq: 4677,
            jami: 20,
            foiz: "50%",
            balans: 20,
            after: 40,
            raqam: "",
            status: 200,
            amal: "",
          },
          {
            summa: 100,
            haq: 4677,
            jami: 20,
            foiz: "50%",
            balans: 20,
            after: 40,
            raqam: "",
            status: 200,
            amal: "",
          },
          {
            summa: 100,
            haq: 4677,
            jami: 20,
            foiz: "50%",
            balans: 20,
            after: 40,
            raqam: "",
            status: 200,
            amal: "",
          },
          {
            summa: 100,
            haq: 4677,
            jami: 20,
            foiz: "50%",
            balans: 20,
            after: 40,
            raqam: "",
            status: 200,
            amal: "",
          },
        ]}
      />
    </div>
  );
}

export default WithdrawMoney;
