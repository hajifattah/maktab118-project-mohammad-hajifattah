import { ResultStatus } from "@/components/result/result";

const ResultPage: React.FC<INextPageParams> = async ({ searchParams }) => {
  const { status } = await searchParams;
  return (
    <div className="pt-24 p-4 sm:px-10 min-h-[calc(100vh-25rem)] lg:min-h-[calc(100vh-21rem)]">
      <ResultStatus status={status!} />
    </div>
  );
};
export default ResultPage;
