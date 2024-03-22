export class HTTPError extends Error {
  status: number;

  httpStatus?: string;

  constructor(status: number, httpStatus?: string, message?: string) {
    super(message);

    this.name = 'HTTPError';
    this.status = status;
    this.httpStatus = httpStatus;
  }
}
