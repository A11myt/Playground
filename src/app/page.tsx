"use client";
import React, { useState, useRef } from "react";
import Menu from "@/components/atomics/RadialMenu";
import TextCutter from "@/components/molecules/TextCutter";
import PrioList from "@/components/atomics/PrioList";
import ScrollHandler from "@/components/utils/ScrollHandler";
import PageContainer from "@/components/atomics/PageContainer";
import Dictionary from "@/components/molecules/Dictionary";
import { IPage } from "@/components/interfaces/IPage";
import Calculator from "@/components/atomics/Calculator";
import Navbar from "@/app/navbar";
class PageCounter {
  static pageNumber = 0;

  static incrementPageNumber() {
    this.pageNumber += 1;
    return this.pageNumber;
  }
}

export default function Home() {
  const [pages, setPages] = useState<IPage[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const addPage = (name: string) => {
    const pageNumber = PageCounter.incrementPageNumber();
    setPages((prevPages) => {
      if (prevPages.some((page) => page.name === name)) {
        return prevPages;
      }
      return [...prevPages, { pageNumber, name }];
    });
  };

  const scrollToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Navbar color="" pages={pages.length} onClick={() => scrollToPage(0)} />
      <ScrollHandler pageNumber={currentPage}>
        <Dictionary pages={pages} scrollToPage={scrollToPage} />
        <PageContainer pageNumber={1} name={"Text Cutter"}>
          <TextCutter pageName={addPage} />
        </PageContainer>
        <PageContainer pageNumber={2} name={"Prio List"} bgColor="">
          <PrioList pageName={addPage} />
        </PageContainer>
        <PageContainer pageNumber={3} name={"Radial Menu"} bgColor="#000">
          <Menu pageName={addPage} />
        </PageContainer>
        <PageContainer pageNumber={4} name={"Calc "} bgColor="#000">
          <Calculator pageName={addPage} />
        </PageContainer>{" "}
        <PageContainer pageNumber={5} name={"Healthbar"} bgColor="#efefef">
          <div className="flex justify-center h-full items-center ">
            <div className="flex  h-8 overflow-hidden font-sans w-72 text-xs font-medium rounded-xl flex-start bg-light-10 border-2 border-black dark:border-none ">
              <div className="flex bg-red-300 w-full items-center bg-light-100 justify-center h-full overflow-hidden text-black break-all">
                <div className="flex justify-center">32/100</div>
              </div>
            </div>
          </div>
        </PageContainer>
      </ScrollHandler>
    </>
  );
}
