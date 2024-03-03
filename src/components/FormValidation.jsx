import * as Yup from "yup";

export const formValidation = Yup.object().shape({
  bookTitle: Yup.string().required("Please Enter the Book Title"),
  authorName: Yup.string().required("Please Enter the Author Name"),
  ISBN_Number: Yup.string()
    .min(13, "13 digits are requird")
    .required("Please Enter the ISBN Number"),
  publicationDate: Yup.string()
    .matches(
      /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/,
      "Enter in this yyyy-mm-dd format"
    )
    .required("Please Enter the Publication Date"),
  bookImage: Yup.string().required("Please Enter the book Image URL"),
  authorBirthDate: Yup.string()
    .matches(
      /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/,
      "Enter in this yyyy-mm-dd format"
    )
    .required("Please Enter the Author BirthDate"),
  shortBio: Yup.string().required("Please Enter the Short Bio of Author"),
});
