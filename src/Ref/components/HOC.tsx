import React, { Ref } from "react";

export function logProps<Props extends object, WrappedComponentType>(
  WrappedComponent: React.ComponentType<Props>
) {
  /* Type */
  type WithForwardedRef<T> = T & {
    forwardedRef: Ref<WrappedComponentType>;
  };

  /* LogProps Class Component */
  class LogProps extends React.Component<WithForwardedRef<Props>> {
    componentDidUpdate(prevProps: Readonly<WithForwardedRef<Props>>): void {
      console.group();
      console.log(prevProps);
      console.log(this.props);
      console.groupEnd();
    }

    render(): React.ReactNode {
      const { forwardedRef, ...props } = this.props;
      return <WrappedComponent ref={forwardedRef} {...(props as Props)} />;
    }
  }

  /* forwardRef */
  function forwardRef(props: Props, ref: Ref<WrappedComponentType>) {
    return <LogProps {...props} forwardedRef={ref} />;
  }

  const name = WrappedComponent.displayName || WrappedComponent.name;
  forwardRef.displayName = `forwardRef(logProps(${name}))`;

  return React.forwardRef(forwardRef);
}
