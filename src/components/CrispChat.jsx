import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export default function CrispChat() {
  useEffect(() => {
    Crisp.configure("73ce1e24-ab17-4606-8ce4-ea425ce13711");
  }, []);

  return null;
}
