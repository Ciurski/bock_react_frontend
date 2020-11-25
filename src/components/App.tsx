import * as React from "react";
export interface HelloWorldProps {
  userName: string;
  lang: string;
}
export const App = (props: HelloWorldProps) => (
  <h1>
    Using: {props.userName} and: {props.lang}!
  </h1>
);
