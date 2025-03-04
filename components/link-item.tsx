const HeaderLinkItem = ({
  href,
  text,
  icon,
}: {
  href: string;
  text: string;
  icon?: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    className="inline-flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-full text-cyan-600"
  >
    {icon}
    <span className="text-sm">{text}</span>
  </a>
);

export default HeaderLinkItem;
