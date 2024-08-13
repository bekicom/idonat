import "./style.css";
function DonatPage() {
  return (
    <div>
      <p className="title">Donat sahifasi</p>
      <form className="form">
        <>Donat uchun havola</>
        <input type="text" placeholder="https://idonate.uz/d/test_admin" />
        <label>Minimal summa</label>
        <input type="number" placeholder="1000" min={1000} />
        <button type="submit" className="btn btn_success">
          Saqlash
        </button>
      </form>
      <form className="form">
        <label className="label">Donat sahifa matni</label>
        <textarea rows={4}>
          Donat qilib sevimli strimer yoki ijodkoringizni qo'llab quvvatlang!
        </textarea>
        <label className="label">Donat knopka matni</label>
        <input type="text" placeholder="Donat qilish" />
        <button type="submit" className="btn btn_success">
          Saqlashƒ
        </button>
      </form>
      <form className="form">
        <label className="label">Tugma rangi</label>
        <input type="color" value="#1E90FF" />
        <label className="label">Tugmadagi matn rangi</label>
        <input type="color" value="#ffffff" />
        <label className="label">Fon rangi</label>
        <input style={{ height: "50px" }} type="color" value="#000" />
        <button type="submit" className="btn btn_success">
          Saqlash
        </button>
      </form>
    </div>
  );
}

export default DonatPage;
