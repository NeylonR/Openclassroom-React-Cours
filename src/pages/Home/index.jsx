import colors from '../../utils/style/color';
import styled from 'styled-components';

const HomeSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.backgroundLight};
  padding: 2em 4em;
  h1{
    max-width: 350px;
    padding-bottom: 1em;
  }
  span{
    color: ${colors.primary};
    font-weight: bold;
  }
  button{
    padding: .5em 2em;
    border:none;
    color: white;
    text-decoration: none;
    font-size: 18px;
    border-radius: 30px; 
    background-color: ${colors.primary};
    cursor: pointer;
  }
`;

const HomeText = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 50%;
  padding: 1em 0;
  span{
    align-self: start
  }
  p{
    text-align: start;
    margin-bottom: 1em;
    color: ${colors.secondary};
  }
`;
export default function Home() {
  return (
    <HomeSection>
      <h1>Les compétences dont vous avez besoin : <span>UX Design, frontend, backend</span></h1>
      <button>Découvrir</button>
      <HomeText>
        <span>UX Design</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim animi praesentium eius odit rerum facilis deserunt iste voluptates earum ipsum, atque reprehenderit ad ratione voluptas sequi repudiandae perferendis. Vel, nobis?</p>
        <span>Frontend</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem corporis veniam quod qui quasi ab dolores reiciendis alias, voluptas assumenda perspiciatis quis recusandae fuga quidem explicabo enim maiores quisquam voluptate!</p>
        <span>Backend</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem corporis veniam quod qui quasi ab dolores reiciendis alias, voluptas assumenda perspiciatis quis recusandae fuga quidem explicabo enim maiores quisquam voluptate!</p>
      </HomeText>
    </HomeSection>
  );
};
