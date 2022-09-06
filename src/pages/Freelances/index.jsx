import DefaultPicture from '../../assets/profile.png';
import Card from '../../components/Card';
import colors from '../../utils/style/color';
import styled from 'styled-components';
 
const freelanceProfiles = [
    {
        name: 'Jane Doe',
        jobTitle: 'Devops',
        picture: DefaultPicture,
    },
    {
        name: 'John Doe',
        jobTitle: 'Developpeur frontend',
        picture: DefaultPicture,
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Développeuse Fullstack',
        picture: DefaultPicture,
    },
];

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
    display: grid;
    gap: 3em;
    grid-template-rows: 300px 300px;
    grid-template-columns: repeat(2, 1fr);
    padding: 4em 0;
`

export default function Freelances() {
  return (
    
    <FreelanceSection>
      <h1>Freelances</h1>
      <p>Chez Shiny nous réunissons les meilleurs profils pour vous.</p>
      <CardsContainer>
        {freelanceProfiles.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            label={profile.jobTitle}
            // picture={profile.picture}
            title={profile.name}
          />
        ))}
      </CardsContainer>
    </FreelanceSection>
  );
}