import { NextSeo } from "next-seo";
import ColorText from "../src/components/ColorText";

export default function Privacy() {
  return (
    <main className="flex flex-col my-5 text-white p-4 max-w-3xl mx-auto indent-10">
      <NextSeo
        title="Privacy Policy | CSS Tools"
        description="CSS Tools Privacy Policy"
      />
      <ColorText className="mb-5 !text-3xl" Variant="h1">
        Privacy Policy
      </ColorText>
      <p>
        Your privacy is important to us. It is <strong>CSS Tools's</strong>{" "}
        policy to respect your privacy regarding any information we may collect
        from you across our website,
        <a href="https://tools-css.vercel.app/">CSS Tools</a>, and other sites
        we own and operate.
      </p>
      <p>
        We only ask for personal information when we truly need it to provide a
        service to you. We collect it by fair and lawful means, with your
        knowledge and consent. We also let you know why we’re collecting it and
        how it will be used.
      </p>
      <p>
        We only retain collected information for as long as necessary to provide
        you with your requested service. What data we store, we’ll protect
        within commercially acceptable means to prevent loss and theft, as well
        as unauthorized access, disclosure, copying, use or modification.
      </p>
      <p>
        We don’t share any personally identifying information publicly or with
        third-parties, except when required to by law.
      </p>
      <p>
        Our website may link to external sites that are not operated by us.
        Please be aware that we have no control over the content and practices
        of these sites, and cannot accept responsibility or liability for their
        respective privacy policies.
      </p>
      <p>
        You are free to refuse our request for your personal information, with
        the understanding that we may be unable to provide you with some of your
        desired services.
      </p>
      <p>
        Your continued use of our website will be regarded as acceptance of our
        practices around privacy and personal information. If you have any
        questions about how we handle user data and personal information, feel
        free to contact us.
      </p>
      <ColorText Variant="h2" className="text-xl mt-5 mb-3">
        More Information
      </ColorText>
      <p>
        Hopefully that has clarified things for you and as was previously
        mentioned if there is something that you aren't sure whether you need or
        not it's usually safer to leave cookies enabled in case it does interact
        with one of the features you use on our site.
      </p>
      <p>
        This policy is effective as of <strong>Jul</strong>{" "}
        <strong>2023</strong>.
      </p>
    </main>
  );
}
