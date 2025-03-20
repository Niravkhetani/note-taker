import { Box } from '@mui/material';
import SearchNotesStyles from './searchNotes-styles';
import TextInput from '../RHFField/TextInput';
import { FormProvider, useForm } from 'react-hook-form';

interface SearchFormValues {
  searchTerm: string;
}
const SearchNotes = () => {
  const { classes } = SearchNotesStyles();
  const methods = useForm<SearchFormValues>({
    defaultValues: { searchTerm: '' },
  });
  const { handleSubmit, control } = methods;
  return (
    <Box className={classes.container}>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit((values) => console.log('values', values))}
        >
          <TextInput
            isCloseIcon
            label="search"
            name="searchTerm"
            control={control}
          />
        </form>
      </FormProvider>
    </Box>
  );
};

export default SearchNotes;
