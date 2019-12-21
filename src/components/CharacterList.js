import React, { useEffect, useState } from "react";
import SearchForm from './SearchForm';
import CharacterCard from './CharacterCard';
import Axios from "axios";
import styled from 'styled-components';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState('')  ;

  useEffect(() => {
    Axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        console.log('this is the response', response)
        setCharacters(response.data.results)
      })
      .catch(error => {
        console.log('Data was note recieved', error)
      })
  },[])

  console.log('This is characters after useEffect', characters);

  return (
    <section className="character-list">

      <Header>
      <h2>All You Favorite Characters!</h2>

      <SearchForm 
        query={query} 
        setQuery={setQuery} 
        setCharacters={setCharacters} 
        characters={characters}
        />
      </Header>

      <CardCont>
        {characters.map(char => {
          return (
          <CharacterCard key={char.id} char={char} />
        )
        })}
      </CardCont>

    </section>
  );
}

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardCont = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;