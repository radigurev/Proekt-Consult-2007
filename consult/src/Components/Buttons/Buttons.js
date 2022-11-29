import "./Buttons.css";

import Button from "./Button/Button";

function Buttons(props) {

  function move(type) {
    props.moveAnimate(type);
  }

  return (
    <div id="main-nav" className="col-md-3">
      <div className="row">
        <Button time='1000' type='projects' moveAnimate={move} icon="fa-building fa-regular" text="Проекти" />
        <Button time='1900' type='us' moveAnimate={move} icon="fa-info fa-solid" text="За нас" />
      </div>

      <div className="row">
        <Button time='1300' type='contact' icon="fa-envelope fa-regular" moveAnimate={move} text="Свържи се с нас" />
        <Button time='1600' type='location' moveAnimate={move} icon="fa-handshake fa-solid" text="Услуги" />
      </div>
    </div>
  );
}

export default Buttons;
