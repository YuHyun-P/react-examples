import { Component } from "react";
import ShouldComponentUpdate from "./ShouldComponentUpdate";

export default class LifeCycle extends Component {
  state = {
    canRerender: true,
    count: 0,
  };

  render() {
    return (
      <>
        <div className="p-4 border-solid border border-white">
          <h2>Parent component</h2>
          <div>
            state.canRerender: {String(this.state.canRerender)}
            <br />
            state.count: {this.state.count}
          </div>

          <button
            onClick={() => {
              this.setState({
                ...this.state,
                canRerender: !this.state.canRerender,
              });
            }}
          >
            state.canRerender 토글
          </button>
          <button
            onClick={() =>
              this.setState({ ...this.state, count: this.state.count + 1 })
            }
          >
            state.count++
          </button>
        </div>

        <ShouldComponentUpdate
          canRerender={this.state.canRerender}
          count={this.state.count}
        />
      </>
    );
  }
}
