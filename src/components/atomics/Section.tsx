import "../../tailwind.css";

interface SectionProps {
  bgColor: string;
  children: React.ReactNode;
}
// add some responsive design

export const Section = ({ children, bgColor = "bg-main-25" }: SectionProps) => {
  return (
    <div>
      <div className={`${bgColor} pt-4 pb-4 h-1/2 `}>
        <div className=" flex  flex-col font-Hack">
          <div className="max-w-5xl m-auto w-full ">{children}</div>
        </div>
      </div>
    </div>
  );
};

interface SplitSectionProps {
  firstColor: string;
  secondColor: string;
  bgColor: string;
  height: string[];
  children: React.ReactNode;
  title: string;
  containerCorrectionValue: number[];
}

export const SplitSection = ({
  firstColor,
  secondColor,
  bgColor,
  height,
  children,
  title,
  containerCorrectionValue,
}: SplitSectionProps) => {
  function heightToNumber(height: string) {
    let split = height.split("h-");
    let numberValue = parseInt(split[1]);
    return numberValue;
  }

  const heightNumber = heightToNumber(height[0]);
  const smheightNumber = heightToNumber(height[1]);
  const pixelValue = heightNumber * 16;
  const firstHeight = heightNumber / 2;
  const smfirstHeight = smheightNumber / 2;
  const mdbgHeight = pixelValue / 4 - containerCorrectionValue[0];
  const smbgHeight = pixelValue / 4 - containerCorrectionValue[1];

  // const bgHeight = pixelValue / 4 ;
  const secondaryHeight = heightNumber / 4;

  const sectionStyle = `${height[0]} md:${height[1]}`;
  const firstColorStyle = `${firstColor}  md:h-${firstHeight}  `;
  const secondColorStyle = `${secondColor} h-${smfirstHeight}  p-${secondaryHeight}`;
  const contentStyle = ` p-8 border border-main-10 rounded-md  mx-16 ${bgColor} shadow-lg`;
  const bgColorStyle = `flex flex-1 flex-col font-Hack  z-20`;

  return (
    <div className={sectionStyle}>
      <div className="grid grid-rows-2 ">
        <div className={firstColorStyle}></div>
        <div className={secondColorStyle}></div>
      </div>

      <div className="hidden md:inline">
        <div className={bgColorStyle} style={{ marginTop: -mdbgHeight + "px" }}>
          <div className="text-center md:max-w-5xl md:text-left m-auto md:w-full">
            <h1 className="mx-16">
              {title}
              <br />
              {/* pixel:{pixelValue}<br/> bg piece height:{firstHeight * 16}{" "}<br/>
            relative container positon:{bgHeight} */}
            </h1>
            <div className={contentStyle}>{children}</div>
          </div>
        </div>
      </div>

      <div className="inline md:hidden">
        <div className={bgColorStyle} style={{ marginTop: -smbgHeight + "px" }}>
          <div className="text-center  md:max-w-5xl md:text-left m-auto md:w-full">
            <h1 className="mx-16">{title}</h1>
            <div className={contentStyle}>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
