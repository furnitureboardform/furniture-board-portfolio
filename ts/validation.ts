// Czysta logika walidacji formularza kontaktowego — bez zależności od DOM, testowana w validation.test.ts.

export interface ContactValues {
  firstName: string;
  lastName: string;
  email: string;
  projectType: string;
  message: string;
  consent: boolean;
}

export interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  projectType?: string;
  message?: string;
  consent?: string;
}

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const MIN_MESSAGE_LENGTH = 20;

export function validateContact(values: ContactValues): FormErrors {
  const errors: FormErrors = {};

  const firstName = values.firstName.trim();
  const lastName = values.lastName.trim();
  const email = values.email.trim();
  const projectType = values.projectType.trim();
  const message = values.message.trim();

  if (!firstName) errors.firstName = "Imię jest wymagane.";
  if (!lastName) errors.lastName = "Nazwisko jest wymagane.";

  if (!email) {
    errors.email = "Email jest wymagany.";
  } else if (!EMAIL_RE.test(email)) {
    errors.email = "Podaj poprawny adres email.";
  }

  if (!projectType) errors.projectType = "Wybierz rodzaj projektu.";

  if (!message) {
    errors.message = "Wiadomość jest wymagana.";
  } else if (message.length < MIN_MESSAGE_LENGTH) {
    errors.message = "Wiadomość powinna mieć co najmniej 20 znaków.";
  }

  if (!values.consent) errors.consent = "Zgoda jest wymagana.";

  return errors;
}
