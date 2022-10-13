import React, { Component } from "react";
import { ThemeContext } from "../stores/themeContext";

export default class ThemedButton extends Component {
  static contextType = ThemeContext;
  declare context: React.ContextType<typeof ThemeContext>;

  render() {
    const props = this.props;
    const { theme } = this.context;

    return (
      <button
        {...props}
        style={{
          border: `1px solid ${theme.foreground}`,
          color: theme.foreground,
          backgroundColor: theme.background,
        }}
      />
    );
  }
}
