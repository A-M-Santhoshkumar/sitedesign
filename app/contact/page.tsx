
import Contact from "../../components/homecomponents/Section6";
import { pageMeta } from "@/data/pageMeta";
import JsonLd from "../../components/JsonLd";
import { schemas } from "@/data/schemaData";

export const metadata = {
  title: pageMeta.contact.title,
  description: pageMeta.contact.description,
  keywords: pageMeta.contact.keywords,

  alternates: {
    canonical: pageMeta.contact.url,
  },
};
function ContactPage() {
    return(
        <div>
          <JsonLd data={schemas.contact} />  

            <Contact />
        </div>
    )
}

export default ContactPage;
   