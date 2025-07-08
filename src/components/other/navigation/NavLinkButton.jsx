import Link from "next/link";

const NavLinkButton = ({ text, href, setShow }) => {
  return (
    <Link className="w-full text-center border-t py-2 border-secondary" onClick={() => setShow(false)} href={href}>
      {text}
    </Link>
  );
};

export default NavLinkButton;
