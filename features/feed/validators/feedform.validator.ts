import * as yup from "yup";

const feedFormSchema = yup.object().shape({
	url: yup.string().url().required("Url is required"),
});

export default feedFormSchema;
