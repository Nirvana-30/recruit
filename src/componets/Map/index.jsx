import "./index.scss";
import React, { PureComponent } from "react";
export default class Map extends PureComponent {
  Animate = () => {
    const c = this.cartoon;
    console.log(c.style);
    c.timer = setInterval(function () {
      if (c.offsetLeft >= 300) {
        c.style.top = c.offsetTop + 10 + "px";
      } else c.style.left = c.offsetLeft + Math.ceil((300 - c.offsetLeft) / 20) + "px";
    }, 30);
  };
  cancelAnimate = () => {
    const c = this.cartoon;
    clearInterval(c.timer);
  };
  appear = () => {
    const c = this.window;
    c.style.height = "0";
    console.log(c.offsetleft);
  };
  render() {
    return (
      <div>
        <div className="window" ref={(c) => (this.window = c)}>
          <div className="content">
            阿巴阿巴<img src="/img/1.jpeg" alt="wdnmd"></img>
          </div>
        </div>
        <div
          className="map"
          onTouchStart={this.Animate}
          onTouchEnd={this.cancelAnimate}
        >
          <div className="action" onClick={this.appear}>
            !!!
          </div>
          <div
            className="profile"
            ref={(c) => {
              this.cartoon = c;
            }}
          ></div>
        </div>
      </div>
    );
  }
}
