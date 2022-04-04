import styled from 'styled-components';
import Card from '../components/Card';
import Head from 'next/head';

export default () => (
  <>
  <Head>
      <title>Frontend Mentor | Testimonials</title>
      <link rel="icon" href="./image/favicon-32x32.png"/>
  </Head>
  <header>
    <div className="attribution center">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"> Frontend Mentor </a>. 
        Coded by <a href="#"> Angel Murillo</a>.
      </div>
  </header>
  <Container className='center'>
    <CardContainer>
      <CardOneContainer>
        <Card username={"Daniel Clifford"} userImage={'/images/image-daniel.jpg'} quotationPattern={true} verifiedGraduate={true}
          userMessage={`I received a job offer mid-course, and the subjects I learned were current,
            if not more so, in the company I joined. I honestly feel I got every penny\'s worth.`}
          userQuote={`\"I was an EMT for many years before I joined the bootcamp. I\'ve been looking to make a 
          transition and have heard some people who had an amazing experience here. I signed up 
          for the free intro course and found it incredibly fun! I enrolled shortly thereafter. 
          The next 12 weeks was the best - and most grueling - time of my life. Since completing 
          the course, I\'ve successfully switched careers, working as a Software Engineer at a VR startup.\"`}
          backgroundColor={'hsl(263, 55%, 52%)'}
          borderColor={'hsl(263, 55%, 60%)'}
          ></Card>
      </CardOneContainer>
      <CardTwoContainer>
        <Card username={"Jonathan Walters"} userImage={'/images/image-jonathan.jpg'} verifiedGraduate={true}
          userMessage={`The team was very supportive and kept me motivated`}
          userQuote={`\"I started as a total newbie with virtually no coding skills. I now work as a mobile engineer 
          for a big company. This was one of the best investments I\'ve made in myself.\"`}
          backgroundColor={'hsl(217, 19%, 35%)'}
          ></Card>
      </CardTwoContainer>
      <CardThreeContainer>
        <Card username={"Jeanette Harmon"} userImage={'/images/image-jeanette.jpg'} verifiedGraduate={true}
          userMessage={`An overall wonderful and rewarding experience`}
          userQuote={`\"Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living 
          while doing something I love.\"`}
          backgroundColor={'hsl(0, 0%, 100%)'}
          textColor={'hsl(217, 19%, 35%)'}
          ></Card>
      </CardThreeContainer>
      <CardFourContainer>
        <Card username={"Patrick Abrams"} userImage={'/images/image-patrick.jpg'} verifiedGraduate={true}
          userMessage={`Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and 
          learning from their experiences was easy.`}
          userQuote={`\"The staff seem genuinely concerned about my progress which I find really refreshing. The program 
          gave me the confidence necessary to be able to go out in the world and present myself as a capable 
          junior developer. The standard is above the rest. You will get the personal attention you need from 
          an incredible community of smart and amazing people.\"`}
          backgroundColor={'hsl(219, 29%, 14%)'}
          borderColor={'hsl(263, 55%, 60%)'}
          ></Card>
      </CardFourContainer>
      <CardFiveContainer>
        <Card username={"Kira Whittle"} userImage={'/images/image-kira.jpg'} verifiedGraduate={true}
          userMessage={`Such a life-changing experience. Highly recommended!`}
          userQuote={`\"Before joining the bootcamp, I\'ve never written a line of code. I needed some structure from 
          professionals who can help me learn programming step by step. I was encouraged to enroll by a former 
          student of theirs who can only say wonderful things about the program. The entire curriculum and staff 
          did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team 
          project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial 
          could ever have. In fact, I\'ve often referred to it during interviews as an example of my developent 
          experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 
          100% recommend!\"`}
          backgroundColor={'hsl(0, 0%, 100%)'}
          textColor={'hsl(217, 19%, 35%)'}
          ></Card>
      </CardFiveContainer>
    </CardContainer>
  </Container>
  </>
);
const Container = styled.main`
  width:100%; height:auto;
  display:inline;
  background-color: hsl(210, 46%, 95%);
   @media (min-width: 1200px) {
     height:100%;
     padding:inherit;
   }
`;
const CardContainer=styled.div`
  padding-top:50px;
  padding-bottom:50px;
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
    @media (min-width: 1200px) {
      padding:none !important;
      grid-template-columns: 245px 245px 245px 245px;
      grid-template-rows: 280px 255px;
      grid-column-gap: 15px;
      grid-template-areas:
        "container1 container2 container5"
        "container3 container4 container5";
    }
`;
const CardOneContainer=styled.div`
display:flex;
width:100%;
grid-area: container1;
@media (min-width: 1200px) {
  grid-column-start:1;
  grid-column-end:3;
  grid-row-start:1;
  grid-row-end:2;
}
`;
const CardTwoContainer=styled.div`
display:flex;
grid-area: container2;
@media (min-width: 1200px) {
  grid-column-start:3;
  grid-column-end:4;
  grid-row-start:1;
  grid-row-end:2;
}
`;
const CardThreeContainer=styled.div`
display:flex;
grid-area: container3;
@media (min-width: 1200px) {
  grid-column-start:1;
  grid-column-end:2;
  grid-row-start:2;
  grid-row-end:3;
}
`;
const CardFourContainer=styled.div`
display:flex;
grid-area: container4;
@media (min-width: 1200px) {
  grid-column-start:2;
  grid-column-end:4;
  grid-row-start:2;
  grid-row-end:3;
}
`;
const CardFiveContainer=styled.div`
display:flex;
grid-area: container5;
@media (min-width: 1200px) {
  grid-column-start:4;
  grid-column-end:5;
  grid-row-start:1;
  grid-row-end:3;
}
`;