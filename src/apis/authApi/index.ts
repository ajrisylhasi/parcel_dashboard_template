import axios from "axios";
import { apiOriginUrl } from "src/apis";

export const postSignIn: (data: {
  email: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
}) => Promise<{ data: { token: string } }> = async (data) => {
  return axios.post(apiOriginUrl + "/sign_in/", data);
};
