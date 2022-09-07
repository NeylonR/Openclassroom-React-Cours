import Card from '../../components/Card';
import colors from '../../utils/style/color';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Loader } from '../../utils/style/Atoms.jsx';

const FreelanceSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p{
    color: ${colors.secondary};
  }
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 3em;
  max-width: 70%;
  padding: 4em 0;
`

export default function Freelances() {
  const [freelanceList, setFreelanceList] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchFreelances(){
      setIsDataLoading(true);
      try {
        const response = await fetch(`http://localhost:8000/freelances`);
        const { freelancersList } = await response.json();
        setFreelanceList(freelancersList);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setIsDataLoading(false);
      }
    }
    fetchFreelances();
  }, []);
  
  if(error) return <h1>Une erreur est survenue, recharger la page.</h1>;
  
  return (
    <FreelanceSection>
      <h1>Freelances</h1>
      <p>Chez Shiny nous réunissons les meilleurs profils pour vous.</p>
      {isDataLoading ? (
        <Loader/>
      ) : (
        <CardsContainer>
        {freelanceList.map((profile, index) => (
            <Card
            key={`${profile.name}-${index}`}
            label={profile.jobTitle}
            picture={profile.picture}
            title={profile.name}
          />         
        ))}
      </CardsContainer>
      )}
    </FreelanceSection>
  );
}