import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const TooltipCopyToClipboard = ({ textToCopy, children }) => {
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 600); // Reset after .6 seconds
  };

  return (
    <div className="container flex flex-col">
      {!isCopied && (
        <CopyToClipboard text={textToCopy} onCopy={handleCopy}>
          <a className="text-gray-700 ease-out">{children}</a>
        </CopyToClipboard>
      )}

      {isCopied && (
        <span className="mx-auto ease-in-out">Copied to clipboard!</span>
      )}
    </div>
  );
};

export default TooltipCopyToClipboard;
