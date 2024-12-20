import { useRouter } from "expo-router";

import useAuthStore from "@/hooks/useUser";
import { cn } from "@/lib/utils";

import { Button, type ButtonProps } from "@/components/ui/button";

interface LogoutButtonProps extends ButtonProps {}

export default function LogoutButton({
  children,
  ...props
}: LogoutButtonProps) {
  const setAuth = useAuthStore((state) => state.setAuth);
  const router = useRouter();

  const handleLogout = () => {
    setAuth(false);
    console.log("called");
    router.replace("/(auth)/login");
  };

  return (
    <Button
      {...props}
      variant={"ghost"}
      className={cn(
        "w-full h-full justify-start p-0 native:p-0",
        props.className,
      )}
      onPress={handleLogout}
    >
      {children}
    </Button>
  );
}
