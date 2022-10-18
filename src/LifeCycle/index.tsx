/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Component } from "react";
import ShouldComponentUpdate from "./ShouldComponentUpdate";

export default class LifeCycle extends Component {
  state = {
    canRerender: true,
    count: 0,
  };

  render() {
    return (
      <div
        css={css({
          margin: "20px",
        })}
      >
        <div
          css={css({
            border: "1px solid white",
            padding: "0 0 20px",
          })}
        >
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
      </div>
    );
  }
}
