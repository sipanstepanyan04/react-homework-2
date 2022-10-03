import { Component } from "react";
import "./card.css";

class Card extends Component {
  componentWillUnmount() {
    this.props.onUnmount(this.props.data);
  }

  render() {
    const { data, toggleCard } = this.props;
    return (
      <div className="card">
        <span className="cardNumber">{data.id}</span>
        <button className="b" onClick={() => toggleCard(data)}>
          Close
        </button>
      </div>
    );
  }
}

export default Card;
