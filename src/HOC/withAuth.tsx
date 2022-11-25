import React from "react";

export function withAuth<Props extends object>(
  WrappedComponent: React.ComponentType<Props>
) {
  type WithIsAuthenticated<T> = T & {
    isAuthenticated: boolean;
  };

  class AuthenticatedComponent extends React.Component<
    WithIsAuthenticated<Props>
  > {
    static displayName = `withAuth(${getDisplayName(WrappedComponent)})`;

    render(): React.ReactNode {
      const { isAuthenticated, ...props } = this.props;
      if (!isAuthenticated) {
        return <div>로그인해주세요</div>;
      } else {
        return <WrappedComponent {...(props as Props)} />;
      }
    }
  }

  return AuthenticatedComponent;
}

function getDisplayName(WrappedComponent: React.ComponentType<any>) {
  return WrappedComponent.displayName || WrappedComponent.name;
}

// reference https://www.smashingmagazine.com/2020/06/higher-order-components-react/
