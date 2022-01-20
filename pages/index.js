import styled from 'styled-components';
import Card from '../components/Card';

export default () => (
  <Container className='center'>
    <CardContainer>
      <CardOneContainer>
        <Card username={"Daniel Clifford"} userImage={'/images/image-daniel.jpg'} verifiedGraduate={true}
          userMessage={`I received a job offer mid-course, and the subjects I learned were current,
            if not more so, in the company I joined. I honestly feel I got every penny\'s worth.`}
          userQuote={`I was an EMT for many years before I joined the bootcamp. I\'ve been looking to make a 
          transition and have heard some people who had an amazing experience here. I signed up 
          for the free intro course and found it incredibly fun! I enrolled shortly thereafter. 
          The next 12 weeks was the best - and most grueling - time of my life. Since completing 
          the course, Iâ€™ve successfully switched careers, working as a Software Engineer at a VR startup.`}
          backgroundColor={'hsl(263, 55%, 52%)'}
          ></Card>
      </CardOneContainer>
      <CardTwoContainer>
        <Card username={"Jonathan Walters"} userImage={'/images/image-jonathan.jpg'} verifiedGraduate={true}
          userMessage={`The team was very supportive and kept me motivated`}
          userQuote={`â€œ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer 
          for a big company. This was one of the best investments Iâ€™ve made in myself. â€`}
          backgroundColor={'hsl(217, 19%, 35%)'}
          ></Card>
      </CardTwoContainer>
      <CardThreeContainer>
        <Card username={"Jeanette Harmon"} userImage={'/images/image-jeanette.jpg'} verifiedGraduate={true}
          userMessage={`An overall wonderful and rewarding experience`}
          userQuote={`â€œ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living 
          while doing something I love. â€`}
          backgroundColor={'hsl(0, 0%, 100%)'}
          textColor={'hsl(217, 19%, 35%)'}
          ></Card>
      </CardThreeContainer>
      <CardFourContainer>
        <Card username={"Patrick Abrams"} userImage={'/images/image-patrick.jpg'} verifiedGraduate={true}
          userMessage={`Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and 
          learning from their experiences was easy.`}
          userQuote={`â€œ The staff seem genuinely concerned about my progress which I find really refreshing. The program 
          gave me the confidence necessary to be able to go out in the world and present myself as a capable 
          junior developer. The standard is above the rest. You will get the personal attention you need from 
          an incredible community of smart and amazing people. â€`}
          backgroundColor={'hsl(219, 29%, 14%)'}
          ></Card>
      </CardFourContainer>
      <CardFiveContainer>
        <Card username={"Kira Whittle"} userImage={'/images/image-kira.jpg'} verifiedGraduate={true}
          userMessage={`Such a life-changing experience. Highly recommended!`}
          userQuote={`â€œ Before joining the bootcamp, Iâ€™ve never written a line of code. I needed some structure from 
          professionals who can help me learn programming step by step. I was encouraged to enroll by a former 
          student of theirs who can only say wonderful things about the program. The entire curriculum and staff 
          did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team 
          project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial 
          could ever have. In fact, Iâ€™ve often referred to it during interviews as an example of my developent 
          experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 
          100% recommend! â€`}
          backgroundColor={'hsl(0, 0%, 100%)'}
          textColor={'hsl(217, 19%, 35%)'}
          ></Card>
      </CardFiveContainer>
    </CardContainer>
  </Container>
);


const Container = styled.div`
  width:100%; height:100%;
  display:inline;
  // background-color:blue;
  // padding:10px;
  background-color: hsl(210, 46%, 95%);
`;
const CardContainer=styled.div`
  padding:40px;
  display: grid;
  grid-template-columns: 350px;
  grid-template-rows: auto;
  row-gap: 20px;
  grid-template-areas:
    "container1"
    "container2"
    "container3"
    "container4"
    "container5";
  // background-color:green;
`;
const CardOneContainer=styled.div`
width:100%;
grid-area: container1;
`;
const CardTwoContainer=styled.div`
grid-area: container2;
`;
const CardThreeContainer=styled.div`
grid-area: container3;
`;
const CardFourContainer=styled.div`
grid-area: container4;
`;
const CardFiveContainer=styled.div`
grid-area: container5;
`;

const Title = styled.h1`
  color: red;
`;