import React from "react";
import "./side.scss";

const Side = () => {
  return (
    <div className="side">
      <div className="person">
        <div className="person__name">Честный агент</div>
        <div className="person__post">Менеджер процесса</div>
      </div>
      <nav className="list">
        <a href="/" className="list__item">
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.5 15.6667H19.1667V17.3333H0.833374V15.6667H2.50004V1.49999C2.50004 1.27898 2.58784 1.06701 2.74412 0.910734C2.9004 0.754454 3.11236 0.666656 3.33337 0.666656H16.6667C16.8877 0.666656 17.0997 0.754454 17.256 0.910734C17.4122 1.06701 17.5 1.27898 17.5 1.49999V15.6667ZM15.8334 15.6667V2.33332H4.16671V15.6667H15.8334ZM6.66671 8.16666H9.16671V9.83332H6.66671V8.16666ZM6.66671 4.83332H9.16671V6.49999H6.66671V4.83332ZM6.66671 11.5H9.16671V13.1667H6.66671V11.5ZM10.8334 11.5H13.3334V13.1667H10.8334V11.5ZM10.8334 8.16666H13.3334V9.83332H10.8334V8.16666ZM10.8334 4.83332H13.3334V6.49999H10.8334V4.83332Z"
              fill="#82B284"
            />
          </svg>
          Организации
        </a>
      </nav>
    </div>
  );
};

export default Side;
