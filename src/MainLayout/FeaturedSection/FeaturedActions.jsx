import React from "react";
import PrimaryButton from "../../GeneralComponents/PrimaryButton";
import SecondaryButton from "../../GeneralComponents/SecondaryButton";
import { Download, Ellipsis } from "lucide-react";

const FeaturedActions = () => {
  return (
    <div className="flex items-center gap-3">
      <PrimaryButton bgcolor={"bg-[var(--color-highlight)]"} />
      <SecondaryButton icon={Download} />
      <SecondaryButton icon={Ellipsis} />
    </div>
  );
};

export default FeaturedActions;
