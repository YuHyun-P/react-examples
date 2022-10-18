/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Component } from "react";

interface Props {
  canRerender: boolean;
  count: number;
}

export default class ShouldComponentUpdate extends Component<Props> {
  constructor(props: Props) {
    super(props);
    console.log("constructor");
  }

  componentDidMount(): void {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(): boolean {
    console.log("shouldComponentUpdate");
    return this.props.canRerender;
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<{}>,
    snapshot?: any
  ): void {
    console.log("componentDidUpdate");
  }

  componentWillUnmount(): void {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("render");

    return (
      <div css={css({ border: "1px solid white", padding: "0 0 20px 0" })}>
        <h2>Child Component</h2>
        <div>
          props.canRerender (= shouldComponentUpdate 메서드 반환값):{" "}
          {String(this.props.canRerender)}
          <br />
          props.count: {this.props.count}
        </div>
      </div>
    );
  }
}
