import { useGetHistoryWithMsg } from "../../context/service/history.service";

function Messages() {
  const { data = null } = useGetHistoryWithMsg()
  return (
    <div>
      <p className="title">Xabarlar paneli</p>
    </div>
  );
}

export default Messages;
