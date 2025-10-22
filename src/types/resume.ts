export interface SocialLink {
  name: string;
  username: string;
  url: string;
}

export interface Contact {
  email: {
    address: string;
  };
  tel: {
    address: string;
  };
  social: SocialLink[];
}

export interface Education {
  break?: boolean;
  title: string;
  description: string;
  location: string;
  span: string;
  bullets?: string[];
}

export interface Experience {
  break?: boolean;
  position: string;
  company: {
    name: string;
    url?: string;
  };
  location?: string;
  date: string;
  responsibilities?: string[];
}

export interface Skill {
  break?: boolean;
  category: string;
  badges: string[];
}

export interface Publication {
  type?: string;
  title: string;
  url?: string;
}

export interface Language {
  name: string;
  proficiency: string;
}

export interface Certification {
  name: string;
  company: string;
  issued: string;
  url: string;
}

export interface Volunteering {
  position: string;
  organization: {
    name: string;
  };
  date: string;
  industry?: string;
}

export interface Project {
  break?: boolean;
  title: string;
  company: string;
  location: string;
  span: string;
  description: string;
  tags: string[];
  details?: string[];
}

export interface ResumeData {
  name: string;
  location: {
    value: string;
  };
  contact: Contact;
  education: Education[];
  experience: Experience[];
  skills: Skill[];
  publications?: Publication[];
  languages?: Language[];
  certifications: Certification[];
  projects?: Project[];
  volunteering?: Volunteering[];
}
