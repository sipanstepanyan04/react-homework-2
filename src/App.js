import { Component } from "react";
import Card from "./component/Card";
import "./App.css";

const cards = [
  {
    id: 1,
    isClosed: false,
  },
  {
    id: 2,
    isClosed: false,
  },
  {
    id: 3,
    isClosed: false,
  },
  {
    id: 4,
    isClosed: false,
  },
  {
    id: 5,
    isClosed: false,
  },
];

class App extends Component {
  reportData = new Map(cards.map((c) => [c.id, 0]));

  constructor(props) {
    super(props);
    this.state = {
      showReport: false,
      cards: cards,
    };
  }

  toggleCard = (item) => {
    const arr = [...this.state.cards];
    const itemFound = arr.find((card) => card.id === item.id);

    if (itemFound) {
      itemFound.isClosed = !itemFound.isClosed;
    }

    this.setState({ ...this.state, cards: arr });
  };

  handleUnmount = (item) => {
    if (this.reportData.has(item.id)) {
      this.reportData.set(item.id, this.reportData.get(item.id) + 1);
    } else {
      this.reportData.set(item.id, 1);
    }
  };

  showReport = () => {
    this.setState({ ...this.state, showReport: true });
  };

  render() {
    const { cards, showReport } = this.state;
    return (
      <div className="wrapper">
        <button onClick={this.showReport}>Report</button>
        {showReport && (
          <ul>
            {Array.from(this.reportData.entries()).map((data) => {
              return (
                <li key={data[0]}>
                  {data[0]} - {data[1]}
                </li>
              );
            })}
          </ul>
        )}
        <hr />
        <div className="card-list">
          {cards.map((item) => {
            return item.isClosed ? (
              <button
                key={`show-${item.id}`}
                className="b"
                onClick={() => this.toggleCard(item)}
              >
                Show
              </button>
            ) : (
              <Card
                onUnmount={this.handleUnmount}
                key={item.id}
                toggleCard={this.toggleCard}
                data={item}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
