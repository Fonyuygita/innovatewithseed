declare type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export interface HeroProps {
  title: string;
  description: string;
}

type Level = "Beginner" | "Intermediate" | "Advance" | "Other";
export type ButtonType = {
  title: string;
  icon?: React.ReactNode;
  extraStyle?: string;
};

export interface RegisterFormProps {
  onSubmit: (data: any) => void;
  formType: "course" | "internship";
  initialValues?: any;
  buttonText?: string;
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
  buttonClassName?: string;
  animationDuration?: number;
  animationType?: "fade" | "slide";
  placeholder?: string;
  inputName?: string;
}

export interface Testimonial {
  name: string;
  image: string;
  stars: string;
  text: string;
  title: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ProgramsProps {
  id: number;
  title: string;
  description: string;
  image: string;
}

declare interface CreateUserParams {
  name: string;
  email: string;
  phone: string;
}
declare interface User extends CreateUserParams {
  $id: string;
}

declare interface RegisterUserParams extends CreateUserParams {
  userId: string;
  birthDate: Date;
  gender: Gender;
  address: string;
  occupation: string;
  program: string;
  department: string;
  duration: string;
  level: Level;
  reason: string;
  notes: string | undefined;
  identificationType: string | undefined;
  identificationNumber: string | undefined;
  identificationDocument: FormData | undefined;
  applicationDocument: FormData | undefined;
  privacyConsent: boolean;
}
