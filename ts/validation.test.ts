import { describe, it, expect } from 'vitest';
import { validateContact, EMAIL_RE, type ContactValues } from './validation';

const valid: ContactValues = {
  firstName: 'Jan',
  lastName: 'Kowalski',
  email: 'jan@example.com',
  projectType: 'kuchnia',
  message: 'Chciałbym zamówić kuchnię na wymiar do mieszkania.',
  consent: true,
};

describe('validateContact', () => {
  it('zwraca brak błędów dla poprawnych danych', () => {
    expect(validateContact(valid)).toEqual({});
  });

  it('wymaga imienia i nazwiska (po trim)', () => {
    const e = validateContact({ ...valid, firstName: '   ', lastName: '' });
    expect(e.firstName).toBeDefined();
    expect(e.lastName).toBeDefined();
  });

  it('waliduje format email', () => {
    expect(validateContact({ ...valid, email: '' }).email).toBe('Email jest wymagany.');
    expect(validateContact({ ...valid, email: 'zly-email' }).email).toBe('Podaj poprawny adres email.');
  });

  it('wymaga typu projektu', () => {
    expect(validateContact({ ...valid, projectType: '' }).projectType).toBeDefined();
  });

  it('wymaga wiadomości co najmniej 20 znaków', () => {
    expect(validateContact({ ...valid, message: '' }).message).toBe('Wiadomość jest wymagana.');
    expect(validateContact({ ...valid, message: 'za krótka' }).message).toBeDefined();
  });

  it('wymaga zgody', () => {
    expect(validateContact({ ...valid, consent: false }).consent).toBeDefined();
  });
});

describe('EMAIL_RE', () => {
  it('akceptuje poprawne i odrzuca błędne adresy', () => {
    expect(EMAIL_RE.test('a@b.pl')).toBe(true);
    expect(EMAIL_RE.test('a@b')).toBe(false);
    expect(EMAIL_RE.test('a b@c.pl')).toBe(false);
  });
});
