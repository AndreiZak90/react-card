import "./App.css";
import Modal from "./components/Modal";

function App() {
  const inner = [
    {
      img: "../image/1.png",
      text1:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum rerum sequi quos molestias voluptatem sed.",
      text2:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum rerum sequi quos molestias voluptatem sed.",
      btnText: "Button",
    },
    {
      img: "../image/2.jpg",
      text1: "  adipisicing elit. Voluptatum rerum sequi .",
      text2:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum rerum sequi quos molestias voluptatem sed.",
      btnText: "Button",
    },
    {
      text1: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      text2: " Voluptatum rerum sequi quos molestias voluptatem sed.",
      btnText: "Button",
    },
  ];
  return (
    <>
      <Modal image={inner[0].img}>
        <div className="box_text">
          <p className="box_text_text">{inner[0].text1}</p>
          <p className="box_text_text">{inner[0].text2}</p>
        </div>

        <button className="card_btn">{inner[0].btnText}</button>
      </Modal>

      <Modal image={inner[1].img}>
        <div className="box_text">
          <p className="box_text_text">{inner[1].text1}</p>
          <p className="box_text_text">{inner[1].text2}</p>
        </div>

        <button className="card_btn">{inner[1].btnText}</button>
      </Modal>

      <Modal>
        <div className="box_text">
          <p className="box_text_text">{inner[2].text1}</p>
          <p className="box_text_text">{inner[2].text2}</p>
        </div>

        <button className="card_btn">{inner[2].btnText}</button>
      </Modal>
    </>
  );
}

export default App;
