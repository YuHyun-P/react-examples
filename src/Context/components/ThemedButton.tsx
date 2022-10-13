import React, { Component, useContext } from "react";
import { ThemeContext } from "../stores/themeContext";

/* Class Component */
/*
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
*/

/* Function Component */
interface ThemedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ThemedButton = (props: ThemedButtonProps) => {
  const { theme } = useContext(ThemeContext);

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
};

export default ThemedButton;
