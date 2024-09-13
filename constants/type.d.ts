declare type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export interface HeroProps {
  title: string;
  description: string;
}

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
