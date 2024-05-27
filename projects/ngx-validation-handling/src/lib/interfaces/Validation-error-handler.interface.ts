export interface ValidationErrorHandler {
    (controlName: string, errorName: string, errorValue: any): string;
  }
  