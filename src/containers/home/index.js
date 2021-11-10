
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


const testingHomefunction = () =>{
  alert("Home button is clicked");
 
 }

const Home = () => {
    return (

        <Box sx={{ flexGrow: 1 }}>
            <Header/>
                  <Container >

        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Item>     
                <Cards 
                image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                name="Main"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unch"
                btnTitle="Home button"
                onClick={testingHomefunction}
            /></Item>
          </Grid>
          <Grid item xs={4}>
            <Item> <Listt/> </Item>
          </Grid>
           
        </Grid>
        </Container>
      </Box>
  
      
            

      
       
    )
}

export default Home
