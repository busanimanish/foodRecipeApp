import { useState } from 'react';
import React from 'react';
import Axios from "axios";
import styled from 'styled-components'
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import {Header,AppNameComponent,AppIcon,SearchComponent,SearchIcon,SearchInput} from './components/headercomponent';
import Recipe from "./components/recipeComponent";
import { DialogContent } from '@material-ui/core';
import DialogActions from "@material-ui/core/DialogActions";

const APP_ID="c4e4bc7e";
const APP_KEY="7aa129cce6162611baa7ebf41eef3676";

const Container=styled.div` 
  display:flex;
  flex-direction:column;
`;

const Placeholder=styled.img`
width:120px;
height:120px;
margin:200px;
opacity:50%;
`;
const RecipeComponent=(props)=>{
  const [show,setShow]=React.useState(false); 
  const {recipeObj}=props;
  return(
    <>
    <Dialog open={show}>
      <DialogTitle id="alert-dialog-slide-title">Ingredients</DialogTitle>
      <DialogContent>
        <table>
          <thead>
            <th>Ingredients</th>
            <th>Weight</th>
          </thead>
          <tbody>
            {recipeObj.ingredients.map((ingredientObj)=>(
              <tr>
                <td>{ingredientObj.text}</td>
                <td>{ingredientObj.weight}</td>
              </tr>

            ))}
          </tbody>
        </table>
      </DialogContent>
      <DialogActions>
          <Recipe.SeeNewTab onClick={() => window.open(recipeObj.url)}>See More</Recipe.SeeNewTab>
          <Recipe.SeeMoreText onClick={() => setShow(false)}>Close</Recipe.SeeMoreText>
        </DialogActions>
      </Dialog> 
    <Recipe.RecipeContainer>
      <Recipe.CoverImage src={recipeObj.image}/>
        <Recipe.RecipeName>{recipeObj.label}</Recipe.RecipeName>
        <Recipe.IngredientsText onClick={()=>setShow(true)}>Ingredients</Recipe.IngredientsText>
        <Recipe.SeeMoreText onClick={()=>window.open(recipeObj.url)}>See Complete Recipe</Recipe.SeeMoreText>
    </Recipe.RecipeContainer>
    </>
  );
};
function App() {
  const [timeoutId,updateTimeoutId]=useState();
  const [recipeList,updateRecipeList]=useState([]);

  const fetchRecipe=async(searchString)=>{
   const response=await Axios.get(`https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    updateRecipeList(response.data.hits); 

  };
  const onTextChange=(event)=>{
    clearTimeout(timeoutId);
    const timeout=setTimeout(()=>fetchRecipe(event.target.value),500);
    updateTimeoutId(timeout);
    
  };
  return <Container>
    <Header>
      <AppNameComponent>
        <AppIcon src="/burger.svg" />
        Recipe Finder
        </AppNameComponent>
      <SearchComponent>
        <SearchIcon src="/search.svg" />
        <SearchInput placeholder='Search Recipe' onChange={onTextChange}/>
      </SearchComponent>
    </Header>
    <Recipe.RecipeListContainer>
      {recipeList.length ?(
      recipeList.map((recipeObj)=>(
        <RecipeComponent recipeObj={recipeObj.recipe }/>
      )) 
      ):(
        <Placeholder src="burger.svg"/>
      )
      }
  
    </Recipe.RecipeListContainer>
  </Container>
    
  
}

export default App;
