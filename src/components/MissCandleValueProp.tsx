import {FunctionComponent} from "react";
import {LucideIcon} from "lucide-react";

type TMissCandleValuePropProps = {
  icon: React.ReactElement<LucideIcon>;
  title: string;
  description: string;
}

const MissCandleValueProp: FunctionComponent<TMissCandleValuePropProps> = ({ icon, title, description }) => {
  return (
    // <></>
    <div className="flex flex-col items-center md:flex-row md:items-start gap-4 group">
      {/* Icon Wrapper */}
      <div className="w-12 h-12 rounded-xl bg-brightenUp/10 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>

      {/* Text Content */}
      <div className="text-center md:text-left">
        <h4 className="text-white/80 font-medium text-base">
          {title}
        </h4>
        <p className="text-textSecondary text-xs md:text-sm mt-1 leading-snug">
          {description}
        </p>
      </div>
    </div>
  );
};

export default MissCandleValueProp;
