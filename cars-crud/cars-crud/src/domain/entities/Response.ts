interface Response<T> {
  status: string;
  data: T;
  errors: string[];
}
export default Response;
