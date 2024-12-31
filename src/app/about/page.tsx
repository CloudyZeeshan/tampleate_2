
import EmailSignup from "../components/emailSignUp";
import FeatureSection1 from "../featureSection/featur1";
import FeatureSection2 from "../featureSection/feature2";
import FeatureSection3 from "../featureSection/feature3";
import AboutPageHeader from "../pageHeaders/aboutPage";




export default function About(){
    return(
        <div>
            <AboutPageHeader/>
            <FeatureSection2/>
            <FeatureSection3/>
            <FeatureSection1/>
            <EmailSignup/>
        </div>
    )
}