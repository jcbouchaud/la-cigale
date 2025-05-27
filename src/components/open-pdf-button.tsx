"use client";

import { Button } from "./ui/button";

type OpenPdfButtonProps = {
  url: string;
  children: React.ReactNode;
};

export const OpenPdfButton = ({ url, children }: OpenPdfButtonProps) => {
  const openPdf = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <Button onClick={() => openPdf(url)} size="lg">
      {children}
    </Button>
  );
};
