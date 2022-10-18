import { Component } from "react";

interface TitleProps {
  text: string;
}

export default class Title extends Component<TitleProps> {
  constructor(props: TitleProps) {
    super(props);
  }

  render() {
    return <h3>{this.props.text}</h3>;
  }
}
