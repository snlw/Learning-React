import styled from "styled-components";

import { Title } from "./components/Title";
import { Wrapper } from "./components/Wrapper";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { RotationThing } from "./components/Rotation";

const DifferentButton = styled(Button)`
    color : 'black';
    background : 'black';
`

function App() {
  return (
    <div className="App"> 
      <Wrapper>
        <Title>This is a title</Title>
      </Wrapper>
      <div className = 'buttons'>
        <Button clicked={true}>Yes</Button>
        <Button clicked={false}>No</Button>
        <DifferentButton>This is a different button</DifferentButton>
      </div>
      <div className='Inputs'>
        <Input defaultValue='sean' />
        <Input defaultValue='sean' inputColor='purple'/>
      </div>

      <RotationThing>🔥</RotationThing>
    </div>
  );
}

export default App;
