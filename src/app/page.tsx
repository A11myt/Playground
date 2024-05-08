"use client";
import React, { useState } from "react";
import Menu from "@/components/atomics/RadialMenu";
import TextCutter from "@/components/molecules/TextCutter";
import PrioList from "@/components/atomics/PrioList";
import ScrollHandler from "@/components/utils/ScrollHandler";
import PageContainer from "@/components/atomics/PageContainer";
import Dictionary from "@/components/molecules/Dictionary";
import { IPage } from "@/components/interfaces/IPage";
import Calculator from "@/components/atomics/Calculator";
class PageCounter {
  static pageNumber = 0;

  static incrementPageNumber() {
    this.pageNumber += 1;
    return this.pageNumber;
  }
}

export default function Home() {
  const [pages, setPages] = useState<IPage[]>([]);

  const addPage = (name: string) => {
    const pageNumber = PageCounter.incrementPageNumber();
    setPages((prevPages) => {
      if (prevPages.some((page) => page.name === name)) {
        return prevPages;
      }
      return [...prevPages, { pageNumber, name }];
    });
  };

  return (
    <ScrollHandler>
      <Dictionary pages={pages} />
      <PageContainer pageNumber={0} name={""} bgColor="#000">
        <TextCutter pageName={addPage} />
      </PageContainer>
      <PageContainer pageNumber={1} name={""} bgColor="#000">
        <PrioList pageName={addPage} />
      </PageContainer>
      <PageContainer pageNumber={2} name={""} bgColor="#000">
        <Menu pageName={addPage} />
      </PageContainer>
      <PageContainer pageNumber={3} name={""} bgColor="#000">
        <Calculator pageName={addPage} />
      </PageContainer>{" "}
    </ScrollHandler>
  );
}
