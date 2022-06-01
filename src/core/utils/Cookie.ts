// LIBs
import jsCookie from 'js-cookie';
import { Base64 } from 'js-base64';

type options = {
  expiration: boolean;
  expires: number;
}

// Cria um cookie
export const set = (name: string, value: any, options: options = {expiration: false, expires: 0}): void => {
  if(options.expiration) {
    jsCookie.set(name, Base64.encode(JSON.stringify(value)), { expires: options.expires });
  } else {
    jsCookie.set(name, Base64.encode(JSON.stringify(value)));
  }
}

// Mostra um cookie
export const get = (name: string): any | undefined => {
  if(jsCookie.get(name)) {
    return JSON.parse(Base64.decode(jsCookie.get(name) || ''));
  } else {
    return undefined;
  }
}

// Deleta um cookie
export const del = (name: string): void => {
  jsCookie.remove(name);
}