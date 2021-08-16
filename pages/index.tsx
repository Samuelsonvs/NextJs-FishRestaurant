import Container from "@/container/Container";
import TopSlick from "@/components/HomePage/TopSlick";
import FacebookGoogleSlick from "@/components/HomePage/FacebookGoogleSlick";
import MenuTab from "@/components/HomePage/MenuTab";
import Welcome from "@/components/HomePage/Welcome";
import Gallery from "@/components/HomePage/Gallery";
import BgCatFishEyes from "@/components/HomePage/BgCatFishEyes";
import GoogleMap from "@/components/HomePage/GoogleMap";
import MenuSvgIcon from "@/components/HomePage/MenuSvgIcon";

export default function Home() {
  return (
    <Container>
      <>
      <TopSlick />
      <div className="max-w-5xl mx-auto">
        <Welcome />
        <MenuSvgIcon/>
        <BgCatFishEyes />
      </div>
        <MenuTab />
        <Gallery />
        <FacebookGoogleSlick />
        <GoogleMap />
      </>
    </Container>
  );
}
