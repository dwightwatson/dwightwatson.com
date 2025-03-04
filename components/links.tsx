import LinkItem from "@/components/link-item";
import { RiTwitterXFill, RiGithubFill, RiLinkedinFill } from "react-icons/ri";

const LinkGroup = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="-mx-3">
    <h3 className="font-serif text-gray-700 pl-3 mt-6 lg:mt-12">{title}</h3>
    <div className="flex flex-wrap md:flex-col gap-y-2">{children}</div>
  </div>
);

const Links = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <LinkGroup title="Building">
        <LinkItem href="https://www.roomies.com" text="Roomies" />
        <LinkItem href="https://www.myinspections.com" text="myInspections" />
        <LinkItem
          href="https://highschoolnotes.com.au"
          text="High School Notes"
        />
      </LinkGroup>

      <LinkGroup title="Socials">
        <LinkItem
          href="https://x.com/dwightconrad"
          icon={<RiTwitterXFill className="text-gray-600 size-5" />}
          text="@dwightconrad"
        />
        <LinkItem
          href="https://github.com/dwightwatson"
          icon={<RiGithubFill className="text-gray-600 size-5" />}
          text="@dwightwatson"
        />
        <LinkItem
          href="https://www.linkedin.com/in/dwightconradwatson"
          icon={<RiLinkedinFill className="text-gray-600 size-5" />}
          text="@dwightconradwatson"
        />
      </LinkGroup>
    </div>
  );
};

export default Links;
