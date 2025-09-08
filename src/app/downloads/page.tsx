import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const DownloadsPage = () => {
  return (
     <section className="w-full h-screen bg-gradient-to-b from-stone-900 from- via-gray-900 via-100% to-stone-900 to-100%">
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-10 justify-center items-center pt-20">
        <div className="text-center text-3xl text-emerald-500">
          ==Site under Construction==
        </div>
        <p className="text-sky-100">For Any Query :</p>
                <p className="text-sky-100 inline">
                  Contact :
                  <a
                    href="https://wa.me/+919906613451"
                    target="blank"
                    aria-label="Whatsapp"
                    className="hover:text-sky-200 px-6"
                  >
                    <FaWhatsapp className="inline underline" /> Qashif Peer
                  </a>
                </p>
      </div>
    </section>
  )
}

export default DownloadsPage