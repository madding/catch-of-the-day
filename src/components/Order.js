import React from "react";
import { formatPrice } from "./../helpers";
import { TransitionGroup, CSSTransition } from "react-transition-group";
class Order extends React.Component {
  renderOrder = key => {
    const fish = this.props.fishes[key];
    if (!fish) {
      return null;
    }
    const count = this.props.order[key];
    const isAvailable = fish && fish.status === "available";
    const transitionalOptions = {
      classNames: "order",
      key: key,
      timeout: { enter: 500, exit: 500 }
    };
    if (!isAvailable) {
      return (
        <CSSTransition {...transitionalOptions}>
          <li key={key}>
            Sorry {fish ? fish.name : "fish"} is no longer available
          </li>
        </CSSTransition>
      );
    }

    return (
      <CSSTransition {...transitionalOptions}>
        <li key={key}>
          <span>
            <TransitionGroup component="span" className="count">
              <CSSTransition
                classNames="count"
                key={count}
                timeout={{ enter: 250, exit: 250 }}
              >
                <span>{count}</span>
              </CSSTransition>
            </TransitionGroup>
            lbs {fish.name}
            {formatPrice(count * fish.price)}
            <buttom onClick={() => this.props.removeFromOrder(key)}>
              &times;
            </buttom>
          </span>
        </li>
      </CSSTransition>
    );
  };

  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === "available";
      if (isAvailable) {
        return prevTotal + fish.price * count;
      }
      return prevTotal;
    }, 0);

    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <TransitionGroup component="ul" className="order">
          {orderIds.map(this.renderOrder)}
        </TransitionGroup>
        <div className="total">
          Total:
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;
