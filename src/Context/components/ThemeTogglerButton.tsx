import React, { Component } from "react";
import { ThemeContext } from "../stores/themeContext";

interface ThemeTogglerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default class ThemeTogglerButton extends Component<ThemeTogglerButtonProps> {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => (
          <button
            onClick={toggleTheme}
            style={{
              color: theme.foreground,
              backgroundColor: theme.background,
              ...this.props.style,
            }}
          >
            ThemeContext 내부 버튼 <br />
            클릭 시 테마 토글
          </button>
        )}
      </ThemeContext.Consumer>
    );
  }
}
