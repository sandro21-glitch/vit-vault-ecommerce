type SectionHeaderTypes = {
  path: string;
};

const SectionHeader = ({ path }: SectionHeaderTypes) => {
  return <header>{path}</header>;
};

export default SectionHeader;
