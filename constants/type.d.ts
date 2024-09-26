declare type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export interface HeroProps {
  title: string;
  description: string;
}

declare type Level = "Beginner" | "Intermediate" | "Advance" | "Other";
declare type Site = "Online" | "Offline" | "Other";

declare type Gender = "Male" | "Female" | "Other";

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
  status:string
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
  site: string;
  ambitions: string;
  notes: string | undefined;
  applicationDocument: FormData | undefined;
}

declare type CreateAppointmentParams = {
  userId: string;
  patient: string;
  primaryPhysician: string;
  reason: string;
  schedule: Date;
  status: Status;
  note: string | undefined;
};

declare type UpdateAppointmentParams = {
  appointmentId: string;
  userId: string;
  appointment: Appointment;
  type: string;
};

declare type Status = "pending" | "scheduled" | "cancelled";
