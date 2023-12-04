import React from "react";
import { useWindowWidth } from "../../breakpoints";
import "./style.css";

export const Desktop = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="DESKTOP">
      <div
        className="iphone"
        style={{
          height:
            screenWidth < 834
              ? "852px"
              : screenWidth >= 834 && screenWidth < 1440
              ? "1194px"
              : screenWidth >= 1440
              ? "1024px"
              : undefined,
          width:
            screenWidth < 834
              ? "393px"
              : screenWidth >= 834 && screenWidth < 1440
              ? "834px"
              : screenWidth >= 1440
              ? "1440px"
              : undefined,
        }}
      >
        <div
          className="overlap"
          style={{
            height:
              screenWidth < 834
                ? "799px"
                : screenWidth >= 834 && screenWidth < 1440
                ? "1170px"
                : screenWidth >= 1440
                ? "983px"
                : undefined,
            left:
              screenWidth < 834
                ? "-20px"
                : screenWidth >= 834 && screenWidth < 1440
                ? "0"
                : screenWidth >= 1440
                ? "1px"
                : undefined,
            width:
              screenWidth < 834
                ? "487px"
                : screenWidth >= 834 && screenWidth < 1440
                ? "954px"
                : screenWidth >= 1440
                ? "1525px"
                : undefined,
          }}
        >
          <div
            className="PRODUCT-IMG"
            style={{
              height:
                screenWidth >= 834 && screenWidth < 1440
                  ? "307px"
                  : screenWidth < 834
                  ? "385px"
                  : screenWidth >= 1440
                  ? "983px"
                  : undefined,
              top:
                screenWidth >= 834 && screenWidth < 1440
                  ? "661px"
                  : screenWidth < 834
                  ? "414px"
                  : screenWidth >= 1440
                  ? "0"
                  : undefined,
              width:
                screenWidth >= 834 && screenWidth < 1440
                  ? "836px"
                  : screenWidth < 834
                  ? "487px"
                  : screenWidth >= 1440
                  ? "1525px"
                  : undefined,
            }}
          >
            {(screenWidth >= 1440 || screenWidth < 834) && (
              <div
                className="div"
                style={{
                  height: screenWidth < 834 ? "351px" : screenWidth >= 1440 ? "414px" : undefined,
                  top: screenWidth < 834 ? "0" : screenWidth >= 1440 ? "551px" : undefined,
                  width: screenWidth < 834 ? "433px" : screenWidth >= 1440 ? "1440px" : undefined,
                }}
              >
                {screenWidth < 834 && (
                  <div className="overlap-group">
                    <img
                      className="element"
                      alt="Element"
                      src="/img/06.png"
                    />
                    <img
                      className="img"
                      alt="Element"
                      src="/img/05.png"
                    />
                    <img
                      className="element-2"
                      alt="Element"
                      src="/img/07.png"
                    />
                  </div>
                )}

                {screenWidth >= 1440 && (
                  <>
                    <div className="overlap-group-2">
                      <img
                        className="element-3"
                        alt="Element"
                        src="/img/05.png"
                      />
                      <img
                        className="element-4"
                        alt="Element"
                        src="/img/03.png"
                      />
                      <img
                        className="element-5"
                        alt="Element"
                        src="/img/08.png"
                      />
                    </div>
                    <div className="overlap-2">
                      <img
                        className="element-6"
                        alt="Element"
                        src="/img/06.png"
                      />
                      <img
                        className="element-7"
                        alt="Element"
                        src="/img/07.png"
                      />
                      <img
                        className="element-8"
                        alt="Element"
                        src="/img/09.png"
                      />
                    </div>
                  </>
                )}
              </div>
            )}

            <img
              className="logo-asset"
              style={{
                height:
                  screenWidth < 834
                    ? "300px"
                    : screenWidth >= 1440
                    ? "650px"
                    : screenWidth >= 834 && screenWidth < 1440
                    ? "307px"
                    : undefined,
                left:
                  screenWidth < 834
                    ? "187px"
                    : screenWidth >= 1440
                    ? "394px"
                    : screenWidth >= 834 && screenWidth < 1440
                    ? "0"
                    : undefined,
                top:
                  screenWidth < 834
                    ? "85px"
                    : screenWidth >= 1440 || (screenWidth >= 834 && screenWidth < 1440)
                    ? "0"
                    : undefined,
                width:
                  (screenWidth >= 834 && screenWidth < 1440) || screenWidth < 834
                    ? "300px"
                    : screenWidth >= 1440
                    ? "650px"
                    : undefined,
              }}
              alt="Logo asset"
              src={
                screenWidth < 834
                  ? "/img/logo-asset-02.png"
                  : screenWidth >= 1440
                  ? "/img/3d-model-viewer.png"
                  : screenWidth >= 834 && screenWidth < 1440
                  ? "/img/06.png"
                  : undefined
              }
            />
            {screenWidth < 834 && (
              <>
                <div className="BUTTON-BUY">
                  <div className="button-text-wrapper">
                    <div className="button-text">BUY</div>
                  </div>
                </div>
                <div className="PRODUCT-PRICE">35$</div>
                <img
                  className="NAVIGATION"
                  alt="Navigation"
                  src="/img/icon-chevron-right.png"
                />
                <img
                  className="icon-chevron-left"
                  alt="Icon chevron left"
                  src="/img/icon-chevron-left.png"
                />
                <div className="PRODUCT-NAME-TAG">
                  <div className="PRODUCT-NAME-wrapper">
                    <div className="PRODUCT-NAME">EARPOD CASE SPIKEY</div>
                  </div>
                </div>
              </>
            )}

            {screenWidth >= 1440 && (
              <>
                <div className="overlap-wrapper">
                  <div className="div-wrapper">
                    <div className="text-wrapper">BUY</div>
                  </div>
                </div>
                <div className="PRODUCT-PRICE-2">35$</div>
                <div className="NAVIGATION-2">
                  <img
                    className="icon-chevron-right"
                    alt="Icon chevron right"
                    src="/img/icon-chevron-right.png"
                  />
                  <img
                    className="icon-chevron-left-2"
                    alt="Icon chevron left"
                    src="/img/icon-chevron-left.png"
                  />
                </div>
                <div className="overlap-group-wrapper">
                  <div className="overlap-3">
                    <div className="PRODUCT-NAME-2">EARPOD CASE SPIKEY</div>
                  </div>
                </div>
              </>
            )}

            {(screenWidth >= 1440 || (screenWidth >= 834 && screenWidth < 1440)) && (
              <img
                className="element-9"
                style={{
                  height:
                    screenWidth >= 834 && screenWidth < 1440 ? "307px" : screenWidth >= 1440 ? "400px" : undefined,
                  left: screenWidth >= 834 && screenWidth < 1440 ? "536px" : screenWidth >= 1440 ? "1125px" : undefined,
                  top: screenWidth >= 834 && screenWidth < 1440 ? "0" : screenWidth >= 1440 ? "583px" : undefined,
                  width: screenWidth >= 834 && screenWidth < 1440 ? "300px" : screenWidth >= 1440 ? "400px" : undefined,
                }}
                alt="Element"
                src={
                  screenWidth >= 834 && screenWidth < 1440
                    ? "/img/05.png"
                    : screenWidth >= 1440
                    ? "/img/logo-asset-02.png"
                    : undefined
                }
              />
            )}
          </div>
          {(screenWidth >= 1440 || screenWidth < 834) && (
            <div
              className="overlap-4"
              style={{
                color: screenWidth >= 1440 ? "#000000" : undefined,
                fontFamily: screenWidth >= 1440 ? "'Digital Numbers-Regular', Helvetica" : undefined,
                fontSize: screenWidth >= 1440 ? "20px" : undefined,
                fontWeight: screenWidth >= 1440 ? "400" : undefined,
                height: screenWidth < 834 ? "456px" : undefined,
                left: screenWidth < 834 ? "0" : screenWidth >= 1440 ? "1282px" : undefined,
                letterSpacing: screenWidth >= 1440 ? "0" : undefined,
                lineHeight: screenWidth >= 1440 ? "normal" : undefined,
                top: screenWidth < 834 ? "0" : screenWidth >= 1440 ? "442px" : undefined,
                transform: screenWidth >= 1440 ? "rotate(-90deg)" : undefined,
                width: screenWidth < 834 ? "429px" : screenWidth >= 1440 ? "277px" : undefined,
              }}
            >
              {screenWidth < 834 && (
                <>
                  <img
                    className="element-MODEL-VIEWER"
                    alt="Element MODEL VIEWER"
                    src="/img/3d-model-viewer.png"
                  />
                  <div className="text-wrapper-2">PRIVACY POLICE</div>
                </>
              )}

              {screenWidth >= 1440 && <>PRIVACY POLICE</>}
            </div>
          )}

          {screenWidth >= 834 && screenWidth < 1440 && (
            <>
              <img
                className="element-d-MODEL-VIEWER"
                alt="Element MODEL VIEWER"
                src="/img/3d-model-viewer.png"
              />
              <div className="BUTTON-BUY-2">
                <div className="overlap-group-3">
                  <div className="button-text-2">BUY</div>
                </div>
              </div>
              <div className="PRODUCT-PRICE-3">35$</div>
              <img
                className="NAVIGATION-3"
                alt="Navigation"
                src="/img/icon-chevron-left.png"
              />
              <div className="PRODUCT-NAME-TAG-2">
                <div className="overlap-3">
                  <div className="PRODUCT-NAME-2">EARPOD CASE SPIKEY</div>
                </div>
              </div>
              <div className="text-wrapper-3">PRIVACY POLICE</div>
              <img
                className="logo-asset-2"
                alt="Logo asset"
                src="/img/logo-asset-02.png"
              />
            </>
          )}
        </div>
        <div className="HEADER">
          <div className="HEADER-2">
            <div
              className="overlap-group-4"
              style={{
                height:
                  screenWidth < 834
                    ? "100px"
                    : screenWidth >= 1440 || (screenWidth >= 834 && screenWidth < 1440)
                    ? "200px"
                    : undefined,
                width:
                  screenWidth < 834
                    ? "392px"
                    : screenWidth >= 834 && screenWidth < 1440
                    ? "832px"
                    : screenWidth >= 1440
                    ? "1440px"
                    : undefined,
              }}
            >
              <div
                className="header"
                style={{
                  height:
                    screenWidth >= 1440 || (screenWidth >= 834 && screenWidth < 1440)
                      ? "100px"
                      : screenWidth < 834
                      ? "50px"
                      : undefined,
                  width:
                    screenWidth >= 1440
                      ? "1440px"
                      : screenWidth < 834
                      ? "392px"
                      : screenWidth >= 834 && screenWidth < 1440
                      ? "832px"
                      : undefined,
                }}
              />
              {((screenWidth >= 834 && screenWidth < 1440) || screenWidth < 834) && (
                <>
                  <div
                    className="text-wrapper-4"
                    style={{
                      fontSize:
                        screenWidth < 834 ? "12px" : screenWidth >= 834 && screenWidth < 1440 ? "18px" : undefined,
                      left:
                        screenWidth < 834 ? "180px" : screenWidth >= 834 && screenWidth < 1440 ? "487px" : undefined,
                      textAlign: screenWidth < 834 ? "center" : undefined,
                      top: screenWidth < 834 ? "17px" : screenWidth >= 834 && screenWidth < 1440 ? "38px" : undefined,
                    }}
                  >
                    TRACK SHIPPING
                  </div>
                  <img
                    className="icon-cart"
                    style={{
                      height:
                        screenWidth < 834 ? "20px" : screenWidth >= 834 && screenWidth < 1440 ? "30px" : undefined,
                      left:
                        screenWidth < 834 ? "344px" : screenWidth >= 834 && screenWidth < 1440 ? "741px" : undefined,
                      top: screenWidth < 834 ? "15px" : screenWidth >= 834 && screenWidth < 1440 ? "35px" : undefined,
                      width: screenWidth < 834 ? "27px" : screenWidth >= 834 && screenWidth < 1440 ? "40px" : undefined,
                    }}
                    alt="Icon cart"
                    src={
                      screenWidth < 834
                        ? "/img/icon-cart.png"
                        : screenWidth >= 834 && screenWidth < 1440
                        ? "/img/icon-cart.png"
                        : undefined
                    }
                  />
                </>
              )}

              {screenWidth >= 1440 && (
                <>
                  <div className="text-wrapper-5">EMOTIONAL INVENTORY</div>
                  <div className="text-wrapper-6">TRACK SHIPPING</div>
                  <div className="vector-wrapper">
                    <img
                      className="vector"
                      alt="Vector"
                      src="/img/vector.svg"
                    />
                  </div>
                </>
              )}

              <img
                className="logo-asset-3"
                style={{
                  height:
                    screenWidth < 834
                      ? "100px"
                      : screenWidth >= 1440 || (screenWidth >= 834 && screenWidth < 1440)
                      ? "200px"
                      : undefined,
                  width:
                    screenWidth < 834
                      ? "100px"
                      : screenWidth >= 1440 || (screenWidth >= 834 && screenWidth < 1440)
                      ? "200px"
                      : undefined,
                }}
                alt="Logo asset"
                src={
                  screenWidth < 834
                    ? "/img/logo-asset-01.png"
                    : screenWidth >= 1440 || (screenWidth >= 834 && screenWidth < 1440)
                    ? "/img/logo-asset-01.png"
                    : undefined
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
