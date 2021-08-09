import Container from "@/container/Container";
import ReactSlick from "@/components/ReactSlick";

export default function Home() {
  return (
    <Container>
      <>
        <ReactSlick />
        <div className="px-7 mx-auto">
          <div className="leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            nulla ipsum, sagittis quis orci vel, bibendum cursus velit. Aenean
            lorem nisi, cursus eu lorem in, feugiat imperdiet neque. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Fusce metus nibh, rhoncus id accumsan ac,
            interdum et mauris. Quisque nunc ipsum, mollis quis pellentesque in,
            dignissim id dolor. Phasellus magna mi, mollis ac dui sit amet,
            consectetur sagittis ipsum. Sed auctor lectus in ex rutrum, quis
            cursus velit pretium. Ut quis dictum erat, quis pellentesque mi.
            Quisque auctor accumsan sapien, tempor pulvinar mi vulputate sit
            amet. Vestibulum a iaculis libero. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Etiam a
            magna ullamcorper ex mattis consectetur. Mauris vel consectetur
            massa. Pellentesque pulvinar ipsum et elementum egestas. Sed
            placerat accumsan blandit.
          </div>
        </div>
      </>
    </Container>
  );
}
