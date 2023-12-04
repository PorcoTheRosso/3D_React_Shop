import React from "react";
import "./style.css";

export const Desktop = () => {
  return (
    <div className="DESKTOP">
      <div className="div">
        <div className="overlap">
          <div className="overlap-group">
            <div className="PRODUCT-IMG">
              <div className="overlap-group-2">
                <img className="element" alt="Element" src="/img/05.png" />
                <img className="img" alt="Element" src="/img/03.png" />
                <img className="element-2" alt="Element" src="/img/08.png" />
              </div>
              <div className="overlap-2">
                <img className="element-3" alt="Element" src="/img/06.png" />
                <img className="element-4" alt="Element" src="/img/07.png" />
                <img className="element-5" alt="Element" src="/img/09.png" />
              </div>
            </div>
            <img className="element-MODEL-VIEWER" alt="Element MODEL VIEWER" src="/img/3d-model-viewer.png" />
            <div className="BUTTON-BUY">
              <div className="button-text-wrapper">
                <div className="button-text">BUY</div>
              </div>
            </div>
            <div className="PRODUCT-PRICE">35$</div>
            <div className="NAVIGATION">
              <img className="icon-chevron-right" alt="Icon chevron right" src="/img/icon-chevron-right.png" />
              <img className="icon-chevron-left" alt="Icon chevron left" src="/img/icon-chevron-left.png" />
            </div>
            <div className="PRODUCT-NAME-TAG">
              <div className="PRODUCT-NAME-wrapper">
                <div className="PRODUCT-NAME">EARPOD CASE SPIKEY</div>
              </div>
            </div>
            <img className="logo-asset" alt="Logo asset" src="/img/logo-asset-02.png" />
          </div>
          <div className="text-wrapper">PRIVACY POLICE</div>
        </div>
        <div className="HEADER">
          <div className="overlap-group-wrapper">
            <div className="overlap-group-3">
              <div className="header" />
              <div className="text-wrapper-2">EMOTIONAL INVENTORY</div>
              <div className="text-wrapper-3">TRACK SHIPPING</div>
              <div className="icon-cart">
                <img className="vector" alt="Vector" src="/img/vector.svg" />
              </div>
              <img className="logo-asset-2" alt="Logo asset" src="/img/logo-asset-01.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
