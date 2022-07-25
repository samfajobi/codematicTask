import React from 'react'
import styled from "styled-components"
import {useState} from 'react'

const Container = styled.div` 
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba( 255, 255, 255, 0.6),
    rgba( 255, 255, 255,0.7  )

  ),
  url('https://images.unsplash.com/photo-1562009313-2dc966f71c3d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80');
  align-items: center;
  background-size: cover;
  height: 100vh;
  background-position: top; 
  margin-bottom: 90%;
`
const Wrapper = styled.div`
  margin-left: 23%;
  padding-top: 10%;
`



const Input = styled.input`
  width: 70%;
  padding: 20px;
  border: none;
  font-size: 19px;
`

const P = styled.p`
  margin-left: 30%;
  margin-top: 68%;
  text-align: center;
  margin: 15px;
  box-shadow: 3px 6px rgba(0, 0, 0, 0.2);
  text-shadow: 3px 6px rgba(90, 50, 70, 0.8);
  color: #fff;
  background-color: rgba(285, 285, 285, 0.2);
  padding: 15px 25px;
  font-size: 40px;
  font-weight: 800;
  width: 760px;
`

const api = {
  baseUrl: "http://localhost:8080/api/timezone/"

};

const App = () => {

    const [ query, setQuery] = useState("");
    const [timeZone, setTimeZone ] = useState({});
    

    const search = (evt) => {
      if (evt.key === "Enter") {
        fetch(`${api.baseUrl}${query}`)
          .then((res) => res.json())
          .then((result) => {
            setTimeZone(result);
            console.log(result);
            console.log(timeZone.localZone);
            
            setQuery("");
          });
      }

    }

    
  return (
    <Container>
          <Wrapper>
            <Input
              placeholder="Type in any of the following african time zones (CVT, GMT, WAT, CAT, EAT, MT)"
              type="text"
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              onKeyPress={search} 
              >
            </Input>
            {typeof timeZone.localZone != "undefined" ?  (
              <P>The current time in {timeZone.localZone} is {timeZone.time}</P> 
            ) : ( "" 
            )}
          </Wrapper>
    </Container>
  )
}

export default App