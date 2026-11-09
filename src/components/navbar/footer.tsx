import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import Link from "next/link";
import { Container } from "../container";

export const Footer = () => {
  return (
    <Container className="flex justify-between py-3 px-10 border-t border-neutral-100">
      <p className="text-xs text-neutral-500">Built with love by Seishirou.</p>
      <div className="flex items-center justify-center gap-4">
        <Link href="https://x.com/ruprax">
          <IconBrandX className="h-4 w-4 text-neutral-500 hover:text-neutral-700" />
        </Link>
        <Link href="https://www.linkedin.com/in/rudraprasad-gouda-80a659249/">
          <IconBrandLinkedin className="h-4 w-4 text-neutral-500 hover:text-neutral-700" />
        </Link>
        <Link href="https://github.com/rudraprasaaad">
          <IconBrandGithub className="h-4 w-4 text-neutral-500 hover:text-neutral-700" />
        </Link>
      </div>
    </Container>
  );
};
