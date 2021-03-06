import { JumbotronContainer } from "../containers/jumbotron"
import { FooterContainer } from "../containers/footer";
import { FaqsContainer } from "../containers/faqs";
import { HeaderContainer } from "../containers/header";
import { OptForm, Feature } from "../components";

const Home = () => {
    return ( 
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Unlimited films, TV programmes and more.
          </Feature.Title>
          <Feature.SubTitle>
            Watch anywhere. Cancel at any time.
          </Feature.SubTitle>
          <OptForm>
            <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
            <OptForm.Break/>
            <OptForm.Input placeholder="Email address"/>
            <OptForm.Button>Get Started </OptForm.Button>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer/>
      <FaqsContainer />
      <FooterContainer/>
    </> 
  );
}
 
export default Home;