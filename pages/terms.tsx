import { NextSeo } from "next-seo";
import ColorText from "../src/components/ColorText";

export default function Terms() {
  return (
    <main className="flex flex-col my-5 text-white p-4 max-w-3xl mx-auto">
      <NextSeo
        title="Terms of Service | CSS Tools"
        description="CSS Tools Terms of Service"
      />
      <ColorText className="mb-5 !text-3xl" Variant="h1">
        Terms of Service
      </ColorText>
      <div className="[&_p]:indent-5 [&_li]:indent-5">
        <ColorText Variant="h2" className="text-lg text-start">
          1.Terms of Service
        </ColorText>{" "}
        <h3 className="font-bold mt-3">1. Terms</h3>{" "}
        <p>
          By accessing the website at{" "}
          <a href="https://tools-css.vercel.app/">CSS Tools</a> you are agreeing
          to be bound by these terms of service, all applicable laws and
          regulations, and agree that you are responsible for compliance with
          any applicable local laws. If you do not agree with any of these
          terms, you are prohibited from using or accessing this site. The
          materials contained in this website are protected by applicable
          copyright and trademark law.
        </p>
        <h3 className="font-bold mt-3">2. Disclaimer</h3>
        <ol>
          <li>
            1. The materials on CSS Tools's website are provided on an 'as is'
            basis. CSS Tools makes no warranties, expressed or implied, and
            hereby disclaims and negates all other warranties including, without
            limitation, implied warranties or conditions of merchantability,
            fitness for a particular purpose, or non-infringement of
            intellectual property or other violation of rights.
          </li>
          <li>
            2. Further, CSS Tools does not warrant or make any representations
            concerning the accuracy, likely results, or reliability of the use
            of the materials on its website or otherwise relating to such
            materials or on any sites linked to this site.
          </li>
        </ol>
        <h3 className="font-bold mt-3">3. Limitations</h3>
        <p>
          In no event shall CSS Tools or its suppliers be liable for any damages
          (including, without limitation, damages for loss of data or profit, or
          due to business interruption) arising out of the use or inability to
          use the materials on CSS Tools's website, even if CSS Tools or a CSS
          Tools authorized representative has been notified orally or in writing
          of the possibility of such damage. Because some jurisdictions do not
          allow limitations on implied warranties, or limitations of liability
          for consequential or incidental damages, these limitations may not
          apply to you.
        </p>
        <h3 className="font-bold mt-3">4. Accuracy of materials</h3>
        <p>
          The materials appearing on CSS Tools's website could include
          technical, typographical, or photographic errors. CSS Tools does not
          warrant that any of the materials on its website are accurate,
          complete or current. CSS Tools may make changes to the materials
          contained on its website at any time without notice. However CSS Tools
          does not make any commitment to update the materials.
        </p>
        <h3 className="font-bold mt-3">5. Links</h3>
        <p>
          CSS Tools has not reviewed all of the sites linked to its website and
          is not responsible for the contents of any such linked site. The
          inclusion of any link does not imply endorsement by CSS Tools of the
          site. Use of any such linked website is at the user's own risk.
        </p>
        <h3 className="font-bold mt-3">6. Modifications</h3>
        <p>
          CSS Tools may revise these terms of service for its website at any
          time without notice. By using this website you are agreeing to be
          bound by the then current version of these terms of service.
        </p>
        <h3 className="font-bold mt-3">7. Governing Law</h3>
        <p>
          These terms and conditions are governed by and construed in accordance
          with the laws of CSS Tools and you irrevocably submit to the exclusive
          jurisdiction of the courts in that State or location.
        </p>
      </div>
    </main>
  );
}
