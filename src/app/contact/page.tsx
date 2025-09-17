// app/contact/page.tsx
import type { Metadata } from "next";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaComments } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Contact DIET Kupwara | District Institute of Education & Training Kupwara",
  description:
    "District Institute of Education & Training Kupwara (DIET) provides quality education, training, and professional development for teachers in J&K.",
  alternates: {
    canonical: "https://dietkupwara.in/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="w-full min-w-full bg-gradient-to-b from-stone-900 from- via-gray-900 via-100% to-stone-900 to-100%">
      <div className="max-w-5xl mx-auto px-6 py-20">
        {/* Heading */}
        <div className="flex justify-center items-center text-3xl gap-3 mb-6">
          <FaComments className="text-rose-500" />
          <h1 className=" font-bold text-sky-300 ">
            Contact DIET Kupwara
          </h1>
        </div>

        <p className="mb-12 text-sky-200 text-justify montserrat-normal max-w-2xl mx-auto">
          The District Institute of Education and Training (DIET) Kupwara is a
          premier institution dedicated to strengthening the foundations of
          school education in Jammu and Kashmir. Established with the mission of
          improving the quality of teaching and learning at the grassroots
          level, DIET Kupwara serves as a hub for teacher education, training,
          research, and innovation in the district. The institute plays a
          pivotal role in empowering teachers, headmasters, and educational
          leaders with modern pedagogical skills and professional competencies
          to meet the evolving needs of learners in the 21st century.
        </p>

        {/* Contact Info Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="flex flex-col items-center bg-white shadow-lg rounded-2xl p-6 border hover:shadow-xl transition">
            <FaMapMarkerAlt className="text-blue-600 text-3xl mb-3" />
            <h2 className="text-lg font-semibold text-gray-700">Address</h2>
            <p className="text-gray-600">
              District Institute of Education & Training (DIET) <br />
              Bohipora Kupwara, Jammu & Kashmir, India <br />
              Near Govt. Degree College Kupwara, <br />
              PIN: 193222
            </p>
          </div>

          <div className="flex flex-col items-center bg-white shadow-lg rounded-2xl p-6 border hover:shadow-xl transition">
            <FaPhoneAlt className="text-green-600 text-3xl mb-3" />
            <h2 className="text-lg font-semibold text-gray-700">Phone</h2>
            <p className="text-gray-600 mt-2">+91-12345-67890</p>
          </div>

          <div className="flex flex-col items-center bg-white shadow-lg rounded-2xl p-6 border hover:shadow-xl transition">
            <FaEnvelope className="text-red-600 text-3xl mb-3" />
            <h2 className="text-lg font-semibold text-gray-700">Email</h2>
            <p className="text-gray-600 mt-2">prdietkup@gmail.com</p>
          </div>
        </section>

        {/* Contact Form */}
        {/* to be introduced */}
        {/* ✅ JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "ContactPage",
                name: "Contact DIET Kupwara",
                url: "https://dietkupwara.in/contact",
                mainEntity: {
                  "@type": "EducationalOrganization",
                  name: "DIET Kupwara",
                  url: "https://dietkupwara.in",
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+91-12345-67890",
                    contactType: "customer service",
                    areaServed: "IN",
                    availableLanguage: ["English", "Urdu", "Hindi"],
                  },
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "DIET Kupwara",
                    addressLocality: "Kupwara",
                    addressRegion: "Jammu & Kashmir",
                    postalCode: "193222",
                    addressCountry: "India",
                  },
                },
              },
              null,
              2
            ),
          }}
        />
      </div>
    </main>
  );
}
