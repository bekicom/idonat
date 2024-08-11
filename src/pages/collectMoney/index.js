import "./style.css";
function CollectMoney() {
  return (
    <div>
      <p className="title">Yangi</p>
      <form className="form">
        <label className="label">nomi</label>
        <input type="text" placeholder="Nomi" />
        <label className="label">Ko'zlangan summa</label>
        <input type="number" min={1} placeholder="Ko'zlangan summa" />
        <label className="label">yig'ilgan summa</label>
        <input type="number" min={1} placeholder="Yig'ilgan summa" />
        <label className="custom_checkbox">
          <input className="checkbox" type="checkbox" />
          <span className="checkmark">Summani ko'rsatish</span>
        </label>
        <button className="btn btn_success" type="submit">
          Saqlash
        </button>
      </form>
    </div>
  );
}

export default CollectMoney;
