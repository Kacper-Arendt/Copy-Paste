import { useContext } from "react";

// HOOKS
import { ContextData } from "src/components/core/editor/useEditorContext";

// STYLES
import { StyledHeader } from "src/components/core/editor/header/styles";
import { FileButton } from "src/components/core/editor/common/FileButton";

export const Header = () => {
  const { componentDir, getCurrentFile, activeFile } = useContext(ContextData);

  return (
    <StyledHeader>
      {componentDir?.map(({ name, url }) => (
        <FileButton
          key={name}
          variant="header"
          text={name}
          onClick={() => getCurrentFile(url)}
          active={activeFile?.name === name}
        />
      ))}
    </StyledHeader>
  );
};
