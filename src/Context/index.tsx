import { Component } from "react";
import ThemedButton from "./components/ThemedButton";
import ThemeTogglerButton from "./components/ThemeTogglerButton";
import { ThemeContext, ThemeContextType, themes } from "./stores/themeContext";

interface ContextProps {}
interface ContextState extends ThemeContextType {}

export default class Context extends Component<ContextProps, ContextState> {
  constructor(props: ContextProps) {
    super(props);

    this.toggleTheme = () => {
      this.setState((state) => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark,
      }));
    };

    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    };
  }

  toggleTheme() {}

  render() {
    return (
      <>
        <h2>
          기본 테마: dark / 현재 테마:{" "}
          {this.state.theme === themes.dark ? "dark" : "light"} 테마
        </h2>

        <ThemeContext.Provider value={this.state}>
          <ThemeTogglerButton style={{ marginTop: "10px" }} />
        </ThemeContext.Provider>

        <ThemedButton>ThemeContext 외부 버튼</ThemedButton>
      </>
    );
  }
}
