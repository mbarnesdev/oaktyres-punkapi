import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FunctionComponent } from "react";

const PunkAPIFormSchema = z.object({
  pageNumberField: z.string().min(1),
  resultsPerPageField: z.string().min(1),
});
type TPunkAPIFormSchema = z.infer<typeof PunkAPIFormSchema>;

interface IPunkAPIFormProps {
  pageNumber: string;
  setPageNumber: (value: string) => void;
  resultsPerPage: string;
  setResultsPerPage: (value: string) => void;
}

const PunkAPIForm: FunctionComponent<IPunkAPIFormProps> = ({
  pageNumber,
  setPageNumber,
  resultsPerPage,
  setResultsPerPage,
}) => {
  const { register, handleSubmit } = useForm<TPunkAPIFormSchema>({
    resolver: zodResolver(PunkAPIFormSchema),
  });

  const onPunkAPIFormSubmit = (data: TPunkAPIFormSchema) => {
    const { pageNumberField, resultsPerPageField } = data;
    setPageNumber(pageNumberField);
    setResultsPerPage(resultsPerPageField);
  };

  return (
    <form onSubmit={handleSubmit(onPunkAPIFormSubmit)}>
      <input
        type="number"
        defaultValue={pageNumber}
        {...register("pageNumberField")}
      />
      <input
        type="number"
        defaultValue={resultsPerPage}
        {...register("resultsPerPageField")}
      />
    </form>
  );
};

export default PunkAPIForm;
