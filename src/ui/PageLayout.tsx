import { ReactNode } from "react";
import SectionHeader from "./SectionHeader";

type PageLayoutTypes = {
  title: string;
  children: ReactNode;
};

const PageLayout = ({ title, children }: PageLayoutTypes) => {
  return (
    <section>
      <SectionHeader path={title} />
      <article className="section-center section-x">{children}</article>
    </section>
  );
};

export default PageLayout;
