import * as React from "react";

export interface IAuthorProps { name: string; email: string; }

export const App: any = (props: IAuthorProps) => <h1>Build by {props.name} {props.email}!</h1>;