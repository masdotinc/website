import styled from 'styled-components';
import Page from 'components/Page';
import RichText from 'components/RichText';

export default function ContactPage() {
  return (
    <Page title="Privacy Policy">
      <PrivacyPolicyContainer>
        <RichText>
          <h2>Introduction</h2>
          <p>MAS (Midwest AI Solution, Inc) values your privacy and takes the responsibility of safeguarding your personal data seriously. This privacy policy serves as a guide on how we manage your personal data when you access our website, no matter your geographic location. It also outlines your rights concerning privacy and the legal protections available to you.</p>
          <p>For the purposes of this Privacy Policy, "our services" refer to all MAS products, including our customised chatbot programs, email automation services, and any related software.</p>
       <br></br>
          <h2>Summary</h2>
          <ul>
            <li>We will never sell your data.</li>
            <li>Our revenue comes from our pilot programs and annual plans. We do not monetize your data.</li>
            <li>We process your account and payment information when you sign up and use our services.</li>
                   <li>We may collaborate with a select group of trusted third parties to help provide our services.</li>
          </ul>
          <br></br>
          <h2>Data Collection and Use</h2>
          <h3>Information You Provide:</h3>
          <p>Account Information: To use our services, you are required to create an account. This involves providing basic information such as your name, email address, and company details.</p>
          <p>Payment Information: If you opt for a paid service, we will process payment information through secure third-party services (Stripe).</p>
          <h3>Automated Information:</h3>
          <p>Technical Data: We collect information like IP addresses and device types to enhance our services.</p>
             <br></br>
          <h2>Third-Party Service Providers</h2>
          <p>We employ trusted third-party companies to facilitate our services. These third parties have access to your personal information only to perform specific tasks on our behalf and are obligated to maintain the confidentiality of your information.</p>
          <br></br>
          <h2>Security</h2>
          <p>We've implemented robust security protocols to safeguard your personal data against accidental loss, unauthorized access, alteration, or disclosure. Data is encrypted in transit and at rest. Access to your data is strictly limited to our engineering team members who require this information to improve your product experience and operational purposes.</p>
          <br></br>
        
        </RichText>
      </PrivacyPolicyContainer>
    </Page>
  );
}

const PrivacyPolicyContainer = styled.div`
  max-width: 90rem;
  margin: auto;
  overflow-x: auto;
`;
