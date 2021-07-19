import styled from "styled-components";

const Title = styled.h1`
  font-size: 2em;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  color: red;

  span {
    color: blue;
  }
`;

export function App() {
  return (
    <div className="App">
      <Title>
        Hello, world <span>!</span>
      </Title>
    </div>
  );
}
