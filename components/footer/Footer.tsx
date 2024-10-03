import { siteConfig } from "@/config/site";

const Footer = () => {
  const d = new Date();
  const currentYear = d.getFullYear();
  const { authors } = siteConfig;

  return (
    <footer>
      <div className="mt-16 space-y-2 pt-6 pb-4 flex flex-col items-center bg-black text-sm text-gray-400 border-t">
        {/* <FooterLinks />
        <FooterProducts />
        <LangLinks /> */}
        <div className="flex flex-col items-center space-y-2">
          <div>联系方式：picducker@gmail.com</div>
          <div className="flex space-x-2">
            <div>{`©${currentYear}`}</div>{" "}
            {/* <Link href={authors[0].twitter || authors[0].url} target="_blank">
              {authors[0].name}
            </Link>{" "} */}
            <div>Senti Tech All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;