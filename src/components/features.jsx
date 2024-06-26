import React from "react";

export const Features = (props) => {
  return (
    
    <div id="features">
      <div className="container">
        <div className="section-title">
          <h2>Productos</h2>
        </div>
        <div className="row">
          {props.data? props.data.map((d, i) => (
                <div key={`${d.text}-${i}`} className="col-md-3">
                  <div className="features">
                    <div className="features-image">
                      {" "}
                      <img src={d.img} alt="" />{" "}
                    </div>
                    <div className="features-content">
                    <h3 className="features-name">{d.name}</h3>
                    <p className="features-meta">{d.text}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}     
        </div>
      </div>
      <button className="btn coffee"> Comprar </button>
      <button className="btn milkshake"> Comprar </button>
      <button className="btn soda"> Comprar </button>
      <button className="btn energy"> Comprar </button>
    </div>
  );
};
