import { Sidebar } from "./sidebar";
import { cn } from "@/lib/utils";
import { HStack } from "./ui/hstack";
import { Button } from "./ui/button";
import { Text } from "./ui/text";

type HeaderProps = {
  className?: string;
};

export const Header = ({ className }: HeaderProps) => {
  return (
    <header>
      <HStack className={cn("w-full justify-between p-4", className)}>
        <Sidebar />
        <Button variant="outline">
          <Text as="span" className="uppercase font-semibold">
            Réservation
          </Text>
        </Button>
      </HStack>
    </header>
  );
};
