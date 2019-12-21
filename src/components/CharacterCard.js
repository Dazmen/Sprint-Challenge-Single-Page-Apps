import React from "react";
import styled from 'styled-components';

export default function CharacterCard({ char }) {
  return (
    <Card>
      <CardTitle>Name: <strong>{char.name}</strong></CardTitle>
      <Img src={char.image} alt='character avatar'/>
      <ul>
        <li>Status: <strong>{char.status}</strong></li>
        <li>Species: <strong>{char.species}</strong> </li>
        <li>Origin: <strong>{char.origin.name}</strong> </li>
        <li>Current Location: <strong>{char.location.name}</strong></li>
        {/* <li>Apperances: <strong>{props.episode.length}</strong></li> */}
      </ul>
   </Card>
  )
}

const Card = styled.div`
  width: 45%;
  background-color: lightgrey;
  border-radius: 15px;
  margin-top: 25px;
  padding: 20px 3%;
`;

const Img = styled.img`
padding-left: 35px;
`;

const CardTitle = styled.h3`
  text-align: center;
`;