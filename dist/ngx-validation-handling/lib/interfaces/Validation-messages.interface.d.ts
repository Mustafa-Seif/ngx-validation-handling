export interface ValidationMessages {
    required?: string;
    minlength?: string;
    maxlength?: string;
    email?: string;
    [key: string]: string | undefined;
}
