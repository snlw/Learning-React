import React from 'react';

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
} from 'recoil';

const CharacterCounter = () => { 

  return (
    <>
      <TextInput />
      <CharacterCount />
    </>
  )
};

// An atom represents a piece of state
const textState = atom ({
  key : 'textState',
  default : ''
});

const TextInput = () => {
  const [text, setText] = useRecoilState(textState);
  return (
    <div>
      <input type='text' value={text} onChange={(e)=> setText(e.target.value)} />
      <br />
      <p>Echo : {text}</p>
    </div>
  )
};

// A selector represents a piece of derived state
const charCountState = selector({
  key : 'charCountState',
  get : ({get}) => {
    const text = get(textState);
    return text.length;
  }}
);

const CharacterCount = () => {
  const count = useRecoilValue(charCountState);
    return (
      <>
        Character Count : {count}
      </>
    );
}


const App = () => {
  // Components that use recoil state need RecoilRoot to appear somewhere in the parent tree. A good place to put this is in your root component:
  return (
    <RecoilRoot>
      <CharacterCounter />
    </RecoilRoot>
  );
};

export default App;