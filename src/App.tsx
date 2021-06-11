import { Container } from '@material-ui/core';
import InputGroup from './components/InputGroup';

function App() {
  
  return (
    <Container maxWidth="lg">
      <InputGroup group_id="1"></InputGroup>
      <InputGroup group_id="2"></InputGroup>
      <InputGroup group_id="3"></InputGroup>
      <InputGroup group_id="4"></InputGroup>
      <InputGroup group_id="5"></InputGroup>
    </Container>
  );
}

export default App;
