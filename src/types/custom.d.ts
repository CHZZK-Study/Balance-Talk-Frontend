declare module '*.jpg' {
  const value: string;
  export default value;
}
declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpeg ' {
  const value: string;
  export default value;
}
declare module '*.gif';

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
