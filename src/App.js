import styled from 'styled-components'
import {Header,AppNameComponent,AppIcon,SearchComponent,SearchIcon,SearchInput} from './components/headercomponent';
import {RecipeListContainer,RecipeContainer,CoverImage,RecipeName,IngredientsText,SeeMoreText} from './components/recipeComponent';


const Container=styled.div` 
  display:flex;
  flex-direction:column;
`;

function App() {
  return <Container>
    <Header>
      <AppNameComponent>
        <AppIcon src="/burger.svg" />
        Recipe Finder
        </AppNameComponent>
      <SearchComponent>
        <SearchIcon src="/search.svg" />
        <SearchInput placeholder='Search Recipe'/>
      </SearchComponent>
    </Header>
    <RecipeListContainer>
      <RecipeContainer>
        <CoverImage src="burger.svg"/>
        <RecipeName>Matar Paneer</RecipeName>
        <IngredientsText>Ingredients</IngredientsText>
        <SeeMoreText>See Complete Recipe</SeeMoreText>
        
        
      </RecipeContainer>
      <RecipeContainer>
        <CoverImage src="burger.svg"/>
        <RecipeName>Matar Paneer</RecipeName>
        <IngredientsText>Ingredients</IngredientsText>
        <SeeMoreText>See Complete Recipe</SeeMoreText>
        
        
      </RecipeContainer>
      <RecipeContainer>
        <CoverImage src="burger.svg"/>
        <RecipeName>Matar Paneer</RecipeName>
        <IngredientsText>Ingredients</IngredientsText>
        <SeeMoreText>See Complete Recipe</SeeMoreText>
        
        
      </RecipeContainer>
      <RecipeContainer>
        <CoverImage src="burger.svg"/>
        <RecipeName>Matar Paneer</RecipeName>
        <IngredientsText>Ingredients</IngredientsText>
        <SeeMoreText>See Complete Recipe</SeeMoreText>
        
        
      </RecipeContainer>
      <RecipeContainer>
        <CoverImage src="burger.svg"/>
        <RecipeName>Matar Paneer</RecipeName>
        <IngredientsText>Ingredients</IngredientsText>
        <SeeMoreText>See Complete Recipe</SeeMoreText>
        
        
      </RecipeContainer>
      <RecipeContainer>
        <CoverImage src="burger.svg"/>
        <RecipeName>Matar Paneer</RecipeName>
        <IngredientsText>Ingredients</IngredientsText>
        <SeeMoreText>See Complete Recipe</SeeMoreText>
        
        
      </RecipeContainer>
      <RecipeContainer>
        <CoverImage src="burger.svg"/>
        <RecipeName>Matar Paneer</RecipeName>
        <IngredientsText>Ingredients</IngredientsText>
        <SeeMoreText>See Complete Recipe</SeeMoreText>
        
        
      </RecipeContainer>
    </RecipeListContainer>
  </Container>
    
  
}

export default App;
