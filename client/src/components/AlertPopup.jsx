import { useNavigate } from "react-router-dom";

const AlertPopup = ({message, setShow, deleteUser}) => {
  const navigate = useNavigate()
  const cancelBtn = () => {
    setShow(false);
  };
  const confirmBtn = () => {
    deleteUser();
    navigate("/");
    setShow(false);
   };
  return (
    <div className="alert-popup">
      <div className="alert-popup__content">
        <h2>Alert</h2>
        <p>{message}</p>
        <div className="alert-popup__buttons">
          <button onClick={cancelBtn} className="alert-popup__button alert-popup__cancel">
            No
          </button>
          <button onClick={confirmBtn} className="alert-popup__button alert-popup__confirm">
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertPopup;
