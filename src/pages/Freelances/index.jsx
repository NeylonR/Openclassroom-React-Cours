import Card from '../../components/Card';
import colors from '../../utils/style/color';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Loader } from '../../utils/style/Atoms.jsx';
import { useFetch } from '../../utils/hooks';

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
  const { data, isLoading, error } = useFetch(`http://localhost:8000/freelances`);
  const freelancersList = data?.freelancersList;

  if(error) return <h1>Une erreur est survenue, recharger la page.</h1>;
  
  return (
    <FreelanceSection>
      <h1>Freelances</h1>
      <p>Chez Shiny nous réunissons les meilleurs profils pour vous.</p>
      {isLoading ? (
        <Loader data-testid="loader"/>
      ) : (
        <CardsContainer>
        {freelancersList.map((profile, index) => (
          <Link key={`freelance-${profile.id}`} to={`/profile/${profile.id}`}>
              <Card
              key={`${profile.name}-${index}`}
              label={profile.job}
              picture={profile.picture}
              title={profile.name}
              />   
          </Link>      
        ))}
      </CardsContainer>
      )}
    </FreelanceSection>
  );
}