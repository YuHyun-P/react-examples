import React from "react";
import ReactDOM from "react-dom";
import { HTMLAttributes } from "react";

const modalRootEl = document.getElementById("modal-root");

type ModalProps = HTMLAttributes<HTMLDivElement>;

class Modal extends React.Component<ModalProps> {
  el: HTMLDivElement;

  constructor(props: ModalProps) {
    super(props);
    this.el = document.createElement("div");
  }

  componentDidMount(): void {
    modalRootEl?.appendChild(this.el);
  }

  componentWillUnmount(): void {
    modalRootEl?.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

export default Modal;
