import styled from "styled-components";

const InputWrapper = styled.div`
  background: var(--black);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  padding: 5px;
  width: 100%;

  
  input {   
    display: ${(props) => (props.type === "textarea" ? "none" : "block")};
    padding: ${(props) => (props.type === "color" ? "0" : "5px 0")};
    margin-bottom: 50px;
    width: 100%;

  }
  textarea {
    display: ${(props) => (props.type === "textarea" ? "block" : "none")};
    padding: 5px 100px 100px 5px;
    margin-bottom: 50px;
    width: 100%;
  }
`;

export default InputWrapper;