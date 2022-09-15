import React from "react";

export default function PostOwner(props) {
  return (
    <div className="vstack gap-3">
      <div className="d-flex align-items-center gap-3">
        <img
          src="/profileImages/pepeTheFrog.jpeg"
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <span className="fw-semibold fs-5">Phanthant Muenprap 640610652</span>
      </div>
      <span>Quiz ทำไม่ทันค้าบบบ T T #261207</span>
      <div className="d-flex align-items-center gap-1">
        <img src="/sad.png" width={20}></img>
        <span className="text-muted">100 คน</span>
      </div>
      <hr className="m-0" />
    </div>
  );
}
