import type { RequestHandler } from '@sveltejs/kit';
import type { Locals } from '$lib/types';

import mailer from '@sendgrid/mail';
mailer.setApiKey(import.meta.env.VITE_SENDGRID_API_KEY as string);

export const post: RequestHandler<Locals, FormData> = async (request) => {
  const data = [];

  data.push(`secret=${import.meta.env.VITE_RECAPTCHA_SITE_SECRET as string}`);
  data.push(`response=${request.body.get('token')}`);

  const res = await fetch(`https://www.google.com/recaptcha/api/siteverify?${data.join('&')}`, {
    method: request.method,
    headers: {
      'content-type': 'application/json',
    },
  });

  if (!res.ok) {
    return {
      body: {
        success: false,
      },
    };
  }

  const recaptcha = await res.json();

  console.log(recaptcha);

  if (!recaptcha.success) {
    return {
      body: {
        success: false,
      },
    };
  }

  const name = request.body.get('name');
  const email = request.body.get('email');
  const message = request.body.get('message');

  const msg = {
    to: import.meta.env.VITE_CONTACT_US_TO,
    from: import.meta.env.VITE_CONTACT_US_FROM,
    templateId: import.meta.env.VITE_SENDGRID_TEMPLATE_ID,
    dynamicTemplateData: {
      name,
      email,
      message,
    },
  };

  try {
    await mailer.send(msg);
  } catch (e) {
    return {
      body: {
        success: false,
      },
    };
  }

  return {
    body: {
      success: true,
    },
  };
};
