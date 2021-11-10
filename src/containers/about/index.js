
import * as React from 'react';
import Cards from '../../components/card'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Header from '../../components/header';
import Listt from '../../components/list';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const testingfunction = () =>{
 alert("About is clicked");

}


const About = () => {
    return (

        <Box sx={{ flexGrow: 1 }}>
            <Header/>
                  <Container >

        <Grid container spacing={2}>
        <Grid item xs={4}>
            <Item> <Listt/> </Item>
          </Grid>
          <Grid item xs={8}>
            <Item> <Listt/> </Item>
          </Grid>
          <Grid item xs={5}>
            <Item> <Listt/> </Item>
          </Grid>
          <Grid item xs={7}>

            <Item>     
                <Cards 
                image="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                name="About page hedding"
                description=" TestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTesting"
                btnTitle="Log"
                onClick={testingfunction}
            /></Item>
          </Grid>
         
           
        </Grid>
        </Container>
      </Box>
  
      
            

      
       
    )
}

export default About
