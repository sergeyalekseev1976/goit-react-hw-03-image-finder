import { Formik } from 'formik';
import PropTypes from 'prop-types';
import toast, { Toaster } from 'react-hot-toast';
import { BsSearch } from 'react-icons/bs';
import {
  SearchBar,
  SearchForm,
  SearchFormBtn,
  SearchFormBtnLabel,
  Input,
} from './Searchbar.styled';

const initialValues = {
  query: '',
};

export const Searchbar = ({ onSubmit, isSubmiting }) => {
  const handleSubmit = (values, { resetForm }) => {
    const query = values.query.trim();
    if (!query) {
      return toast.error('Empty search');
    }
    onSubmit(query);
    resetForm();
  };

  return (
    <SearchBar>
      <Toaster position="top-right" reverseOrder={false} />
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <SearchForm>
          <SearchFormBtn type="submit" disabled={isSubmiting}>
            <BsSearch size="20px" />
            <SearchFormBtnLabel>Search</SearchFormBtnLabel>
          </SearchFormBtn>
          <Input
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Formik>
    </SearchBar>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isSubmiting: PropTypes.bool.isRequired,
};
