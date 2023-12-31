import styled from 'styled-components'
import {Link} from 'react-router-dom'


const Register = () =>{
    return(
        <div>
           <Container>
            <Main>
               <DotHolder>
                <Dots bg='#F04E67'/>
                <Line bg='#e5dcde'/>
                <Dots bg='#e5dcde'/>
                <Line bg='#e5dcde'/>
                <Dots bg='#e5dcde'/>
                <Line bg='#e5dcde'/>
                <Dots bg='#e5dcde'/>
                <Line bg='#e5dcde'/>
                <Dots bg='#e5dcde'/>
               </DotHolder>

               <Head>ONLINE APPLICATION</Head>

               <Inputs>
                   <Input1>Personnal Information</Input1>
                   <Input type='text' placeholder='Firstname'/>
                   <Input type='text' placeholder='Surname'/>
                   <Input type='text' placeholder='Birthdate'/>
                   <Input type='text' placeholder='Insurance number'/>
                   <Input type='text' placeholder='Family Status'/>
               </Inputs>

               <Button to='/register1'>NEXT</Button>

            </Main>
           </Container>
        </div>
    )
}

export default Register;
const Input1 = styled.div`
   height  : 43px;
  width: 320px;
  border-radius: 5px; 
`
const Input = styled.input`
  height  : 43px;
  width: 320px;
  border: 1px solid silver;
  border-radius: 5px;
  padding-left: 10px;
  &::placeholder{
    font-size: 17px;
  }
`
const Button = styled(Link)`
  padding  : 10px 26px;
  background-color: #F04E67;
  color: white;
  font-size: 18px;
  border-radius: 3px;
  text-decoration: none;
  border: 2px solid silver;
  /* &:hover {
    border: 1px solid silver;
  } */
`
const Inputs = styled.div`
  height  : 330px;
  width: 390px;
  border: 1px solid silver;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding-top: 70px;
  padding-bottom: 70px;
`
const Head = styled.h3`   
`
const DotHolder = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* gap: 0.5px; */
`
const Line = styled.div<{bg:string}>`
  height  :3px ;
  width: 100px;
  background-color: ${({bg})=>bg};
`
const Dots = styled.div<{bg:string}>`
  height: 15px;
  width: 15px;
  background-color: ${({bg})=>bg};
  border-radius: 50%;
`
const Main = styled.div`
   height: 600px;
   width: 650px;
   border: 1px solid silver;
   display: flex;
   justify-content: space-between;
   align-items: center;
   flex-direction: column;
   padding: 20px;

`
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`