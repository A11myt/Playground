import * as React from "react";
import Image from "next/image";
import left from "../../assets/icons/left.svg";
import right from "../../assets/icons/right.svg";
import { Section } from "../atomics/Section";

interface StepperProps {
  bgColor: string;
  children: React.ReactNode;
  startPosition: number;
}

export const Stepper: React.FC<StepperProps> = ({ bgColor, children, startPosition }) => {
  const childrenArray = React.Children.toArray(children);
  const totalSteps = childrenArray.length;
  const [currentStep, setCurrentStep] = React.useState(startPosition);

  const nextStep = () => currentStep < totalSteps - 1 && setCurrentStep(currentStep + 1);
  const prevStep = () => currentStep > 0 && setCurrentStep(currentStep - 1);

  return (
    <div className={`flex flex-col ${bgColor} stepper`}>
      {React.Children.map(children, (child, index) => index === currentStep && (
        <div> 
          <div className="h-[90vh] overflow-auto">{child}</div>
          <Section bgColor={bgColor}>
            <div className="flex flex-row justify-between items-center pb-10">
              <div className={`flex items-center cursor-pointer justify-center ${currentStep > 0 ? '' : 'opacity-0'} w-1/4`} onClick={prevStep}>
                <Image src={left} alt="Previous" width={40} height={40} priority />
              </div>
              <div className="flex justify-center items-center w-1/2">
                {React.Children.map(children, (_, index) => (
                  <span
                    key={index}
                    className={`${index === currentStep ? 'bg-main-10' : 'bg-dark-10'} 'hidden md:block h-2 w-2 border-solid border-2 border-main-10 rotate-45 m-2 '`}
                  />
                ))}
              </div>
              <div className={`flex items-center justify-center ${currentStep < totalSteps - 1 ? '' : 'opacity-0'} w-1/4`} onClick={nextStep}>
                <Image src={right} alt="Next" width={40} height={40} priority />
              </div>
            </div>
          </Section>
        </div>
      ))}
    </div>
  );
};