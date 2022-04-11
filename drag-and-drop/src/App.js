import DraggableComponent from "./components/DraggableComponent";
import styled from 'styled-components';

const Container = styled.div`
  width : 100vw;
  min-height: 100vh;
`

const Rect = styled.div`
  width : 200px;
  height : 200px;
  background : red;
`;

const App = () => {
  return (
    <Container>
      <DraggableComponent>
        <Rect />
      </DraggableComponent>
    </Container>
  );
}

export default App;
