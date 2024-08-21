import Filtersearch from "@/components/shared/search/Filtersearch";
import Localsearch from "@/components/shared/search/Localsearch";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { HomePageFilters } from "@/constants/filter";
import HomeFilter from "@/components/home/HomeFilter";
import QuestionCard from "@/components/cards/QuestionCard";
import { questions } from "@/constants";
import NoResult from "@/components/shared/NoResults";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col-reverse justify-between sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex items-center justify-between gap-5 max-sm:flex-col sm:items-center">
        <Localsearch
          imgSrc="/assets/icons/search.svg"
          placeholder="Search questions.."
          iconPosition="left"
          route="/"
          otherClasses="flex-1"
        />
        <Filtersearch
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilter />

      <div className="mt-10 flex flex-col gap-6 ">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult 
            title="There is no questions to show"
            description = " Be the first to break the silence! 🚀 Ask a Question and kickstart the
            discussion. our query could be the next big thing others learn from. Get
            involved! 💡"
            link = "/ask-question"
            linkTitle = "Ask a question" />
        )}
      </div>
    </>
  );
};

export default HomePage;
