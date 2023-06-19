class CustomError extends Error {
  status: number;

  message: string;

  error: string | null;

  constructor(status: number, message: string, error?: string) {
    super(message);
    this.status = status;
    this.message = message;
    this.error = error || null;
  }
}

export default CustomError;
