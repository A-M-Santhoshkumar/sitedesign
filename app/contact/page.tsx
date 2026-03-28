
import Contact from "../../components/homecomponents/Section6";
import { pageMeta } from "@/data/pageMeta";

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
            <Contact />
        </div>
    )
}

export default ContactPage;
   